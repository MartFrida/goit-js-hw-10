import { breedSelect, btnFetch, errorEl, loaderEl } from './refs.js';
import { getBreeds, fetchCatByBreed } from './cat-api.js';
import { renderMarkup, renderCat } from './markup.js';
// import SlimSelect from 'slim-select';

// new SlimSelect({
//   select: '#breedSelectElement'
// })

export let items = [];
btnFetch.addEventListener('click', onRenderCat)
document.addEventListener("DOMContentLoaded", onRenderPage);
breedSelect.addEventListener('change', onSelectChange);
let breedsId = null;

function onSelectChange(ev) {
  breedsId = ev.target.value;
}

function onRenderPage() {
  loaderEl.classList.remove("is-hidden");
  getBreeds()
    .then((res) => {
      items = [...res];
      breedsId = res[0].id;
      renderMarkup(items);
      breedSelect.classList.remove('is-hidden');
    })
    .catch((err) => {
      console.log(errorEl);
      errorEl.classList.remove('is-hidden');
    })
    .finally(() => {
      loaderEl.classList.add("is-hidden");
    });
}


function onRenderCat() {
  fetchCatByBreed(breedsId)
    .then((res) => {
      renderCat(res)
    })
    .catch(console.log)
    .finally(() => loaderEl.classList.add('is-hidden'))

}
