import React from 'react';
import Bar from './Bar';
import Footer from './Footer';

const Me = () => (
  <div id="about-me">
    <h2>About Me</h2>

    <p>
      Hello, I am A. Woska!
      <br />
      <br />
      I am an electrical and computer engineering student at Boston University
      focusing on digital device development and applications.
      <br />
      <br />
      I was a computer engineering student, honors thesis researcher, TA, and
      honors scholar at the University at Buffalo,
      the State University of New York (SUNY).
      I was a member of the Embedded Sensing and Computing Lab
      under Dr. Wenyao Xu where I completed three projects.
      <br />
      <br />
      My research includes smart device-assisted rehabilitation for
      patients and biopotential device applications using embedded systems.
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
      <br />
      My current areas of interest are:

      <ol style={{ paddingLeft: '0px' }}>
        <li style={{ color: 'black' }}>embedded systems</li>
        <li style={{ color: 'black' }}>digital system design</li>
        <li style={{ color: 'black' }}>computer architecture</li>
        <li style={{ color: 'black' }}>digital VLSI</li>
        <li style={{ color: 'black' }}>sensing</li>
        <li style={{ color: 'black' }}>automation</li>
      </ol>

      Microcontrollers I&apos;ve used:
      <ol style={{ paddingLeft: '0px' }}>
        <li style={{ color: 'black' }}>Arduino AVR, ARM, Vidor 4000</li>
        <li style={{ color: 'black' }}>Hexiwear</li>
        <li style={{ color: 'black' }}>Nucleo L4</li>
        <li style={{ color: 'black' }}>ESP-32</li>
        <li style={{ color: 'black' }}>Raspberry Pi 3B+, RP2040</li>
        <li style={{ color: 'black' }}>Tiva C-Series</li>
        <li style={{ color: 'black' }}>Xilinx Basys 3</li>
      </ol>

      <br />
      If there is anything business related you wish to discuss,
      feel free to email me at&nbsp;
      <a href="mailto:andrew@woska.org">andrew@woska.org</a>
      .
    </p>
  </div>
);

const Site = () => (
  <div id="about-site">
    <h2>About the Site</h2>

    <p>
        This site was built with&nbsp;
        <a href="https://reactjs.org">React.js</a>
        .
    </p>
  </div>
);

function About() {
  return (
    <>
      <Bar />
      <br />
      <Me />
      <br />
      <Site />
      <br />
      <Footer />
    </>
  );
}

export default About;
