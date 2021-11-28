import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';

import CountryPage from "./pages/countrypage/countrypage.component";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";

import './App.scss';
import './sass/main.scss';
import '@fortawesome/fontawesome-svg-core/styles.css'

function App() {
  const initTheme = () => {
    return localStorage.getItem('themeMode');
  }

  const [theme, setTheme] = useState(initTheme());


  return (
    <div className={`app ${theme}`}>
        <Header theme={theme} setTheme={setTheme}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/country' component={CountryPage} />
        </Switch>
      </div>
  );
}

export default App;
