'use client';

import { FiRefreshCw, FiPlus, FiTrash2 } from 'react-icons/fi';

const ApiConnections = () => {
  const connections = [
    {
      id: 'conn-1',
      name: 'WeatherAPI',
      status: 'connected',
      endpoint: 'https://api.weatherapi.com/v1',
    },
    {
      id: 'conn-2',
      name: 'TrafficFlow',
      status: 'connected',
      endpoint: 'https://api.trafficflow.io/data',
    },
    {
      id: 'conn-3',
      name: 'FleetManager',
      status: 'connected',
      endpoint: 'https://fleetmanager.com/api/v2',
    },
    {
      id: 'conn-4',
      name: 'InventoryPro',
      status: 'error',
      endpoint: 'https://inventorypro.net/api',
    },
  ];

  return (
    <div className="space-y-3">
      {connections.map((connection) => (
        <div 
          key={connection.id}
          className="border border-neutral-200 rounded-lg p-3"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-sm">{connection.name}</h3>
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${
              connection.status === 'connected' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {connection.status === 'connected' ? 'Conectado' : 'Error'}
            </span>
          </div>
          
          <p className="text-xs text-neutral-500 mt-1 truncate" title={connection.endpoint}>
            {connection.endpoint}
          </p>
          
          <div className="flex justify-end gap-2 mt-2">
            <button className="p-1.5 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded">
              <FiRefreshCw size={14} />
            </button>
            <button className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded">
              <FiTrash2 size={14} />
            </button>
          </div>
        </div>
      ))}
      
      <button className="w-full py-2 border border-dashed border-neutral-300 rounded-lg text-sm text-neutral-600 hover:border-primary-400 hover:text-primary-600 transition-colors flex items-center justify-center gap-1">
        <FiPlus size={14} />
        <span>Añadir conexión</span>
      </button>
    </div>
  );
};

export default ApiConnections;
