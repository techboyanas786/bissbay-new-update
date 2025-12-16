import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

// Cache configuration for better performance
export const revalidate = 300; // Revalidate every 5 minutes
export const dynamic = 'force-static';

export async function POST(request) {
    let connection;
    try {
        const body = await request.json();
        const requiredFields = ['title', 'excerpt', 'author', 'publishedDate', 'readTime', 'tags', 'metrics'];
        for (const field of requiredFields) {
            if (!body[field]) {
                return NextResponse.json({ error: `${field} is required` }, { status: 400 });
            }
        }
        
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(body.publishedDate)) {
            return NextResponse.json({ error: 'Invalid publishedDate format (use YYYY-MM-DD)' }, { status: 400 });
        }
        
        if (typeof body.readTime !== 'number' || body.readTime < 1) {
            return NextResponse.json({ error: 'readTime must be a positive integer' }, { status: 400 });
        }
        
        if (typeof body.tags !== 'object' || typeof body.metrics !== 'object') {
            return NextResponse.json({ error: 'tags and metrics must be objects' }, { status: 400 });
        }
        
        connection = await createConnection();
        
        if (body.method === 'PUT') {
            const updateSql = `
                UPDATE blogs SET 
                    title=?, excerpt=?, author=?, published_date=?, read_time=?, 
                    tags=?, metrics=?, reactions=?, featured_image=?, content=?
                WHERE id=?
            `;
            const values = [
                body.title, body.excerpt, body.author, body.publishedDate, body.readTime,
                JSON.stringify(body.tags), JSON.stringify(body.metrics),
                body.reactions ? JSON.stringify(body.reactions) : null,
                body.featuredImage || null,
                body.content ? JSON.stringify(body.content) : null,
                body.id
            ];
            const [result] = await connection.execute(updateSql, values);
            return NextResponse.json({ success: true, message: 'Blog updated successfully' }, { status: 200 });
        }
        
        const sql = `
            INSERT INTO blogs (
                id, title, excerpt, author, published_date, read_time,
                tags, metrics, reactions, featured_image, content
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        
        const id = body.id || `blog-${Date.now()}`;
        const values = [
            id, body.title, body.excerpt, body.author, body.publishedDate, body.readTime,
            JSON.stringify(body.tags), JSON.stringify(body.metrics),
            body.reactions ? JSON.stringify(body.reactions) : null,
            body.featuredImage || null,
            body.content ? JSON.stringify(body.content) : null
        ];
        
        const [result] = await connection.execute(sql, values);
        return NextResponse.json({ success: true, message: 'Blog created successfully', id: result.insertId }, { status: 201 });
        
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return NextResponse.json({ error: 'This blog ID already exists' }, { status: 409 });
        }
        return NextResponse.json({ error: 'Failed to save blog post' }, { status: 500 });
    } finally {
        if (connection) connection.release();
    }
}

export async function GET(request) {
    let connection;
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const offset = (page - 1) * limit;
        const industry = searchParams.get('industry');
        const service = searchParams.get('service');
        
        connection = await createConnection();
        
        let countSql = 'SELECT COUNT(*) as total FROM blogs';
        let countParams = [];
        let selectSql = `SELECT * FROM blogs`;
        let selectParams = [];
        
        if (industry || service) {
            countSql += ' WHERE ';
            selectSql += ' WHERE ';
            let whereConditions = [];
            if (industry) {
                whereConditions.push(`JSON_CONTAINS(tags, ?, '$.industries')`);
                countParams.push(`"${industry}"`);
                selectParams.push(`"${industry}"`);
            }
            if (service) {
                whereConditions.push(`JSON_CONTAINS(tags, ?, '$.services')`);
                countParams.push(`"${service}"`);
                selectParams.push(`"${service}"`);
            }
            countSql += whereConditions.join(' AND ');
            selectSql += whereConditions.join(' AND ');
        }
        
        const [countResult] = await connection.execute(countSql, countParams);
        const [results] = await connection.execute(
            `${selectSql} ORDER BY published_date DESC LIMIT ? OFFSET ?`,
            [...selectParams, limit, offset]
        );
        
        return NextResponse.json({
            data: results,
            pagination: {
                total: countResult[0].total,
                page,
                limit,
                totalPages: Math.ceil(countResult[0].total / limit)
            }
        }, {
            headers: {
                'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
            }
        });
        
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    } finally {
        if (connection) connection.release();
    }
}

export async function DELETE(request) {
    let connection;
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        
        if (!id) {
            return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
        }
        
        connection = await createConnection();
        const [result] = await connection.execute('DELETE FROM blogs WHERE id = ?', [id]);
        
        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }
        
        return NextResponse.json({ success: true, message: 'Blog deleted successfully' }, { status: 200 });
        
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
    } finally {
        if (connection) connection.release();
    }
}