    // Get the cordinates - Lat & lng
export const getCountryLocation = async () =>{
    const res = await fetch(`https://geocoder.ls.hereapi.com/6.2/geocode.json?searchtext=srilanka&apiKey=Uv-KejwwVdHSa3VPYoivBMm6ULErNm-rVU5xdi_jjPQ`)

    return res.json()

}

// Get all the country Names
export const getAllCountries = async () =>{
    const res = await fetch(`https://restcountries.eu/rest/v2/all`)

    return res.json()

}