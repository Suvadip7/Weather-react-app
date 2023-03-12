import React from 'react'

import './navbar.css'

import Searchbar from './Searchbar'

const Navbar = ({temperatureUnit, onSearch}) => {
    return (
        <div className='navbar'>
            <div className='icon'>
            <i class="fa-solid fa-cloud-sun fa-3x"></i>
            </div>

            <Searchbar onSearch={onSearch} />

            <select name="unit" id="unit" className='dropdown' onChange={(event) => { temperatureUnit(event.target.value) }}>
                <option value="F">Farenheit</option>
                <option value="C">Celsius</option>
            </select>
        </div>
    )
}

export default Navbar