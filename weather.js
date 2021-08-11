 "use strict"

const url = "http://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=e8815cddc18ba9d1804dfa7fa9211486"

$.ajax ({
    url: url,
    success: function (result){
        console.log(result);
        console.log(result.name);

        $("#location").text(result.name);

        let C= Math.round(result.main.temp-273.15);
        let celcius = C.toString();

        let W = Math.round(result.wind.speed*3.6);
        let wind =W.toString();

        let wd= Math.round(result.wind.deg);


        $("#sky").text(result.weather[0].description);

        $("#dir").text(wd);

        $("#wind").text(wind);

        $("#temp").text(celcius);
    }
})