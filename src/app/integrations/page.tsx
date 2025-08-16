import ApiConnections from '@/components/integrations/ApiConnections';
import IntegrationsList from '@/components/integrations/IntegrationsList';
import ApiKeys from '@/components/integrations/ApiKeys';
import ApiUsage from '@/components/integrations/ApiUsage';

export default function IntegrationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-800">Integraciones y APIs</h1>
        <div className="flex gap-2">
          <button className="btn-secondary text-sm">Documentación</button>
          <button className="btn-primary text-sm">Nueva Integración</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Integraciones Activas</h2>
            <IntegrationsList />
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Uso de API</h2>
            <ApiUsage />
          </div>
        </div>
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Conexiones API</h2>
            <ApiConnections />
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Claves API</h2>
            <ApiKeys />
          </div>
        </div>
      </div>
    </div>
  );
}
