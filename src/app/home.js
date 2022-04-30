import React, { useEffect, useState } from 'react';
import NavBar from './navigation/navigate';
import '../animations/fadeUp.css';
import '../animations/openNavHome.css'

const Greetings = () => {
  const opening = 'Welcome to Woska.net';
  const [letters, setLetter] = useState('');
  const [l, setL] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setL(l+1);
      setLetter(opening.substring(0, l));
    }, 100);
    return () => clearInterval(timer)
  });
  return (
    <div id="Open">
      <h1>{letters}</h1>
    </div>
  );
}

function Intro() {
  return (
    <div id='intro' className='fadeUp'>
      <h3>
        Greetings! You have arrived at my website.<br /><br />
      </h3>
      <h4>
        Here you will find some of my apps, notes,
        and other creations I have made over the years.<br />
        If you are interested in learning about me and what I
        do, feel free to click on the About Me tab at the top.<br />
        If you wish to contact me, click on Contact Me tab send me an email.
      </h4>
    </div>
  );
}

function Home() {
  return (
    <>
      <NavBar navTag={1}/><br />
      <Greetings /><br />
      <Intro />
    </>
  );
}

export default Home;
