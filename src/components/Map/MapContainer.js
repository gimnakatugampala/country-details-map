import React from 'react'
import {GoogleApiWrapper,Map,InfoWindow, Marker, } from 'google-maps-react';
import mapStyles from './styles'




const MapContainer = ({google}) => {

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
        zoom={14} 
        zoomControl={false}
        mapTypeControl={false}
        fullscreenControl={false}
        keyboardShortcuts={false}
        streetViewControl={false}
        onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
          >

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
