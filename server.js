var express = require('express');

var app = express();

app.set('port', process.env.PORT || 8081);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});