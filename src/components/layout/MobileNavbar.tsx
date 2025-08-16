'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FiMenu, 
  FiX, 
  FiHome, 
  FiMap, 
  FiTruck, 
  FiUsers, 
  FiBarChart2, 
  FiFileText,
  FiSettings,
  FiLink,
  FiHelpCircle
} from 'react-icons/fi';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Dashboard', href: '/', icon: <FiHome size={20} /> },
    { name: 'Optimización de Rutas', href: '/routes', icon: <FiMap size={20} /> },
    { name: 'Gestión de Flota', href: '/fleet', icon: <FiTruck size={20} /> },
    { name: 'Carpooling Empresarial', href: '/enterprise-pooling', icon: <FiUsers size={20} /> },
    { name: 'Métricas B', href: '/b-metrics', icon: <FiBarChart2 size={20} /> },
    { name: 'Informes de Impacto', href: '/impact-reports', icon: <FiFileText size={20} /> },
    { name: 'Integraciones', href: '/integrations', icon: <FiLink size={20} /> },
    { name: 'Soporte', href: '/support', icon: <FiHelpCircle size={20} /> },
    { name: 'Perfil y Configuración', href: '/profile', icon: <FiSettings size={20} /> },
  ];

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-neutral-200 z-30 flex items-center justify-between px-4">
        <div className="flex items-center">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md text-neutral-600 hover:bg-neutral-100"
          >
            <FiMenu size={24} />
          </button>
          <div className="ml-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-bold">GR</span>
            </div>
            <span className="font-medium text-neutral-800">GreenRoute</span>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile menu drawer */}
      <div 
        className={`lg:hidden fixed top-0 left-0 bottom-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
      >
        <div className="p-4 border-b border-neutral-200 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-bold">GR</span>
            </div>
            <span className="font-medium text-neutral-800">GreenRoute</span>
          </div>
          <button 
            onClick={closeMenu}
            className="p-2 rounded-md text-neutral-600 hover:bg-neutral-100"
          >
            <FiX size={20} />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-100 text-neutral-700 hover:text-primary-600"
                  onClick={closeMenu}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-neutral-200 mt-4">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center">
              <span className="font-medium text-neutral-600">JD</span>
            </div>
            <div>
              <p className="text-sm font-medium">Juan Delgado</p>
              <p className="text-xs text-neutral-500">Administrador</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
