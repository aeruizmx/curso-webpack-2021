import Template from '@templates/Template.js';
import '@styles/main.css';
import '@styles/vars.styl';

(async function App() {
  const randomId = Math.floor(Math.random() * 900);
  const main = null || document.getElementById('main');
  main.innerHTML = await Template(randomId);
})();
