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

const RouteMap = () => {
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
  
  // Example route points
  const routePoints = [
    [10.4806, -66.9036], // Caracas center
    [10.4906, -66.8936], // Point 1
    [10.4706, -66.8836], // Point 2
    [10.4606, -66.9136], // Point 3
    [10.4506, -66.9236], // Point 4
  ];

  // Delivery points
  const deliveryPoints = [
    { position: [10.4906, -66.8936], name: 'Centro Comercial Sambil', type: 'Entrega' },
    { position: [10.4706, -66.8836], name: 'Plaza Venezuela', type: 'Recogida' },
    { position: [10.4606, -66.9136], name: 'C.C. El Recreo', type: 'Entrega' },
    { position: [10.4506, -66.9236], name: 'Universidad Central', type: 'Entrega' },
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
        
        {/* Starting point marker */}
        <Marker position={caracasPosition}>
          <Popup>
            <b>Centro de Distribución</b><br />
            Punto de inicio
          </Popup>
        </Marker>
        
        {/* Delivery points */}
        {deliveryPoints.map((point, index) => (
          <Marker key={index} position={point.position as [number, number]}>
            <Popup>
              <b>{point.name}</b><br />
              {point.type}
            </Popup>
          </Marker>
        ))}
        
        {/* Route line */}
        <Polyline 
          positions={routePoints} 
          color="#16a34a" 
          weight={4} 
          opacity={0.7} 
          dashArray="10, 10" 
        />
      </MapContainer>
    </div>
  );
};

export default RouteMap;
