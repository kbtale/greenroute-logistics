import PoolingMap from '@/components/enterprise-pooling/PoolingMap';
import ShipmentGroups from '@/components/enterprise-pooling/ShipmentGroups';
import ResourcesSaved from '@/components/enterprise-pooling/ResourcesSaved';
import PoolingFilters from '@/components/enterprise-pooling/PoolingFilters';

export default function EnterprisePoolingPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-800">Carpooling Empresarial</h1>
        <div className="flex gap-2">
          <button className="btn-secondary text-sm">Guardar Grupo</button>
          <button className="btn-primary text-sm">Nuevo Grupo</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Mapa de Rutas Colaborativas</h2>
            <PoolingMap />
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Grupos de Envíos</h2>
            <ShipmentGroups />
          </div>
        </div>
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Filtros</h2>
            <PoolingFilters />
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Recursos Ahorrados</h2>
            <ResourcesSaved />
          </div>
        </div>
      </div>
    </div>
  );
}
