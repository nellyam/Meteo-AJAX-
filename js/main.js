document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#submit").addEventListener("click", search);
});

function search() {
  let url = "https://api.openweathermap.org/data/2.5/weather?";
   url += "q=" + document.querySelector("#ville").value.replace(/\s/g, "");
  url += "&appid=c21a75b667d6f7abb81f118dcf8d4611"
  url += "&temp="
  url += "&lang=fr"
  url += "&units=metric"
  url += "&ctn=3";

  fetch(url)
  .then(response => response.json())
  .then(data => {
    displayData(data);
    console.log(data);
    console.log(data.name);
  })
  .catch(error => console.log("There is an error"));
  
}


function displayData(data) {
  document.querySelector("article h2 strong").textContent = data.name;
  document.querySelector("article sup").innerHTML = data.sys.country;
  document.querySelector("article p strong").innerHTML = data.main.temp;
  document.querySelector("article img").src = data.weather[0].icon;
  document.querySelector("article small").innerHTML = data.weather[0].description;
  let paraph =  `<p>L'humidité est de ${data.main.humidity}</p>`
  document.querySelector("article").innerHTML += paraph;

  document.querySelector("article").classList.remove("hide");
}


/**
 * 

 */