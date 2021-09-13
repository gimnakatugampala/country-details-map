    // Get the cordinates - Lat & lng
export const getCountryLocation = async (country) =>{
    const res = await fetch(`https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q=${country}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "forward-reverse-geocoding.p.rapidapi.com",
            "x-rapidapi-key": "2af9a37521msh73b42cf0567a240p12d907jsne154ae89b3f5"
        }
    })

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