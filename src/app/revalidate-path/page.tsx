import { revalidatePath } from 'next/cache';

export const revalidate = 10; // Regular updates every 10s

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', { cache: 'no-store' });
  return res.json();
}

// ✅ This will be a Server Action to trigger revalidation
export async function refreshData() {
  "use server";
  revalidatePath('/'); // Forces re-fetch
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h2>Fetched Data (Updates Every 10s or Manually)</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      {/* Button to trigger manual re-fetch */}
      <form action={refreshData}>
        <button type="submit">Refresh Data</button>
      </form>
    </div>
  );
}
