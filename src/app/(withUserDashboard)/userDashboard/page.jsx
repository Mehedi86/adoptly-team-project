"use client"
import usePrivateRoute from '@/hooks/usePrivateRoute/usePrivateRoute';
import React from 'react';

const UserDashboard = () => {

  const{user, loading} = usePrivateRoute()
  if(!user) null

  return (
    <div>
      User Dashboard Page
    </div>
  );
};

export default UserDashboard;