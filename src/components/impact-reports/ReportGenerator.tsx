'use client';

import { useState } from 'react';
import { FiCalendar, FiFileText, FiUsers, FiGlobe, FiBarChart2 } from 'react-icons/fi';

const ReportGenerator = () => {
  const [reportConfig, setReportConfig] = useState({
    title: 'Informe de Impacto Trimestral',
    period: 'quarter',
    sections: {
      environmental: true,
      social: true,
      governance: true,
      economic: true,
    },
    format: 'pdf',
    language: 'es',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReportConfig({
      ...reportConfig,
      [name]: value,
    });
  };

  const handleSectionToggle = (section: string) => {
    setReportConfig({
      ...reportConfig,
      sections: {
        ...reportConfig.sections,
        [section]: !reportConfig.sections[section as keyof typeof reportConfig.sections],
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-neutral-700 mb-1">
            Título del Informe
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={reportConfig.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="period" className="block text-sm font-medium text-neutral-700 mb-1">
              <div className="flex items-center gap-2">
                <FiCalendar className="text-primary-600" />
                Período
              </div>
            </label>
            <select
              id="period"
              name="period"
              value={reportConfig.period}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="month">Mensual</option>
              <option value="quarter">Trimestral</option>
              <option value="semester">Semestral</option>
              <option value="year">Anual</option>
            </select>
          </div>

          <div>
            <label htmlFor="format" className="block text-sm font-medium text-neutral-700 mb-1">
              <div className="flex items-center gap-2">
                <FiFileText className="text-primary-600" />
                Formato
              </div>
            </label>
            <select
              id="format"
              name="format"
              value={reportConfig.format}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
              <option value="html">HTML</option>
              <option value="ppt">PowerPoint</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="language" className="block text-sm font-medium text-neutral-700 mb-1">
            Idioma
          </label>
          <select
            id="language"
            name="language"
            value={reportConfig.language}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="es">Español</option>
            <option value="en">Inglés</option>
          </select>
        </div>
      </div>

      <div className="pt-4 border-t border-neutral-200">
        <h3 className="text-sm font-medium mb-3">Secciones a incluir</h3>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="environmental"
              checked={reportConfig.sections.environmental}
              onChange={() => handleSectionToggle('environmental')}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
            />
            <label htmlFor="environmental" className="ml-2 block text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <FiGlobe className="text-green-600" />
                Impacto Ambiental
              </div>
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="social"
              checked={reportConfig.sections.social}
              onChange={() => handleSectionToggle('social')}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
            />
            <label htmlFor="social" className="ml-2 block text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <FiUsers className="text-blue-600" />
                Impacto Social
              </div>
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="governance"
              checked={reportConfig.sections.governance}
              onChange={() => handleSectionToggle('governance')}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
            />
            <label htmlFor="governance" className="ml-2 block text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <FiBarChart2 className="text-amber-600" />
                Gobernanza
              </div>
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="economic"
              checked={reportConfig.sections.economic}
              onChange={() => handleSectionToggle('economic')}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
            />
            <label htmlFor="economic" className="ml-2 block text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <FiBarChart2 className="text-purple-600" />
                Impacto Económico
              </div>
            </label>
          </div>
        </div>
      </div>
      
      <div className="pt-4 border-t border-neutral-200">
        <h3 className="text-sm font-medium mb-3">Opciones Avanzadas</h3>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeComparisons"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
            />
            <label htmlFor="includeComparisons" className="ml-2 block text-sm text-neutral-700">
              Incluir comparaciones con períodos anteriores
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeExecutiveSummary"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
              defaultChecked
            />
            <label htmlFor="includeExecutiveSummary" className="ml-2 block text-sm text-neutral-700">
              Incluir resumen ejecutivo
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeRecommendations"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
              defaultChecked
            />
            <label htmlFor="includeRecommendations" className="ml-2 block text-sm text-neutral-700">
              Incluir recomendaciones de mejora
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeBranding"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
              defaultChecked
            />
            <label htmlFor="includeBranding" className="ml-2 block text-sm text-neutral-700">
              Incluir elementos de marca corporativa
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportGenerator;
