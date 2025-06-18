import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect('https://blog.roerohan.com', 308);
}
