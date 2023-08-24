import React, { useState } from "react";
import icon from '../assets/icon-arrow.svg'

const Search = ({ submit, loading, setError })=> {
    const [search, setSearch] = useState('')

    function updateInput(event) {
        const { value } = event.target ;
        setSearch(value)
        setError(null)
    }

    function handleClick(event) {
        event.preventDefault()
        submit(search)
    }

    return (
        <form className="form">
            <input type="text" name='search' onChange={updateInput} value={search} className="input" placeholder="Search for any IP address"/>
            <button onClick={handleClick} disabled={loading} className="submit-btn"><img src={icon} alt="" /></button>
        </form>
    )
}

export default Search