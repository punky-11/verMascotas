const { response, json } = require('express');
const express = require('express');
const path=require('path')
const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'));



const PORT= 5600;

app.get('/', (req,res)=>{
    res.send('primera peticion');
    res.end();
});
app.get('/saludar', (req,res)=>{

    let nombre='santiago';
    let materia =["matematicas","filosofia","español"];
    res.render('index', {
        nombre: nombre,
        materia: materia
    });
});


app.get('/departamentos',(req,res)=>{

    fetch('http://api-colombia.com/api/v1/Department')

    .then(res => res.json())
    .then(dato =>{
        res.render('tabla',{
            "lista":dato
        })
    })
    .catch(error => console.log('error:', error));
        });




app.listen(PORT, ()=>{
    console.log('estoy en linea desde el puerto: '+ PORT);
})
