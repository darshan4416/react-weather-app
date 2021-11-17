/*https://api.openweathermap.org/data/2.5/weather?q=indore&appid=dce3530deafacee8b6503f595671e2d3*/
import './style.css'

import React, {useState, useEffect} from 'react'

function Temp() {
    const [searchValue, setSearchValue] = useState("Indore");

    const getWeatherinfo = async ()=>{
        let url = 
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=dce3530deafacee8b6503f595671e2d3`;

        try {
            let res = await fetch(url);
            let data = await res.json();

             const {temp, humidity, pressure} = data.main;
             const {main:weathermood} = data.weather[0];

             const {name} = data;
             const {speed} = data.wind;
             const {country, sunset} = data.sys;

           // console.log(data);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getWeatherinfo();
    }, [])
    return (
        <>
        <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherinfo}
           >
            Search
          </button>
        </div>
      </div>
        <article className="widget">
        <div className="weatherIcon">
          <i className={"wi wi-day-sunny"}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>25&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">Sunny</div>
            <div className="place">
              Indore, India
            </div>
          </div>
        </div>

        <div className="date"> {new Date().toLocaleString()} </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                10:00 PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                22 <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                10 <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                25 <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
        </>
    )
}

export default Temp
