/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Container } from 'react-bootstrap';

const Projects = () => (
    <Container>
        <div id="my-pubs">
            <h2>My Projects</h2>
            <p>
                [P12] Dark and Darker Game Quest Tracker
                [currently closed source, will be online soon]
                [P11] Logic Synthesis Engine Rewrite
                [<a href="https://github.com/agwoska/ec551prog1" rel="noreferrer">GitHub (Private)</a>]
                <br />
                [P10] Beaglebone Black Digital Twin
                <br />
                [P9] Debt Collection in MA
                <br />
                [P8] LegSense (S3)
                <br />
                [P7] DetectoVision
                [<a href="https://github.com/agwoska/DetectoVision" rel="noreferrer">GitHub</a>]
                <br />
                [P6] FPGA Synthesis Engine
                [<a href="https://github.com/LTYoung/ec551prog2" rel="noreferrer">GitHub</a>]
                <br />
                [P5] Haptic Reality Platform
                <br />
                [P4] Blender Digital Twin
                <br />
                [P3] EMG Hand Gesture
                <br />
                [P2] Self Balancing Robot (S2)
                <br />
                [P1] Smartwatch Rehabilitation Device (S1)
                <br />
            </p>

            {/* <h2>My Publications</h2> */}

            <h2>Abstracts / Posters / Presentations</h2>
            <p>
                [S3] <b>A. Woska</b>, Y. Ma,
                &quot;LegSense,&quot;
                <i>ECE Poster Presentation</i>,
                Boston University, Boston, Massachusetts, December 2023.
                [<a href="papers/LegSense_ms2023_poster.pdf" rel="noreferrer">poster</a>]
                [<a href="https://github.com/LTYoung/legsense" rel="noreferrer">GitHub</a>]
                <br />
                [S2] <b>A. Woska</b>, D. Maas, I. Muhammed-Graham,
                &quot;Self Balancing Robot,&quot;
                <i>UB Demo Day</i>, University at Buffalo, Buffalo, New York, May 2022.
                [<a href="papers/controlsys_poster.pdf" rel="noreferrer">poster</a>]
                [<a href="https://github.com/agwoska/cse499-portfolio" rel="noreferrer">GitHub</a>]
                <br />
                [S1] <b>A. Woska</b>, S. Saptarshi, W. Xu,
                &quot;Smartwatch Rehabilitation Device,&quot;
                <i>SUNY Undergraduate Research Conference</i> (SURC &apos;22),
                Buffalo State College, Buffalo, New York, April 2022.
                [<a href="papers/SURC22_abstract.pdf" rel="noreferrer">abstract</a>]
                [<a href="papers/SURC22_poster.pdf" rel="noreferrer">poster</a>]
                [<a href="https://sunycpd.eventsair.com/surc22/" rel="noreferrer">conference</a>]
            </p>
            <br />
            <br />
            <p>
                Project access and boards may be available upon request.
            </p>
        </div>
    </Container>
);

export default Projects;
