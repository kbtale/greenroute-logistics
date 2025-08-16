import DashboardStats from '@/components/dashboard/DashboardStats';
import KpiCards from '@/components/dashboard/KpiCards';
import EmissionsSavedChart from '@/components/dashboard/EmissionsSavedChart';
import RouteEfficiencyChart from '@/components/dashboard/RouteEfficiencyChart';
import RecentDeliveries from '@/components/dashboard/RecentDeliveries';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h1 className="text-2xl font-bold text-neutral-800">Dashboard</h1>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <select className="input text-sm px-3 py-2 border border-neutral-300 rounded-lg bg-white">
            <option>Último mes</option>
            <option>Último trimestre</option>
            <option>Último año</option>
          </select>
          <button className="btn-primary text-sm px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors">
            Exportar
          </button>
        </div>
      </div>

      <div className="overflow-x-auto pb-2">
        <KpiCards />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-white p-4 sm:p-6 rounded-lg shadow-sm overflow-hidden">
          <h2 className="text-lg font-semibold mb-2 sm:mb-4">Emisiones Ahorradas</h2>
          <div className="overflow-x-auto">
            <div className="min-w-[300px]">
              <EmissionsSavedChart />
            </div>
          </div>
        </div>
        <div className="card bg-white p-4 sm:p-6 rounded-lg shadow-sm overflow-hidden">
          <h2 className="text-lg font-semibold mb-2 sm:mb-4">Eficiencia de Rutas</h2>
          <div className="overflow-x-auto">
            <div className="min-w-[300px]">
              <RouteEfficiencyChart />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card bg-white p-4 sm:p-6 rounded-lg shadow-sm lg:col-span-2 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-2 sm:mb-4">Entregas Recientes</h2>
          <RecentDeliveries />
        </div>
        <div className="card bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2 sm:mb-4">Estadísticas</h2>
          <DashboardStats />
        </div>
      </div>
    </div>
  );
}
