import React from "react";
import Directory from "../../components/directory/directory.components";
import Form from "../../components/form/form.component";

import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className='homepage'>
            <Form/>
            <Directory/>
        </div>
    )
};

export default HomePage;