import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const usersFilePath = path.join(process.cwd(), 'src/lib/users.json');

async function getUsers() {
  try {
    const data = await fs.readFile(usersFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (typeof error === 'object' && error !== null && 'code' in error && (error as NodeJS.ErrnoException).code === 'ENOENT') {
      return []; // File not found, return empty array
    }
    throw error;
  }
}

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // WARNING: This is a highly insecure authentication for prototyping ONLY.
  // In a real application, use proper password hashing (e.g., bcrypt) and a secure session management system.
  const users = await getUsers();

  const user = users.find((u: any) => u.username === username && u.password === password);

  if (user) {
    // In a real application, you would generate a secure JWT or session token
    const token = Buffer.from(username).toString('base64'); // Insecure token for prototype
    return NextResponse.json({ message: 'Login successful', token }, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }
}
