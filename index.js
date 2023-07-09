setInterval(function () {
  //New YORK
  let nycElement = document.querySelector("#nyc");
  let nycDateElement = nycElement.querySelector(".date");
  let nycTimeElement = nycElement.querySelector(".time");
  let nycTime = moment().tz("America/New_York");

  nycDateElement.innerHTML = nycTime.format("LL");
  nycTimeElement.innerHTML = nycTime.format("h:m:s:SS [<small>]A[</small>]");
}, 1);

setInterval(function () {
  //Los Angeles
  let laxElement = document.querySelector("#lax");
  let laxDateElement = laxElement.querySelector(".date");
  let laxTimeElement = laxElement.querySelector(".time");
  let laxTime = moment().tz("America/Los_Angeles");

  laxDateElement.innerHTML = laxTime.format("LL");
  laxTimeElement.innerHTML = laxTime.format("h:m:s:SS [<small>]A[</small>]");
}, 1);
