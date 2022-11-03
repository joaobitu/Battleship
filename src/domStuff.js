const body = document.querySelector("body");
const mainContainer = document.querySelector("#main-container");
const searchBar = document.querySelector("#search-bar");
const searchButton = document.querySelector("#search-button");
const locationDisplay = document.querySelector("#location-display");
const temperatureDisplay = document.querySelector("#temperature-display");
const maxTempMinTempDisplay = document.querySelector(
  "#maxTemp-minTemp-display"
);
const cloudsDisplay = document.querySelector("#clouds-display");
const windSpeedDisplay = document.querySelector("#wind-speed-display");
const convertCelsiusButton = document.getElementById("convert-to-celsius");
const convertFarenheitButton = document.getElementById("convert-to-farenheit");
const rainDisplay = document.getElementById("rain-display");

const displayController = (() => {
  const render = async (weather, tempUnit) => {
    let tempNumber;
    let tempLetter;
    if (tempUnit == "celsius") {
      tempNumber = function (value) {
        return weather.toCelsius(value);
      };
      tempLetter = "C";
    } else {
      tempNumber = function (value) {
        return weather.toFarenheit(value);
      };
      tempLetter = "F";
    }
    rainDisplay.textContent = "Not raining, save your umbrella!";
    if (weather.rain == "true") {
      rainDisplay.textContent = "Raining, pack up your umbrella!";
      rainDisplay.textContent == "Rain";
    }

    locationDisplay.textContent = `${weather.city}, ${weather.country}`;
    temperatureDisplay.textContent = `${Math.round(
      tempNumber(weather.temp)
    )}°${tempLetter}`;
    maxTempMinTempDisplay.textContent = `Max/Minimum Temperatures: ${Math.round(
      tempNumber(weather.maxTemp)
    )}/${Math.round(tempNumber(weather.minTemp))}°${tempLetter}`;
    cloudsDisplay.textContent = `Clouds: ${weather.clouds}%`;
    windSpeedDisplay.textContent = `Wind Speed ${weather.windSpeed}m/s`;
  };

  const backgroundDisplay = (weather) => {
    if (weather.toCelsius(weather.temp) >= 30) {
      mainContainer.className = "red";
    } else if (
      weather.toCelsius(weather.temp) < 30 &&
      weather.toCelsius(weather.temp) >= 10
    ) {
      mainContainer.className = "azure";
    } else {
      mainContainer.className = "blue";
    }
  };

  return { render, backgroundDisplay };
})();

export {
  body,
  mainContainer,
  searchBar,
  searchButton,
  locationDisplay,
  temperatureDisplay,
  maxTempMinTempDisplay,
  cloudsDisplay,
  windSpeedDisplay,
  convertCelsiusButton,
  convertFarenheitButton,
  displayController,
};
