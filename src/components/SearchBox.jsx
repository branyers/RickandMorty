import React from 'react'
import {FaSearch}  from 'react-icons/fa';
const SearchBox = ({Onsubmit}) => {



    return (
        <form onSubmit={Onsubmit}>
        
        <div className="wrapper">
            <div className="label">Escribe un nombre de una dimension</div>
            <div className="searchBar">
                <input id="searchQueryInput" type="text"/>
                <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit"><FaSearch/></button>
            </div>
        </div>

        </form>
    )
}

export default SearchBox
