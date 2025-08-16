'use client';

import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MetricsCharts = () => {
  const [activeTab, setActiveTab] = useState('emissions');
  
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  
  const emissionsData = {
    labels: months,
    datasets: [
      {
        label: 'Emisiones CO2 (ton)',
        data: [42, 38, 35, 32, 30, 28, 26, 25, 24, 22, 20, 18],
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Objetivo',
        data: [42, 40, 38, 36, 34, 32, 30, 28, 26, 24, 22, 20],
        borderColor: '#6b7280',
        borderDash: [5, 5],
        backgroundColor: 'transparent',
        tension: 0.4,
        fill: false,
      },
    ],
  };
  
  const waterData = {
    labels: months,
    datasets: [
      {
        label: 'Consumo de Agua (m³)',
        data: [180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125],
        borderColor: '#0ea5e9',
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Objetivo',
        data: [180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125],
        borderColor: '#6b7280',
        borderDash: [5, 5],
        backgroundColor: 'transparent',
        tension: 0.4,
        fill: false,
      },
    ],
  };
  
  const socialData = {
    labels: ['Comunidad', 'Empleados', 'Clientes', 'Proveedores', 'Gobernanza'],
    datasets: [
      {
        label: 'Actual',
        data: [75, 82, 68, 72, 65],
        backgroundColor: '#8b5cf6',
      },
      {
        label: 'Trimestre Anterior',
        data: [65, 75, 62, 68, 60],
        backgroundColor: '#d8b4fe',
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };
  
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="space-y-4">
      <div className="flex border-b border-neutral-200">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'emissions'
              ? 'border-b-2 border-primary-500 text-primary-600'
              : 'text-neutral-600 hover:text-neutral-800'
          }`}
          onClick={() => setActiveTab('emissions')}
        >
          Emisiones
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'water'
              ? 'border-b-2 border-primary-500 text-primary-600'
              : 'text-neutral-600 hover:text-neutral-800'
          }`}
          onClick={() => setActiveTab('water')}
        >
          Agua
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'social'
              ? 'border-b-2 border-primary-500 text-primary-600'
              : 'text-neutral-600 hover:text-neutral-800'
          }`}
          onClick={() => setActiveTab('social')}
        >
          Social
        </button>
      </div>
      
      <div className="h-80">
        {activeTab === 'emissions' && (
          <Line data={emissionsData} options={options} />
        )}
        {activeTab === 'water' && (
          <Line data={waterData} options={options} />
        )}
        {activeTab === 'social' && (
          <Bar data={socialData} options={barOptions} />
        )}
      </div>
      
      <div className="pt-4 mt-4 border-t border-neutral-200">
        <div className="grid grid-cols-3 gap-4">
          {activeTab === 'emissions' && (
            <>
              <div className="text-center">
                <div className="text-sm text-neutral-600">Emisiones Totales</div>
                <div className="text-xl font-semibold">340 ton</div>
                <div className="text-xs text-green-600">-24% vs año anterior</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-neutral-600">Emisiones por Entrega</div>
                <div className="text-xl font-semibold">4.2 kg</div>
                <div className="text-xs text-green-600">-18% vs año anterior</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-neutral-600">Compensación</div>
                <div className="text-xl font-semibold">85%</div>
                <div className="text-xs text-green-600">+15% vs año anterior</div>
              </div>
            </>
          )}
          
          {activeTab === 'water' && (
            <>
              <div className="text-center">
                <div className="text-sm text-neutral-600">Consumo Total</div>
                <div className="text-xl font-semibold">1,830 m³</div>
                <div className="text-xs text-green-600">-12% vs año anterior</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-neutral-600">Huella Hídrica</div>
                <div className="text-xl font-semibold">22.8 L/km</div>
                <div className="text-xs text-green-600">-8% vs año anterior</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-neutral-600">Agua Reciclada</div>
                <div className="text-xl font-semibold">32%</div>
                <div className="text-xs text-green-600">+7% vs año anterior</div>
              </div>
            </>
          )}
          
          {activeTab === 'social' && (
            <>
              <div className="text-center">
                <div className="text-sm text-neutral-600">Impacto Comunitario</div>
                <div className="text-xl font-semibold">75/100</div>
                <div className="text-xs text-green-600">+10 pts vs anterior</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-neutral-600">Bienestar Empleados</div>
                <div className="text-xl font-semibold">82/100</div>
                <div className="text-xs text-green-600">+7 pts vs anterior</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-neutral-600">Promedio General</div>
                <div className="text-xl font-semibold">72/100</div>
                <div className="text-xs text-green-600">+8 pts vs anterior</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MetricsCharts;
