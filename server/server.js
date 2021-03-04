const path = require("path");
const fs = require("fs");
const request = require("request");

let dataPath = path.join(__dirname, "../data.json");

request("http://reddit.com/r/popular.json", function (error, response, body) {
    if(error) {
        console.log(error);
    }

    JSON.parse(body).data.children.forEach(item => {
        fs.appendFileSync(dataPath, item.data.title + "\n");
    });
});






