var morgan = require('morgan');
var express = require('express');
var path = require('path');
var app = express();

app.use(morgan('dev'));
app.set('views', path.join(__dirname, "/views"));
app.set('view engine', 'ejs');

dummy = function(request, response)
{
    response.render("index", {data: request.params});
}

app.get("*", dummy);
app.use(dummy);

ipaddress = process.env.OPENSHIFT_NODEJS_IP || "localhost";
port = process.env.OPENSHIFT_NODEJS_PORT || 50000;

//  Start listening on the specific IP and PORT
app.listen(port, ipaddress, function() {
  console.log('%s: Server started on %s:%d ...', Date(Date.now()), ipaddress, port);
});