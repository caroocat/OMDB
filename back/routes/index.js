const express = require("express");
const router = express.Router();

const User = require("../models");

/***** DEMO BASIC AUTH ******/
const basicAuth = require("../auth/basica");
/*
router.get('/', basicAuth, (req, res) => {
  console.log("Basic Auth OK!")
  res.send(templates.basic)
})
*/

/******************************/

/***** DEMO PASSPORT ******/
const passport = require("passport");

router.post("/logging", passport.authenticate("local"), (req, res) => {
  console.log(res, req.body);
  res.send("està sin funciona, logueada");
});

/******************************/

router.get("/favorites", (req, res) => {
  console.log(req.params, "soy el req", req.body);
  User.findByPk(req.body.email).then(user => {
    res.send(user);
  });
});

router.post("/users", (req, res) => {
  User.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(err => console.log(err, "error de ruta post"));
});

router.post("/logout", function(req, res) {
  req.logout();
  res.send("Usuario Deslogeado");
});
module.exports = router;
