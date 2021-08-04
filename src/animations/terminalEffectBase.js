// https://codepen.io/Tbgse/pen/dYaJyJ
// eslint-disable-next-line no-unused-vars
function consoleEffect2(id, txt, color) {
  // eslint-disable-next-line no-param-reassign
  if (color === undefined) color = '#fff';
  const console = document.getElementById('console');
  const elem = document.getElementById(id);
  let pause = false;
  let l = 1;
  let n = 1;
  let vis = true;
  elem.setAttribute('style', `color:${color}`);
  console.setAttribute('style', `color:${color}`);
  window.setInterval(() => {
    if (l === 0 && !pause) {
      pause = true;
      elem.innerHTML = txt.substring(0, l);
      window.setTimeout(() => {
        n = 1;
        l += n;
        pause = false;
      }, 1000);
    } else if (l === txt.length + 1 && !pause) {
      pause = true;
      window.setTimeout(() => {
        n = -1;
        l += n;
        pause = false;
      }, 1000);
    } else if (!pause) {
      elem.innerHTML = txt.substring(0, l);
      l += n;
    }
  }, 120);
  window.setInterval(() => {
    if (vis) {
      console.className = 'console-under hidden';
      vis = false;
    } else {
      console.className = 'console-under';
      vis = true;
    }
  }, 400);
}
