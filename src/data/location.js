// Koordináták az OpenStreetMap adataiból (© OpenStreetMap közreműködők, ODbL).
// A futtató a temető és a Diósdi út közötti zöld területen van; a térképen csak egy jelölő mutatja.

export const PARK = {
  name: 'Kutyafuttató',
  position: [47.433, 18.92726],
  place: 'A temető és a Diósdi út között',
  placeDetail: 'A temető és a Diósdi út közötti zöld terület',
  town: '2045 Törökbálint',
}

const [lat, lon] = PARK.position
export const OSM_VIEW_URL = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=18/${lat}/${lon}`
export const OSM_ROUTE_URL = `https://www.openstreetmap.org/directions?to=${lat}%2C${lon}#map=18/${lat}/${lon}`

// Törökbálint Város Önkormányzata (a város honlapjának adatai)
export const CITY = {
  url: 'https://www.torokbalint.hu',
  phone: '+36 / 23 335 021',
  phoneHref: 'tel:+3623335021',
  email: 'hivatal@torokbalint.hu',
  // A város rendeletei, köztük az együttélés szabályai
  regulationsUrl: 'https://www.torokbalint.hu/app/cms/TorokbalintApp/index?id=45',
}

// A kutyafuttató üzemeltetője (a tbvg.hu adatai)
export const OPERATOR = {
  name: 'Törökbálinti Városgondnokság',
  address: '2045 Törökbálint, Munkácsy Mihály utca 79.',
  phone: '+36 23 222 333',
  phoneHref: 'tel:+3623222333',
  email: 'varosgondnoksag@torokbalint.hu',
}
