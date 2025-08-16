'use client';

import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const FleetUsageStats = () => {
  const data = {
    labels: ['Eléctricos', 'Híbridos', 'Convencionales'],
    datasets: [
      {
        data: [58, 33, 9],
        backgroundColor: [
          '#22c55e', // green-500
          '#14b8a6', // teal-500
          '#6b7280', // neutral-500
        ],
        borderColor: [
          '#ffffff',
          '#ffffff',
          '#ffffff',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
        },
      },
    },
    cutout: '70%',
  };

  return (
    <div className="space-y-4">
      <div className="h-48">
        <Doughnut data={data} options={options} />
      </div>
      
      <div className="space-y-3 pt-3">
        <div className="flex justify-between items-center">
          <span className="text-sm">Uso promedio diario</span>
          <span className="font-medium">6.2 horas</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm">Distancia promedio</span>
          <span className="font-medium">84 km/día</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm">Eficiencia energética</span>
          <span className="font-medium text-green-600">+18%</span>
        </div>
      </div>
      
      <div className="pt-4 mt-4 border-t border-neutral-200">
        <h3 className="text-sm font-medium mb-2">Reducción de emisiones</h3>
        
        <div className="space-y-2">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Último mes</span>
              <span>-30%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Último trimestre</span>
              <span>-24%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '24%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetUsageStats;
