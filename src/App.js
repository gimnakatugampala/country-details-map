import React,{useState} from 'react'

 import MapContainer from './components/Map/MapContainer'

const App = () => {

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
  



    return  (
      
      <MapContainer setState={setState} state={state} />
    
    ) 
}

export default App
