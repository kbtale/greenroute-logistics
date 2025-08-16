'use client';

import { useState } from 'react';
import { FiLock, FiShield, FiUsers, FiAlertTriangle } from 'react-icons/fi';

const SecuritySettings = () => {
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    loginNotifications: true,
    sessionTimeout: '30',
    passwordExpiry: '90',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleToggleChange = (name: string) => {
    setSecuritySettings({
      ...securitySettings,
      [name]: !securitySettings[name as keyof typeof securitySettings]
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSecuritySettings({
      ...securitySettings,
      [name]: value
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value
    });
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Password change logic would go here
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <FiLock className="text-primary-600" size={18} />
          <h3 className="font-medium">Cambiar Contraseña</h3>
        </div>
        
        <form onSubmit={handlePasswordSubmit} className="space-y-3">
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-neutral-700 mb-1">
              Contraseña Actual
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-neutral-700 mb-1">
              Nueva Contraseña
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-1">
              Confirmar Nueva Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              required
            />
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-sm"
            >
              Actualizar Contraseña
            </button>
          </div>
        </form>
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-3">
          <FiShield className="text-primary-600" size={18} />
          <h3 className="font-medium">Autenticación y Seguridad</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Autenticación de dos factores</p>
              <p className="text-xs text-neutral-500">Añade una capa extra de seguridad a tu cuenta</p>
            </div>
            <button 
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                securitySettings.twoFactorAuth ? 'bg-green-500' : 'bg-neutral-300'
              }`}
              onClick={() => handleToggleChange('twoFactorAuth')}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  securitySettings.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
                }`} 
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Notificaciones de inicio de sesión</p>
              <p className="text-xs text-neutral-500">Recibe alertas cuando alguien inicie sesión en tu cuenta</p>
            </div>
            <button 
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                securitySettings.loginNotifications ? 'bg-green-500' : 'bg-neutral-300'
              }`}
              onClick={() => handleToggleChange('loginNotifications')}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  securitySettings.loginNotifications ? 'translate-x-6' : 'translate-x-1'
                }`} 
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Tiempo de expiración de sesión</p>
              <p className="text-xs text-neutral-500">Tiempo de inactividad antes de cerrar sesión</p>
            </div>
            <select
              name="sessionTimeout"
              className="px-3 py-1.5 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
              value={securitySettings.sessionTimeout}
              onChange={handleSelectChange}
            >
              <option value="15">15 minutos</option>
              <option value="30">30 minutos</option>
              <option value="60">1 hora</option>
              <option value="120">2 horas</option>
              <option value="never">Nunca</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Expiración de contraseña</p>
              <p className="text-xs text-neutral-500">Días antes de solicitar cambio de contraseña</p>
            </div>
            <select
              name="passwordExpiry"
              className="px-3 py-1.5 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
              value={securitySettings.passwordExpiry}
              onChange={handleSelectChange}
            >
              <option value="30">30 días</option>
              <option value="60">60 días</option>
              <option value="90">90 días</option>
              <option value="180">180 días</option>
              <option value="never">Nunca</option>
            </select>
          </div>
        </div>
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-3">
          <FiUsers className="text-primary-600" size={18} />
          <h3 className="font-medium">Sesiones Activas</h3>
        </div>
        
        <div className="space-y-2">
          <div className="border border-neutral-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Windows 11 • Chrome</p>
                <p className="text-xs text-neutral-500">Caracas, Venezuela • Actual</p>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-green-100 text-green-800">
                Actual
              </span>
            </div>
          </div>
          
          <div className="border border-neutral-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">iPhone 15 • Safari</p>
                <p className="text-xs text-neutral-500">Caracas, Venezuela • 15/08/2025 18:45</p>
              </div>
              <button className="text-xs text-red-600 hover:text-red-800">
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-2">
          <button className="text-sm text-primary-600 font-medium hover:text-primary-800">
            Cerrar todas las otras sesiones
          </button>
        </div>
      </div>
      
      <div className="pt-4 mt-2 border-t border-neutral-200">
        <div className="flex items-center gap-2 text-red-600">
          <FiAlertTriangle size={18} />
          <button className="text-sm font-medium hover:text-red-800">
            Eliminar cuenta
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
