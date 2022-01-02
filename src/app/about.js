import React from 'react';
import NavBar from './navigation/navigate';

const Me = () => (
  <div id="about-me">
    <h2>About Me</h2>

    <p>
      Hello, I am Andrew Woska!<br /><br />
      I am a computer engineering student, researcher, TA, and
      honors scholar at the University at Buffalo,
      the State University of New York (SUNY).
      I am a member of the Embedded Sensing and Computing Lab.
      <br />
      { /**
      As someone who is interested in how health and medical services can be
      improved through technology, it is my mission to gain experience to make
      this idea a reality.
      */ }
      My current areas of interest are:
      <ol style={{paddingLeft: '0px'}}>
        <li style={{color: 'black'}}>embedded systems</li>
        <li style={{color: 'black'}}>digital systems</li>
        <li style={{color: 'black'}}>computer architecture</li>
        <li style={{color: 'black'}}>firmware</li>
        <li style={{color: 'black'}}>SoC</li>
        <li style={{color: 'black'}}>automation</li>
        <li style={{color: 'black'}}>computer and electrical engineering</li>
      </ol>

      <br /><br />
      If there is anything business related you wish to discuss,
      feel free to email me at&nbsp;
      <a href="mailto:andrew@woska.org">andrew@woska.org</a>.
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
