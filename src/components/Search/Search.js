import React from 'react'
import Select from 'react-select'


const Search = ({getAllCountries,setgetcountry,sethide}) => {

    let options = []

    getAllCountries()
    .then(data => {
        data.forEach(names => options.push({value:names.name,label:names.name}))
    })

    // Get the Country Name
    const handleChange = (e) =>{
        setgetcountry(e.value)
        sethide(true)
    }


    return (
       <div>
          <Select options={options} onChange={handleChange}  />
       </div>
     
    )
}

export default Search
