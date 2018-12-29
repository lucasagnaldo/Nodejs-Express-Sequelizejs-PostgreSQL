var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const http = require('http');
const db = require('./app/config/db.config.js');
const authorization = require('./app/auth/auth.js');
const auth = authorization(app);

app.use(auth.initialize());
app.use(bodyParser.json())

this.http = http.createServer(app);

// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: false }');
});

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.urlencodedParser = urlencodedParser;
app.auth = auth;


require('./app/route/customer.route.js')(app);
require('./app/route/user.route.js')(app);
require('./app/route/sale.route.js')(app);
require('./app/route/auth.route.js')(app);


// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})