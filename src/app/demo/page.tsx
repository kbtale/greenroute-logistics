'use client';

import { useState } from 'react';
import { FiTruck, FiUsers, FiBarChart2, FiFileText, FiCalendar, FiMapPin } from 'react-icons/fi';
import Image from 'next/image';

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const companyData = {
    name: 'EcoTransporte Caracas',
    description: 'Empresa de logística B-certificada especializada en transporte sostenible y soluciones de última milla en Caracas, Venezuela.',
    founded: '2018',
    employees: '120',
    fleet: '45 vehículos (60% eléctricos)',
    headquarters: 'Caracas, Venezuela',
    certifications: ['Empresa B Certificada', 'ISO 14001', 'Carbono Neutral'],
    sustainabilityGoals: [
      'Reducir emisiones de CO2 en un 40% para 2026',
      'Flota 100% eléctrica para 2028',
      'Cero residuos en operaciones para 2027'
    ]
  };
  
  const impactMetrics = {
    co2Reduced: '245.8',
    fuelSaved: '98,450',
    routesOptimized: '12,450',
    treesEquivalent: '4,120',
    carpoolTrips: '3,845',
    communityProjects: '12'
  };
  
  const recentDeliveries = [
    { id: 'DEL-8294', client: 'Mercado Orgánico Caracas', date: '15/08/2025', status: 'Completada', emissions: '-75%' },
    { id: 'DEL-8293', client: 'Farmacias Verdes', date: '15/08/2025', status: 'En tránsito', emissions: '-68%' },
    { id: 'DEL-8290', client: 'Tiendas Eco-Amigables', date: '14/08/2025', status: 'Completada', emissions: '-82%' },
    { id: 'DEL-8285', client: 'Restaurantes Sostenibles', date: '14/08/2025', status: 'Completada', emissions: '-71%' }
  ];
  
  const upcomingEvents = [
    { id: 1, title: 'Mantenimiento de flota eléctrica', date: '18/08/2025', type: 'Mantenimiento' },
    { id: 2, title: 'Capacitación en conducción eco-eficiente', date: '20/08/2025', type: 'Capacitación' },
    { id: 3, title: 'Auditoría B Corp anual', date: '25/08/2025', type: 'Certificación' },
    { id: 4, title: 'Lanzamiento programa de reciclaje comunitario', date: '01/09/2025', type: 'Comunidad' }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h1 className="text-2xl font-bold text-neutral-800">Demo: EcoTransporte Caracas</h1>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Empresa B Certificada
          </span>
          <button className="btn-primary text-sm px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors">
            Contactar
          </button>
        </div>
      </div>
      
      {/* Company Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <div className="bg-neutral-100 rounded-lg p-4 flex items-center justify-center h-48">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto flex items-center justify-center mb-2">
                      <span className="text-primary-600 font-bold text-2xl">ETC</span>
                    </div>
                    <p className="text-sm text-neutral-500">Logo de la empresa</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-xl font-bold text-neutral-800 mb-2">{companyData.name}</h2>
                <p className="text-neutral-600 mb-4">{companyData.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-neutral-500">Fundada</p>
                    <p className="font-medium">{companyData.founded}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Empleados</p>
                    <p className="font-medium">{companyData.employees}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Flota</p>
                    <p className="font-medium">{companyData.fleet}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Sede</p>
                    <p className="font-medium">{companyData.headquarters}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 border-t border-neutral-200 pt-4">
              <h3 className="font-medium mb-2">Certificaciones</h3>
              <div className="flex flex-wrap gap-2">
                {companyData.certifications.map((cert, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium mb-2">Objetivos de Sostenibilidad</h3>
              <ul className="list-disc pl-5 space-y-1">
                {companyData.sustainabilityGoals.map((goal, index) => (
                  <li key={index} className="text-sm text-neutral-600">{goal}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <div className="card bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Impacto Ambiental</h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-green-800">CO₂ Reducido</span>
                  <span className="text-lg font-bold text-green-800">{impactMetrics.co2Reduced} ton</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2.5 mt-2">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <p className="text-xs text-green-700 mt-1">65% del objetivo anual</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-neutral-50 border border-neutral-100 rounded-lg p-3">
                  <p className="text-xs text-neutral-500">Combustible Ahorrado</p>
                  <p className="text-lg font-bold text-neutral-800">{impactMetrics.fuelSaved} L</p>
                </div>
                <div className="bg-neutral-50 border border-neutral-100 rounded-lg p-3">
                  <p className="text-xs text-neutral-500">Rutas Optimizadas</p>
                  <p className="text-lg font-bold text-neutral-800">{impactMetrics.routesOptimized}</p>
                </div>
                <div className="bg-neutral-50 border border-neutral-100 rounded-lg p-3">
                  <p className="text-xs text-neutral-500">Equivalente en Árboles</p>
                  <p className="text-lg font-bold text-neutral-800">{impactMetrics.treesEquivalent}</p>
                </div>
                <div className="bg-neutral-50 border border-neutral-100 rounded-lg p-3">
                  <p className="text-xs text-neutral-500">Viajes Compartidos</p>
                  <p className="text-lg font-bold text-neutral-800">{impactMetrics.carpoolTrips}</p>
                </div>
              </div>
              
              <div className="pt-2">
                <button className="text-sm text-primary-600 font-medium hover:text-primary-800">
                  Ver informe completo →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="border-b border-neutral-200">
        <nav className="flex overflow-x-auto -mb-px">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-4 px-6 font-medium text-sm border-b-2 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
            }`}
          >
            Resumen Operativo
          </button>
          <button
            onClick={() => setActiveTab('deliveries')}
            className={`py-4 px-6 font-medium text-sm border-b-2 whitespace-nowrap ${
              activeTab === 'deliveries'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
            }`}
          >
            Entregas
          </button>
          <button
            onClick={() => setActiveTab('fleet')}
            className={`py-4 px-6 font-medium text-sm border-b-2 whitespace-nowrap ${
              activeTab === 'fleet'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
            }`}
          >
            Flota
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`py-4 px-6 font-medium text-sm border-b-2 whitespace-nowrap ${
              activeTab === 'reports'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
            }`}
          >
            Informes
          </button>
        </nav>
      </div>
      
      {/* Tab Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {activeTab === 'overview' && (
          <>
            <div className="lg:col-span-2">
              <div className="card bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Entregas Recientes</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-neutral-200">
                    <thead>
                      <tr>
                        <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">ID</th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Cliente</th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Fecha</th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Estado</th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Emisiones</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      {recentDeliveries.map((delivery) => (
                        <tr key={delivery.id}>
                          <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">{delivery.id}</td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-neutral-600">{delivery.client}</td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-neutral-600">{delivery.date}</td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              delivery.status === 'Completada' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {delivery.status}
                            </span>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-green-600">{delivery.emissions}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div>
              <div className="card bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Próximos Eventos</h2>
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-start gap-3 p-3 border border-neutral-100 rounded-lg">
                      <div className="bg-neutral-100 rounded-full p-2 text-neutral-600">
                        <FiCalendar size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{event.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-neutral-500">{event.date}</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800">
                            {event.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'deliveries' && (
          <div className="lg:col-span-3">
            <div className="card bg-white p-4 sm:p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Mapa de Entregas</h2>
              <div className="bg-neutral-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <FiMapPin size={48} className="mx-auto text-neutral-400 mb-2" />
                  <p className="text-neutral-500">Mapa de entregas en Caracas</p>
                  <p className="text-xs text-neutral-400">Cargando mapa...</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'fleet' && (
          <div className="lg:col-span-3">
            <div className="card bg-white p-4 sm:p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Flota Sostenible</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="border border-neutral-200 rounded-lg overflow-hidden">
                    <div className="bg-neutral-100 h-40 flex items-center justify-center">
                      <FiTruck size={48} className="text-neutral-400" />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Vehículo EV-{i < 10 ? '0' + i : i}</h3>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Eléctrico
                        </span>
                      </div>
                      <div className="space-y-1 text-sm">
                        <p className="text-neutral-600">Capacidad: 1,200 kg</p>
                        <p className="text-neutral-600">Autonomía: 350 km</p>
                        <p className="text-neutral-600">Estado: Activo</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'reports' && (
          <div className="lg:col-span-3">
            <div className="card bg-white p-4 sm:p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Informes de Impacto</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {['Informe Trimestral Q2 2025', 'Reporte de Sostenibilidad 2024', 'Auditoría B Corp 2024', 'Huella de Carbono 2024'].map((report, i) => (
                  <div key={i} className="border border-neutral-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-100 rounded-full p-2 text-blue-600">
                        <FiFileText size={16} />
                      </div>
                      <h3 className="font-medium text-neutral-800">{report}</h3>
                    </div>
                    <p className="text-sm text-neutral-600 mb-3">
                      Informe detallado sobre el impacto ambiental y social de las operaciones.
                    </p>
                    <button className="text-sm text-primary-600 font-medium hover:text-primary-800">
                      Ver informe →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
