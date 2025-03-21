// src/app/api/refresh-data/route.ts
import { revalidatePath } from 'next/cache';

export async function POST() {
  "use server";
  // Forces re-fetch of the page
  revalidatePath('/');
  return new Response("Data refreshed");
}
