const request = require("request");

async function curl(link) {
  try {
    console.log("link", typeof link);
    await request.get(link).on("body", function (error, response, body) {
      //console.log(body);
      process.stdout.write(body);
      process.stdout.write("\nprompt");
    });
  } catch (error) {
    console.log(error);
  }
}
module.exports = curl;

// const request = require("request");
// request("http://www.google.com", function (error, response, body) {
//   console.error("error:", error); // Print the error if one occurred
//   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//   console.log("body:", body); // Print the HTML for the Google homepage.
// });

// request.get("http://mysite.com/doodle.png").on("error", function (err) {
//   console.error(err);
// });
