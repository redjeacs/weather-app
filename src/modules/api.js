async function getWeather(location = 'taipei') {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=S42ML6KEE7U4VLHH5W3BZLWHN`,
    );
    if (!response.ok) {
      throw new Error('Location not found');
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

export { getWeather };
