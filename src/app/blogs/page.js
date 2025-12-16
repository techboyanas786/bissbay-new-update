import { createConnection } from '@/lib/db';
import PageWrapper from './BlogPageClient';

export const revalidate = 300;

async function fetchBlogs() {
  let connection;
  try {
    connection = await createConnection();
    const [results] = await connection.execute(
      'SELECT * FROM blogs ORDER BY published_date DESC LIMIT 100'
    );
    return results;
  } catch (error) {
    return [];
  } finally {
    if (connection) connection.release();
  }
}

export default async function BlogPage() {
  const blogs = await fetchBlogs();
  return <PageWrapper initialBlogs={blogs} />;
}
