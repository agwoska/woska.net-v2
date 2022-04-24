import React from 'react';
import NavBar from './navigation/navigate';


const Pubs = () => (
  <div id="my-pubs">
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
