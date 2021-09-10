import React from 'react'

const SlideNav = ({details}) => {

 
        console.log(details)
        


    return (
        <div className="details">
            {/* Section one */}
            <div className="section-a">
            <h3>United States of America (USA)</h3>
            <h4>Whishington DC</h4>
            <img src="https://restcountries.eu/data/usa.svg" style={{width:'100px',height:"50px"}} />
            <ul>
                <li>Populations : 4000</li>
                <li>Region : North America</li>
                <li>Sub Region : North AMerica</li>
                <li>Currency: United States Dollar ($)</li>
                <li>Top Domain : .lk</li>
            </ul>
            </div>

            {/* Section Two */}
            <div className="section-b">
                <h4>Languages</h4>
                <ul>
                    <li>Sinhala</li>
                    <li>Sinhala</li>
                </ul>
                <h4>Borders</h4>
                <ul>
                    <li>CANA</li>
                    <li>MX</li>
                </ul>
                <h4>Timezones</h4>
                <ul>
                    <li>+5:40</li>
                    <li>+5:400</li>
                </ul>
            </div>

        
        </div>
    )
}

export default SlideNav
