$(document).ready(function(){
 });
function displayWeatherInfo() {

    var city = "London,uk"
   // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=7758a0a2e7e596b9ee3eb0ba1a3e2444";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=7758a0a2e7e596b9ee3eb0ba1a3e2444";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        console.log(response.name + ",")
    });

}
displayWeatherInfo()