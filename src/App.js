import React,{useState,useEffect} from 'react'

 import {getCountryLocation ,getAllCountries ,singleCountry} from './api/api'

 import Box from '@material-ui/core/Box';

 import MapContainer from './components/Map/MapContainer'
 import Search from './components/Search/Search'
 import SlideNav from './components/SlideNav/SlideNav';



const App = () => {

  const [getcountry, setgetcountry] = useState('')
  const [lat, setlat] = useState(7.8731 )
  const [lng, setlng] = useState(80.7718)
  const [details, setdetails] = useState(null)
  const [hide, sethide] = useState(false)




  useEffect(() => {

    

    
    if(getcountry != ''){
      getCountryLocation(getcountry)
        .then(data => {
          setlat(data[0].lat)
          setlng(data[0].lon)
        })

        // Get the Details of the country
        singleCountry(getcountry)
        .then(data => setdetails(data[0]))
    }
  
   



  }, [getcountry])

  

    // if(getcountry != ''){
    //   getCountryLocation(getcountry)
    //     .then(data => {
    //       // console.log(data.Response.View[0].Result[0].Location.DisplayPosition)
    //       setlat(data.Response.View[0].Result[0].Location.DisplayPosition.Latitude)
    //       setlng(data.Response.View[0].Result[0].Location.DisplayPosition.Longitude)
    //     })

    //     // Get the Details of the country
    //     singleCountry(getcountry)
    //     .then(data => setdetails(data[0]))
    // }

    if(hide == true){
      setTimeout(() => {

        sethide(false)

      },8000)
    }
  


  
console.log(hide)
    // console.log(getcountry)

    return  (
      <div>
        <Box
        position="absolute"
        top={40}
        zIndex="tooltip"
        left={70}
        style={{width:'70%',margin:'auto'}}
      >

      <Search  getAllCountries={getAllCountries}  setgetcountry={setgetcountry} sethide={sethide} />
      </Box>

      {details && hide && 
       <Box
       className="details"
       position="absolute"
       bottom={0}
       zIndex="tooltip"
       bgcolor="#333"
       style={{width:'96%',color:'white',margin:'0',overflow:'hidden',borderTopLeftRadius:'20px',borderTopRightRadius:'20px',padding:'2%'}}
     >
       <SlideNav details={details} />
       </Box>
      
      }
     

      <MapContainer lat={lat} lng={lng} />
      
      </div>
    
    ) 
}

export default App
