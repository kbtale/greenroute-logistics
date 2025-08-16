'use client';

import { useState } from 'react';
import { FiClock, FiMapPin, FiCloud, FiTruck } from 'react-icons/fi';

const RouteFilters = () => {
  const [filters, setFilters] = useState({
    time: 'optimal',
    distance: 'shortest',
    emissions: 'lowest',
    traffic: 'avoid',
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
          <FiClock className="text-primary-600" />
          Tiempo Estimado
        </label>
        <div className="grid grid-cols-3 gap-2">
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.time === 'fastest'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('time', 'fastest')}
          >
            Más Rápido
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.time === 'optimal'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('time', 'optimal')}
          >
            Óptimo
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.time === 'balanced'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('time', 'balanced')}
          >
            Balanceado
          </button>
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium mb-2">
          <FiMapPin className="text-primary-600" />
          Distancia
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.distance === 'shortest'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('distance', 'shortest')}
          >
            Más Corta
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.distance === 'efficient'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('distance', 'efficient')}
          >
            Más Eficiente
          </button>
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium mb-2">
          <FiCloud className="text-primary-600" />
          Emisiones
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.emissions === 'lowest'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('emissions', 'lowest')}
          >
            Mínimas
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.emissions === 'balanced'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('emissions', 'balanced')}
          >
            Balanceadas
          </button>
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium mb-2">
          <FiTruck className="text-primary-600" />
          Zonas de Tráfico
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.traffic === 'avoid'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('traffic', 'avoid')}
          >
            Evitar
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.traffic === 'minimize'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('traffic', 'minimize')}
          >
            Minimizar
          </button>
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-neutral-200">
        <button className="btn-primary w-full">Aplicar Filtros</button>
      </div>
    </div>
  );
};

export default RouteFilters;
