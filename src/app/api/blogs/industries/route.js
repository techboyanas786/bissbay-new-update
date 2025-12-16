import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

export const revalidate = 300;
export const dynamic = 'force-static';

export async function GET() {
  let connection;
  try {
    connection = await createConnection();

    const [results] = await connection.execute(`
      SELECT DISTINCT JSON_EXTRACT(tags, '$.industries') as industries
      FROM blogs
      WHERE JSON_EXTRACT(tags, '$.industries') IS NOT NULL
    `);

    const allIndustries = new Set([
      "Agriculture & Natural Resources",
      "Construction, Real Estate & Infrastructure",
      "Creative & Cultural",
      "Education & Training",
      "Energy, Utilities & Environment",
      "Finance & Business Services (BFSI)",
      "Government, Nonprofit & Public Sector",
      "Healthcare & Life Sciences",
      "Human Resources & Staffing",
      "Information Technology",
      "Legal Services",
      "Logistics, Supply Chain & Transportation",
      "Manufacturing & Industrial",
      "Marketing, Media & Communications",
      "Retail, Consumer & Lifestyle",
      "Other Specialized Services",
    ]);

    results.forEach(row => {
      try {
        const industries = JSON.parse(row.industries);
        if (Array.isArray(industries)) {
          industries.forEach(industry => allIndustries.add(industry));
        }
      } catch (e) { }
    });

    return NextResponse.json({
      industries: Array.from(allIndustries).sort()
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    });

  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch industries' }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}
