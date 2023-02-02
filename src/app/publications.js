import React from 'react';
import NavBar from './navigation/navigate';


const Pubs = () => (
  <div id="my-pubs">
    <h2>My Projects</h2>
    <br/>
    <p>
      [P4] Haptic Reality Platform (2023)
      <br/>
      [P3] Blender Digital Twin (2022)
      <br/>
      [P2] EMG Hand Gesture (2022-2023)
      <br/>
      [P1] Smartwatch Rehabilitation Device (2021-2022)
      <br/>
    </p>

    <h2>My Publications</h2>
    <br/>

    <h3>Abstracts/Posters</h3>
    <p>
      [A1] <b>Andrew Woska</b>, Shardul Saptarshi, Wenyao Xu,
      &quot;Smartwatch Rehabilitation Device,&quot;
      <i>SUNY Undergraduate Research Conference</i> (SURC &apos;22),
      Buffalo, New York, April 2022.
      [<a href="papers/SURC22_abstract.pdf">abstract</a>]
      [<a href="papers/SURC22_poster.pdf">poster</a>]
      [<a href="https://sunycpd.eventsair.com/surc22/">conference</a>]
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
