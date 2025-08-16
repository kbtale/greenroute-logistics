'use client';

import { FiFileText, FiDownload, FiPrinter, FiShare2 } from 'react-icons/fi';
import Image from 'next/image';

const ReportPreview = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FiFileText className="text-primary-600" />
          <span className="font-medium">Vista previa del informe</span>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-full">
            <FiDownload size={16} />
          </button>
          <button className="p-2 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-full">
            <FiPrinter size={16} />
          </button>
          <button className="p-2 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-full">
            <FiShare2 size={16} />
          </button>
        </div>
      </div>
      
      <div className="border border-neutral-200 rounded-lg overflow-hidden">
        <div className="bg-white p-6">
          {/* Report Header */}
          <div className="flex justify-between items-center border-b border-neutral-200 pb-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-neutral-800">Informe de Impacto Trimestral</h3>
              <p className="text-sm text-neutral-600">Q2 2025 (Abril - Junio)</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-bold">GR</span>
              </div>
              <span className="font-medium">GreenRoute Logistics</span>
            </div>
          </div>
          
          {/* Executive Summary */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Resumen Ejecutivo</h4>
            <p className="text-sm text-neutral-700">
              Durante el segundo trimestre de 2025, GreenRoute Logistics ha logrado una reducción significativa en su huella de carbono, 
              optimizando rutas y aumentando el uso de vehículos eléctricos. Las iniciativas de carpooling empresarial han mostrado 
              resultados positivos, con un aumento del 24% en la participación y una reducción del 32% en los costos operativos.
            </p>
          </div>
          
          {/* Environmental Impact */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Impacto Ambiental</h4>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="border border-neutral-100 rounded-lg p-3 bg-green-50">
                <div className="text-sm text-neutral-600">Emisiones CO2 Reducidas</div>
                <div className="text-xl font-semibold text-green-600">42 toneladas</div>
                <div className="text-xs text-green-700">+18% vs Q1 2025</div>
              </div>
              <div className="border border-neutral-100 rounded-lg p-3 bg-blue-50">
                <div className="text-sm text-neutral-600">Huella Hídrica</div>
                <div className="text-xl font-semibold text-blue-600">-28%</div>
                <div className="text-xs text-blue-700">vs Q1 2025</div>
              </div>
            </div>
            
            <div className="h-32 bg-neutral-100 rounded-lg flex items-center justify-center mb-2">
              <span className="text-neutral-500 text-sm">[Gráfico de Emisiones]</span>
            </div>
            <p className="text-xs text-neutral-500 text-center">Tendencia de emisiones de CO2 (Q2 2024 - Q2 2025)</p>
          </div>
          
          {/* Social Impact */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Impacto Social</h4>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="border border-neutral-100 rounded-lg p-3 bg-purple-50">
                <div className="text-sm text-neutral-600">Entregas Sociales</div>
                <div className="text-xl font-semibold text-purple-600">124</div>
                <div className="text-xs text-purple-700">+32% vs Q1 2025</div>
              </div>
              <div className="border border-neutral-100 rounded-lg p-3 bg-amber-50">
                <div className="text-sm text-neutral-600">Satisfacción Comunitaria</div>
                <div className="text-xl font-semibold text-amber-600">92%</div>
                <div className="text-xs text-amber-700">+5% vs Q1 2025</div>
              </div>
            </div>
            
            <div className="h-32 bg-neutral-100 rounded-lg flex items-center justify-center mb-2">
              <span className="text-neutral-500 text-sm">[Gráfico de Impacto Social]</span>
            </div>
            <p className="text-xs text-neutral-500 text-center">Distribución de iniciativas sociales por región</p>
          </div>
          
          {/* Recommendations */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Recomendaciones</h4>
            <ul className="text-sm text-neutral-700 space-y-1 list-disc pl-5">
              <li>Aumentar la flota de vehículos eléctricos en un 15% para el próximo trimestre</li>
              <li>Expandir el programa de carpooling a las regiones del este</li>
              <li>Implementar sistema de recompensas para clientes que elijan opciones de entrega eco-amigables</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-neutral-300 rounded-md text-sm">1</button>
          <button className="px-3 py-1 border border-neutral-300 rounded-md text-sm">2</button>
          <button className="px-3 py-1 border border-neutral-300 rounded-md text-sm">3</button>
        </div>
      </div>
    </div>
  );
};

export default ReportPreview;
