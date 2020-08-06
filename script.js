$(document).ready(function(){
 });
function displayWeatherInfo() {

    var city = "London,uk"
    // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ec47932de753d8f1e0150dd93dbbd543";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    });

}
displayWeatherInfo()