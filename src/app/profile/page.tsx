"use client";

import { useState } from 'react';
import CompanyProfile from '@/components/profile/CompanyProfile';
import AccountSettings from '@/components/profile/AccountSettings';
import NotificationSettings from '@/components/profile/NotificationSettings';
import SecuritySettings from '@/components/profile/SecuritySettings';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');
  
  const tabs = [
    { id: 'profile', label: 'Perfil' },
    { id: 'account', label: 'Cuenta' },
    { id: 'notifications', label: 'Notificaciones' },
    { id: 'security', label: 'Seguridad' }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h1 className="text-2xl font-bold text-neutral-800">Perfil y Configuración</h1>
        <button className="btn-primary text-sm px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors">
          Guardar Cambios
        </button>
      </div>

      {/* Mobile Tab Navigation */}
      <div className="block lg:hidden overflow-x-auto">
        <div className="flex border-b border-neutral-200 whitespace-nowrap">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-medium text-sm ${activeTab === tab.id 
                ? 'text-primary-600 border-b-2 border-primary-600' 
                : 'text-neutral-600 hover:text-neutral-800'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Perfil de Empresa</h2>
            <CompanyProfile />
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Configuración de Cuenta</h2>
            <AccountSettings />
          </div>
        </div>
        <div className="space-y-6">
          <div className="card bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Notificaciones</h2>
            <NotificationSettings />
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Seguridad</h2>
            <SecuritySettings />
          </div>
        </div>
      </div>
      
      {/* Mobile Content */}
      <div className="block lg:hidden">
        {activeTab === 'profile' && (
          <div className="card bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Perfil de Empresa</h2>
            <CompanyProfile />
          </div>
        )}
        
        {activeTab === 'account' && (
          <div className="card bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Configuración de Cuenta</h2>
            <AccountSettings />
          </div>
        )}
        
        {activeTab === 'notifications' && (
          <div className="card bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Notificaciones</h2>
            <NotificationSettings />
          </div>
        )}
        
        {activeTab === 'security' && (
          <div className="card bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Seguridad</h2>
            <SecuritySettings />
          </div>
        )}
      </div>
    </div>
  );
}
