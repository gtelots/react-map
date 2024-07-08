import './App.scss'
import { MapContainer, Marker, Popup, TileLayer } from '@gtelots/react-map'
import 'leaflet/dist/leaflet.css'
import '@gtelots/react-map/dist/index.css'

function App() {
  const position = [51.505, -0.09] as any
  const mapOptions = {
    center: [10.7578001, 106.6309967] as any,
    zoom: 8,
    style: {
      width: '100%',
      height: '100%'
    }
  }

  return (
    <MapContainer
      {...mapOptions}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default App
