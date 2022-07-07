require('dotenv').config()

const express = require('express');
const app = express ();


app.listen(process.env.PUERTO, function(){
    console.log('Servidor inicilizado')
});