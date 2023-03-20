
import './App.css';
import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import HomePage from './components/homePage';

class APP extends Component {
  state = {  } 
  render() { 
    return (
      <main className='container'>
         <Switch>
            <Route path="/loginForm" component={LoginForm}></Route>
            <Route path="/registerForm" component={RegisterForm}></Route>
            <Route path="/homePage" component={HomePage}></Route>
            <Redirect from="/" exact to="/loginForm" />
          </Switch>
      </main>
    );
  }
}
 
export default APP;
