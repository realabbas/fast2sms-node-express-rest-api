var express = require("express");
var app = express();
var unirest = require("unirest");
var request = unirest("POST", "https://www.fast2sms.com/dev/bulk");
var cors = require("cors");

// Middleware
app.use(cors());

// GET Request for sending OTP to a number
app.get("/api/sendOTP/:number", (req, res) => {
  const OTP = Math.floor(1000 + Math.random() * 9000);
  request.headers({
    authorization: YOUR_API_KEY
  });

  request.form({
    sender_id: "FSTSMS", // Set your own "sender_id"
    message: "16361", // template id
    language: "english",
    route: "qt", // Transactional Route SMS
    variables: "{#AA#}",
    variables_values: OTP,
    numbers: req.params.number // Number present in GET request
  });

  request.end(function(res) {
    if (res.error) console.log("error at otp");

    console.log(res.body);
  });
  // response send back
  res.send({
    Number: req.params.number,
    OTP: OTP
  });
});

// server running on PORT
var port = process.env.PORT || 8080;

app.listen(port, (req, res) => {
  console.log(`Running on ${port}`);
});
