'use client';

import { FiTrendingUp, FiTruck, FiUsers, FiThumbsUp } from 'react-icons/fi';

const KpiCards = () => {
  const kpis = [
    {
      title: 'Emisiones Reducidas',
      value: '18%',
      change: '+3.2%',
      icon: FiTrendingUp,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Rutas Optimizadas',
      value: '42',
      change: '+8',
      icon: FiTruck,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Entregas Sociales',
      value: '24',
      change: '+5',
      icon: FiUsers,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: 'Eficiencia de Flota',
      value: '87%',
      change: '+2.4%',
      icon: FiThumbsUp,
      color: 'bg-amber-100 text-amber-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => (
        <div key={index} className="card">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-neutral-500 text-sm">{kpi.title}</p>
              <p className="text-2xl font-bold mt-1">{kpi.value}</p>
              <div className="flex items-center mt-2">
                <span className="text-green-600 text-sm">{kpi.change}</span>
                <span className="text-neutral-500 text-sm ml-1">vs mes anterior</span>
              </div>
            </div>
            <div className={`p-3 rounded-full ${kpi.color}`}>
              <kpi.icon size={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KpiCards;
