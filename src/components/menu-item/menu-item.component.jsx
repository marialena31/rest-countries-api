import React from "react";
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({country, history, match}) => {
    // const displayCountryPage = () {

    // }

    return (
        <div className='menu-item' onClick={() => history.push(`${match.url}country?code=${country.alpha3Code}`)}>
            <div className='background-image' style={{backgroundImage: `url(${country.flags.png})`}}/>
            <div className='content'>
                <h2 className='country-name'>{country.name}</h2>
                <div className='info code'>{country.alpha3Code}</div>
                <div className='info population'><span className='population-label'>Population:</span>{country.population}</div>
                <div className='info region'><span className='region-label'>Region:</span>{country.region}</div>
                <div className='info capital'><span className='capital-label'>Capital:</span>{country.capital}</div>
            </div>
        </div>
    )
};

export default withRouter(MenuItem);