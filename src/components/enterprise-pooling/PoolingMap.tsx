'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the map components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);
const Polyline = dynamic(
  () => import('react-leaflet').then((mod) => mod.Polyline),
  { ssr: false }
);
const Circle = dynamic(
  () => import('react-leaflet').then((mod) => mod.Circle),
  { ssr: false }
);

const PoolingMap = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Add Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Caracas coordinates
  const caracasPosition = [10.4806, -66.9036];
  
  // Example pooling routes
  const poolingRoutes = [
    {
      id: 'pool-1',
      name: 'Grupo Este',
      color: '#22c55e', // green-500
      points: [
        [10.4806, -66.9036], // Centro
        [10.4906, -66.8836], // Punto 1
        [10.4956, -66.8736], // Punto 2
        [10.5006, -66.8636], // Punto 3
      ],
      destinations: [
        { position: [10.4906, -66.8836], name: 'Centro Comercial Sambil', type: 'Entrega' },
        { position: [10.4956, -66.8736], name: 'Torre Británica', type: 'Entrega' },
        { position: [10.5006, -66.8636], name: 'C.C. Millenium', type: 'Entrega' },
      ],
    },
    {
      id: 'pool-2',
      name: 'Grupo Oeste',
      color: '#0ea5e9', // sky-500
      points: [
        [10.4806, -66.9036], // Centro
        [10.4756, -66.9236], // Punto 1
        [10.4706, -66.9336], // Punto 2
        [10.4656, -66.9436], // Punto 3
      ],
      destinations: [
        { position: [10.4756, -66.9236], name: 'Plaza Venezuela', type: 'Entrega' },
        { position: [10.4706, -66.9336], name: 'Universidad Central', type: 'Entrega' },
        { position: [10.4656, -66.9436], name: 'Parque Los Caobos', type: 'Entrega' },
      ],
    },
  ];

  if (!isMounted) {
    return (
      <div className="h-96 flex items-center justify-center bg-neutral-100 rounded-lg">
        <p className="text-neutral-500">Cargando mapa...</p>
      </div>
    );
  }

  return (
    <div className="h-96">
      <MapContainer
        center={caracasPosition}
        zoom={13}
        style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Distribution center */}
        <Marker position={caracasPosition}>
          <Popup>
            <b>Centro de Distribución</b><br />
            Punto de inicio
          </Popup>
        </Marker>
        
        {/* Pooling optimization radius */}
        <Circle 
          center={caracasPosition} 
          radius={3000} 
          pathOptions={{ 
            color: '#6b7280', 
            fillColor: '#6b7280', 
            fillOpacity: 0.1,
            weight: 1,
            dashArray: '5, 5'
          }} 
        />
        
        {/* Pooling routes */}
        {poolingRoutes.map((route) => (
          <div key={route.id}>
            {/* Route line */}
            <Polyline 
              positions={route.points} 
              color={route.color} 
              weight={4} 
              opacity={0.7}
            />
            
            {/* Destination markers */}
            {route.destinations.map((dest, idx) => (
              <Marker key={`${route.id}-dest-${idx}`} position={dest.position as [number, number]}>
                <Popup>
                  <b>{dest.name}</b><br />
                  {dest.type} - {route.name}
                </Popup>
              </Marker>
            ))}
          </div>
        ))}
      </MapContainer>
    </div>
  );
};

export default PoolingMap;
