#!/usr/bin/env nodemon


// Include the basic packages
var   http = require('http'),
      exec = require('child_process').exec,
      config = require('./config.json');

// Create the HTTP Server
http.createServer(function(req,res){

// Raw data and parsed;
var jsonRaw = '';
var json;

// Make sure the request is POST data
  if(req.method == 'POST' && req.url == '/payload'){

    // On new data append to the json string
    req.on('data',function(data){
      jsonRaw += data;
    });

    // On the end of the request parse the json
    req.on('end', function(){
      json = JSON.parse(jsonRaw);
      Pull(json);
    });
  }

res.writeHead("200");

}).listen(config.listen_port);


//Pull function
var Pull = function(data){
  if(config.branch == data.ref.split('/')[2]){
    console.log("TRUE");
  }
};
