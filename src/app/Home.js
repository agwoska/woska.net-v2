import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../css/animations.css';

const Greetings = () => {
  const opening = 'Welcome to Woska.net';
  const [letters, setLetter] = useState('');
  const [l, setL] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setL(l + 1);
      setLetter(opening.substring(0, l));
    }, 100);
    return () => clearInterval(timer);
  });
  return (
    <Container>
      <h1>{letters}</h1>
    </Container>
  );
};

const Home = () => (
  <Container>
    <Greetings />
    <br />
    <div id="intro" className="fadeUp">
      <h3>
        Greetings! You have arrived at my website.
      </h3>
      <br />
      <h4>
        Here you will find some of my apps, notes,
        and other creations I have made over the years.
        <br />
        If you are interested in learning about me and what I
        do, feel free to click on the About Me tab at the top.
        <br />
        If you wish to contact me, click on Contact Me tab send me an email.
      </h4>
    </div>
  </Container>
);

export default Home;
