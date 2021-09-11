    // Get the cordinates - Lat & lng
export const getCountryLocation = async (country) =>{
    const res = await fetch(`https://geocoder.ls.hereapi.com/6.2/geocode.json?searchtext=${country}&apiKey=xwFURQAbUvN8iFhAVWNrK3ewQjtllq2UGALvqZdNn3M`)

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