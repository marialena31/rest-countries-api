import React from "react";
import { Switch, Route } from 'react-router-dom';

import CountryPage from "./pages/countrypage/countrypage.component";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";

import './sass/main.scss';
import '@fortawesome/fontawesome-svg-core/styles.css'

function App() {
  return (
    <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/country' component={CountryPage} />
        </Switch>
      </div>
  );
}

export default App;
