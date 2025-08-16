'use client';

import { useState } from 'react';
import { FiCalendar, FiMapPin, FiPackage, FiTruck } from 'react-icons/fi';

const PoolingFilters = () => {
  const [filters, setFilters] = useState({
    date: 'today',
    area: 'all',
    shipmentType: 'all',
    vehicleType: 'all',
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="flex items-center gap-2 text-sm font-medium mb-2">
          <FiCalendar className="text-primary-600" />
          Fecha de Entrega
        </label>
        <div className="grid grid-cols-3 gap-2">
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.date === 'today'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('date', 'today')}
          >
            Hoy
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.date === 'tomorrow'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('date', 'tomorrow')}
          >
            Mañana
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.date === 'week'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('date', 'week')}
          >
            Esta Semana
          </button>
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium mb-2">
          <FiMapPin className="text-primary-600" />
          Área de Entrega
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.area === 'all'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('area', 'all')}
          >
            Todas
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.area === 'east'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('area', 'east')}
          >
            Este
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.area === 'west'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('area', 'west')}
          >
            Oeste
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.area === 'north'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('area', 'north')}
          >
            Norte
          </button>
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium mb-2">
          <FiPackage className="text-primary-600" />
          Tipo de Envío
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.shipmentType === 'all'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('shipmentType', 'all')}
          >
            Todos
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.shipmentType === 'regular'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('shipmentType', 'regular')}
          >
            Regulares
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.shipmentType === 'express'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('shipmentType', 'express')}
          >
            Express
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.shipmentType === 'social'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('shipmentType', 'social')}
          >
            Sociales
          </button>
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium mb-2">
          <FiTruck className="text-primary-600" />
          Tipo de Vehículo
        </label>
        <div className="grid grid-cols-3 gap-2">
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.vehicleType === 'all'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('vehicleType', 'all')}
          >
            Todos
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.vehicleType === 'electric'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('vehicleType', 'electric')}
          >
            Eléctricos
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.vehicleType === 'hybrid'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('vehicleType', 'hybrid')}
          >
            Híbridos
          </button>
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-neutral-200">
        <button className="btn-primary w-full">Aplicar Filtros</button>
      </div>
    </div>
  );
};

export default PoolingFilters;
