'use client';

import { useState } from 'react';
import { FiCloud, FiMapPin, FiTruck, FiPackage, FiSettings, FiToggleRight, FiAlertCircle } from 'react-icons/fi';

const IntegrationsList = () => {
  const [integrations, setIntegrations] = useState([
    {
      id: 'integration-1',
      name: 'API de Clima',
      provider: 'WeatherAPI',
      status: 'active',
      lastSync: '15/08/2025 14:30',
      type: 'weather',
    },
    {
      id: 'integration-2',
      name: 'Datos de Tráfico',
      provider: 'TrafficFlow',
      status: 'active',
      lastSync: '15/08/2025 14:15',
      type: 'traffic',
    },
    {
      id: 'integration-3',
      name: 'Gestión de Flotas',
      provider: 'FleetManager',
      status: 'active',
      lastSync: '15/08/2025 12:45',
      type: 'fleet',
    },
    {
      id: 'integration-4',
      name: 'Sistema de Inventario',
      provider: 'InventoryPro',
      status: 'inactive',
      lastSync: '10/08/2025 09:20',
      type: 'inventory',
    },
  ]);

  const toggleIntegrationStatus = (id: string) => {
    setIntegrations(integrations.map(integration => {
      if (integration.id === id) {
        return {
          ...integration,
          status: integration.status === 'active' ? 'inactive' : 'active'
        };
      }
      return integration;
    }));
  };

  return (
    <div className="space-y-4">
      {integrations.map((integration) => (
        <div 
          key={integration.id}
          className="border border-neutral-200 rounded-lg p-4"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${
                integration.type === 'weather' ? 'bg-blue-100 text-blue-600' :
                integration.type === 'traffic' ? 'bg-amber-100 text-amber-600' :
                integration.type === 'fleet' ? 'bg-green-100 text-green-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                {integration.type === 'weather' && <FiCloud size={18} />}
                {integration.type === 'traffic' && <FiMapPin size={18} />}
                {integration.type === 'fleet' && <FiTruck size={18} />}
                {integration.type === 'inventory' && <FiPackage size={18} />}
              </div>
              <div>
                <h3 className="font-medium">{integration.name}</h3>
                <p className="text-sm text-neutral-500">Proveedor: {integration.provider}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  integration.status === 'active' ? 'bg-green-500' : 'bg-neutral-300'
                }`}
                onClick={() => toggleIntegrationStatus(integration.id)}
              >
                <span 
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    integration.status === 'active' ? 'translate-x-6' : 'translate-x-1'
                  }`} 
                />
              </button>
              <button className="p-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded">
                <FiSettings size={16} />
              </button>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-neutral-200 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                integration.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-neutral-100 text-neutral-800'
              }`}>
                {integration.status === 'active' ? 'Activo' : 'Inactivo'}
              </span>
              <span className="text-xs text-neutral-500">
                Última sincronización: {integration.lastSync}
              </span>
            </div>
            <div>
              <button className="text-sm text-primary-600 hover:text-primary-800">
                Ver detalles
              </button>
            </div>
          </div>
          
          {integration.status === 'inactive' && (
            <div className="mt-3 p-2 bg-amber-50 border border-amber-200 rounded-md flex items-center gap-2 text-xs text-amber-800">
              <FiAlertCircle size={14} />
              <span>Esta integración está desactivada. Actívela para reanudar la sincronización de datos.</span>
            </div>
          )}
        </div>
      ))}
      
      <button className="w-full py-3 border border-dashed border-neutral-300 rounded-lg text-sm text-neutral-600 hover:border-primary-400 hover:text-primary-600 transition-colors">
        + Añadir nueva integración
      </button>
    </div>
  );
};

export default IntegrationsList;
