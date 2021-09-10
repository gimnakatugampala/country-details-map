import React from 'react'
import Select from 'react-select'


const Search = ({getAllCountries,setgetcountry}) => {

    let options = []

    getAllCountries()
    .then(data => {
        data.forEach(names => options.push({value:names.name,label:names.name}))
    })

    // Get the Country Name
    const handleChange = (e) =>{
        setgetcountry(e.value)
    }


    return (
       <div>
          <Select options={options} onChange={handleChange}  />
       </div>
     
    )
}

export default Search
