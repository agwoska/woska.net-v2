import React from 'react';
// import { consoleEffect } from '../animations/termEffect';
import '../animations/examples/style.css'

function ConsoleEffectReact(props) {
  // eslint-disable-next-line no-param-reassign
  if (props.color === undefined) props.color = '#000';
  const elem = document.getElementById(props.id);
  let pause = false;
  let l = 1;
  let n = 1;
  // todo fix colors
  elem.setAttribute('style', `color:${props.color}`);

  setInterval(() => {
    if (l === 0 && !pause) {
      pause = true;
      elem.innerHTML = props.txt.substring(0, l);
      setTimeout(() => {
        n = 1;
        l += n;
        pause = false;
      }, 1000)
    } else if (l === props.txt.length+1 && !pause) {
      pause = true;
    } else if (!pause) {
      elem.innerHTML = props.txt.substring(0, l);
      l += n;
    }
  }, 120);
}

function App() {
  return (
    <div id="greet">
      <ConsoleEffectReact id="greet" txt="txt"  color="lightblue" />
    </div>
  );
}

export default App;
