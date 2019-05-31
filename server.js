var path = require('path');
var express = require('express');
const PORT = process.env.PORT || 3000;
var DIST_DIR = path.join(__dirname, 'dist');
var PUBLIC_DIR = path.join(__dirname, 'public');
const serverApp = require('./server/appRoutes.js');
var app = express();

app.get('/dist/bundle.js', function(req, res) {
	res.sendFile(path.join(DIST_DIR, 'bundle.js'));
});

app.get('/ping', function(req, res) {
	res.send('pong');
});

app.use(serverApp.router);

//Send index.html when the user access the web
app.get('/*', function(req, res) {
	res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT);
console.log('Application started at port:' + PORT);
