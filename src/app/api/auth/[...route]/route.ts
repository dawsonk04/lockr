import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = 'http://localhost:8080';

export async function POST(
  request: NextRequest,
  { params }: { params: { route: string[] } }
) {
  try {
    const route = params.route.join('/');
    const body = await request.json();
    
    const response = await fetch(`${BACKEND_URL}/api/auth/${route}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    const data = await response.json();
    
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { route: string[] } }
) {
  try {
    const route = params.route.join('/');
    
    const response = await fetch(`${BACKEND_URL}/api/auth/${route}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const data = await response.json();
    
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
} 