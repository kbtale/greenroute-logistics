'use client';

import { useState } from 'react';
import { FiPackage, FiTruck, FiMapPin } from 'react-icons/fi';

const VehicleAssignment = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  
  const pendingDeliveries = [
    {
      id: 'DEL-2025-006',
      destination: 'Centro Comercial Líder, Caracas',
      distance: '8.5 km',
      weight: '320 kg',
      ecoProfile: 'Alto',
    },
    {
      id: 'DEL-2025-007',
      destination: 'Altamira, Caracas',
      distance: '5.2 km',
      weight: '150 kg',
      ecoProfile: 'Medio',
    },
    {
      id: 'DEL-2025-008',
      destination: 'Los Palos Grandes, Caracas',
      distance: '6.8 km',
      weight: '210 kg',
      ecoProfile: 'Alto',
    },
  ];

  const availableVehicles = [
    { id: 'VEH-001', name: 'Tesla Model 3', type: 'electric' },
    { id: 'VEH-003', name: 'Toyota Prius', type: 'hybrid' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Seleccionar Vehículo</label>
        <select 
          className="input w-full"
          value={selectedVehicle}
          onChange={(e) => setSelectedVehicle(e.target.value)}
        >
          <option value="">Seleccionar...</option>
          {availableVehicles.map(vehicle => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.name} ({vehicle.type === 'electric' ? 'Eléctrico' : 'Híbrido'})
            </option>
          ))}
        </select>
      </div>

      <div className="pt-4">
        <h3 className="text-sm font-medium mb-3">Entregas Pendientes</h3>
        
        <div className="space-y-3">
          {pendingDeliveries.map((delivery) => (
            <div 
              key={delivery.id}
              className="border border-neutral-200 rounded-md p-3 hover:border-primary-300 cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <FiPackage className="text-neutral-500" />
                    <span className="font-medium text-sm">{delivery.id}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-sm text-neutral-600">
                    <FiMapPin size={14} />
                    <span>{delivery.destination}</span>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  delivery.ecoProfile === 'Alto' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  Eco: {delivery.ecoProfile}
                </span>
              </div>
              
              <div className="flex justify-between mt-2 pt-2 border-t border-neutral-100 text-xs text-neutral-500">
                <span>Distancia: {delivery.distance}</span>
                <span>Peso: {delivery.weight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-neutral-200">
        <button 
          className="btn-primary w-full"
          disabled={!selectedVehicle}
        >
          Asignar Vehículo
        </button>
      </div>
    </div>
  );
};

export default VehicleAssignment;
