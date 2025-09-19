import React from 'react';

const AdminDashboard = ({ isLoggedIn }) => {
  if (!isLoggedIn) return null;
  return <div>Admin Dashboard - Demo Mode</div>;
};

export default AdminDashboard;