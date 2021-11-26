import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import './form.styles.scss';

const Form = () => {
    const regions = [
        {
            'code': 'africa',
            'name': 'Africa'
        },
        {
            'code': 'america',
            'name': 'America'
        },
        {
            'code': 'asia',
            'name': 'Asia'
        },
        {
            'code': 'europe',
            'name': 'Europe'
        },
        {
            'code': 'oceania',
            'name': 'Oceania'
        }
    ];

    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('');

    const handleChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
    }

    const handleChangeFilterValue = (event) => {
        setFilterValue(event.target.value)
    }

    const handleSubmit = (event) => {
        alert(searchValue + filterValue);
        event.preventDefault();
    } 
    

    return (
        <form className='search-form' onSubmit={handleSubmit} >
            <div className="search-form__search-icon">
                <input name="input-search" className="search-form__input-search" type="text" onChange={handleChangeSearchValue} value={searchValue} placeholder="Search for a country..."></input>               
                <input className="search-form__search-icon__btn" type="submit" onClick={handleSubmit}/>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon search-form__search-icon__glass'/>
            </div>
            <select className="search-form__select-region" value={filterValue} onChange={handleChangeFilterValue} required>
                <option key="default" value="" disabled="disabled" hidden="hidden">Filter by Region </option>
                {regions.map(region => (<option key={region.code} value={region.code}>{region.name}</option>))}
            </select>
        </form>
    )
    
};

export default Form;