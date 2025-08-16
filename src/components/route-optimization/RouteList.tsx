'use client';

import { useState } from 'react';
import { FiChevronRight, FiClock, FiMapPin, FiCloud } from 'react-icons/fi';

const RouteList = () => {
  const [selectedRoute, setSelectedRoute] = useState(0);
  
  const routes = [
    {
      id: 1,
      name: 'Ruta Eco-Eficiente',
      time: '45 min',
      distance: '12.5 km',
      emissions: '-18kg CO2',
      stops: 4,
      type: 'Eléctrico',
    },
    {
      id: 2,
      name: 'Ruta Rápida',
      time: '38 min',
      distance: '14.2 km',
      emissions: '-12kg CO2',
      stops: 4,
      type: 'Híbrido',
    },
    {
      id: 3,
      name: 'Ruta Balanceada',
      time: '42 min',
      distance: '13.1 km',
      emissions: '-15kg CO2',
      stops: 4,
      type: 'Eléctrico',
    },
  ];

  return (
    <div className="space-y-4">
      {routes.map((route, index) => (
        <div 
          key={route.id}
          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
            selectedRoute === index 
              ? 'border-primary-500 bg-primary-50' 
              : 'border-neutral-200 hover:border-primary-300'
          }`}
          onClick={() => setSelectedRoute(index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-medium">{route.name}</h3>
            <span className={`px-2 py-1 rounded-full text-xs ${
              route.type === 'Eléctrico' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {route.type}
            </span>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-3">
            <div className="flex items-center gap-2">
              <FiClock className="text-neutral-500" />
              <span className="text-sm">{route.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="text-neutral-500" />
              <span className="text-sm">{route.distance}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCloud className="text-neutral-500" />
              <span className="text-sm text-green-600">{route.emissions}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-neutral-200">
            <span className="text-sm text-neutral-500">{route.stops} paradas</span>
            <button className="text-primary-600 hover:text-primary-800 flex items-center gap-1 text-sm">
              Ver detalles
              <FiChevronRight size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RouteList;
