'use client';

import { FiTrendingUp, FiTrendingDown, FiUsers, FiGlobe, FiDroplet, FiZap } from 'react-icons/fi';

const MetricsOverview = () => {
  const metrics = [
    {
      id: 'environmental',
      name: 'Ambiental',
      score: 85,
      change: 12,
      positive: true,
      icon: FiGlobe,
      color: 'bg-green-100 text-green-800',
    },
    {
      id: 'social',
      name: 'Social',
      score: 78,
      change: 5,
      positive: true,
      icon: FiUsers,
      color: 'bg-blue-100 text-blue-800',
    },
    {
      id: 'governance',
      name: 'Gobernanza',
      score: 72,
      change: -3,
      positive: false,
      icon: FiZap,
      color: 'bg-amber-100 text-amber-800',
    },
    {
      id: 'water',
      name: 'Huella Hídrica',
      score: 68,
      change: 8,
      positive: true,
      icon: FiDroplet,
      color: 'bg-cyan-100 text-cyan-800',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {metrics.map((metric) => (
        <div key={metric.id} className="border border-neutral-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-lg ${metric.color}`}>
                <metric.icon size={18} />
              </div>
              <span className="font-medium">{metric.name}</span>
            </div>
            <div className={`flex items-center gap-1 text-sm ${
              metric.positive ? 'text-green-600' : 'text-red-600'
            }`}>
              {metric.positive ? (
                <FiTrendingUp size={16} />
              ) : (
                <FiTrendingDown size={16} />
              )}
              <span>{metric.positive ? '+' : ''}{metric.change}%</span>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-neutral-600">Puntuación</span>
              <span className="font-medium">{metric.score}/100</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  metric.score >= 80 ? 'bg-green-500' : 
                  metric.score >= 70 ? 'bg-blue-500' : 
                  metric.score >= 60 ? 'bg-amber-500' : 
                  'bg-red-500'
                }`} 
                style={{ width: `${metric.score}%` }}
              ></div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-neutral-200">
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-600">Estatus</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                metric.score >= 80 ? 'bg-green-100 text-green-800' : 
                metric.score >= 70 ? 'bg-blue-100 text-blue-800' : 
                metric.score >= 60 ? 'bg-amber-100 text-amber-800' : 
                'bg-red-100 text-red-800'
              }`}>
                {metric.score >= 80 ? 'Excelente' : 
                 metric.score >= 70 ? 'Bueno' : 
                 metric.score >= 60 ? 'Aceptable' : 
                 'Necesita Mejora'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsOverview;
