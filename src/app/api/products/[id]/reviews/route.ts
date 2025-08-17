import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const reviewsFilePath = path.join(process.cwd(), 'src/lib/reviews.json');

async function getReviews() {
  try {
    const data = await fs.readFile(reviewsFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return []; // File not found, return empty array
    }
    throw error;
  }
}

async function saveReviews(reviews: any) {
  await fs.writeFile(reviewsFilePath, JSON.stringify(reviews, null, 2));
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const allReviews = await getReviews();
  const productReviews = allReviews.filter((review: any) => review.productId === parseInt(params.id));
  return NextResponse.json(productReviews);
}

export async function POST(request: Request, { params }: { params: { id: string } }) {
  const allReviews = await getReviews();
  const newReview = await request.json();
  newReview.id = allReviews.length > 0 ? Math.max(...allReviews.map((r: any) => r.id)) + 1 : 1;
  newReview.productId = parseInt(params.id);

  allReviews.push(newReview);
  await saveReviews(allReviews);

  return NextResponse.json(newReview, { status: 201 });
}
