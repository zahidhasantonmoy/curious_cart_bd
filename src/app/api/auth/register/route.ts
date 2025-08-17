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

async function saveUsers(users: any) {
  await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
}

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // WARNING: This is a highly insecure way to store user data for prototyping ONLY.
  // In a real application, use proper password hashing (e.g., bcrypt) and a secure database.
  let users = await getUsers();

  if (users.find((user: any) => user.username === username)) {
    return NextResponse.json({ message: 'Username already exists' }, { status: 409 });
  }

  const newUser = { id: users.length > 0 ? Math.max(...users.map((u: any) => u.id)) + 1 : 1, username, password };
  users.push(newUser);
  await saveUsers(users);

  return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
}
