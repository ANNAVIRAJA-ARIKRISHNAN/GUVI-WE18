let index = 0;
let container = createElement("div", "container bg-dark", "");

fetch("https://restcountries.eu/rest/v2/all")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => createCountries(data))
  .catch((exp) => console.log(exp));

function createCountries(response) {
  //   response.forEach((r) => console.log(r));
  let countriesArray = [];
  for (let i = 0; i < response.length; i++) {
    countriesArray.push(createCountry(response[i]));
  }

  let row = createElement("div", "row mt-3", "");
  let rows = [];
  for (let i = 0; i < countriesArray.length; i++) {
    row.appendChild(countriesArray[i]);
    if ((i + 1) % 3 === 0 && i != 0) {
      rows.push(row);
    }
  }
  for (let i = 0; i < rows.length; i++) {
    container.appendChild(rows[i]);
  }
  //createModal();
  document.body.append(container);
}

function createCountry(country) {
  let col = createElement(
    "div",
    "card text-center col-4 col-lg-4 col-md-4 col-sm-6 cardbg text-white",
    ""
  );
  let h3 = createElement("h3", "card-header mt-3 bg-dark", country.name);
  let body = createElement("div", "card-body", "");
  let img = createElement("img", "card-img-top", "");
  img.src = country.flag;
  let capital = createElement(
    "div",
    "card-text p-2",
    "Capital : " + country.capital
  );
  let region = createElement(
    "div",
    "card-text p-2",
    "Region : " + country.region
  );
  let countryCode = createElement(
    "div",
    "card-text p-2",
    "Country Code : " + country.alpha3Code
  );
  let button = createElement(
    "button",
    "btn btn-primary bg-transparent border-white mb-4",
    "Click for Weather"
  );

  let lat = country.latlng[0];
  let lng = country.latlng[1];
  button.setAttribute("onclick", "getWeather(" + lat + "," + lng + ")");
  button.setAttribute("data-toggle", "modal");
  button.setAttribute("data-target", "#myModal");
  body.append(img, capital, region, countryCode);
  col.append(h3, body, button);
  return col;
}

function createElement(tagName, classList, innerText) {
  let element = document.createElement(tagName);
  element.setAttribute("class", classList);
  element.innerText = innerText;
  return element;
}

function getWeather(lat, lng) {
  let weatherApi = "021bd6ce2776492701e9e4b912eb7d58";
  let url = constructUri(lat, lng, weatherApi);

  fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      alert(data.weather[0].description);
    })
    .catch((exp) => console.log(exp));
}

function constructUri(lat, lng, key) {
  return "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
    .replace("{lat}", lat)
    .replace("{lon}", lng)
    .replace("{API key}", key);
}

function createModal() {
  let model = createElement("div", "modal fade", "");
  model.setAttribute("id", "myModal");
  model.setAttribute("role", "dialog");
  let modelDiv = createElement("div", "modal-dialog modal-sm", "");
  let content = createElement("div", "modal-content", "");
  let header = createElement("div", "modal-header", "");
  let closeMark = createElement("button", "close", "");
  closeMark.setAttribute("data-dismiss", "modal");
  closeMark.setAttribute("value", "&times;");
  let title = createElement("h4", "modal-title", "Title");
  let modelBody = createElement("div", "modal-body", "");
  let modelFooter = createElement("div", "modal-footer", "");
  let closeButton = createElement("button", "btn btn-default", "");
  closeButton.setAttribute("data-dismiss", "modal");
  closeButton.setAttribute("value", "Close");

  header.append(closeMark, title);
  modelFooter.append(closeButton);
  content.append(header, modelBody, modelFooter);
  modelDiv.append(content);
  model.append(modelDiv);
  container.appendChild(model);
}
