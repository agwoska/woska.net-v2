import React from 'react';
import NavBar from './navigation/navigate';

const Me = () => (
  <div id="about-me">
    <h2>About Me</h2>

    <p>
      Hello, I am Andrew Woska!<br /><br />
      I am a computer engineering student, honors thesis researcher, TA, and
      honors scholar at the University at Buffalo,
      the State University of New York (SUNY).
      I am a member of the Embedded Sensing and Computing Lab
      under Dr. Wenyao Xu at the university.
      My research includes smartdevice-assisted rehabilitation for
      post-stroke patients and alternative locations for accurate extremity
      GSR sensing with a novel sensor.
      You can read my publications by clicking on the publications tab above.
      My plan is currently to complete a thesis for my undergrad
      and get into graduate school for embedded systems or something similar.
      Feel free to reach out to me if you want to talk about projects.
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
        <li style={{color: 'black'}}>sensing</li>
        <li style={{color: 'black'}}>automation</li>
        {/* <li style={{color: 'black'}}>computer and electrical engineering</li> */}
      </ol>

      Microcontrollers I&apos;ve used:
      <ol style={{paddingLeft: '0px'}}>
        <li style={{color: 'black'}}>Arduino Uno, Nano, Mega, Due, Vidor 4000</li>
        <li style={{color: 'black'}}>Hexiwear</li>
        <li style={{color: 'black'}}>Nucleo L4R5ZI, L552ZE-Q</li>
        <li style={{color: 'black'}}>ESP-32 WROOM</li>
        <li style={{color: 'black'}}>Tiva C-Series</li>
        <li style={{color: 'black'}}>Xilinx Basys 3</li>
        {/* <li style={{color: 'black'}}>computer and electrical engineering</li> */}
      </ol>

      <br />
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
      <Me /><br /><Site />
    </>
  )
}

export default About;
