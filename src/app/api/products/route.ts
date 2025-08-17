
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const productsFilePath = path.join(process.cwd(), 'src/lib/products.json');

async function getProducts() {
  try {
    const data = await fs.readFile(productsFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function saveProducts(products: any) {
  await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2));
}

export async function GET() {
  const products = await getProducts();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const products = await getProducts();
  const newProduct = await request.json();
  newProduct.id = products.length > 0 ? Math.max(...products.map((p: any) => p.id)) + 1 : 1;
  products.push(newProduct);
  await saveProducts(products);
  return NextResponse.json(newProduct, { status: 201 });
}
