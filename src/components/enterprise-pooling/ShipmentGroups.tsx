'use client';

import { useState } from 'react';
import { FiPackage, FiUsers, FiMapPin, FiCalendar, FiChevronRight } from 'react-icons/fi';

const ShipmentGroups = () => {
  const [selectedGroup, setSelectedGroup] = useState(0);
  
  const shipmentGroups = [
    {
      id: 'group-1',
      name: 'Grupo Este',
      shipments: 3,
      destinations: ['C.C. Sambil', 'Torre Británica', 'C.C. Millenium'],
      date: '15/08/2025',
      vehicleType: 'Eléctrico',
      resourcesSaved: '32%',
    },
    {
      id: 'group-2',
      name: 'Grupo Oeste',
      shipments: 3,
      destinations: ['Plaza Venezuela', 'Universidad Central', 'Parque Los Caobos'],
      date: '15/08/2025',
      vehicleType: 'Híbrido',
      resourcesSaved: '28%',
    },
    {
      id: 'group-3',
      name: 'Grupo Norte',
      shipments: 4,
      destinations: ['Altamira', 'Los Palos Grandes', 'La Castellana', 'Chacao'],
      date: '16/08/2025',
      vehicleType: 'Eléctrico',
      resourcesSaved: '35%',
    },
  ];

  return (
    <div className="space-y-4">
      {shipmentGroups.map((group, index) => (
        <div 
          key={group.id}
          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
            selectedGroup === index 
              ? 'border-primary-500 bg-primary-50' 
              : 'border-neutral-200 hover:border-primary-300'
          }`}
          onClick={() => setSelectedGroup(index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-medium">{group.name}</h3>
            <span className={`px-2 py-1 rounded-full text-xs ${
              group.vehicleType === 'Eléctrico' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {group.vehicleType}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="flex items-center gap-2">
              <FiPackage className="text-neutral-500" />
              <span className="text-sm">{group.shipments} envíos</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="text-neutral-500" />
              <span className="text-sm">{group.date}</span>
            </div>
          </div>
          
          <div className="mt-3">
            <div className="flex items-start gap-2">
              <FiMapPin className="text-neutral-500 mt-1 flex-shrink-0" />
              <span className="text-sm text-neutral-600">
                {group.destinations.join(', ')}
              </span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-neutral-200">
            <div className="flex items-center gap-2">
              <FiUsers className="text-neutral-500" />
              <span className="text-sm text-green-600">Recursos ahorrados: {group.resourcesSaved}</span>
            </div>
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

export default ShipmentGroups;
