// app/admin/page.js
"use client";


import { adminDataFetching } from "@/hooks/adminDataFetching/admin";
import React from "react";

const AdminDashboard = () => {
  const { data: allUsers, isLoading, error, refetch } = adminDataFetching.useUsers();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load users 😢</p>;

  // console.log(Array.isArray(allUsers));

  return (
    <div className="px-8">
      <h1>Admin Dashboard</h1>
      {/* <pre>{JSON.stringify(allUsers, null, 2)}</pre> */}
      <div className="grid grid-cols-3">
        {allUsers.map(user => {
          return <li key={user._id}>{ user.name}</li>
        })}
      </div>
    </div>
  );
};

export default AdminDashboard;
