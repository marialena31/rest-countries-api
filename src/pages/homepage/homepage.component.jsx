import React from "react";
import Directory from "../../components/directory/directory.components";

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        {/* <Search/>
        <Filter/> */}
        <form>
        <input name="search" className="search" type="text" value="" placeholder="Search for a country"></input>
        <select></select>
        </form>
        <Directory/>
    </div>
);

export default HomePage;