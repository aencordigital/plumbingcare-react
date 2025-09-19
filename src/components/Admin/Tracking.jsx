import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const activeTechnicians = [
  { id: 1, name: 'John Smith', status: 'On the job', currentJob: 'Pipe Repair at 123 Main St', eta: 15 },
  { id: 2, name: 'Jane Doe', status: 'Available', currentJob: 'None', eta: 0 },
];

const Tracking = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Technician Tracking</h2>
      <div className="map-container mb-6">
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>Technician: John Smith</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Active Technicians</h3