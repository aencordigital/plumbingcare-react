import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Admin/Dashboard.jsx';
import SubAccounts from './Admin/SubAccounts.jsx';
import Technicians from './Admin/Technicians.jsx';
import Roles from './Admin/Roles.jsx';
import Plans from './Admin/Plans.jsx';
import Customers from './Admin/Customers.jsx';
import Affiliate from './Admin/Affiliate.jsx';
import Tracking from './Admin/Tracking.jsx';

const AdminDashboard = ({ isLoggedIn }) => {
  if (!isLoggedIn) return null;

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/subaccounts" element={<SubAccounts />} />
      <Route path="/technicians" element={<Technicians />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/affiliate" element={<Affiliate />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default AdminDashboard;