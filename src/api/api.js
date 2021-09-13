    // Get the cordinates - Lat & lng
export const getCountryLocation = async (country) =>{
    const res = await fetch(`http://api.positionstack.com/v1/forward?access_key=010a8fbfa0bd1d137ba1e351109cdaf1&query=${country}`)

    return res.json()

}

// Get all the country Names
export const getAllCountries = async () =>{
    const res = await fetch(`https://restcountries.eu/rest/v2/all`)

    return res.json()

}

// Get single Country
export const singleCountry = async (name) =>{
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)

    return res.json()

}