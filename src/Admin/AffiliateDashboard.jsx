import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Tools from './Affiliate/Tools.jsx';
import Link from './Affiliate/Link.jsx';
import Earnings from './Affiliate/Earnings.jsx';
import Payout from './Affiliate/Payout.jsx';

const AffiliateDashboard = ({ isLoggedIn }) => {
  if (!isLoggedIn) return null;

  return (
    <Routes>
      <Route path="/tools" element={<Tools />} />
      <Route path="/link" element={<Link />} />
      <Route path="/earnings" element={<Earnings />} />
      <Route path="/payout" element={<Payout />} />
      <Route path="/" element={<Tools />} />
    </Routes>
  );
};

export default AffiliateDashboard;