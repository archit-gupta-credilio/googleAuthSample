const http = require('http');
const fs = require('fs');
var requests = require("requests");

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.sys.country);
    temperature = temperature.replace("{%country%}", orgVal.weather[0].main);
    temperature = temperature.replace("{%tempstatus%}", orgVal.main);
    return temperature;
} 

const homeFile = fs.readFileSync("home.html","utf-8");

const server = http.createServer((req, res) => {
    if(req.url = '/'){
    
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=be6e6daac6b044273c1a9dfdea62fe46", )
    .on('data', function (chunk) {
        const objdata = JSON.parse(chunk);
        const arrayData = [objdata];
    //console.log(arrayData[0].main.temp)
        const realTimeData = arrayData
        .map((val) => replaceVal(homeFile, val))
        .join();
           res.write(realTimeData);     
    })
    .on('end', function (err) {
    if (err) return console.log('connection closed due to errors', err);
    res.end();
    });

    }
})

server.listen(8000, "127.0.0.1");