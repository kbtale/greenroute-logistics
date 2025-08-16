'use client';

const DashboardStats = () => {
  const stats = [
    { label: 'Reducción de Huella de Carbono', value: '32%' },
    { label: 'Ahorro de Combustible', value: '28%' },
    { label: 'Optimización de Tiempo', value: '42%' },
    { label: 'Entregas Puntuales', value: '94%' },
    { label: 'Satisfacción del Cliente', value: '4.8/5' },
  ];

  return (
    <div className="space-y-4">
      {stats.map((stat, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="text-sm text-neutral-600">{stat.label}</span>
          <span className="font-semibold">{stat.value}</span>
        </div>
      ))}
      
      <div className="mt-6 pt-4 border-t border-neutral-200">
        <h3 className="text-sm font-medium mb-2">Progreso hacia metas</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Reducción de emisiones</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-primary-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Eficiencia logística</span>
              <span>60%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
