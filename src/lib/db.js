import mysql from 'mysql2/promise';

let pool;

// Create connection pool for better performance
const getPool = () => {
    if (!pool) {
        pool = mysql.createPool({
            host: process.env.DATABASE_HOST || 'srv689.hstgr.io',
            user: process.env.DATABASE_USER || 'u541369012_admin',
            password: process.env.DATABASE_PASSWORD || 'x~!*U^7Z&R7&OkAB1f*R9',
            database: process.env.DATABASE_NAME || 'u541369012_bissbay_2025',
            port: 3306,
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10,
            idleTimeout: 60000,
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0
        });
    }
    return pool;
};

// Get connection from pool
export const createConnection = async () => {
    try {
        const pool = getPool();
        return await pool.getConnection();
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error;
    }
}

// Execute query directly with pool (recommended)
export const query = async (sql, params) => {
    try {
        const pool = getPool();
        return await pool.execute(sql, params);
    } catch (error) {
        console.error('Database query failed:', error);
        throw error;
    }
}

export const closeConnection = async () => {
    if (pool) {
        await pool.end();
        pool = null;
    }
}