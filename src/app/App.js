import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    </BrowserRouter>
);

export default App;
