import { getPokeData, getNameData } from '@utils/getData.js';
import github from '@images/github.png'
import twitter from '@images/twitter.png'
import instagram from '@images/instagram.png'

const POKE_NAMES_URL = process.env.POKE_NAMES_URL;

const Template = async (randomId) => {
  const pokeData = await getPokeData(randomId);
  const userData = await getNameData();
  const src = `${POKE_NAMES_URL}${pokeData.id}.png`;

  const view = `
    <div class="About">
      <div class="card">
        <div class="card_details">
          <div class="card_photo center circle">
            <img src="${src}" alt="${pokeData.name}">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;"
              xml:space="preserve">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>
          <p class="card_title">Hi, My name is</p>
          <p class="card_value">${pokeData.name} ${userData.name.last}</p>
        </div>
        <div class="card_userdata">
          <ul>
            <li>${pokeData.name}_${userData.name.last}@pokemon.com</li>
            <li>pokemon.com</li>
          </ul>
        </div>
        <div class="card_social">
          <a href="https://twitter.com/${pokeData.name}">
            <img src="${twitter}" />
          </a>
          <a href="https://github.com/${pokeData.name}">
            <img src="${github}" />
          </a>
          <a href="https://instagram.com/${pokeData.name}">
            <img src="${instagram}" />
          </a>
        </div>
      </div>
    </div>
  `;
  return view;
};

export default Template;