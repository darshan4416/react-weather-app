/*https://api.openweathermap.org/data/2.5/weather?q=indore&appid=dce3530deafacee8b6503f595671e2d3*/
import './style.css'
import './weathercard'
import React, {useState, useEffect} from 'react'
import Weathercard from './weathercard';

function Temp() {
    const [searchValue, setSearchValue] = useState("Indore");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherinfo = async ()=>{
        let url = 
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=dce3530deafacee8b6503f595671e2d3`;

        try {
            let res = await fetch(url);
            let data = await res.json();

             const {temp, humidity, pressure} = data.main;
             const {main:weathermood} = data.weather[0];

             const {name} = data;
             const {speed} = data.wind;
             const {country, sunset} = data.sys;

             const newgetweatherinfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
             };
             setTempInfo(newgetweatherinfo)
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

       <Weathercard tempInfo={tempInfo} />
        </>
    )
}

export default Temp
