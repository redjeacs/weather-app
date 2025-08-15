import './styles.css';
import { getWeather } from './modules/api';
import initSearchBar from './modules/location';

document.addEventListener('DOMContentLoaded', initSearchBar);
getWeather();
