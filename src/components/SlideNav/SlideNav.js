import React from 'react'

const SlideNav = ({details}) => {

 
        console.log(details)
        


    return (
        <div className="details">
            {/* Section one */}
            <div className="section-a">
            <h3 style={{whiteSpace:'nowrap'}}>United States of America (USA)</h3>
            <h5>Whishington DC</h5>
            <img src="https://restcountries.eu/data/usa.svg" style={{width:'100px',height:"50px",margin:'5px'}} />
            <ul style={{listStyle:'none',padding:'0'}}>
                <li style={{padding:'5px'}}>Populations : <span style={{color:'#8FC4DD'}}> 4000 </span></li>
                <li>Region : North America</li>
                <li>Sub Region : North AMerica</li>
                <li>Currency: United States Dollar ($)</li>
                <li>Top Domain : .lk</li>
            </ul>
            </div>

            {/* Section Two */}
            <div className="section-b">
                <h4 style={{color:'#8FC4DD'}}>Languages</h4>
                <ul style={{listStyle:'none'}}>
                    <li>Sinhala</li>
                    <li>Sinhala</li>
                </ul>
                <h4 style={{color:'#8FC4DD'}}>Borders</h4>
                <ul style={{listStyle:'none'}}>
                    <li>CANA</li>
                    <li>MX</li>
                </ul>
                <h4 style={{color:'#8FC4DD'}}>Timezones</h4>
                <ul style={{listStyle:'none'}}>
                    <li>+5:40</li>
                    <li>+5:400</li>
                </ul>
                <h4 style={{color:'#8FC4DD'}}>Organizations</h4>
                <ul style={{listStyle:'none'}}>
                    <li>South Asian Association for Regional Cooperation (SAARC)</li>
                </ul>
            </div>

        
        </div>
    )
}

export default SlideNav
