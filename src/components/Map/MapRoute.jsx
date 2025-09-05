import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import env from '../../configs/env';
import Map, { Layer, Marker, Source } from 'react-map-gl/mapbox';
import mapboxDirectionService from '../../services/mapboxDirectionService';
const MapRoute = ({ destination }) => {
  const [locationNow, setLocationNow] = useState([])

  const [coordinates, setCoordinates] = useState([]);
  useEffect(() => {
    getLocationNow()
  }, [])

  useEffect(() => {
    if (locationNow.length === 2) {
      (async () => {
        const response = await mapboxDirectionService.getDirections(locationNow, destination)
        setCoordinates(response?.routes?.[0]?.geometry?.coordinates || [])
      })()
    }
  }, [locationNow])

  const lineGeoJSON = {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates
    },
  }

  const getLocationNow = () => {
    try {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLocationNow([position?.coords?.longitude, position?.coords?.latitude] || [])
        })
      }
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <>
      {
        locationNow.length === 2 &&
        <Map
          mapboxAccessToken={env.VITE_MAPBOX_TOKEN}
          initialViewState={{
            longitude: locationNow[0],
            latitude: locationNow[1],
            zoom: 14
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker color='red' longitude={locationNow[0]} latitude={locationNow[1]} />
          <Marker color='blue' longitude={destination[0]} latitude={destination[1]} />

          {coordinates.length > 0 && locationNow.length == 2 && <Source id="line-source" type="geojson" data={lineGeoJSON}>
            <Layer type='line' paint={{
              "line-color": "#ff0000",
              "line-width": 2,
            }} />
          </Source>}
        </Map>
      }</>
  )
}
export default MapRoute
