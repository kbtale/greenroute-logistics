'use client';

import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RouteEfficiencyChart = () => {
  const labels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Rutas Planificadas',
        data: [18, 22, 19, 24, 20, 15, 8],
        backgroundColor: 'rgba(14, 165, 233, 0.7)',
        borderRadius: 4,
      },
      {
        label: 'Rutas Optimizadas',
        data: [12, 17, 15, 20, 16, 12, 6],
        backgroundColor: 'rgba(22, 163, 74, 0.7)',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return <Bar data={data} options={options} height={300} />;
};

export default RouteEfficiencyChart;
