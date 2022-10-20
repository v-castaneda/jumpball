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
      <div id="map" style={{height: "180px"}}></div>
    </body>
    </html>
  )
}

export default Default