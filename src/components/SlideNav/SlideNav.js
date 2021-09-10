import React from 'react'

const SlideNav = ({details}) => {

 
        console.log(details)
        


    return (
        <div className="details">
            {/* Section one */}
            <div className="section-a">
            <h3 style={{whiteSpace:'nowrap'}}>{details.name}  ({details.alpha3Code})</h3>
            <h5>{details.capital}</h5>
            <img src={details.flag} style={{width:'100px',height:"50px",margin:'5px'}} />
            <ul style={{listStyle:'none',padding:'0'}}>
                <li style={{padding:'5px'}}>Populations : <span style={{color:'#8FC4DD'}}> {details.population} </span></li>
                <li style={{padding:'5px'}}>Region : <span style={{color:'#8FC4DD'}}> {details.region} </span></li>
                <li style={{padding:'5px'}}>Sub Region : <span style={{color:'#8FC4DD'}}> {details.subregion} </span></li>
                <li style={{padding:'5px'}}>Currency: {details.currencies.map((currency,index) => <span key={index} style={{color:'#8FC4DD'}}> {currency.name} ({currency.symbol}) </span>)} </li>
                <li style={{padding:'5px'}}>Top Domain : <span style={{color:'#8FC4DD'}}> {details.topLevelDomain} </span></li>
            </ul>
            </div>

            {/* Section Two */}
            <div className="section-b">
                <h4 style={{color:'#8FC4DD'}}>Languages</h4>
                <ul style={{listStyle:'none'}}>
                    {details.languages.map((language,index) => <li key={index}> {language.name} - {language.nativeName} </li>)}
                </ul>
                <h4 style={{color:'#8FC4DD'}}>Borders</h4>
                <ul style={{listStyle:'none'}}>
                    {details.borders.map((border,index) => <li key={index}>{border}</li> )}
                </ul>
                <h4 style={{color:'#8FC4DD'}}>Timezones</h4>
                <ul style={{listStyle:'none'}}>
                {details.timezones.map((timezone,index) => <li key={index}>{timezone}</li> )}
                </ul>
                <h4 style={{color:'#8FC4DD'}}>Organizations</h4>
                <ul style={{listStyle:'none'}}>
                {details.regionalBlocs.map((bloc,index) => <li key={index}>{bloc.name}  ({bloc.acronym})</li> )}
                </ul>
            </div>

        
        </div>
    )
}

export default SlideNav
