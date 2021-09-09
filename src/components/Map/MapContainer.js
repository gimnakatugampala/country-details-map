import React, { useState } from 'react'
import {GoogleApiWrapper,Map,InfoWindow, Marker, } from 'google-maps-react';
import mapStyles from './styles'




const MapContainer = ({google}) => {

  // Maker State
  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    // Coordinates of the map
    mapCenter:{
      lat: 7.8731,
      lng: 80.7718
    }
  })



  // Maker Click
  const onMarkerClick = (props, marker, e) =>
  setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  // Custom the Map
  const _mapLoaded = (mapProps, map) =>  {
    map.setOptions({
       styles: mapStyles
    })
 }
  
  return (
    <div>
        <Map 
        google={google} 
        zoom={5} 
        zoomControl={false}
        mapTypeControl={false}
        fullscreenControl={false}
        keyboardShortcuts={false}
        streetViewControl={false}
        onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
        initialCenter={{
          lat:state.mapCenter.lat,
          lng:state.mapCenter.lng
        }}
      
          >

            {/* Marker */}
        <Marker
         position={{
          lat:state.mapCenter.lat,
          lng:state.mapCenter.lng
        }} 

        center={{
          lat:state.mapCenter.lat,
          lng:state.mapCenter.lng
        }}

        />

        </Map>
    </div>
  )
}

// Loading Map ..
const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
)

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDI8vXzzmB6Fa8VKwT421nk56z6JsNvsUg'),
  LoadingContainer: LoadingContainer
})(MapContainer)
