'use strict';

var express = require('express');
var app = express();
var url = require('url');
var port = process.env.PORT || 8080;
var os = require('os');

app.get('*', function(req, res) {
    var ip = req.headers['x-forwarded-for'];
    var language = req.headers["accept-language"];
    var software = req.headers['user-agent'];
    var version = os.release();
    var user = {"ip": ip, "language": language, "software": software};
    
	res.write(JSON.stringify(user));
	res.end();
    
});

app.listen(port, function () {
  console.log('App listening on port 8080!');
});