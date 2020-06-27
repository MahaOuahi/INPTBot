import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Faq from './components/layout/Faq'

import HomePage from './components/layout/HomePage'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="App">
              
              <Switch> 
                
                <Route path='/faq' component={Faq} />
                <Route path='/' component={HomePage} />
               
              </Switch>
            </div>
          </BrowserRouter>
        );
    }
}