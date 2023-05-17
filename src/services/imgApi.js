import { Notify } from 'notiflix';
export default async function fetchPhotos(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '34643580-ab3b9936868efea730eeb9b50';
  return await fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(res => res.json())
    .catch(() => {
      Notify.failure(`An error has occurred. Try again later`);
      return;
    });
}
