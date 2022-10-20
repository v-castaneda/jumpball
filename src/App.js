import React from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './App.css'

const center = [40.97292346150078, -74.03187326608914]

export default function App() {
  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ width: '100vw', height: '100vh' }}
    >
    <TileLayer
      url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=xfaxWdmYiFlarNYCFP6w'
      attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    />
    <Polygon
      
    />
    </MapContainer>
  )
};
