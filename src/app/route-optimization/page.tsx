import RouteMap from '@/components/route-optimization/RouteMap';
import RouteFilters from '@/components/route-optimization/RouteFilters';
import RouteList from '@/components/route-optimization/RouteList';
import RouteStats from '@/components/route-optimization/RouteStats';

export default function RouteOptimizationPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-800">Optimización de Rutas</h1>
        <div className="flex gap-2">
          <button className="btn-secondary text-sm">Guardar Ruta</button>
          <button className="btn-primary text-sm">Nueva Optimización</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <RouteMap />
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Rutas Sugeridas</h2>
            <RouteList />
          </div>
        </div>
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Filtros</h2>
            <RouteFilters />
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Estadísticas de Ruta</h2>
            <RouteStats />
          </div>
        </div>
      </div>
    </div>
  );
}
