import React, {useState, useEffect}  from "react";
import MenuItem from "../menu-item/menu-item.component";
// import { MyApiRestCountries } from "../../api/api.utils";

import './directory.styles.scss';
const Directory = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch("https://restcountries.com/v2/all")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
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
            {items.map(item => (<MenuItem key={item.name} country={item}/>))}
        </div>
    
)}
 };
export default Directory;