'use client';

import { useState } from 'react';
import { FiVideo, FiFileText, FiDownload, FiClock, FiStar, FiFilter } from 'react-icons/fi';
import Image from 'next/image';

const TrainingResources = () => {
  const [activeTab, setActiveTab] = useState('videos');
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const trainingVideos = [
    {
      id: 'video-1',
      title: 'Introducción a GreenRoute Logistics',
      duration: '12:45',
      level: 'Principiante',
      thumbnail: '/placeholder-video.jpg',
      category: 'general',
    },
    {
      id: 'video-2',
      title: 'Optimización de Rutas Avanzada',
      duration: '18:30',
      level: 'Avanzado',
      thumbnail: '/placeholder-video.jpg',
      category: 'routes',
    },
    {
      id: 'video-3',
      title: 'Gestión de Flota Sostenible',
      duration: '15:20',
      level: 'Intermedio',
      thumbnail: '/placeholder-video.jpg',
      category: 'fleet',
    },
    {
      id: 'video-4',
      title: 'Configuración de Carpooling Empresarial',
      duration: '10:15',
      level: 'Principiante',
      thumbnail: '/placeholder-video.jpg',
      category: 'pooling',
    },
  ];
  
  const trainingDocs = [
    {
      id: 'doc-1',
      title: 'Manual de Usuario GreenRoute',
      type: 'PDF',
      pages: 45,
      category: 'general',
    },
    {
      id: 'doc-2',
      title: 'Guía de Métricas Ambientales',
      type: 'PDF',
      pages: 28,
      category: 'metrics',
    },
    {
      id: 'doc-3',
      title: 'Plantillas de Informes',
      type: 'ZIP',
      pages: null,
      category: 'reports',
    },
    {
      id: 'doc-4',
      title: 'Integración de APIs - Documentación',
      type: 'PDF',
      pages: 32,
      category: 'api',
    },
  ];

  const filterOptions = [
    { id: 'all', label: 'Todos' },
    { id: 'general', label: 'General' },
    { id: 'routes', label: 'Rutas' },
    { id: 'fleet', label: 'Flota' },
    { id: 'pooling', label: 'Carpooling' },
    { id: 'metrics', label: 'Métricas' },
    { id: 'reports', label: 'Informes' },
    { id: 'api', label: 'API' },
  ];

  const filteredVideos = selectedFilter === 'all' 
    ? trainingVideos 
    : trainingVideos.filter(video => video.category === selectedFilter);
    
  const filteredDocs = selectedFilter === 'all' 
    ? trainingDocs 
    : trainingDocs.filter(doc => doc.category === selectedFilter);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex border-b border-neutral-200">
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'videos'
                ? 'border-b-2 border-primary-500 text-primary-600'
                : 'text-neutral-600 hover:text-neutral-800'
            }`}
            onClick={() => setActiveTab('videos')}
          >
            Videos
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'docs'
                ? 'border-b-2 border-primary-500 text-primary-600'
                : 'text-neutral-600 hover:text-neutral-800'
            }`}
            onClick={() => setActiveTab('docs')}
          >
            Documentos
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'webinars'
                ? 'border-b-2 border-primary-500 text-primary-600'
                : 'text-neutral-600 hover:text-neutral-800'
            }`}
            onClick={() => setActiveTab('webinars')}
          >
            Webinars
          </button>
        </div>
        
        <div className="relative">
          <select
            className="appearance-none pl-8 pr-10 py-1.5 border border-neutral-300 rounded-lg text-sm focus:ring-primary-500 focus:border-primary-500"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            {filterOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <FiFilter className="text-neutral-400" size={14} />
          </div>
        </div>
      </div>
      
      {activeTab === 'videos' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredVideos.map((video) => (
            <div 
              key={video.id}
              className="border border-neutral-200 rounded-lg overflow-hidden hover:border-primary-300 cursor-pointer transition-colors"
            >
              <div className="relative h-36 bg-neutral-100">
                {/* Placeholder for video thumbnail */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary-600 bg-opacity-80 flex items-center justify-center">
                    <FiVideo className="text-white" size={20} />
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm">{video.title}</h3>
                <div className="flex justify-between items-center mt-2 text-xs text-neutral-500">
                  <div className="flex items-center gap-1">
                    <FiClock size={12} />
                    <span>{video.duration}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full ${
                    video.level === 'Principiante' ? 'bg-green-100 text-green-800' :
                    video.level === 'Intermedio' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {video.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {activeTab === 'docs' && (
        <div className="space-y-3">
          {filteredDocs.map((doc) => (
            <div 
              key={doc.id}
              className="border border-neutral-200 rounded-lg p-3 hover:border-primary-300 cursor-pointer transition-colors"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    doc.type === 'PDF' ? 'bg-red-100 text-red-600' :
                    doc.type === 'ZIP' ? 'bg-amber-100 text-amber-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    <FiFileText size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{doc.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span>{doc.type}</span>
                      {doc.pages && (
                        <>
                          <span>•</span>
                          <span>{doc.pages} páginas</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <button className="p-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded">
                  <FiDownload size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {activeTab === 'webinars' && (
        <div className="text-center py-8">
          <div className="text-neutral-500 mb-2">
            <FiStar size={48} className="mx-auto" />
          </div>
          <h3 className="font-medium mb-1">Próximamente</h3>
          <p className="text-sm text-neutral-600">
            Estamos preparando webinars interactivos para capacitación avanzada.
          </p>
          <button className="mt-4 text-sm text-primary-600 font-medium">
            Registrarse para notificaciones
          </button>
        </div>
      )}
      
      <div className="pt-4 mt-4 border-t border-neutral-200">
        <h3 className="text-sm font-medium mb-2">Programas de Certificación</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="border border-neutral-200 rounded-lg p-3">
            <h4 className="font-medium text-sm">Especialista en Logística Verde</h4>
            <p className="text-xs text-neutral-500 mt-1">
              Aprenda a implementar prácticas sostenibles en operaciones logísticas.
            </p>
            <button className="mt-2 text-xs text-primary-600 font-medium">
              Ver detalles
            </button>
          </div>
          <div className="border border-neutral-200 rounded-lg p-3">
            <h4 className="font-medium text-sm">Certificación Administrador GreenRoute</h4>
            <p className="text-xs text-neutral-500 mt-1">
              Domine todas las funcionalidades de la plataforma GreenRoute Logistics.
            </p>
            <button className="mt-2 text-xs text-primary-600 font-medium">
              Ver detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingResources;
