let request = require("request");

let apiKey = "e2f21731f03acfc7586b77a2d277c310";
let input = [
  { zipcode: 94040, country_code: "us" },
  { zipcode: 221005, country_code: "in" }
];

for (let i = 0; i < input.length; i++) {
  let url = `http://api.openweathermap.org/data/2.5/weather?zip=${
    input[i].zipcode
  },${input[i].country_code}&appid=${apiKey}`;
  // console.log(url);
  request(url, function(err, response, body) {
    if (err) {
      console.log("error:", error);
    } else {
      let weather = JSON.parse(body);
      console.log(weather);
    }
  });
}
