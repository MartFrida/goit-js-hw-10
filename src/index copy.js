  import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_gH6oeA8gIQy7k5AJMlE4mvn22i6yTQ8VIcgVQ9P7RurTz96AYtTfK0IWgF8YCmUg";

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const END_POINT = '';
const searchParams = new URLSearchParams({
  _limit: 5,
})
const selectField = document.querySelector('select.breed-select');

export function fetchBreeds() {
  return fetch(`${BASE_URL}${END_POINT}?${searchParams}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json()
  })
}
fetchBreeds()
  .then(response => console.log(response.map(el => el.id)))
  .catch(console.log);
