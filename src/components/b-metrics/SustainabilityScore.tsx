'use client';

import { useState } from 'react';
import { FiAward, FiInfo } from 'react-icons/fi';

const SustainabilityScore = () => {
  const [showInfo, setShowInfo] = useState(false);
  
  const score = 82;
  const previousScore = 76;
  const change = score - previousScore;
  
  return (
    <div className="space-y-4">
      <div className="relative flex justify-center">
        <div className="w-40 h-40 rounded-full border-8 border-green-500 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{score}</div>
            <div className="text-sm text-neutral-600">Puntos</div>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <button 
            className="text-neutral-500 hover:text-neutral-700"
            onClick={() => setShowInfo(!showInfo)}
          >
            <FiInfo size={18} />
          </button>
          {showInfo && (
            <div className="absolute right-0 mt-2 w-64 p-3 bg-white shadow-lg rounded-lg text-xs text-neutral-700 z-10">
              <p>La puntuación de sostenibilidad se calcula en base a los criterios de certificación B Corp, considerando impacto ambiental, social y de gobernanza.</p>
              <div className="mt-2 text-xs text-neutral-500">
                80-100: Excelente | 70-79: Bueno | 60-69: Aceptable | &lt;60: Necesita mejora
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex justify-center items-center gap-2 text-sm">
        <span className={`${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {change >= 0 ? '+' : ''}{change} pts
        </span>
        <span className="text-neutral-500">desde el último trimestre</span>
      </div>
      
      <div className="pt-4 mt-4 border-t border-neutral-200">
        <div className="flex items-center gap-2 mb-3">
          <FiAward className="text-amber-500" />
          <h3 className="text-sm font-medium">Certificaciones</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm">Empresa B</span>
            </div>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
              Certificado
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm">ISO 14001</span>
            </div>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              En Proceso
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <span className="text-sm">Carbono Neutral</span>
            </div>
            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
              En Proceso
            </span>
          </div>
        </div>
      </div>
      
      <div className="pt-4 mt-4 border-t border-neutral-200">
        <h3 className="text-sm font-medium mb-3">Comparación con la industria</h3>
        
        <div className="space-y-2">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Tu puntuación</span>
              <span>{score} pts</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: `${score}%` }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Promedio del sector</span>
              <span>68 pts</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-neutral-500 h-2 rounded-full" style={{ width: '68%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Líderes del sector</span>
              <span>92 pts</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityScore;
