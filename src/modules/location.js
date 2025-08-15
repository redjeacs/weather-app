import { getWeather } from './api';

export default function initSearchBar() {
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.querySelector('.search-btn');
  searchBtn.addEventListener('click', (e) => {
    getWeather(searchInput.value);
  });
}
