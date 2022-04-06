var express = require('express'); //Aqui importamos la dependencia
var app = express(); 
var port = process.env.PORT || 3000; //con esto conectamos al puerto con el servidor 
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');  // EJS renderizado por template engine

app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);
next();
});
// Ruta raiz y lo mandamos a render
app.get("/", function (red,res) {
    res.render('index');
 
});

//Tercera ruta esta la modificamos cambiando send por render 
app.get('/person/:id', function (req,res){
    res.render('person', { ID: req.params.id });
});
//segunda ruta /api y esta nos regresa un json
app.get('/api', function (req,res){
    res.json({ firstname: 'John', lastname: 'Doe'});
});
// levantamos el servidor y lo ponemos listo
app.listen(port);

