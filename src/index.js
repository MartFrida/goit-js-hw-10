import { breedSelect, btnFetch, catInfo, posts, errorEl, loaderEl } from './refs.js';
import { getBreeds, fetchCatByBreed } from './cat-api';
import { renderMarkup, renderCat } from './markup';

// axios.defaults.headers.common["x-api-key"] = "live_gH6oeA8gIQy7k5AJMlE4mvn22i6yTQ8VIcgVQ9P7RurTz96AYtTfK0IWgF8YCmUg";

export let items = [];
let idCat = breedSelect.value;

btnFetch.addEventListener('click', onRenderCat)
document.addEventListener("DOMContentLoaded", onRenderPage);

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

//змінити респонс
function onRenderCat() {
  loaderEl.classList.remove("is-hidden");
  fetchCatByBreed(idCat)
    .then((res) => {
      console.log(res)
      renderCat(res)
    })
    .catch(console.log)
    .finally(() => loaderEl.classList.add('is-hidden'))
}
