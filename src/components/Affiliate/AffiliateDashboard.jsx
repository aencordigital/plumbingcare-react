import React from 'react';

const AffiliateDashboard = ({ isLoggedIn }) => {
  if (!isLoggedIn) return null;
  return <div>Affiliate Dashboard - Demo Mode</div>;
};

export default AffiliateDashboard;