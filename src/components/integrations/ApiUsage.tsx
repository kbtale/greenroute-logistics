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

const ApiUsage = () => {
  const [activeTab, setActiveTab] = useState('daily');
  const [activeChart, setActiveChart] = useState('line');
  
  const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const weeks = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'];
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  
  const dailyData = {
    labels: days,
    datasets: [
      {
        label: 'Llamadas API',
        data: [1250, 1420, 1380, 1510, 1620, 980, 850],
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };
  
  const weeklyData = {
    labels: weeks,
    datasets: [
      {
        label: 'Llamadas API',
        data: [8500, 9200, 8900, 9600],
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };
  
  const monthlyData = {
    labels: months,
    datasets: [
      {
        label: 'Llamadas API',
        data: [32000, 35000, 38000, 36000, 40000, 42000, 45000, 48000, 0, 0, 0, 0],
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };
  
  const barData = {
    labels: ['WeatherAPI', 'TrafficFlow', 'FleetManager', 'InventoryPro'],
    datasets: [
      {
        label: 'Llamadas API por Servicio',
        data: [4200, 3800, 2500, 1200],
        backgroundColor: [
          'rgba(34, 197, 94, 0.7)',
          'rgba(14, 165, 233, 0.7)',
          'rgba(168, 85, 247, 0.7)',
          'rgba(245, 158, 11, 0.7)',
        ],
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
        beginAtZero: true,
      },
    },
  };

  const getCurrentData = () => {
    if (activeChart === 'bar') return barData;
    
    switch (activeTab) {
      case 'daily':
        return dailyData;
      case 'weekly':
        return weeklyData;
      case 'monthly':
        return monthlyData;
      default:
        return dailyData;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex border-b border-neutral-200">
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'daily'
                ? 'border-b-2 border-primary-500 text-primary-600'
                : 'text-neutral-600 hover:text-neutral-800'
            }`}
            onClick={() => setActiveTab('daily')}
          >
            Diario
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'weekly'
                ? 'border-b-2 border-primary-500 text-primary-600'
                : 'text-neutral-600 hover:text-neutral-800'
            }`}
            onClick={() => setActiveTab('weekly')}
          >
            Semanal
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'monthly'
                ? 'border-b-2 border-primary-500 text-primary-600'
                : 'text-neutral-600 hover:text-neutral-800'
            }`}
            onClick={() => setActiveTab('monthly')}
          >
            Mensual
          </button>
        </div>
        
        <div className="flex gap-2">
          <button
            className={`p-2 text-sm rounded ${
              activeChart === 'line'
                ? 'bg-primary-100 text-primary-700'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
            onClick={() => setActiveChart('line')}
          >
            Línea
          </button>
          <button
            className={`p-2 text-sm rounded ${
              activeChart === 'bar'
                ? 'bg-primary-100 text-primary-700'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
            onClick={() => setActiveChart('bar')}
          >
            Barras
          </button>
        </div>
      </div>
      
      <div className="h-64">
        {activeChart === 'line' ? (
          <Line data={getCurrentData()} options={options} />
        ) : (
          <Bar data={barData} options={options} />
        )}
      </div>
      
      <div className="pt-4 mt-4 border-t border-neutral-200">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-sm text-neutral-600">Total Llamadas</div>
            <div className="text-xl font-semibold">48,000</div>
            <div className="text-xs text-green-600">+12% vs mes anterior</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-neutral-600">Promedio Diario</div>
            <div className="text-xl font-semibold">1,548</div>
            <div className="text-xs text-green-600">+8% vs mes anterior</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-neutral-600">Límite Mensual</div>
            <div className="text-xl font-semibold">75,000</div>
            <div className="text-xs text-neutral-600">64% utilizado</div>
          </div>
        </div>
      </div>
      
      <div className="pt-4 mt-4 border-t border-neutral-200">
        <h3 className="text-sm font-medium mb-2">Uso por Servicio (Agosto 2025)</h3>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>WeatherAPI</span>
              <span>4,200 llamadas</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '35%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>TrafficFlow</span>
              <span>3,800 llamadas</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '32%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>FleetManager</span>
              <span>2,500 llamadas</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '21%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>InventoryPro</span>
              <span>1,200 llamadas</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-amber-500 h-2 rounded-full" style={{ width: '10%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiUsage;
