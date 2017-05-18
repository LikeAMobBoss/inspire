function WeatherController() {
   
	  var weatherService = new WeatherService();
    this.getWeather = function () {
        weatherService.getWeather(draw, failed)
    }
    //What can you do with this weather object?
    function draw(weather) {
        var elem = document.getElementById('weather')
        var template = ''
        var weaC = weather.main.temp - 273.15
        var weaF = weather.main.temp * 9 / 5 - 459.67
        var weaFNow = Math.round(weaF)
        var maxWeaF = weather.main.temp_max * 9 / 5 - 459.67
        template += `
            
                    <h2>${weaFNow}${weather.name}</h2>
        `
        elem.innerHTML = template
    }
    function failed() {
        var elem = document.getElementById('weather')
        elem.innerHTML = "SORRY YOUR REQUEST FAILED"
    } this.getWeather()
}