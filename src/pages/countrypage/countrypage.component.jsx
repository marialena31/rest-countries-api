import React, {useState, useEffect} from "react";
import Country from "../../components/country/country.componant";

import './countrypage.styles.scss';

const CountryPage = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [countryState, setCountryState] = useState(null);

    useEffect(() => {
        const countryCode = document.location.search.substring(6);
        const url = "https://restcountries.com/v2/alpha?codes="+countryCode;
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                setCountryState(result[0]);
                setIsLoaded(true);
                
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if(error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
        return (
            <div className='countrypage'>
                <Country country={countryState}/>
            </div>
        )
    }
};

export default CountryPage;