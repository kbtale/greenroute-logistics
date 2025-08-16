'use client';

import { useState } from 'react';
import { FiEye, FiEyeOff, FiCopy, FiRefreshCw } from 'react-icons/fi';

const ApiKeys = () => {
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});
  
  const apiKeys = [
    {
      id: 'key-1',
      name: 'API Key Principal',
      key: 'gr_api_8f72b1c94a5e6d3',
      created: '01/06/2025',
      expires: '01/06/2026',
    },
    {
      id: 'key-2',
      name: 'API Key Desarrollo',
      key: 'gr_dev_3e7a9d2c1b8f5e4',
      created: '15/07/2025',
      expires: '15/07/2026',
    },
    {
      id: 'key-3',
      name: 'API Key Pruebas',
      key: 'gr_test_6c5d4b3a2f1e9d8',
      created: '10/08/2025',
      expires: '10/11/2025',
    },
  ];

  const toggleShowKey = (id: string) => {
    setShowKeys({
      ...showKeys,
      [id]: !showKeys[id]
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, you would show a toast notification here
  };

  return (
    <div className="space-y-4">
      {apiKeys.map((apiKey) => (
        <div 
          key={apiKey.id}
          className="border border-neutral-200 rounded-lg p-3"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-sm">{apiKey.name}</h3>
            <button 
              className="p-1.5 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded"
              onClick={() => toggleShowKey(apiKey.id)}
            >
              {showKeys[apiKey.id] ? <FiEyeOff size={14} /> : <FiEye size={14} />}
            </button>
          </div>
          
          <div className="flex items-center gap-2 mt-2 bg-neutral-50 p-2 rounded border border-neutral-200">
            <code className="text-xs flex-1 font-mono">
              {showKeys[apiKey.id] ? apiKey.key : '•'.repeat(apiKey.key.length)}
            </code>
            <button 
              className="p-1.5 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded"
              onClick={() => copyToClipboard(apiKey.key)}
              title="Copiar al portapapeles"
            >
              <FiCopy size={14} />
            </button>
          </div>
          
          <div className="flex justify-between items-center mt-2 text-xs text-neutral-500">
            <div>
              <span>Creada: {apiKey.created}</span>
              <span className="mx-2">•</span>
              <span>Expira: {apiKey.expires}</span>
            </div>
            <button 
              className="text-primary-600 hover:text-primary-800 flex items-center gap-1"
              title="Renovar clave API"
            >
              <FiRefreshCw size={12} />
              <span>Renovar</span>
            </button>
          </div>
        </div>
      ))}
      
      <button className="w-full py-2 border border-dashed border-neutral-300 rounded-lg text-sm text-neutral-600 hover:border-primary-400 hover:text-primary-600 transition-colors">
        + Generar nueva clave API
      </button>
      
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md text-xs text-blue-800">
        <p className="font-medium mb-1">Información de seguridad</p>
        <p>Las claves API nunca deben compartirse ni incluirse en código del lado del cliente. Utilice variables de entorno para almacenar sus claves API de forma segura.</p>
      </div>
    </div>
  );
};

export default ApiKeys;
