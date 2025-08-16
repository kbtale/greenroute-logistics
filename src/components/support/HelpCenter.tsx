'use client';

import { useState } from 'react';
import { FiSearch, FiChevronRight, FiMapPin, FiTruck, FiBarChart2, FiUsers, FiFileText, FiSettings } from 'react-icons/fi';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    {
      id: 'cat-1',
      name: 'Optimización de Rutas',
      icon: <FiMapPin />,
      color: 'bg-blue-100 text-blue-600',
      articles: 24,
    },
    {
      id: 'cat-2',
      name: 'Gestión de Flota',
      icon: <FiTruck />,
      color: 'bg-green-100 text-green-600',
      articles: 18,
    },
    {
      id: 'cat-3',
      name: 'Métricas e Informes',
      icon: <FiBarChart2 />,
      color: 'bg-purple-100 text-purple-600',
      articles: 15,
    },
    {
      id: 'cat-4',
      name: 'Carpooling Empresarial',
      icon: <FiUsers />,
      color: 'bg-amber-100 text-amber-600',
      articles: 12,
    },
    {
      id: 'cat-5',
      name: 'Certificación B',
      icon: <FiFileText />,
      color: 'bg-teal-100 text-teal-600',
      articles: 9,
    },
    {
      id: 'cat-6',
      name: 'Configuración',
      icon: <FiSettings />,
      color: 'bg-neutral-100 text-neutral-600',
      articles: 21,
    },
  ];
  
  const popularArticles = [
    {
      id: 'article-1',
      title: 'Cómo configurar su primera ruta optimizada',
      category: 'Optimización de Rutas',
      views: 1245,
    },
    {
      id: 'article-2',
      title: 'Integración de vehículos eléctricos en su flota',
      category: 'Gestión de Flota',
      views: 982,
    },
    {
      id: 'article-3',
      title: 'Generando informes de impacto ambiental',
      category: 'Métricas e Informes',
      views: 876,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="text-neutral-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          placeholder="Buscar en el centro de ayuda..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-neutral-700 mb-3">Categorías</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="border border-neutral-200 rounded-lg p-3 hover:border-primary-300 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${category.color}`}>
                  {category.icon}
                </div>
                <div>
                  <h4 className="font-medium text-sm">{category.name}</h4>
                  <p className="text-xs text-neutral-500">{category.articles} artículos</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-neutral-700 mb-3">Artículos Populares</h3>
        <div className="space-y-2">
          {popularArticles.map((article) => (
            <div 
              key={article.id}
              className="border border-neutral-200 rounded-lg p-3 hover:border-primary-300 cursor-pointer transition-colors"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-sm">{article.title}</h4>
                  <p className="text-xs text-neutral-500">{article.category}</p>
                </div>
                <FiChevronRight className="text-neutral-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 bg-primary-50 border border-primary-100 rounded-lg">
        <h3 className="font-medium text-primary-800 mb-2">¿No encuentra lo que busca?</h3>
        <p className="text-sm text-primary-700 mb-3">
          Nuestro equipo de soporte está disponible para ayudarle con cualquier pregunta o problema.
        </p>
        <button className="text-sm text-primary-700 font-medium hover:text-primary-800 flex items-center gap-1">
          Contactar Soporte <FiChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default HelpCenter;
