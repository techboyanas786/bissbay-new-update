import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: { rejectUnauthorized: false }
};

let pool;

export async function getConnection() {
  if (!pool) {
    pool = mysql.createPool(dbConfig);
  }
  return pool;
}

export async function executeQuery(query, params = []) {
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute(query, params);
    return rows;
  } catch (error) {
    console.error('Database query error:', error);
    throw new Error('Database operation failed');
  }
}

export async function executeTransaction(queries) {
  const connection = await getConnection();
  const conn = await connection.getConnection();
  
  try {
    await conn.beginTransaction();
    
    const results = [];
    for (const { query, params } of queries) {
      const [result] = await conn.execute(query, params);
      results.push(result);
    }
    
    await conn.commit();
    return results;
  } catch (error) {
    await conn.rollback();
    console.error('Transaction error:', error);
    throw new Error('Transaction failed');
  } finally {
    conn.release();
  }
}