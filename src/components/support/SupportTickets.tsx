'use client';

import { FiAlertCircle, FiCheckCircle, FiClock, FiMessageSquare } from 'react-icons/fi';

const SupportTickets = () => {
  const tickets = [
    {
      id: 'ticket-1',
      title: 'Error en la generación de informes',
      status: 'open',
      priority: 'high',
      date: '15/08/2025',
      responses: 2,
    },
    {
      id: 'ticket-2',
      title: 'Problema con la integración de API',
      status: 'in_progress',
      priority: 'medium',
      date: '12/08/2025',
      responses: 1,
    },
    {
      id: 'ticket-3',
      title: 'Solicitud de nueva funcionalidad',
      status: 'closed',
      priority: 'low',
      date: '05/08/2025',
      responses: 3,
    },
  ];

  return (
    <div className="space-y-3">
      {tickets.map((ticket) => (
        <div 
          key={ticket.id}
          className="border border-neutral-200 rounded-lg p-3 hover:border-primary-300 cursor-pointer transition-colors"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-sm">{ticket.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${
                  ticket.status === 'open' ? 'bg-amber-100 text-amber-800' :
                  ticket.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {ticket.status === 'open' && <FiAlertCircle size={10} />}
                  {ticket.status === 'in_progress' && <FiClock size={10} />}
                  {ticket.status === 'closed' && <FiCheckCircle size={10} />}
                  <span>
                    {ticket.status === 'open' ? 'Abierto' :
                     ticket.status === 'in_progress' ? 'En progreso' :
                     'Cerrado'}
                  </span>
                </span>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${
                  ticket.priority === 'high' ? 'bg-red-100 text-red-800' :
                  ticket.priority === 'medium' ? 'bg-amber-100 text-amber-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {ticket.priority === 'high' ? 'Alta' :
                   ticket.priority === 'medium' ? 'Media' :
                   'Baja'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-neutral-500">
              <FiMessageSquare size={12} />
              <span>{ticket.responses}</span>
            </div>
          </div>
          
          <div className="mt-2 pt-2 border-t border-neutral-100 flex justify-between items-center text-xs text-neutral-500">
            <span>Creado: {ticket.date}</span>
            <button className="text-primary-600 hover:text-primary-800">
              Ver detalles
            </button>
          </div>
        </div>
      ))}
      
      <button className="w-full py-2 border border-dashed border-neutral-300 rounded-lg text-sm text-neutral-600 hover:border-primary-400 hover:text-primary-600 transition-colors">
        + Crear nuevo ticket
      </button>
    </div>
  );
};

export default SupportTickets;
