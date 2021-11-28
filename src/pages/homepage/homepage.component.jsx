import React, {useState} from "react";
import Directory from "../../components/directory/directory.components";
import Form from "../../components/form/form.component";

import './homepage.styles.scss';

const HomePage = ({theme}) => {
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('');

    return (
        <div className={`homepage ${theme}`}>
            <Form 
            theme={theme}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            />
            <Directory 
            theme={theme}
            searchValue={searchValue}
            // setSearchValue={setSearchValue}
            filterValue={filterValue}
            // setFilterValue={setFilterValue}
            />
        </div>
    )
};

export default HomePage;