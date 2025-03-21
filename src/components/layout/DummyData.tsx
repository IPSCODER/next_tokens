import api from '@/api/handlers/api';
import React from 'react';
import { revalidatePath } from 'next/cache';
import RefreshApi from './RefreshApi';


export const revalidate = 10; // Revalidate every 10 seconds

async function getData() {
  try {
    const response = await api.get("/api/users");
    return response.data;
  } catch (err) {
    console.error("Error getting data", err);
    return null;
  }
  
}

export async function refreshData() {
  "use server";
  revalidatePath('/'); // Forces re-fetch
}

const DummyData = async () => {
  const data = await getData();

  if (!data || !data.users) {
    return <h2>No Data Available</h2>;
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
       <form action={refreshData}>
              <button type="submit">Refresh Data</button>
            </form>
            <RefreshApi refreshData={refreshData} />
    </div>
  );
};

export default DummyData;




