function fetchData() {
  makeRequest("https://swapi.dev/api/planets/3/", "GET")
    .then((data) => createChildDiv(data))
    .then(([divElement, obj]) => {
      mainDiv.appendChild(divElement);
      console.log(obj);
      return parsePlanet(obj);
    })
    .then((planetData) => {
      const entries = Object.entries(planetData);
      return entries.reduce((promise, [attr, value]) => {
        return promise.then(() => addDataToElem(mainDiv, attr, value));
      }, Promise.resolve());
    })
    .catch((err) => console.error(err));
}

function makeRequest(url, method) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (request.readyState !== 4) return;

      if (request.status >= 200 && request.status < 300) {
        resolve(request.response);
      } else {
        reject({
          status: request.status,
          statusText: request.statusText,
        });
      }
    };

    request.open(method || "GET", url);
    request.send();
  });
}

function createChildDiv(response) {
  const div = document.createElement("div");
  return new Promise((resolve, reject) =>{
    resolve([div, response]);
  });
}

function addDataToElem(mainDiv, attr, value) {
  return new Promise((resolve) => {
    const data = document.createTextNode(`${attr}: ${value}`);
    const element = document.createElement("p");
    element.appendChild(data);
    mainDiv.appendChild(element);
    resolve(true);
  });
}

function parsePlanet(obj) {
  return JSON.parse(obj);
}
const mainDiv = document.querySelector("#test");
fetchData();
