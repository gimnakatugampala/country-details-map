import React,{ useEffect, useState} from 'react'
import {GoogleApiWrapper,Map, Marker, } from 'google-maps-react';

import mapStyles from './styles'


const MapContainer = ({google,lng,lat}) => {



      // Maker State
      const [state, setState] = useState({
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    
        // // Coordinates of the map
        // mapCenter:{
        //   lat: lat == '' ?  7.8731 : +lat ,
        //   lng: lng == '' ? 80.7718 : +lng
        // }
      })

      

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
        zoom={2} 
        zoomControl={false}
        mapTypeControl={false}
        fullscreenControl={false}
        keyboardShortcuts={false}
        streetViewControl={false}
        onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
        initialCenter={{
          lat:+lat,
          lng:+lng
        }}
      
          >

            {/* Marker */}
        <Marker
         position={{
          lat:+lat,
          lng:+lng
        }} 

        center={{
          lat:+lat,
          lng:+lng
        }}

        />

        </Map>
    </div>
  )
}

// Loading Map ..
const LoadingContainer = (props) => (
  <div style={{backgroundColor:'#203640',width:'100vw',height:'100vh',margin:'0',overflow:'hidden'}}>

    <div className="loader"></div>
  </div>
)

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBxZQL4C_W3OX1CkfJSTEC70CXlEGoQeuI'),
  LoadingContainer: LoadingContainer,
  libraries: ["places"]
})(MapContainer)
