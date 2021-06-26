import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from '../components/nav';
import About from '../components/about';
import Work from '../components/work.js';
import Contact from '../components/contact';
import Resume from '../components/resume';

class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <Navigation />
        </header>

        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
        </div>
      </HashRouter>
    );
  }
}

export default Header;