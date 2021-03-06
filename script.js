$(document).ready(function () {
});
function displayWeatherInfo() {

    var city = $("#city-input").val();
    // This line grabs the input from the textbox
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=7758a0a2e7e596b9ee3eb0ba1a3e2444";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        console.log(response.city.name + ", " + response.city.country)
        var forecastDiv = document.createElement('div');
        //var forecastDiv = $("<div class='forecast'>");
        //to create div and add city
        //document.body.append(forecastDiv);
        var cityName = $("<p>").text(response.city.name + ", " + response.city.country);
        // console.log(cityName)
        forecastDiv.append(cityName);
        for (var i = 0; i < 5; i++) {
            //to create the 5 days
            var day = $("<p>").text("Day " + (i + 1));
            forecastDiv.append(day);
            console.log("Day " + (i + 1))
            console.log("Weather: " + response.list[i].weather[0].main)
            var weather = $("<p>").text("Weather: " + response.list[i].weather[0].main);
            forecastDiv.append(weather);
            console.log("Description: " + response.list[i].weather[0].description)
            var weatherDesc = $("<p>").text("Details: " + response.list[i].weather[0].description);
            forecastDiv.append(weatherDesc);
            //to link icon
            if (response.list[i].weather[0].description === "clear sky") {
                console.log("http://openweathermap.org/img/wn/01d@2x.png")
            }
            else if (response.list[i].weather[0].description === "few clouds") {
                console.log("http://openweathermap.org/img/wn/02d@2x.png")
            }
            else if (response.list[i].weather[0].description === "scattered clouds") {
                console.log("http://openweathermap.org/img/wn/03d@2x.png")
            }
            else if (response.list[i].weather[0].description === "broken clouds") {
                console.log("http://openweathermap.org/img/wn/04d@2x.png")
            }
            else if (response.list[i].weather[0].description === "shower rain") {
                console.log("http://openweathermap.org/img/wn/09d@2x.png")
            }
            else if (response.list[i].weather[0].description === "rain") {
                console.log("http://openweathermap.org/img/wn/10d@2x.png")
            }
            else if (response.list[i].weather[0].description === "thunderstorm") {
                console.log("http://openweathermap.org/img/wn/11d@2x.png")
            }
            else if (response.list[i].weather[0].description === "snow") {
                console.log("http://openweathermap.org/img/wn/13d@2x.png")
            }
            else if (response.list[i].weather[0].description === "mist") {
                console.log("http://openweathermap.org/img/wn/50d@2x.png")
            }
            else {
                //
            }
            console.log((response.list[i].main.temp) + " Kelvin")
            console.log((response.list[i].main.humidity) + "% humidity")
            console.log((response.list[i].wind.speed) + " kmh wind speed")
            // console.log(response.city.coord.lat + "," + response.city.coord.lon)
        }
        document.body.append(forecastDiv);
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