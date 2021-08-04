// eslint-disable-next-line no-unused-vars
function consoleEffect(id, txt, color) {
  // eslint-disable-next-line no-param-reassign
  if (color === undefined) color = '#fff';
  const elem = document.getElementById(id);
  let pause = false;
  let l = 1;
  let n = 1;
  elem.setAttribute('style', `color:${color}`);
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
    } else if (!pause) {
      elem.innerHTML = txt.substring(0, l);
      l += n;
    }
  }, 120);
}