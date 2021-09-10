import React from 'react'

const SlideNav = ({details}) => {

 
        console.log(details)
        


    return (
        <div className="details">
            {/* Section one */}
            <div className="section-a">
            <h3 className="title">{details.name}  ({details.alpha3Code})</h3>
            <h5 className="sub-title">{details.capital}</h5>
            <img src={details.flag} className="img" />
            <ul style={{listStyle:'none',padding:'0'}}>
                <li className="list">Populations : <span className="list-child" > {details.population} </span></li>
                <li className="list" >Region : <span className="list-child"   > {details.region} </span></li>
                <li className="list" >Sub Region : <span className="list-child"  > {details.subregion} </span></li>
                <li className="list">Currency: {details.currencies.map((currency,index) => <span key={index} className="list-child" > {currency.name} ({currency.symbol}) </span>)} </li>
                <li className="list">Top Domain : <span className="list-child"  > {details.topLevelDomain} </span></li>
            </ul>
            </div>

            {/* Section Two */}
            <div className="section-b">
                <h4 className="list-child">Languages</h4>
                <ul style={{listStyle:'none'}}>
                    {details.languages.map((language,index) => <li key={index}> {language.name} - {language.nativeName} </li>)}
                </ul>
                <h4 className="list-child">Borders</h4>
                <ul style={{listStyle:'none'}}>
                    {details.borders.map((border,index) => <li key={index}>{border}</li> )}
                </ul>
                <h4 className="list-child">Timezones</h4>
                <ul style={{listStyle:'none'}}>
                   
                {details.timezones.map((timezone,index) => <li key={index}>{timezone}</li> )}
            
                </ul>
                <h4 className="list-child">Organizations</h4>
                <ul style={{listStyle:'none'}}>
                {details.regionalBlocs.map((bloc,index) => <li key={index}>{bloc.name}  ({bloc.acronym})</li> )}
                </ul>
            </div>

        
        </div>
    )
}

export default SlideNav
