'use client';

import { FiFileText, FiStar, FiClock } from 'react-icons/fi';

const ReportTemplates = () => {
  const templates = [
    {
      id: 'template-1',
      name: 'Informe Trimestral Estándar',
      description: 'Plantilla completa con todas las secciones de impacto',
      type: 'standard',
      lastUsed: '10/08/2025',
    },
    {
      id: 'template-2',
      name: 'Informe Ambiental',
      description: 'Enfocado en métricas ambientales y sostenibilidad',
      type: 'environmental',
      lastUsed: '05/07/2025',
    },
    {
      id: 'template-3',
      name: 'Reporte para Certificación B',
      description: 'Formato adaptado para requisitos de Empresa B',
      type: 'certification',
      lastUsed: '22/06/2025',
    },
    {
      id: 'template-4',
      name: 'Informe Ejecutivo',
      description: 'Versión resumida para presentaciones ejecutivas',
      type: 'executive',
      lastUsed: '15/05/2025',
    },
  ];

  return (
    <div className="space-y-4">
      {templates.map((template) => (
        <div 
          key={template.id}
          className="border border-neutral-200 hover:border-primary-300 rounded-lg p-3 cursor-pointer transition-colors"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-lg ${
                template.type === 'standard' ? 'bg-primary-100 text-primary-600' :
                template.type === 'environmental' ? 'bg-green-100 text-green-600' :
                template.type === 'certification' ? 'bg-amber-100 text-amber-600' :
                'bg-blue-100 text-blue-600'
              }`}>
                <FiFileText size={16} />
              </div>
              <div>
                <h3 className="font-medium text-sm">{template.name}</h3>
                <p className="text-xs text-neutral-500">{template.description}</p>
              </div>
            </div>
            <button className="text-neutral-400 hover:text-amber-500">
              <FiStar size={16} />
            </button>
          </div>
          
          <div className="flex items-center gap-1 mt-3 text-xs text-neutral-500">
            <FiClock size={12} />
            <span>Último uso: {template.lastUsed}</span>
          </div>
        </div>
      ))}
      
      <button className="w-full py-2 border border-dashed border-neutral-300 rounded-lg text-sm text-neutral-600 hover:border-primary-400 hover:text-primary-600 transition-colors">
        + Crear nueva plantilla
      </button>
    </div>
  );
};

export default ReportTemplates;
