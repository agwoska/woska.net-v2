import React from 'react';
import Bar from './Bar';
import Footer from './Footer';

const Contact = () => (
    <>
        <Bar />
        <br />
        <div id="contact-me">
            <h3>
                Feel free to email me at
                <a href="mailto:andrew@woska.org">andrew@woska.org</a>
            </h3>
            <br />
            <p>Responses may take time.</p>
        </div>
        <br />
        <Footer />
    </>
);

export default Contact;
