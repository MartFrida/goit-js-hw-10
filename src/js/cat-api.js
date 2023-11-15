const BASE_URL = "https://api.thecatapi.com/v1/";
const API_KEY= "live_gH6oeA8gIQy7k5AJMlE4mvn22i6yTQ8VIcgVQ9P7RurTz96AYtTfK0IWgF8YCmUg";

// get
export function getBreeds() {
  return fetch(`${BASE_URL}breeds`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json()
  })
}

// get
export function fetchCatByBreed(breedIds) {
  return fetch(`${BASE_URL}images/search?breed_ids=${breedIds}&api_key=${API_KEY}`).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}