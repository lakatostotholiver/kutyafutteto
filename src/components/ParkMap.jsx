import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet'

import { OSM_ROUTE_URL, PARK } from '../data/location.js'

// Ugyanaz a jelölő, mint a gyumolcsfa.tbesemeny.hu térképén
const pin = L.divIcon({
  className: 'map-pin',
  iconSize: [36, 46],
  iconAnchor: [18, 45],
  popupAnchor: [0, -40],
  html: '<svg viewBox="0 0 36 46" aria-hidden="true"><path d="M18 45S2 28.5 2 17a16 16 0 0 1 32 0c0 11.5-16 28-16 28Z" fill="#15803D" stroke="#fff" stroke-width="2.5"/><circle cx="18" cy="17" r="6" fill="#fff"/></svg>',
})

export default function ParkMap() {
  return (
    <MapContainer center={PARK.position} zoom={17} scrollWheelZoom={false} className="location__map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> közreműködők'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />

      <Marker position={PARK.position} icon={pin} title="Kutyafuttató" alt="Kutyafuttató">
        <Tooltip direction="right" offset={[16, -24]} permanent className="map-label">
          Kutyafuttató
        </Tooltip>
        <Popup>
          <strong>Kutyafuttató</strong>
          <br />
          {PARK.placeDetail}
          <br />
          <a href={OSM_ROUTE_URL} target="_blank" rel="noopener">
            Útvonaltervezés
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
