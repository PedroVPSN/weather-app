const request = require("request"); // Global modulo

require("dotenv").config() ////https://www.npmjs.com/package/request

const getWeather = () => {
    request({ //https://www.npmjs.com/package/request
        uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`,
        json: true
        // json format it true, raw data if false
    }, (err, res) => {
        if (err) throw err;
        // comment what the error message...
        //common fixes: I need to install this..
        console.log(res.body)
    })
}

getWeather();