import React from 'react';
import NavBar from './navigation/navigate';


const Pubs = () => (
  <div id="my-pubs">
	<h2>My Projects</h2>
	<br/>
	<p>
	[P5] Haptic Reality Platform<br/>
	[P4] Blender Digital Twin<br/>
	[P3] EMG Hand Gesture<br/>
	[P2] Slef Balancing Robot<br/>
	[P1] Smartwatch Rehabilitation Device<br/>
	</p>

    <h2>My Publications</h2>
    <br/>

    <h3>Abstracts/Posters</h3>
    <p>
      [A1] <b>A. Woska</b>, S. Saptarshi, W. Xu,
      &quot;Smartwatch Rehabilitation Device,&quot;
      <i>SUNY Undergraduate Research Conference</i> (SURC &apos;22),
      Buffalo, New York, April 2022.
      [<a href="papers/SURC22_abstract.pdf">abstract</a>]
      [<a href="papers/SURC22_poster.pdf">poster</a>]
      [<a href="https://sunycpd.eventsair.com/surc22/">conference</a>]
	<br/>
      [P1] <b>A. Woska</b>, D. Maas, I. Muhammed-Graham,
      &quot;Self Balancing Robot,&quot;
      <i>UB Demo Day</i>, Buffalo, New York, May 2022.
      [<a href="papers/controlsys_poster.pdf">poster</a>]
      [<a href="https://github.com/agwoska/cse499-portfolio">GitHub</a>]
    </p>
  </div>
)

const Publications = () => (
  <>
    <NavBar navTag={3}/><br/>
    <Pubs/>
  </>
)

export default Publications;
