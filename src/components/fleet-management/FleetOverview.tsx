'use client';

import { FiTruck, FiBattery, FiZap, FiAlertTriangle } from 'react-icons/fi';

const FleetOverview = () => {
  const fleetStats = [
    {
      title: 'Total de Vehículos',
      value: '24',
      icon: FiTruck,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Vehículos Eléctricos',
      value: '14',
      icon: FiBattery,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Vehículos Híbridos',
      value: '8',
      icon: FiZap,
      color: 'bg-teal-100 text-teal-600',
    },
    {
      title: 'En Mantenimiento',
      value: '2',
      icon: FiAlertTriangle,
      color: 'bg-amber-100 text-amber-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {fleetStats.map((stat, index) => (
        <div key={index} className="card">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-neutral-500 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-full ${stat.color}`}>
              <stat.icon size={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FleetOverview;
