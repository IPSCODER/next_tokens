"use client";
import React, { useEffect } from 'react';

const RefreshApi = ({ refreshData }: { refreshData: () => void }) => {
    useEffect(() => {
        const x = setInterval(() => {
            refreshData();
        }, 300000); // 5 minutes
        console.log("running");

        return () => clearInterval(x);
    }, [refreshData]); // Add refreshData as a dependency to avoid the warning

    return (
        <>
            <h1>Client Component</h1>
        </>
    );
};

export default RefreshApi;