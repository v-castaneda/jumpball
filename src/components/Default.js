import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'https://cdn.esm.sh/react-leaflet'
const React = require('react')

function Default(html) {
  return (
    <html>
    <head>
      <title>{html.title || 'Default'}</title>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
     integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
     crossorigin=""/>
     <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
     integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
     crossorigin=""></script>
    </head>
    <body>
      <div id="map" style={{height: "180px"}}>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
      </div>
    </body>
    </html>
  )
}

export default Default