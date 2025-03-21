"use client"; // Ensures this component runs on the client side
import React, { useEffect } from 'react';

const RefreshApi = () => {
  useEffect(() => {
    // Set an interval to trigger data refresh every 5 minutes (300000 ms)
    const intervalId = setInterval(() => {
      // Trigger a refresh by sending a POST request to the /api/refresh-data route
      fetch('/api/refresh-data', {
        method: 'POST',
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Data refreshed:', data);
        })
        .catch((error) => {
          console.error('Error refreshing data:', error);
        });
    }, 300000); // 5 minutes

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return <h1>Client Component</h1>; // Render a message indicating it's running
};

export default RefreshApi;
