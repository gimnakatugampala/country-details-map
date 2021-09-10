import React,{useState,useEffect} from 'react'

 import {getCountryLocation ,getAllCountries ,singleCountry} from './api/api'

 import Box from '@material-ui/core/Box';

 import MapContainer from './components/Map/MapContainer'
 import Search from './components/Search/Search'



const App = () => {

  const [getcountry, setgetcountry] = useState('')
  const [lat, setlat] = useState(7.8731 )
  const [lng, setlng] = useState(80.7718)

  

  

    if(getcountry != ''){
      getCountryLocation(getcountry)
        .then(data => {
          console.log(data.Response.View[0].Result[0].Location.DisplayPosition)
          setlat(data.Response.View[0].Result[0].Location.DisplayPosition.Latitude)
          setlng(data.Response.View[0].Result[0].Location.DisplayPosition.Longitude)
        })

        // Get the Details of the country
        singleCountry(getcountry)
        .then(data => console.log(data))
    }
  


  

    console.log(getcountry)

    return  (
      <div>
        <Box
        position="absolute"
        top={40}
        zIndex="tooltip"
        left={70}
        style={{width:'70%',margin:'auto'}}
      >

      <Search  getAllCountries={getAllCountries}  setgetcountry={setgetcountry} />
      </Box>
    
      <MapContainer lat={lat} lng={lng} />
      
      </div>
    
    ) 
}

export default App
