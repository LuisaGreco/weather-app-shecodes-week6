let now = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

let hour = now.getHours();
let minutes = now.getMinutes();

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${day} ${hour}:${minutes}`;



let cityButton = document.querySelector("#city-button");
let city = document.querySelector("#city-form");
let currentCity = document.querySelector("#current-city");

function changeCity(event) {
  event.preventDefault();
  currentCity.innerHTML = city.value;
  let apiKey = "b8a1f8cba14c698e101692e6302ff32f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemp);
}

cityButton.addEventListener("click", changeCity);


function showTemp(response){
  
  let temp = response.data.main.temp; 
  let grades = document.querySelector("#city-grades");
  grades.innerHTML = Math.round(temp);
  
}


function gradesFahr(event) {
  event.preventDefault();

  let grades = document.querySelector("#city-grades");
  grades.innerHTML =  15 * 9 / 5 + 32;
}

let fahr = document.querySelector("#fahrenheit");
fahr.addEventListener("click", gradesFahr);

function gradesCelsius(event) {
  event.preventDefault();

  let grades = document.querySelector("#city-grades");
  grades.innerHTML =  15;
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", gradesCelsius);


