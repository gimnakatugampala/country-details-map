import React,{useState} from 'react'
import {GoogleApiWrapper,Map, Marker, } from 'google-maps-react';
import { Autocomplete } from '@react-google-maps/api'

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

  // Custom the Map
  const _mapLoaded = (mapProps, map) =>  {
    map.setOptions({
       styles: mapStyles
    })
 }

 const [autocomplate, setAutocomplate] = useState(null)

 const onLoad = (autoC) => setAutocomplate(autoC)

 const onPlaceChanged = () =>{
     const lat = autocomplate.getPlace().geometry.location.lat()
     const lng = autocomplate.getPlace().geometry.location.lng()

    //  setCoordinates({lat,lng})
    console.log(lat,lng)
 }

  
  return (
    <div>

      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                   <input  type="text" placeholder="search.." />
                </Autocomplete>

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
  LoadingContainer: LoadingContainer,
  libraries: ["places"]
})(MapContainer)
