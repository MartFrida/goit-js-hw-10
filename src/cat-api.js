const BASE_URL = "https://api.thecatapi.com/v1/";
// const searchParams = new URLSearchParams({
//   limit: 5,
// })


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
  return fetch(`${BASE_URL}images/search?breed_ids=${breedIds}`).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}