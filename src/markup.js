import { items } from "./index.js";
import { btnFetch, catInfo, posts, errorEl } from './refs.js';

export function renderMarkup(data) {
  const markup = data.map((cat) => createCatCard(cat)).join("");
  catInfo.innerHTML = markup;

  items.length === 0
    ? errorEl.classList.remove("is-hidden")
    : errorEl.classList.add("is-hidden");
}

export function createCatCard(cat) {
  const { id, name, url } = cat;
  return `
  <div class="cat-card">
  <img
            src="${url}"
            alt="${id}"
          />
          <div class="info">
          <p class="cat-info">${id}</p>
          <p class="cat-info">${name}</p>
          </div>
  </div>
  `

}


