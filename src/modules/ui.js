import processWeatherData from './process-data';

export default async function updateUI(weatherData) {
  const weatherToday = document.querySelector('.weather-today');
  const location = document.querySelector('.location');
  const currentDate = document.querySelector('.current-date');
  const temp = document.querySelector('.temperature');
  const minMaxTemp = document.querySelector('.min-max-temp');
  const descriptions = document.querySelector('.descriptions');
  const feelsLike = document.querySelector('.feels-like');
  const humidity = document.querySelector('.humidity');
  const rainProb = document.querySelector('.rain-prob');
  const windSpeed = document.querySelector('.wind-speed');
  const uvIndex = document.querySelector('.uv-index');
  const day2 = document.querySelector('.day-2');
  const day2Weekday = day2.querySelector('.weekday');
  const day2Icon = day2.querySelector('.icon');
  const day2Condition = day2.querySelector('.condition');
  const day2TempRange = day2.querySelector('.temp-range');
  const day2RangeInput = day2.querySelector('#range-input');
  const day3 = document.querySelector('.day-3');
  const day3Weekday = day3.querySelector('.weekday');
  const day3Icon = day3.querySelector('.icon');
  const day3Condition = day3.querySelector('.condition');
  const day3TempRange = day3.querySelector('.temp-range');
  const day3RangeInput = day3.querySelector('#range-input');
  const day4 = document.querySelector('.day-4');
  const day4Weekday = day4.querySelector('.weekday');
  const day4Icon = day4.querySelector('.icon');
  const day4Condition = day4.querySelector('.condition');
  const day4TempRange = day4.querySelector('.temp-range');
  const day4RangeInput = day4.querySelector('#range-input');
  const day5 = document.querySelector('.day-5');
  const day5Weekday = day5.querySelector('.weekday');
  const day5Icon = day5.querySelector('.icon');
  const day5Condition = day5.querySelector('.condition');
  const day5TempRange = day5.querySelector('.temp-range');
  const day5RangeInput = day5.querySelector('#range-input');
  const day6 = document.querySelector('.day-6');
  const day6Weekday = day6.querySelector('.weekday');
  const day6Icon = day6.querySelector('.icon');
  const day6Condition = day6.querySelector('.condition');
  const day6TempRange = day6.querySelector('.temp-range');
  const day6RangeInput = day6.querySelector('#range-input');
  const weekdayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const todayDay = new Date(weatherData.date).getDay();

  clearUI();
  weatherToday.backgroundImage = `url(https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${weatherData.icon}.png)`;
  location.textContent = weatherData.location;
  currentDate.textContent = weatherData.date;
  temp.textContent = `${weatherData.temp}°C`;
  minMaxTemp.textContent = `Min: ${weatherData.mintemp}°C, Max: ${weatherData.maxtemp}°C`;
  descriptions.textContent = weatherData.description;
  feelsLike.textContent = `Feels like: ${weatherData.feelslike}°C`;
  humidity.textContent = `Humidity: ${weatherData.humidity}%`;
  rainProb.textContent = `Rain Probability: ${weatherData.rainprob}%`;
  windSpeed.textContent = `Wind Speed: ${weatherData.windspeed} km/h`;
  uvIndex.textContent = `UV Index: ${weatherData.uvindex}`;

  day2Weekday.textContent = weekdayNames[(todayDay + 1) % 7];
  day2Icon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${weatherData.day2icon}.png`;
  day2Condition.textContent = weatherData.day2condition;
  day2TempRange.textContent = `${weatherData.day2mintemp}°C - ${weatherData.day2maxtemp}°C`;
  day2RangeInput.value = weatherData.day2temp;

  day3Weekday.textContent = weekdayNames[(todayDay + 2) % 7];
  day3Icon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${weatherData.day3icon}.png`;
  day3Condition.textContent = weatherData.day3condition;
  day3TempRange.textContent = `${weatherData.day3mintemp}°C - ${weatherData.day3maxtemp}°C`;
  day3RangeInput.value = weatherData.day3temp;

  day4Weekday.textContent = weekdayNames[(todayDay + 3) % 7];
  day4Icon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${weatherData.day4icon}.png`;
  day4Condition.textContent = weatherData.day4condition;
  day4TempRange.textContent = `${weatherData.day4mintemp}°C - ${weatherData.day4maxtemp}°C`;
  day4RangeInput.value = weatherData.day4temp;

  day5Weekday.textContent = weekdayNames[(todayDay + 4) % 7];
  day5Icon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${weatherData.day5icon}.png`;
  day5Condition.textContent = weatherData.day5condition;
  day5TempRange.textContent = `${weatherData.day5mintemp}°C - ${weatherData.day5maxtemp}°C`;
  day5RangeInput.value = weatherData.day5temp;

  day6Weekday.textContent = weekdayNames[(todayDay + 5) % 7];
  day6Icon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${weatherData.day6icon}.png`;
  day6Condition.textContent = weatherData.day6condition;
  day6TempRange.textContent = `${weatherData.day6mintemp}°C - ${weatherData.day6maxtemp}°C`;
  day6RangeInput.value = weatherData.day6temp;

  function clearUI() {
    currentDate.textContent = '';
    temp.textContent = '';
    minMaxTemp.textContent = '';
    descriptions.textContent = '';
    feelsLike.textContent = '';
    humidity.textContent = '';
    rainProb.textContent = '';
    windSpeed.textContent = '';
    uvIndex.textContent = '';

    day2Weekday.textContent = '';
    day2Icon.src = '';
    day2Condition.textContent = '';
    day2TempRange.textContent = '';
    day2RangeInput.value = '';

    day3Weekday.textContent = '';
    day3Icon.src = '';
    day3Condition.textContent = '';
    day3TempRange.textContent = '';
    day3RangeInput.value = '';

    day4Weekday.textContent = '';
    day4Icon.src = '';
    day4Condition.textContent = '';
    day4TempRange.textContent = '';
    day4RangeInput.value = '';

    day5Weekday.textContent = '';
    day5Icon.src = '';
    day5Condition.textContent = '';
    day5TempRange.textContent = '';
    day5RangeInput.value = '';

    day6Weekday.textContent = '';
    day6Icon.src = '';
    day6Condition.textContent = '';
    day6TempRange.textContent = '';
    day6RangeInput.value = '';
  }
}
