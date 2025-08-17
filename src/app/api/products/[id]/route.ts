
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

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const products = await getProducts();
  const product = products.find((p: any) => p.id === parseInt(params.id));
  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const products = await getProducts();
  const updatedProduct = await request.json();
  const productIndex = products.findIndex((p: any) => p.id === parseInt(params.id));

  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], ...updatedProduct };
    await saveProducts(products);
    return NextResponse.json(products[productIndex]);
  } else {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  let products = await getProducts();
  const productIndex = products.findIndex((p: any) => p.id === parseInt(params.id));

  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    await saveProducts(products);
    return NextResponse.json({ message: 'Product deleted successfully' });
  } else {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
}
