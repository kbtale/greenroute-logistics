import MetricsOverview from '@/components/b-metrics/MetricsOverview';
import SustainabilityScore from '@/components/b-metrics/SustainabilityScore';
import MetricsCharts from '@/components/b-metrics/MetricsCharts';
import MetricsFilters from '@/components/b-metrics/MetricsFilters';
import CertificationProgress from '@/components/b-metrics/CertificationProgress';

export default function BMetricsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-800">Panel de Métricas B</h1>
        <div className="flex gap-2">
          <button className="btn-secondary text-sm">Exportar Datos</button>
          <button className="btn-primary text-sm">Generar Reporte</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Resumen de Métricas</h2>
            <MetricsOverview />
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Gráficos de Desempeño</h2>
            <MetricsCharts />
          </div>
        </div>
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Puntuación de Sostenibilidad</h2>
            <SustainabilityScore />
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Filtros</h2>
            <MetricsFilters />
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Progreso de Certificación</h2>
            <CertificationProgress />
          </div>
        </div>
      </div>
    </div>
  );
}
