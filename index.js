const express = require("express");
const mongoose = require("mongoose");
const cookiesSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
<<<<<<< HEAD
const authRoutes = require("./models/User");
const billingRoutes = require("./services/passport");
=======
require("./models/User");
require("./models/Survey");
require("./services/passport");
>>>>>>> 140d2e38d5456d1fcd8bc6d348c4fb1b017e4bce

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookiesSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
<<<<<<< HEAD
=======
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //Express will serve up production assets
  //like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  //Express will serve up the index.html file
  // if it does not recognize the route.
  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
>>>>>>> 140d2e38d5456d1fcd8bc6d348c4fb1b017e4bce

const PORT = process.env.PORT || 5000;
app.listen(PORT);
