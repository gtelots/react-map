import { MapContainer, TileLayer } from '@gtelots/react-map'
import { Map } from 'leaflet'
import './App.scss'

import '@gtelots/react-map/dist/index.css'
import 'leaflet/dist/leaflet.css'

import '@ttungbmt/leaflet-geoman-free'
import '@ttungbmt/leaflet-geoman-free/dist/leaflet-geoman.css'

function App() {
  const mapOptions = {
    center: [10.7578001, 106.6309967],
    zoom: 10,
    style: {
      width: '100%',
      height: '100%',
    },
    whenReady: ({ target: map }: { target: Map }) => {
      map.pm.addControls({
        position: 'topright',
      })
      map.pm.setLang('vi')
    },
  } as any

  return (
    <MapContainer {...mapOptions}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  )
}

export default App
