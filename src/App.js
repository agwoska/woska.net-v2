import React from 'react';
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import Home from './app/home';
import Publications from './app/publications';
import About from './app/about'
import Contact from './app/contact';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/publications" component={Publications} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
