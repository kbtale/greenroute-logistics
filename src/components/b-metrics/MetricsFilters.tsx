'use client';

import { useState } from 'react';
import { FiCalendar, FiFilter, FiMap } from 'react-icons/fi';

const MetricsFilters = () => {
  const [filters, setFilters] = useState({
    period: 'year',
    region: 'all',
    category: 'all',
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
          Período
        </label>
        <div className="grid grid-cols-3 gap-2">
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.period === 'month'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('period', 'month')}
          >
            Mes
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.period === 'quarter'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('period', 'quarter')}
          >
            Trimestre
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.period === 'year'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('period', 'year')}
          >
            Año
          </button>
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium mb-2">
          <FiMap className="text-primary-600" />
          Región
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.region === 'all'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('region', 'all')}
          >
            Todas
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.region === 'caracas'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('region', 'caracas')}
          >
            Caracas
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.region === 'maracaibo'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('region', 'maracaibo')}
          >
            Maracaibo
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.region === 'valencia'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('region', 'valencia')}
          >
            Valencia
          </button>
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium mb-2">
          <FiFilter className="text-primary-600" />
          Categoría
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.category === 'all'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('category', 'all')}
          >
            Todas
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.category === 'environmental'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('category', 'environmental')}
          >
            Ambiental
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.category === 'social'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('category', 'social')}
          >
            Social
          </button>
          <button
            className={`py-2 px-3 text-xs rounded-md border ${
              filters.category === 'governance'
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-neutral-300 text-neutral-700'
            }`}
            onClick={() => handleFilterChange('category', 'governance')}
          >
            Gobernanza
          </button>
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-neutral-200">
        <button className="btn-primary w-full">Aplicar Filtros</button>
      </div>
    </div>
  );
};

export default MetricsFilters;
