'use client';

import { useState } from 'react';
import { FiUpload, FiMapPin } from 'react-icons/fi';
import Image from 'next/image';

const CompanyProfile = () => {
  const [companyData, setCompanyData] = useState({
    name: 'GreenRoute Logistics C.A.',
    industry: 'Logística y Transporte',
    size: '50-100',
    website: 'www.greenroutelogistics.com',
    description: 'Empresa líder en soluciones logísticas sostenibles, especializada en optimización de rutas y reducción de huella de carbono para empresas comprometidas con el medio ambiente.',
    address: 'Av. Francisco de Miranda, Torre Europa, Piso 8, Caracas, Venezuela',
    phone: '+58 212-555-1234',
    email: 'contacto@greenroutelogistics.com',
    taxId: 'J-12345678-9',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCompanyData({
      ...companyData,
      [name]: value
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <div className="border border-neutral-200 rounded-lg p-4 flex flex-col items-center">
            <div className="w-32 h-32 bg-neutral-100 rounded-lg mb-4 relative flex items-center justify-center">
              {/* Placeholder for company logo */}
              <span className="text-3xl font-bold text-primary-600">GL</span>
              
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity rounded-lg group">
                <button className="hidden group-hover:flex items-center justify-center gap-1 bg-white px-3 py-1.5 rounded-md text-sm">
                  <FiUpload size={14} />
                  <span>Cambiar</span>
                </button>
              </div>
            </div>
            <p className="text-sm text-neutral-500 text-center">
              Sube el logo de tu empresa en formato PNG o JPG (máx. 2MB)
            </p>
          </div>
          
          <div className="mt-4 border border-neutral-200 rounded-lg p-4">
            <h3 className="font-medium text-sm mb-3">Certificaciones</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xs">B</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Empresa B Certificada</p>
                  <p className="text-xs text-neutral-500">Desde 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">ISO</span>
                </div>
                <div>
                  <p className="text-sm font-medium">ISO 14001</p>
                  <p className="text-xs text-neutral-500">Gestión Ambiental</p>
                </div>
              </div>
              <button className="w-full mt-2 py-1.5 border border-dashed border-neutral-300 rounded-md text-sm text-neutral-600 hover:border-primary-400 hover:text-primary-600 transition-colors">
                + Añadir certificación
              </button>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-2/3 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                Nombre de la Empresa
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                value={companyData.name}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-neutral-700 mb-1">
                Industria
              </label>
              <select
                id="industry"
                name="industry"
                className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                value={companyData.industry}
                onChange={handleInputChange}
              >
                <option value="Logística y Transporte">Logística y Transporte</option>
                <option value="Manufactura">Manufactura</option>
                <option value="Comercio Minorista">Comercio Minorista</option>
                <option value="Servicios">Servicios</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="size" className="block text-sm font-medium text-neutral-700 mb-1">
                Tamaño de la Empresa
              </label>
              <select
                id="size"
                name="size"
                className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                value={companyData.size}
                onChange={handleInputChange}
              >
                <option value="1-10">1-10 empleados</option>
                <option value="11-50">11-50 empleados</option>
                <option value="50-100">50-100 empleados</option>
                <option value="101-500">101-500 empleados</option>
                <option value="500+">Más de 500 empleados</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-neutral-700 mb-1">
                Sitio Web
              </label>
              <input
                type="text"
                id="website"
                name="website"
                className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                value={companyData.website}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-1">
              Descripción de la Empresa
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
              value={companyData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1">
              Dirección
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMapPin className="text-neutral-400" size={16} />
              </div>
              <input
                type="text"
                id="address"
                name="address"
                className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                value={companyData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                Teléfono
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                value={companyData.phone}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                value={companyData.email}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="taxId" className="block text-sm font-medium text-neutral-700 mb-1">
                RIF
              </label>
              <input
                type="text"
                id="taxId"
                name="taxId"
                className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                value={companyData.taxId}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
