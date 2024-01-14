import React, { useState } from 'react';
import {
  Routes,
  Route,
  Outlet,
  // Link,
  BrowserRouter,
} from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaBars, FaTimes } from 'react-icons/fa';

import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

import '../css/style.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Disable below in production as Nginx will handle it */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarStyle = {
    width: isSidebarOpen ? '150px' : '0px',
    height: '100vh',
    background: '#f0f0f0',
    transition: 'width 0.3s',
  };

  const btnSidebarStyle = {
    fontSize: '20px',
    background: 'none',
    border: 'none',
    overflow: 'visable',
    position: 'fixed',
    top: '0px',
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={sidebarStyle}>
        {isSidebarOpen && (
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              Apps
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        )}
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <button type="button" onClick={toggleSidebar} style={btnSidebarStyle}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
