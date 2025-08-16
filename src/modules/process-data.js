import { getWeather } from './api';

export default async function processWeatherData(location = 'Taipei') {
  const weatherData = await getWeather(location);
  if (!weatherData || !weatherData.days || weatherData.days.length === 0) {
    console.log('No weather data available');
    return null;
  }
  const today = weatherData.days[0];
  const day2 = weatherData.days[1];
  const day3 = weatherData.days[2];
  const day4 = weatherData.days[3];
  const day5 = weatherData.days[4];
  const day6 = weatherData.days[5];

  const filteredData = {
    location: weatherData.address,
    date: today.datetime,
    icon: today.icon,
    temp: Math.round((today.temp - 32) * (5 / 9)),
    mintemp: Math.round((today.tempmin - 32) * (5 / 9)),
    maxtemp: Math.round((today.tempmax - 32) * (5 / 9)),
    description: today.description,
    feelslike: Math.round((today.feelslike - 32) * (5 / 9)),
    humidity: today.humidity,
    rainprob: today.precipprob,
    windspeed: today.windspeed,
    uvindex: today.uvindex,
    day2date: day2.datetime,
    day2icon: day2.icon,
    day2condition: day2.conditions,
    day2temp: Math.round((day2.temp - 32) * (5 / 9)),
    day2mintemp: Math.round((day2.tempmin - 32) * (5 / 9)),
    day2maxtemp: Math.round((day2.tempmax - 32) * (5 / 9)),
    day3date: day3.datetime,
    day3icon: day3.icon,
    day3condition: day3.conditions,
    day3temp: Math.round((day3.temp - 32) * (5 / 9)),
    day3mintemp: Math.round((day3.tempmin - 32) * (5 / 9)),
    day3maxtemp: Math.round((day3.tempmax - 32) * (5 / 9)),
    day4date: day4.datetime,
    day4icon: day4.icon,
    day4condition: day4.conditions,
    day4temp: Math.round((day4.temp - 32) * (5 / 9)),
    day4mintemp: Math.round((day4.tempmin - 32) * (5 / 9)),
    day4maxtemp: Math.round((day4.tempmax - 32) * (5 / 9)),
    day5date: day5.datetime,
    day5icon: day5.icon,
    day5condition: day5.conditions,
    day5temp: Math.round((day5.temp - 32) * (5 / 9)),
    day5mintemp: Math.round((day5.tempmin - 32) * (5 / 9)),
    day5maxtemp: Math.round((day5.tempmax - 32) * (5 / 9)),
    day6date: day6.datetime,
    day6icon: day6.icon,
    day6condition: day6.conditions,
    day6temp: Math.round((day6.temp - 32) * (5 / 9)),
    day6mintemp: Math.round((day6.tempmin - 32) * (5 / 9)),
    day6maxtemp: Math.round((day6.tempmax - 32) * (5 / 9)),
  };
  return filteredData;
}
