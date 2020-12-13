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

router.get("/mainUsuario",function(req,res){
    console.log("Entra a main usuario");
    res.render("mainUsuario");
});

router.get("/agendarCita",function(req,res){
    console.log("Entra a agendar cita");
    res.render("agendarCita");
});

router.get("/recordatorios",function(req,res){
    console.log("Entra a recordatorios");
    res.render("recordatorios");
});

<<<<<<< HEAD
router.get("/crearRecordatorio",function(req,res){
    console.log("Entra a crear recordatorios");
    res.render("crearRecordatorio");
=======
router.get("/localizacion",function(req,res){
    console.log("Entra a localizacion");
    res.render("localizacion");
>>>>>>> 1d8c5a5dc980db2de327cc3614d7c80feacb1ff1
});

module.exports = router;