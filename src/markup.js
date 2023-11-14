import { items } from "./index.js";
import { breedSelect, btnFetch, catInfo, posts, errorEl } from './refs.js';

export function renderMarkup(data) {
  const markup = data.map((cat) => createCatsID(cat)).join("");
  breedSelect.innerHTML = markup;
  // як додати елемент в селект

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

export function createCatCard(id){
  
}

