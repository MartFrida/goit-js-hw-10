import { breedSelect, btnFetch, errorEl, loaderEl } from './refs.js';
import { getBreeds, fetchCatByBreed } from './cat-api.js';
import { renderMarkup, renderCat } from './markup.js';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';

export let items = [];
btnFetch.addEventListener('click', onRenderCat)
document.addEventListener("DOMContentLoaded", onRenderPage);
breedSelect.addEventListener('change', onSelectChange);
let breedsId = null;

function onSelectChange(ev) {
  breedsId = ev.target.value;
  btnFetch.classList.remove('is-hidden');
  errorEl.classList.add('is-hidden');
  catInfo.classList.add('is-hidden');
}

function onRenderPage() {
  loaderEl.classList.remove("is-hidden");
  getBreeds()
    .then((res) => {
      items = [...res];
      breedsId = res[0].id;
      renderMarkup(items);
      new SlimSelect({
        select: '#breedSelectElement'
      })
      breedSelect.classList.remove('is-hidden');
      btnFetch.classList.remove('is-hidden');
    })
    .catch(() => {
      console.log(errorEl);
      errorEl.classList.remove('is-hidden');
    })
    .finally(() => {
      loaderEl.classList.add('is-hidden');
    });
}

function onRenderCat() {
  fetchCatByBreed(breedsId)
    .then((res) => {
      renderCat(res);
    })
    .catch((err) => {
      console.log(errorEl);
      errorEl.classList.remove('is-hidden');
      btnFetch.classList.add('is-hidden');
    })
    .finally(() => loaderEl.classList.add('is-hidden'))
}
