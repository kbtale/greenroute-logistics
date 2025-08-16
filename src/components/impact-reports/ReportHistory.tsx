'use client';

import { FiDownload, FiEye, FiShare2, FiCalendar, FiFileText } from 'react-icons/fi';

const ReportHistory = () => {
  const reports = [
    {
      id: 'report-1',
      name: 'Informe de Impacto Q2 2025',
      date: '15/08/2025',
      type: 'quarterly',
      format: 'pdf',
    },
    {
      id: 'report-2',
      name: 'Reporte Ambiental Semestral',
      date: '30/06/2025',
      type: 'environmental',
      format: 'pdf',
    },
    {
      id: 'report-3',
      name: 'Informe para Certificación B',
      date: '15/05/2025',
      type: 'certification',
      format: 'pdf',
    },
    {
      id: 'report-4',
      name: 'Informe de Impacto Q1 2025',
      date: '15/04/2025',
      type: 'quarterly',
      format: 'pdf',
    },
  ];

  return (
    <div className="space-y-4">
      {reports.map((report) => (
        <div 
          key={report.id}
          className="border border-neutral-200 rounded-lg p-3"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-lg ${
                report.type === 'quarterly' ? 'bg-primary-100 text-primary-600' :
                report.type === 'environmental' ? 'bg-green-100 text-green-600' :
                'bg-amber-100 text-amber-600'
              }`}>
                <FiFileText size={16} />
              </div>
              <div>
                <h3 className="font-medium text-sm">{report.name}</h3>
                <div className="flex items-center gap-1 text-xs text-neutral-500">
                  <FiCalendar size={12} />
                  <span>{report.date}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <button className="p-1.5 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded">
                <FiEye size={14} />
              </button>
              <button className="p-1.5 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded">
                <FiDownload size={14} />
              </button>
              <button className="p-1.5 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded">
                <FiShare2 size={14} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-2 pt-2 border-t border-neutral-100">
            <span className="text-xs text-neutral-500">
              {report.format.toUpperCase()}
            </span>
            <button className="text-xs text-primary-600 hover:text-primary-800">
              Regenerar
            </button>
          </div>
        </div>
      ))}
      
      <div className="text-center pt-2">
        <button className="text-sm text-primary-600 hover:text-primary-800">
          Ver historial completo
        </button>
      </div>
    </div>
  );
};

export default ReportHistory;
