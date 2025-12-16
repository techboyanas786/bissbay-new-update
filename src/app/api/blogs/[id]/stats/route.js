import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

// GET blog statistics (views and reactions)
// DEPRECATED: Use /api/blogs/stats?ids=blog1,blog2 for better performance
export async function GET(request, { params }) {
  console.warn('Individual blog stats endpoint is deprecated! Use batch endpoint /api/blogs/stats?ids=blog1,blog2 instead');

  return NextResponse.json({
    error: 'This endpoint is deprecated. Use /api/blogs/stats?ids=blogId for better performance',
    migration: 'Replace /api/blogs/[id]/stats with /api/blogs/stats?ids=[id]'
  }, { status: 410 });
}