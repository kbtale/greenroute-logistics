'use client';

import { FiDroplet, FiZap, FiDollarSign, FiClock, FiTruck } from 'react-icons/fi';

const ResourcesSaved = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiTruck className="text-green-600" />
          <span className="font-medium">Grupo Este</span>
        </div>
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
          Seleccionado
        </span>
      </div>
      
      <div className="space-y-3 pt-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FiTruck className="text-neutral-500" />
            <span className="text-sm">Vehículos Ahorrados</span>
          </div>
          <span className="font-medium">2</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FiClock className="text-neutral-500" />
            <span className="text-sm">Tiempo Ahorrado</span>
          </div>
          <span className="font-medium">3.5 horas</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FiDollarSign className="text-neutral-500" />
            <span className="text-sm">Costos Operativos</span>
          </div>
          <span className="font-medium text-green-600">-32%</span>
        </div>
      </div>
      
      <div className="pt-4 mt-4 border-t border-neutral-200">
        <h3 className="text-sm font-medium mb-3">Impacto Ambiental</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FiZap className="text-amber-500" />
              <span className="text-sm">Combustible Ahorrado</span>
            </div>
            <span className="font-medium">42 L</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FiDroplet className="text-blue-500" />
              <span className="text-sm">Huella Hídrica</span>
            </div>
            <span className="font-medium">-280 L</span>
          </div>
        </div>
      </div>
      
      <div className="pt-4 mt-4 border-t border-neutral-200">
        <h3 className="text-sm font-medium mb-2">Comparación con rutas individuales</h3>
        
        <div className="space-y-2">
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
              <span>Optimización de recursos</span>
              <span>45%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Eficiencia logística</span>
              <span>32%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-amber-500 h-2 rounded-full" style={{ width: '32%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSaved;
