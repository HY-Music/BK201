const {artist,
  facture,
  user,
  video,
  admin,
  resetpasswords,
  playlist,
  feedback } = require("./database-mongodb/schemas");
var express = require("express");
var app = express();
const passport = require("passport");
var port = process.env.PORT || 3000;
var cors = require("cors");
app.use(cors());
const users = require("./routes/users");
const myUsers = require("./routes/myUser");
const myFeedback = require("./routes/userFeedback");
const feedbacks = require("./routes/feedback")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.listen(process.env.PORT || port, () => {
  console.log(`Express server listening on  ${port}`);
});


