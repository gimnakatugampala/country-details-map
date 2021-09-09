import React, { useState } from 'react'
import {GoogleApiWrapper,Map,InfoWindow, Marker, } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress,getLatLng} from 'react-places-autocomplete';
import mapStyles from './styles'




const MapContainer = ({google,state,setState}) => {



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
