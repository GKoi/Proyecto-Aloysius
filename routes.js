var express = require("express");

var router = express.Router();

router.get("/",function(req,res){
    console.log("Entra al inicio");
    res.render("index");
});

router.get("/informacion",function(req,res){
    console.log("Entra a info");
    res.render("informacion");
});

router.get("/contactos",function(req,res){
    console.log("Entra a contactos");
    res.render("contactos");
});
module.exports = router;