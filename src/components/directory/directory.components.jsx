import React, {useState, useEffect}  from "react";
import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss';

const Directory = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      fetch("https://restcountries.com/v2/all")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setCountries(result);
          },
 
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    if (error) {
    return <div>Erreur : {error.message}</div>;
} else if (!isLoaded) {
  return <div>Chargement...</div>;
} else {
  return (
        <div className='directory-menu'>
            {countries.map(country => (<MenuItem key={country.alpha3Code} country={country}/>))}
        </div>
    
)}
 };
export default Directory;