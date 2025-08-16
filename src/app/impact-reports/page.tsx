import ReportGenerator from '@/components/impact-reports/ReportGenerator';
import ReportPreview from '@/components/impact-reports/ReportPreview';
import ReportHistory from '@/components/impact-reports/ReportHistory';
import ReportTemplates from '@/components/impact-reports/ReportTemplates';

export default function ImpactReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-800">Generador de Informes de Impacto</h1>
        <div className="flex gap-2">
          <button className="btn-secondary text-sm">Guardar Borrador</button>
          <button className="btn-primary text-sm">Generar Informe</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Configuración del Informe</h2>
            <ReportGenerator />
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Vista Previa</h2>
            <ReportPreview />
          </div>
        </div>
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Plantillas</h2>
            <ReportTemplates />
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Historial de Informes</h2>
            <ReportHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
