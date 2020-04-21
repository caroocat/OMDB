const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const db = require("./config/db");
const User = require("./models");
const routes = require("./routes");

server.use(express.static(path.join(__dirname, "/public")));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
//req.body
server.use(bodyParser.urlencoded({ extended: false }));
//cokies
server.use(cookieParser());
// req.session | express-session init |
server.use(
  session({
    secret: "bootcamp",
    resave: true,
    saveUninitialized: true
  })
);

/**** PASSPORT */
server.use(passport.initialize()); // passport init
server.use(passport.session());

// auth strategy definition
// https://github.com/jaredhanson/passport-local
passport.use(
  new LocalStrategy({ usernameField: "email" }, function(
    inputEmail,
    password,
    done
  ) {
    User.findOne({ where: { email: inputEmail } })
      .then(user => {
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user); //ESTA TODO OK!
      })
      .catch(done);
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// deserialize: how we look for the user
passport.deserializeUser(function(id, done) {
  User.findByPk(id).then(user => done(null, user));
});

server.use("/", routes);

server.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// server.listen(3000);

db.sync({ force: false }).then(con => {
  console.log(
    `${con.options.dialect} database ${con.config.database} connected at ${con.config.host}:${con.config.port}`
  );
  server.listen(3000, () => console.log("SERVER LISTENING AT PORT 3000"));
});
