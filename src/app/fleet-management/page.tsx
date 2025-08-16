import FleetOverview from '@/components/fleet-management/FleetOverview';
import VehicleList from '@/components/fleet-management/VehicleList';
import VehicleAssignment from '@/components/fleet-management/VehicleAssignment';
import FleetUsageStats from '@/components/fleet-management/FleetUsageStats';

export default function FleetManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-800">Gestión de Flota</h1>
        <div className="flex gap-2">
          <button className="btn-secondary text-sm">Mantenimiento</button>
          <button className="btn-primary text-sm">Añadir Vehículo</button>
        </div>
      </div>

      <FleetOverview />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Vehículos</h2>
            <VehicleList />
          </div>
        </div>
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Asignación de Vehículos</h2>
            <VehicleAssignment />
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Estadísticas de Uso</h2>
            <FleetUsageStats />
          </div>
        </div>
      </div>
    </div>
  );
}
