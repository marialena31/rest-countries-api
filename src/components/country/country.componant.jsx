import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'

import './country.styles.scss';

const Country = ({country}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [borders, setBorders] = useState([]);
    
    useEffect(() => {
        const countryCodes = country?.borders?.toString();
        if(countryCodes !== undefined) {
            const url = "https://restcountries.com/v2/alpha?codes="+countryCodes;
            fetch(url)
                .then(res => res.json())
                .then(
                (result) => {
                    setIsLoaded(true);
                    setBorders(result);
                },
        
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
                )
        } else {
            setIsLoaded(true);
        }
    }, [country])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <div className="country">
                <Link className="country__btn" to="/">
                    <FontAwesomeIcon icon={faLeftLong} className='icon country__btn__arrow'/>
                    <div className="btn country__btn__title">Back</div>
                </Link>
                <div className="country__card">
                    <img src={`${country.flag}`} className="country__card__flag" alt={`${country.name}`} name={`${country.name}`}/>
                    <div className="country__card__info">
                        <h1 className="heading1 country__card__info__name">{country.name}</h1>
                        <div className="country__card__info__detail1">
                            <div className="country__card__info__detail1__nativeName"><span className='country__card__info__detail1__nativeName-label'>Native Name:</span>{country.nativeName}</div>
                            <div className="country__card__info__detail1__population"><span className='country__card__info__detail1__population-label'>Population:</span>{country.population}</div>
                            <div className="country__card__info__detail1__region"><span className='country__card__info__detail1__region-label'>Region:</span>{country.region}</div>
                            <div className="country__card__info__detail1__subregion"><span className='country__card__info__detail1__subregion-label'>Sub Region:</span>{country.subregion}</div>
                            <div className="country__card__info__detail1__capital"><span className='country__card__info__detail1__capital-label'>Capital:</span>{country.capital}</div>
                        </div>
                        <div className="country__card__info__detail2">
                            <div className="country__card__info__detail1__topLevelDomain"><span className='country__card__info__detail1__topLevelDomain-label'>Top Level Domain:</span>{country.topLevelDomain}</div>
                            <div className="country__card__info__detail1__currencies"><span className='country__card__info__detail1__currencies-label'>Currencies:</span>{country.currencies.name}</div>
                            <div className="country__card__info__detail1__languages"><span className='country__card__info__detail1__languages-label'>Languages:</span>{country.languages.map(lang => lang.name).toString()}</div>
                        </div>
                        <div className="country__card__info__borders">
                            <span className='population-label'>Border Countries:</span>
                                {!borders ? null : borders.map(border => (
                                    <div className="country__card__info__borders__item__box">
                                        <div className="country__card__info__borders__item__text" key={border.alpha3Code}>{border.name}</div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Country;