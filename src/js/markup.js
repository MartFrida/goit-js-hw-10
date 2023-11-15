import { items } from "./index.js";
import { breedSelect, catInfo, errorEl } from './refs.js';

//for selector
export function renderMarkup(data) {
  const markup = data.map((catsId) => createCatsID(catsId)).join("");
  breedSelect.innerHTML = markup;

  items.length === 0
    ? errorEl.classList.remove("is-hidden")
    : errorEl.classList.add("is-hidden");
}

export function createCatsID(cat) {
  const { id, name } = cat;
  return `
  <option value=${id}>${name}</option>
  `
}

//for card
export function renderCat(data) {
  const mrup = data.map((cat) => createCatCard(cat)).join('');
  catInfo.innerHTML = mrup;
}

export function createCatCard(cat) {
  console.log(cat.breeds[0])
  const { url } = cat;
  const { name, description, temperament } = cat.breeds[0];
  return `
  <div class="cat-card">
    <div class=container-img>
      <img src="${url}" alt="${name}" />
    </div>
    <div class="info">
      <h2 class="name">${name}</h2>
      <b class="description">Description: ${description}</b>
      <b class="description">Temperament: ${temperament}</b>
    </div>
  </div>
  `;
}
