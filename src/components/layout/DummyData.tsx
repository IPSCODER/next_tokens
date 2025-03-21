import React from 'react';
import api from '@/api/handlers/api'; // Import API handler to fetch data
import RefreshApi from './RefreshApi'; // Component to handle periodic refresh

export const revalidate = 10; // Revalidate every 10 seconds

async function getData() {
  try {
    const response = await api.get("/api/users"); // Fetch data from backend
    return response.data; // Return fetched data
  } catch (err) {
    console.error("Error getting data", err);
    return null; // Return null in case of error
  }
}

const DummyData = async () => {
  const data = await getData(); // Fetch user data

  if (!data || !data.users) {
    return <h2>No Data Available</h2>; // If no data, show this message
  }

  return (
    <div>
      <h2>Users List (Updated Every 10s)</h2>
      <ul>
        {data.users.map((user: { id: number; name: string; email: string; age: number }) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email} (Age: {user.age})
          </li>
        ))}
      </ul>

      {/* Form to manually trigger the refresh */}
      <form action="/api/refresh-data" method="POST">
        <button type="submit">Refresh Data</button>
      </form>

      {/* Calling RefreshApi component for periodic refresh */}
      <RefreshApi />
    </div>
  );
};

export default DummyData;
