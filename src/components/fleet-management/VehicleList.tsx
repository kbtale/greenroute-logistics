'use client';

import { useState } from 'react';
import { FiFilter, FiChevronDown, FiEdit2, FiMapPin } from 'react-icons/fi';

const VehicleList = () => {
  const [filterType, setFilterType] = useState('all');
  
  const vehicles = [
    {
      id: 'VEH-001',
      name: 'Tesla Model 3',
      type: 'electric',
      status: 'available',
      range: '350 km',
      emissions: '0 g/km',
      lastService: '2025-07-15',
      location: 'Centro de Distribución',
    },
    {
      id: 'VEH-002',
      name: 'Nissan Leaf',
      type: 'electric',
      status: 'in-use',
      range: '270 km',
      emissions: '0 g/km',
      lastService: '2025-07-10',
      location: 'Ruta #42',
    },
    {
      id: 'VEH-003',
      name: 'Toyota Prius',
      type: 'hybrid',
      status: 'available',
      range: '800 km',
      emissions: '22 g/km',
      lastService: '2025-07-05',
      location: 'Centro de Distribución',
    },
    {
      id: 'VEH-004',
      name: 'Hyundai Ioniq',
      type: 'electric',
      status: 'maintenance',
      range: '310 km',
      emissions: '0 g/km',
      lastService: '2025-08-01',
      location: 'Taller Central',
    },
    {
      id: 'VEH-005',
      name: 'Ford Escape Hybrid',
      type: 'hybrid',
      status: 'in-use',
      range: '750 km',
      emissions: '26 g/km',
      lastService: '2025-06-28',
      location: 'Ruta #38',
    },
  ];

  const filteredVehicles = filterType === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.type === filterType);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'available':
        return <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Disponible</span>;
      case 'in-use':
        return <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">En uso</span>;
      case 'maintenance':
        return <span className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800">Mantenimiento</span>;
      default:
        return <span className="px-2 py-1 rounded-full text-xs bg-neutral-100 text-neutral-800">{status}</span>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'electric':
        return <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Eléctrico</span>;
      case 'hybrid':
        return <span className="px-2 py-1 rounded-full text-xs bg-teal-100 text-teal-800">Híbrido</span>;
      default:
        return <span className="px-2 py-1 rounded-full text-xs bg-neutral-100 text-neutral-800">{type}</span>;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <FiFilter className="text-neutral-500" />
          <span className="text-sm font-medium">Filtrar por:</span>
          <select 
            className="input text-sm py-1"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="electric">Eléctricos</option>
            <option value="hybrid">Híbridos</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-neutral-500">Ordenar por:</span>
          <button className="flex items-center gap-1 text-sm border border-neutral-300 rounded-md px-3 py-1">
            Estado
            <FiChevronDown size={14} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-neutral-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">ID</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Vehículo</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Tipo</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Estado</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Autonomía</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Emisiones</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Ubicación</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredVehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                <td className="py-3 px-4 text-sm">{vehicle.id}</td>
                <td className="py-3 px-4 text-sm font-medium">{vehicle.name}</td>
                <td className="py-3 px-4 text-sm">{getTypeBadge(vehicle.type)}</td>
                <td className="py-3 px-4 text-sm">{getStatusBadge(vehicle.status)}</td>
                <td className="py-3 px-4 text-sm">{vehicle.range}</td>
                <td className="py-3 px-4 text-sm">{vehicle.emissions}</td>
                <td className="py-3 px-4 text-sm">{vehicle.location}</td>
                <td className="py-3 px-4 text-sm">
                  <div className="flex gap-2">
                    <button className="p-1 text-neutral-500 hover:text-neutral-700">
                      <FiEdit2 size={16} />
                    </button>
                    <button className="p-1 text-neutral-500 hover:text-neutral-700">
                      <FiMapPin size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleList;
