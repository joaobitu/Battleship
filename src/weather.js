export class Weather {
  constructor(
    temp,
    timezone,
    clouds,
    maxTemp,
    minTemp,
    rain,
    city,
    country,
    windSpeed
  ) {
    this.temp = temp;
    this.timezone = timezone;
    this.clouds = clouds;
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.rain = rain;
    this.city = city;
    this.country = country;
    this.windSpeed = windSpeed;
  }
  toCelsius(temperature) {
    return temperature - 273;
  }
  toFarenheit(temperature) {
    return (temperature - 273) * (9 / 5) + 32;
  }
}

export async function searchWeather(search) {
  let geocoding = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=884419ad3c490c5344901c2eec064d2c`,
    { mode: "cors" }
  );
  let geocodingResponse = await geocoding.json();
  console.log(geocodingResponse);
  console.log(geocodingResponse[0].lat);
  console.log(geocodingResponse[0].lon);
  console.log(geocodingResponse[0].name);

  let weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${geocodingResponse[0].lat}&lon=${geocodingResponse[0].lon}&appid=884419ad3c490c5344901c2eec064d2c`,
    { mode: "cors" }
  );
  let weatherResponse = await weather.json();
  console.log(weatherResponse);
  console.log(weatherResponse.main.temp - 273);
  const weatherDetails = await new Weather(
    weatherResponse.main.temp,
    weatherResponse.timezone,
    weatherResponse.clouds.all,
    weatherResponse.main.temp_max,
    weatherResponse.main.temp_min,
    weatherResponse.hasOwnProperty("rain"),
    geocodingResponse[0].name,
    weatherResponse.sys.country,
    weatherResponse.wind.speed
  );
  return weatherDetails;
}
