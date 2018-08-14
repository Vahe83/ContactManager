import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Provider} from './components/Context';
import Contacts from './components/contacts/Contacts';
import Header from './components/Header';
import AddContact from './components/pages/AddContact';
import UpdateContact from './components/pages/UpdateContact';
import About from './components/pages/About';

class App extends Component
{
  render()
  {
    return (
      <Provider>
        <Router>
          <Fragment>
            <Header branding="Contact Manager" />
              <div className="container">
                <Switch>
                  <Route exact path="/home" component={Contacts} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact/add" component={AddContact} />
                  <Route exact path="/contact/update/:id" component={UpdateContact} />
                  <Redirect from="/" to="/home" />
                </Switch>
              </div>
          </Fragment>
        </Router>
      </Provider>
        );
  }
}

export default App;
