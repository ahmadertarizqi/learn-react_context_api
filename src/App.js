import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Layouts/Header';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';
import Contacts from './components/Contacts/ContactContainer';

import AddContact from './components/Contacts/addContact';
import EditContact from './components/Contacts/editContact';

import { Provider } from './Context'

// library
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App">
          <div className="container">
            <Header headtitle="Contact Manager"/>
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route path="/contact/add" component={AddContact} />
              <Route path="/contact/edit/:id" component={EditContact} />
              <Route path="/about/:id" component={About} />
              <Route path="/about" component={NotFound} />
            </Switch>
          </div>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
