import React,{useState} from 'react'

 import {getCountryLocation ,getAllCountries} from './api/api'

 import MapContainer from './components/Map/MapContainer'
 import Search from './components/Search/Search'



const App = () => {

  const [getcountry, setgetcountry] = useState('')


  getCountryLocation()
    .then(data => console.log(data.Response.View[0].Result[0].Location.DisplayPosition))



    return  (
      <div>
      <Search  getAllCountries={getAllCountries} getcountry={getcountry} setgetcountry={setgetcountry} />
      <MapContainer />
      
      </div>
    
    ) 
}

export default App
