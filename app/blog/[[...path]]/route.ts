import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { path?: string[] } }
) {
  // Get the full path from the URL
  const path = params.path ? `/${params.path.join('/')}` : '';
  
  // Redirect to the blog with the same path
  return NextResponse.redirect(`https://blog.roerohan.com${path}`, 308);
}
