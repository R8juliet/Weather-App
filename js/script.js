$.getJSON("http://ip-api.com/json", function(json) {
    $("#location").html(json.city + ', ' + json.region);
    var url = "http://api.openweathermap.org/data/2.5/weather?";
    var apiKey = "&APPID=79840cd617dc8eb0d86af84bbd45c182";
    var location = "lat=" + json.lat + "&" + "lon=" + json.lon;
    var units = "&units=imperial";

    $.getJSON(url + location + units + apiKey, function(json) {
        var temp = Math.floor(json.main.temp);
        var d = json.weather[0].main;
        $("#conditions1").html(d);
        $("#temp").html(temp + " °F");
        $("#cel").on("click", function() {
            $("#temp").html(Math.floor((temp - 32) * 0.5556) + " °C");
        });
        $("#fah").on("click", function() {
            $("#temp").html(temp + " °F");
        });
        if (d === "Thunderstorm") {
            $("#conditions").replaceWith("<div class='icon thunder-storm'><div class='cloud'></div><div class='lightning'><div class='bolt'></div><div class='bolt'></div></div></div>");
        } else if (d === "Rain" || d === "Drizzle" || d === "Extreme") {
            $("#conditions").replaceWith("<div class='icon'><div class='cloud'></div><div class='rain'></div></div>");
        } else if (d === "Snow") {
            $("#conditions").replaceWith("<div class='icon flurries'><div class='cloud'></div><div class='snow'><div class='flake'></div><div class='flake'></div></div></div>");
        } else if (d === "Clouds" || d === "Atmosphere") {
            $("#conditions").replaceWith("<div class='icon cloudy'><div class='cloud'></div><div class='cloud'></div></div>");
        } else if (d === "Clear") {
            $("#conditions").replaceWith("<div class='icon sunny'><div class='sun'><div class='rays'></div></div></div>");
        }
    });
});
