'use client';

import { useState } from 'react';
import { FiMail, FiBell, FiSmartphone } from 'react-icons/fi';

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    emailReports: true,
    emailMarketing: false,
    pushAlerts: true,
    pushUpdates: true,
    pushReminders: true,
    smsAlerts: false,
    smsReports: false,
  });

  const handleToggleChange = (name: string) => {
    setNotifications({
      ...notifications,
      [name]: !notifications[name as keyof typeof notifications]
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <FiMail className="text-primary-600" size={18} />
          <h3 className="font-medium">Notificaciones por Email</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Alertas y notificaciones</p>
              <p className="text-xs text-neutral-500">Recibe alertas sobre eventos importantes</p>
            </div>
            <button 
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.emailAlerts ? 'bg-green-500' : 'bg-neutral-300'
              }`}
              onClick={() => handleToggleChange('emailAlerts')}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.emailAlerts ? 'translate-x-6' : 'translate-x-1'
                }`} 
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Informes periódicos</p>
              <p className="text-xs text-neutral-500">Recibe informes semanales y mensuales</p>
            </div>
            <button 
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.emailReports ? 'bg-green-500' : 'bg-neutral-300'
              }`}
              onClick={() => handleToggleChange('emailReports')}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.emailReports ? 'translate-x-6' : 'translate-x-1'
                }`} 
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Comunicaciones de marketing</p>
              <p className="text-xs text-neutral-500">Recibe noticias y ofertas especiales</p>
            </div>
            <button 
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.emailMarketing ? 'bg-green-500' : 'bg-neutral-300'
              }`}
              onClick={() => handleToggleChange('emailMarketing')}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.emailMarketing ? 'translate-x-6' : 'translate-x-1'
                }`} 
              />
            </button>
          </div>
        </div>
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-3">
          <FiBell className="text-primary-600" size={18} />
          <h3 className="font-medium">Notificaciones Push</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Alertas críticas</p>
              <p className="text-xs text-neutral-500">Alertas de seguridad y eventos críticos</p>
            </div>
            <button 
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.pushAlerts ? 'bg-green-500' : 'bg-neutral-300'
              }`}
              onClick={() => handleToggleChange('pushAlerts')}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.pushAlerts ? 'translate-x-6' : 'translate-x-1'
                }`} 
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Actualizaciones del sistema</p>
              <p className="text-xs text-neutral-500">Notificaciones sobre actualizaciones y cambios</p>
            </div>
            <button 
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.pushUpdates ? 'bg-green-500' : 'bg-neutral-300'
              }`}
              onClick={() => handleToggleChange('pushUpdates')}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.pushUpdates ? 'translate-x-6' : 'translate-x-1'
                }`} 
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Recordatorios</p>
              <p className="text-xs text-neutral-500">Recordatorios de tareas y eventos</p>
            </div>
            <button 
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.pushReminders ? 'bg-green-500' : 'bg-neutral-300'
              }`}
              onClick={() => handleToggleChange('pushReminders')}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.pushReminders ? 'translate-x-6' : 'translate-x-1'
                }`} 
              />
            </button>
          </div>
        </div>
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-3">
          <FiSmartphone className="text-primary-600" size={18} />
          <h3 className="font-medium">Notificaciones SMS</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Alertas críticas</p>
              <p className="text-xs text-neutral-500">Recibe alertas urgentes por SMS</p>
            </div>
            <button 
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.smsAlerts ? 'bg-green-500' : 'bg-neutral-300'
              }`}
              onClick={() => handleToggleChange('smsAlerts')}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.smsAlerts ? 'translate-x-6' : 'translate-x-1'
                }`} 
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Resúmenes de informes</p>
              <p className="text-xs text-neutral-500">Recibe resúmenes de informes por SMS</p>
            </div>
            <button 
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.smsReports ? 'bg-green-500' : 'bg-neutral-300'
              }`}
              onClick={() => handleToggleChange('smsReports')}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.smsReports ? 'translate-x-6' : 'translate-x-1'
                }`} 
              />
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-4 mt-2 border-t border-neutral-200">
        <button className="text-sm text-primary-600 font-medium hover:text-primary-800">
          Desactivar todas las notificaciones
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings;
