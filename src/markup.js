import { items } from "./index.js";
import { breedSelect, btnFetch, catInfo, posts, errorEl } from './refs.js';

//for selector
export function renderMarkup(data) {
  const markup = data.map((catsId) => createCatsID(catsId)).join("");
  breedSelect.innerHTML = markup;

  items.length === 0
    ? errorEl.classList.remove("is-hidden")
    : errorEl.classList.add("is-hidden");
}

export function createCatsID(cat) {
  const { id } = cat;
  return `
  <option value=${id}>${id}</option>
  `
}

//for card
export function renderCat(data) {
  const mrup = data.map((cat) => createCatCard(cat)).join('');
  catInfo.innerHTML = mrup;
}

export function createCatCard(cat,name) {
  const { url, id } = cat;
  return `
  <div class="cat-card">
     <img src="${url}" alt="${id}" />
     <div class="info">
       <b class="description">${id}</b>
     </div>
  </div>
  `;
}
