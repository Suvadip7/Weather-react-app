import React from 'react'
import './searchbar.css'

const Searchbar = ({onSearch}) => {
    return (
        <div className="search-bar">
            <form>
                <i className="fas fa-search"></i>
                <input
                    type='text'
                    placeholder='Enter city name'
                    onChange={(event) => {
                        onSearch(event.target.value)
                    }}
                />
            </form>
        </div>
    )
}

export default Searchbar