'use strict';
var app = require("koa")();
var path = require("path");
var route = require("koa-route");
var serve = require("koa-static");
var r = require("rethinkdb");

var port = process.env.PORT || 8000;

var indexPath = path.resolve(__dirname, 'client');

app.use(serve('build'));
app.use(serve(path.resolve('client')));

app.listen(port, function() {
    console.log('App is listening on port', port);
});