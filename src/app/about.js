import React from 'react';
import NavBar from './navigation/navigate';

const Me = () => (
  <div id="about-me">
    <h2>About Me</h2>

    <p>
      Hello, I am Andrew Woska!<br /><br />
      I am a Computer Engineering Student at the SUNY University at Buffalo and
      an honors scholar.
      <br />
      As someone who is interested in how health and medical services can be
      improved through technology, it is my mission to gain experience to make
      this idea a reality.
      <br /><br />
      If there is anything business related you wish to discuss,
      feel free to email me at&nbsp;
      <a href="mailto:contact@woska.net">contact@woska.net</a>.
    </p>
  </div>
)

const Site = () => (
  <div id="about-site">
    <h2>About the Site</h2>

    <p>This site was built with <a href="https://reactjs.org">React.js</a>.</p>
  </div>
)

function About() {
  return (
    <>
      <NavBar navTag={4} /><br />
      <h3>Still Under Construction</h3><br />
      <Me /><br /><Site />
    </>
  )
}

export default About;
