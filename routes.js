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

router.get("/crearRecordatorio",function(req,res){
    console.log("Entra a crear recordatorios");
    res.render("crearRecordatorio");
});

module.exports = router;