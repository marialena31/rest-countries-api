import React, {useState, useEffect}  from "react";
import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss';

const Directory = ({theme, searchValue, filterValue,}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [countries, setCountries] = useState([]);
    
    let query = 'all';

    if(searchValue) {
      query = `name/${searchValue}`;
    } else if(filterValue) {
      query = `region/${filterValue}`;
    } 

    useEffect(() => {
      const url = `https://restcountries.com/v2/${query}`;
      fetch(url)
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
    }, [query]);

    if (error) {
    return <div>Erreur : {error.message}</div>;
} else if (!isLoaded) {
  return <div>Chargement...</div>;
} else {
  return (
    <div className='directory-menu'>
    {
      countries.status ? <div>Erreur : {countries.status} : {countries.message}</div> :
      countries.map(country => (<MenuItem key={country.alpha3Code} country={country} theme={theme}/>))
    }
  </div>
  )}
 };
export default Directory;