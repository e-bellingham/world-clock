//New YORK

setInterval(function () {
  let nycElement = document.querySelector("#nyc");
  let nycDateElement = nycElement.querySelector(".date");
  let nycTimeElement = nycElement.querySelector(".time");
  let nycTime = moment().tz("America/New_York");

  nycDateElement.innerHTML = nycTime.format("LL");
  nycTimeElement.innerHTML = nycTime.format("h:m:s:SS [<small>]A[</small>]");
}, 1);
//Los Angeles
setInterval(function () {
  let laxElement = document.querySelector("#lax");
  let laxDateElement = laxElement.querySelector(".date");
  let laxTimeElement = laxElement.querySelector(".time");
  let laxTime = moment().tz("America/Los_Angeles");

  laxDateElement.innerHTML = laxTime.format("LL");
  laxTimeElement.innerHTML = laxTime.format("h:m:s:SS [<small>]A[</small>]");
}, 1);

//select a city
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" id="nyc">
          <div>
            <h2>${cityTimeZone}</h2>
            <div class="date">${cityTime.format("LL")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:m:s:SS"
          )}<small>${cityTime.format("A")}</small>"
          )}</div>
    </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
