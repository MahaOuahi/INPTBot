import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Faq from './components/layout/Faq'

import HomePage from './components/layout/HomePage'
import Residence from "./components/Infrastructure/Residence";
import Restau from "./components/Infrastructure/Restau";
import Infirmerie from "./components/Infrastructure/Infirmerie";
import Sport from "./components/Infrastructure/Sport";
import Biblio from "./components/Infrastructure/Biblio";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="App">
              
              <Switch> 
                
                <Route path='/faq' component={Faq} />
                <Route exact path='/' component={HomePage} />
                
                <Route path='/residence' component={Residence} />
                <Route path='/restaurant' component={Restau} />
                <Route path='/infirmerie' component={Infirmerie} />
                <Route path='/sport' component={Sport} />
                <Route path='/bibliotheque' component={Biblio} />

               
              </Switch>
            </div>
          </BrowserRouter>
        );
    }
}