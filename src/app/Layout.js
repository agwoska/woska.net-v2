import React from 'react';
import { Outlet } from 'react-router-dom';
import Bar from './Bar';
import Footer from './Footer';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => (
    <div>
        <Bar />
        <br />
        <Outlet />
        <br />
        <Footer />
    </div>
);

export default Layout;
