import React from 'react'
import Select from 'react-select'


const Search = ({getAllCountries}) => {

    let options = []

    getAllCountries()
    .then(data => {
        data.forEach(names => options.push({value:names.name,label:names.name}))
    })

    // const options = [
    //     { value: getcountry, label: getcountry },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    //   ]


    return (
       <div className="select" >
          <Select options={options} />
       </div>
     
    )
}

export default Search
