'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { 
  FiHome, 
  FiMap, 
  FiTruck, 
  FiUsers, 
  FiBarChart2, 
  FiFileText, 
  FiLink, 
  FiHelpCircle, 
  FiSettings,
  FiMenu,
  FiX
} from 'react-icons/fi';

const Sidebar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/', icon: FiHome },
    { name: 'Optimización de Rutas', href: '/route-optimization', icon: FiMap },
    { name: 'Gestión de Flota', href: '/fleet-management', icon: FiTruck },
    { name: 'Carpooling Empresarial', href: '/enterprise-pooling', icon: FiUsers },
    { name: 'Panel de Métricas B', href: '/b-metrics', icon: FiBarChart2 },
    { name: 'Informes de Impacto', href: '/impact-reports', icon: FiFileText },
    { name: 'Integraciones y APIs', href: '/integrations', icon: FiLink },
    { name: 'Soporte y Capacitación', href: '/support', icon: FiHelpCircle },
    { name: 'Perfil y Configuración', href: '/settings', icon: FiSettings },
  ];

  return (
    <div className={`${collapsed ? 'w-20' : 'w-64'} bg-white border-r border-neutral-200 transition-all duration-300 flex flex-col h-full`}>
      <div className="flex items-center justify-between p-4 border-b border-neutral-200">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-500 rounded-md flex items-center justify-center">
              <span className="text-white font-bold">GL</span>
            </div>
            <span className="font-semibold text-lg">GreenRoute</span>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 bg-primary-500 rounded-md flex items-center justify-center mx-auto">
            <span className="text-white font-bold">GL</span>
          </div>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="text-neutral-500 hover:text-neutral-700"
        >
          {collapsed ? <FiMenu size={20} /> : <FiX size={20} />}
        </button>
      </div>

      <nav className="flex-1 pt-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`sidebar-link ${isActive ? 'active' : ''} ${collapsed ? 'justify-center' : ''}`}
                >
                  <item.icon size={20} />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-neutral-200">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-neutral-200 rounded-full"></div>
            <div>
              <p className="font-medium text-sm">Empresa Demo</p>
              <p className="text-xs text-neutral-500">B Certificada</p>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="w-10 h-10 bg-neutral-200 rounded-full mx-auto"></div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
