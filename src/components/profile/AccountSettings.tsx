'use client';

import { useState } from 'react';
import { FiGlobe, FiClock, FiDollarSign } from 'react-icons/fi';

const AccountSettings = () => {
  const [settings, setSettings] = useState({
    language: 'es',
    timezone: 'America/Caracas',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '24h',
    currency: 'VES',
    measurementUnit: 'metric',
    fiscalYearStart: 'january',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSettings({
      ...settings,
      [name]: value
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FiGlobe className="text-primary-600" size={18} />
              <h3 className="font-medium">Configuración Regional</h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-neutral-700 mb-1">
                  Idioma
                </label>
                <select
                  id="language"
                  name="language"
                  className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                  value={settings.language}
                  onChange={handleInputChange}
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                  <option value="pt">Português</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="timezone" className="block text-sm font-medium text-neutral-700 mb-1">
                  Zona Horaria
                </label>
                <select
                  id="timezone"
                  name="timezone"
                  className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                  value={settings.timezone}
                  onChange={handleInputChange}
                >
                  <option value="America/Caracas">Caracas (GMT-4)</option>
                  <option value="America/Bogota">Bogotá (GMT-5)</option>
                  <option value="America/Mexico_City">Ciudad de México (GMT-6)</option>
                  <option value="America/Santiago">Santiago (GMT-4)</option>
                  <option value="America/Buenos_Aires">Buenos Aires (GMT-3)</option>
                </select>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FiClock className="text-primary-600" size={18} />
              <h3 className="font-medium">Formato de Fecha y Hora</h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <label htmlFor="dateFormat" className="block text-sm font-medium text-neutral-700 mb-1">
                  Formato de Fecha
                </label>
                <select
                  id="dateFormat"
                  name="dateFormat"
                  className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                  value={settings.dateFormat}
                  onChange={handleInputChange}
                >
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="timeFormat" className="block text-sm font-medium text-neutral-700 mb-1">
                  Formato de Hora
                </label>
                <select
                  id="timeFormat"
                  name="timeFormat"
                  className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                  value={settings.timeFormat}
                  onChange={handleInputChange}
                >
                  <option value="24h">24 horas (14:30)</option>
                  <option value="12h">12 horas (2:30 PM)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FiDollarSign className="text-primary-600" size={18} />
              <h3 className="font-medium">Configuración de Unidades</h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <label htmlFor="currency" className="block text-sm font-medium text-neutral-700 mb-1">
                  Moneda
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                  value={settings.currency}
                  onChange={handleInputChange}
                >
                  <option value="VES">Bolívar (Bs.)</option>
                  <option value="USD">Dólar Estadounidense ($)</option>
                  <option value="EUR">Euro (€)</option>
                  <option value="COP">Peso Colombiano ($)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="measurementUnit" className="block text-sm font-medium text-neutral-700 mb-1">
                  Sistema de Medidas
                </label>
                <select
                  id="measurementUnit"
                  name="measurementUnit"
                  className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                  value={settings.measurementUnit}
                  onChange={handleInputChange}
                >
                  <option value="metric">Métrico (km, kg, L)</option>
                  <option value="imperial">Imperial (mi, lb, gal)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="fiscalYearStart" className="block text-sm font-medium text-neutral-700 mb-1">
                  Inicio de Año Fiscal
                </label>
                <select
                  id="fiscalYearStart"
                  name="fiscalYearStart"
                  className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                  value={settings.fiscalYearStart}
                  onChange={handleInputChange}
                >
                  <option value="january">Enero</option>
                  <option value="april">Abril</option>
                  <option value="july">Julio</option>
                  <option value="october">Octubre</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-sm font-medium text-blue-800 mb-2">Configuración de Facturación</h3>
            <p className="text-xs text-blue-700 mb-3">
              Su plan actual es <span className="font-medium">Empresarial</span>. Renovación automática el 15/09/2025.
            </p>
            <button className="text-sm text-blue-700 font-medium hover:text-blue-800">
              Gestionar suscripción
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-4 mt-2 border-t border-neutral-200 flex justify-end">
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-sm">
          Guardar Configuración
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
