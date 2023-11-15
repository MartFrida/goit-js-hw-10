import { breedSelect, btnFetch, errorEl, loaderEl } from './refs.js';
import { getBreeds, fetchCatByBreed } from './cat-api.js';
import { renderMarkup, renderCat } from './markup.js';

export let items = [];
let idCat = breedSelect.value;
console.log(idCat)
btnFetch.addEventListener('click', onRenderCat)
document.addEventListener("DOMContentLoaded", onRenderPage);
breedSelect.addEventListener('change', onSelectChange);
let breedsId=null;

function onSelectChange(ev) {
  breedsId = ev.target.value;
}

function onRenderPage() {
  loaderEl.classList.remove("is-hidden");
  getBreeds()
    .then((res) => {
      items = [...res];
      console.log(items);
      renderMarkup(items);
    })
    .catch(console.log)
    .finally(() => {
      loaderEl.classList.add("is-hidden");
    });
}


function onRenderCat() {
  console.log(breedsId)
  // loaderEl.classList.remove("is-hidden");
  fetchCatByBreed(breedsId)
    .then((res) => {
      renderCat(res)
    })
    .catch(console.log)
    .finally(() => loaderEl.classList.add('is-hidden'))
  
}
