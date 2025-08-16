import processWeatherData from './process-data';
import updateUI from './ui';

export default function initSearchBar() {
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.querySelector('.search-btn');
  searchBtn.addEventListener('click', update);
  async function update() {
    const weatherData = await processWeatherData(searchInput.value);
    updateUI(weatherData);
  }
}
