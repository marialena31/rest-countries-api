import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <>
        <input name="search" className="search" type="text" onChange={handleChange} value={searchValue} placeholder="Search for a country"></input>
        <input type="submit"></input>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon search__icon'/>
        </>
    )
}

export default Search;