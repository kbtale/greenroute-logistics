'use client';

import { FiPackage, FiCheck, FiClock, FiAlertCircle } from 'react-icons/fi';

const RecentDeliveries = () => {
  const deliveries = [
    {
      id: 'DEL-2025-001',
      destination: 'Centro Comercial Sambil, Caracas',
      status: 'completed',
      time: '10:30 AM',
      emissions: '-18kg CO2',
      type: 'Eléctrico',
    },
    {
      id: 'DEL-2025-002',
      destination: 'Plaza Venezuela, Caracas',
      status: 'in-progress',
      time: '11:45 AM',
      emissions: '-12kg CO2',
      type: 'Híbrido',
    },
    {
      id: 'DEL-2025-003',
      destination: 'C.C. El Recreo, Sabana Grande',
      status: 'scheduled',
      time: '01:15 PM',
      emissions: '-15kg CO2',
      type: 'Eléctrico',
    },
    {
      id: 'DEL-2025-004',
      destination: 'Universidad Central de Venezuela',
      status: 'delayed',
      time: '02:30 PM',
      emissions: '-10kg CO2',
      type: 'Híbrido',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <FiCheck className="text-green-500" />;
      case 'in-progress':
        return <FiClock className="text-blue-500" />;
      case 'scheduled':
        return <FiPackage className="text-gray-500" />;
      case 'delayed':
        return <FiAlertCircle className="text-amber-500" />;
      default:
        return <FiPackage className="text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completado';
      case 'in-progress':
        return 'En progreso';
      case 'scheduled':
        return 'Programado';
      case 'delayed':
        return 'Retrasado';
      default:
        return status;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-neutral-200">
            <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">ID</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Destino</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Estado</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Hora</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Emisiones</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Tipo</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery.id} className="border-b border-neutral-100 hover:bg-neutral-50">
              <td className="py-3 px-4 text-sm">{delivery.id}</td>
              <td className="py-3 px-4 text-sm">{delivery.destination}</td>
              <td className="py-3 px-4 text-sm">
                <div className="flex items-center gap-2">
                  {getStatusIcon(delivery.status)}
                  <span>{getStatusText(delivery.status)}</span>
                </div>
              </td>
              <td className="py-3 px-4 text-sm">{delivery.time}</td>
              <td className="py-3 px-4 text-sm text-green-600 font-medium">{delivery.emissions}</td>
              <td className="py-3 px-4 text-sm">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  delivery.type === 'Eléctrico' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {delivery.type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentDeliveries;
