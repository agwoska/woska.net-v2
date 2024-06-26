import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaGithub } from 'react-icons/fa';

const Footer = () => (
    <div id="footer">
        <p>Version 2.3.2</p>
        <a href="https://github.com/agwoska" target="_blank" rel="noreferrer" aria-label="Save">
            <FaGithub />
        </a>
    </div>
);

export default Footer;
