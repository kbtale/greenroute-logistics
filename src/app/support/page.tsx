import HelpCenter from '@/components/support/HelpCenter';
import TrainingResources from '@/components/support/TrainingResources';
import SupportTickets from '@/components/support/SupportTickets';
import ContactSupport from '@/components/support/ContactSupport';

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-800">Soporte y Capacitación</h1>
        <button className="btn-primary text-sm">Contactar Soporte</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Centro de Ayuda</h2>
            <HelpCenter />
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Recursos de Capacitación</h2>
            <TrainingResources />
          </div>
        </div>
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Tickets de Soporte</h2>
            <SupportTickets />
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Contactar Soporte</h2>
            <ContactSupport />
          </div>
        </div>
      </div>
    </div>
  );
}
