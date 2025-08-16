import './styles.css';
import initSearchBar from './modules/location';
import processWeatherData from './modules/process-data';
import updateUI from './modules/ui';

document.addEventListener('DOMContentLoaded', initSearchBar);
document.addEventListener('DOMContentLoaded', async () => {
  const initialWeatherData = await processWeatherData();
  if (initialWeatherData) {
    updateUI(initialWeatherData);
  } else {
    console.error('Failed to fetch initial weather data');
  }
});
