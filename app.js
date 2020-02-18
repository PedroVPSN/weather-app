//hide the key
const request = require("request");
const {promisify} = require("util");

// const APPID = 'd161df6d1d99e9154b62c2d54cd9bae8'; //https://home.openweathermap.org/
require("dotenv").config() ////https://www.npmjs.com/package/request
const promisifiedRequest = promisify(request);

const getWeather = async () =>{
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`,
        json: true
    });
    console.log(data.body);
}

getWeather()