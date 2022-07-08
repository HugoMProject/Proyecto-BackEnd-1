
const path= require('path')

require('dotenv').config()

const express = require('express');
const app = express ();

app.get('/', function(solicitud, respuesta){
    respuesta.sendFile(path.join(__dirname ,'view/index.html'))
})

app.get('/contacto',  function(solicitud, respuesta){
    respuesta.sendFile(path.join(__dirname ,'view/contacto.html')) 
})

app.listen(process.env.PUERTO, function(){
    console.log('Servidor inicilizado')
});