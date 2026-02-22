import { NextResponse } from 'next/server';

function generatePassword() {
  return Math.floor(10000 + Math.random() * 90000).toString();
}

export async function POST(req) {
  try {
    const body = await req.json();
    const username = body.username;

    if (!username) {
      return NextResponse.json({ success: false, error: 'Username kosong' });
    }

    const email = `${username}@kevcodex.com`;
    const password = generatePassword();

    return NextResponse.json({
      success: true,
      username,
      email,
      password
    });

  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server error' });
  }
}
