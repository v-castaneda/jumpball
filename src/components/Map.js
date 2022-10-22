import React from "react"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import PlaceSearc from "./PlaceSearch";

function Map() {
    let results = PlaceSearc()
    console.log(results)
    return (
        <MapContainer center={[40.665810, -74.263960]} zoom={15}>
            <TileLayer 
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
              attribution='$copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
            />
        </MapContainer>
 )
}

export default Map