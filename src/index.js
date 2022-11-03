import "./style.css";
import {
  displayController,
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
} from "./domStuff";
import { Weather, searchWeather } from "./weather";
/* 
    i need to make a weather app... the trick here seems simple, I use a search and a button that makes the search, the search will call the geocoding api... I use this to store the geocoding.lat and geocdoing.lon and pass that as the fetch for calling current weathe data


*/

// weather searching function, it simply grabs the input value of the search, finds the latitude and longitude of the place and fetches for weather data with those inputs
//afterwards it instanciates an object with the weather properties

//body.addEventListener("load", () => {
export const DefaultWeather = new Weather(
  "298.48",
  "7200",
  "100",
  "300",
  "297",
  true,
  "Fortaleza",
  "BR",
  "5"
);
displayController.render(DefaultWeather, "celsius");
displayController.backgroundDisplay(DefaultWeather);
//});

let lastSearched;
async function renderSearch(searched, tempUnit) {
  const weatherObject = await searchWeather(searched);
  lastSearched = await searched;
  return await displayController.render(weatherObject, tempUnit);
}
async function renderBackground() {
  const weatherObject = await searchWeather(searchBar.value);
  return displayController.backgroundDisplay(weatherObject);
}

searchButton.addEventListener("click", () => {
  renderSearch(searchBar.value, "celsius");
  renderBackground();
  searchBar.value = "";
});

window.addEventListener("submit", (e) => {
  e.preventDefault();
});

convertCelsiusButton.addEventListener("click", () => {
  renderSearch(lastSearched, "celsius");
});

convertFarenheitButton.addEventListener("click", () => {
  renderSearch(lastSearched, "farenheit");
});
