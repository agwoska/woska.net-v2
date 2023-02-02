import React from 'react';
import NavBar from './navigation/navigate';

const Me = () => (
  <div id="about-me">
    <h2>About Me</h2>

    <p>
      Hello, I am Andrew Woska!<br/><br/>
      I am a computer engineering student, honors thesis researcher, TA, and
      honors scholar at the University at Buffalo,
      the State University of New York (SUNY).
      I am a member of the Embedded Sensing and Computing Lab
      under Dr. Wenyao Xu at the university.
      My research includes smart device-assisted rehabilitation for
      post-stroke patients and accurate GSR sensing.
      You can read my publications by clicking on the publications tab above.
      My plan is currently to complete a thesis for my undergrad
      and get into graduate school for embedded systems or something similar.
      Feel free to reach out to me if you want to talk about projects.
      <br/>

      My current areas of interest are:
      <ol style={{paddingLeft: '0px'}}>
        <li style={{color: 'black'}}>embedded systems</li>
        <li style={{color: 'black'}}>digital systems</li>
        <li style={{color: 'black'}}>computer architecture</li>
        <li style={{color: 'black'}}>sensing</li>
        <li style={{color: 'black'}}>automation</li>
      </ol>

      Microcontrollers I&apos;ve used:
      <ol style={{paddingLeft: '0px'}}>
        <li style={{color: 'black'}}>Arduino</li>
        <li style={{color: 'black'}}>Hexiwear</li>
        <li style={{color: 'black'}}>Nucleo</li>
        <li style={{color: 'black'}}>ESP32</li>
        <li style={{color: 'black'}}>Tiva C-Series</li>
        <li style={{color: 'black'}}>Xilinx Basys</li>
      </ol>

      <br/>
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
    <br/>
    <p>I respect peoples privacy so there are always zero trackers on my site</p>
  </div>
)

function About() {
  return (
    <>
      <NavBar navTag={4} />
      <br/>
      <Me />
      <br/>
      <Site />
    </>
  )
}

export default About;
