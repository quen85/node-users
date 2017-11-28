// Configurer le serveur
let express = require('express');
let port = 8080;
let app = express();

let path = require('path');
let bodyParser = require('body-parser');

let front = require('./routes/front');
let api = require('./routes/api');

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

// Définir les routes
app.use('/', front);
app.use('/api', api);

// Ecouter le serveur sur le port 8080
app.listen( port, () => console.log('Le serveur est lancé sur le port ' + port) );