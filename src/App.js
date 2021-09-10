import React,{useState} from 'react'

 import {getCountryLocation ,getAllCountries} from './api/api'

 import Box from '@material-ui/core/Box';

 import MapContainer from './components/Map/MapContainer'
 import Search from './components/Search/Search'



const App = () => {

  const [getcountry, setgetcountry] = useState('')
  // const [cordinates, setcordinates] = useState(null)


  getCountryLocation()
    .then(data => console.log(data.Response.View[0].Result[0].Location.DisplayPosition))



    return  (
      <div>
        <Box
  
        position="absolute"
        top={40}
        zIndex="tooltip"
        left={70}

        style={{width:'70%',margin:'auto'}}
      >
      <Search  getAllCountries={getAllCountries} getcountry={getcountry} setgetcountry={setgetcountry} />
      </Box>
    
      <MapContainer />
      
      </div>
    
    ) 
}

export default App
