import React, { useState, useEffect } from 'react'

import "./home.css"

import axios from 'axios'

import Navbar from './Navbar'


const Home = () => {
    const [city, setCity] = useState(null)


    //search
    const [searchTerm, setSearchTerm] = useState("Agartala")
    const handleSearch = (sTerm) => {
        setSearchTerm(sTerm)
    }

    //temperature Unit
    const [unit, setUnit] = useState('F')
    const temperatureUnit = (unitVal) => {
        setUnit(unitVal)
        console.log(unitVal)
    }


    const getApiData = async () => {
        let url = ''
        
        if (unit === 'C') {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=fcfa3d664e63639fd6807342d35edbc1`
        } else {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=fcfa3d664e63639fd6807342d35edbc1`
        }


        const response = await axios.get(url)
        setCity(response.data)
        console.log(response.data)

    }

    useEffect(() => {
        getApiData();
    }, [searchTerm, unit])



    return (
        <div className='home'>
            <Navbar temperatureUnit={temperatureUnit} onSearch = {handleSearch} />

            <div className='homeSection'>
                {!city ? (
                    <h2>Invalid city name</h2>
                ) : (
                    <div className='information'>

                        <h1>
                            <i className="fa-solid fa-location-dot"></i>    
                            City: {city.name}
                            
                        </h1>
                        <h2 className='temperature'>Temperature: {city.main.temp}°{unit}</h2>
                        <h3>Min:  {city.main.temp_min}°{unit} | Max: {city.main.temp_max}°{unit}</h3>
                        <hr />
                        <h3>{city.weather[0].main}</h3>
                        <hr />
                        <h3>Humidity:  {city.main.humidity}</h3>
                        <hr />
                        <h3>Pressure:  {city.main.pressure}</h3>
                        <hr />
                        <h3>Wind Speed: {city.wind.speed}</h3>
                        <hr />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home