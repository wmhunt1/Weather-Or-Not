$(document).ready(function () {
});
function displayWeatherInfo() {

    var city = "London,uk"
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=7758a0a2e7e596b9ee3eb0ba1a3e2444";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        console.log(response.city.name + ", " + response.city.country)
        for (var i = 0; i < 5; i++) {
            console.log("Day" + (i + 1))
            console.log("Weather: " + response.list[i].weather[0].main)
            console.log((response.list[i].main.temp) + " Kelvin")
            console.log((response.list[i].main.humidity) + "% humidity")
            console.log((response.list[i].wind.speed) + " kmh wind speed")
            // console.log(response.city.coord.lat + "," + response.city.coord.lon)
        }
    });
    // var lat = response.city.coord.lat;
    // var lon = response.city.coord.lon;
    // var queryUVI = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=7758a0a2e7e596b9ee3eb0ba1a3e2444";
    // $.ajax({
    //     url: queryUVI,
    //     method: "GET"
    // }).then(function (UVI) {
    //     console.log(UVI)
    //     for (var i = 0; i < 5; i++) {
    //     console.log(UVI[i].value + " UVI")
    //     }
    // });
}
displayWeatherInfo()