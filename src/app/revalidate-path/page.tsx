
// Function to fetch data from an external API
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', { cache: 'no-store' });
  return res.json();
}

export const revalidate = 10; // Revalidate the page content every 10 seconds

export default async function Page() {
  const data = await getData(); // Fetch the data

  return (
    <div>
      <h2>Fetched Data (Updates Every 10s or Manually)</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display the fetched data */}

      {/* Form to trigger manual revalidation */}
      <form action="/api/refresh-data" method="POST">
        <button type="submit">Refresh Data</button>
      </form>
    </div>
  );
}
