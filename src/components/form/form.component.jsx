import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import regions from '../../Datas/data';

import './form.styles.scss';

const Form = ({theme, searchValue, setSearchValue, filterValue, setFilterValue}) => {
    const handleChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
        setFilterValue('')
    }

    const handleChangeFilterValue = (event) => {
        setFilterValue(event.target.value)
        setSearchValue('')
    }

    return (
        <form className='search-form' >
            <div className="search-form__search-icon">
                <input name="input-search" className={`search-form__input-search ${theme}`} type="text" onChange={handleChangeSearchValue} value={searchValue} placeholder="Search for a country..."></input>               
                <input className="search-form__search-icon__btn" type="submit"/>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon search-form__search-icon__glass'/>
            </div>
            <select className={`search-form__select-region ${theme}`} value={filterValue} onChange={handleChangeFilterValue} required>
                <option key="default" value="" disabled="disabled" hidden="hidden">Filter by Region </option>
                {regions.map(region => (<option key={region.code} value={region.code}>{region.name}</option>))}
            </select>
        </form>
    )
    
};

export default Form;