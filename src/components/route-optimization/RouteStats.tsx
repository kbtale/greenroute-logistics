'use client';

import { FiTrendingDown, FiClock, FiMapPin, FiCloud, FiDroplet, FiZap } from 'react-icons/fi';

const RouteStats = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiTrendingDown className="text-green-600" />
          <span className="font-medium">Ruta Eco-Eficiente</span>
        </div>
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
          Recomendada
        </span>
      </div>
      
      <div className="space-y-3 pt-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FiClock className="text-neutral-500" />
            <span className="text-sm">Tiempo Total</span>
          </div>
          <span className="font-medium">45 minutos</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FiMapPin className="text-neutral-500" />
            <span className="text-sm">Distancia</span>
          </div>
          <span className="font-medium">12.5 km</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FiCloud className="text-neutral-500" />
            <span className="text-sm">Emisiones CO2</span>
          </div>
          <span className="font-medium text-green-600">-18kg</span>
        </div>
      </div>
      
      <div className="pt-4 mt-4 border-t border-neutral-200">
        <h3 className="text-sm font-medium mb-3">Impacto Ambiental</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FiDroplet className="text-blue-500" />
              <span className="text-sm">Ahorro de Agua</span>
            </div>
            <span className="font-medium">120 L</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FiZap className="text-amber-500" />
              <span className="text-sm">Ahorro Energético</span>
            </div>
            <span className="font-medium">8.5 kWh</span>
          </div>
        </div>
      </div>
      
      <div className="pt-4 mt-4 border-t border-neutral-200">
        <h3 className="text-sm font-medium mb-2">Comparación con rutas tradicionales</h3>
        
        <div className="space-y-2">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Reducción de tiempo</span>
              <span>32%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '32%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Reducción de emisiones</span>
              <span>68%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '68%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Optimización de costos</span>
              <span>45%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-amber-500 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteStats;
