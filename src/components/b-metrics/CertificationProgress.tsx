'use client';

import { FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi';

const CertificationProgress = () => {
  const certificationSteps = [
    {
      id: 'step-1',
      name: 'Evaluación Inicial',
      status: 'completed',
      date: '15/03/2025',
    },
    {
      id: 'step-2',
      name: 'Documentación',
      status: 'completed',
      date: '22/04/2025',
    },
    {
      id: 'step-3',
      name: 'Verificación',
      status: 'in-progress',
      date: '10/08/2025',
    },
    {
      id: 'step-4',
      name: 'Certificación Final',
      status: 'pending',
      date: '30/09/2025',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">Progreso</span>
        <span className="text-sm text-primary-600 font-medium">75%</span>
      </div>
      
      <div className="w-full bg-neutral-200 rounded-full h-2">
        <div className="bg-primary-500 h-2 rounded-full" style={{ width: '75%' }}></div>
      </div>
      
      <div className="space-y-3 mt-4">
        {certificationSteps.map((step) => (
          <div key={step.id} className="flex items-start gap-3">
            <div className="mt-0.5">
              {step.status === 'completed' ? (
                <FiCheckCircle className="text-green-500" size={18} />
              ) : step.status === 'in-progress' ? (
                <FiClock className="text-amber-500" size={18} />
              ) : (
                <FiAlertCircle className="text-neutral-400" size={18} />
              )}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className={`font-medium ${
                  step.status === 'completed' ? 'text-green-600' : 
                  step.status === 'in-progress' ? 'text-amber-600' : 
                  'text-neutral-500'
                }`}>
                  {step.name}
                </span>
                <span className="text-xs text-neutral-500">{step.date}</span>
              </div>
              
              {step.status === 'completed' && (
                <p className="text-xs text-neutral-500 mt-1">Completado</p>
              )}
              
              {step.status === 'in-progress' && (
                <p className="text-xs text-neutral-500 mt-1">En proceso - Revisión de documentación</p>
              )}
              
              {step.status === 'pending' && (
                <p className="text-xs text-neutral-500 mt-1">Pendiente</p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-4 mt-4 border-t border-neutral-200">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Próxima renovación</span>
          <span className="text-sm">Octubre 2027</span>
        </div>
        
        <div className="mt-3">
          <button className="text-primary-600 text-sm hover:text-primary-800">
            Ver detalles de certificación
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificationProgress;
