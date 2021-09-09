import React from 'react'
import { GoogleMap, useLoadScript  } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 6.585395,
  lng: 	79.960739
};

const Map = () =>{

    const libraries = ['places']

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyDI8vXzzmB6Fa8VKwT421nk56z6JsNvsUg",
        libraries
      })

      if(loadError) return "Error Loading Apps"
      if(!isLoaded) return "Loading Apps.."


  return (
        <GoogleMap 
        mapContainerStyle={containerStyle}
        zoom={5}
        center={center}
        >

        </GoogleMap>
  )
}
export default Map
