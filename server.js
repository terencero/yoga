const express = require('express');
const bodyParser = require('body-parser');
const keys = require('./keys.js');
const rp = require('request-promise');
// Import router and assign to routes
const routes = require('./controllers/yoga_controller');

const app = express();

const PORT = process.env.PORT || 8888;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use('/', routes);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
