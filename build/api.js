'use strict';

require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var axios = require('axios');
var path = require('path');
var sha256 = require('sha256');
var base64 = require('base64url');
var request = require("request");
var rp = require('request-promise');
var fs = require('fs');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.listen(8080, function () {
  console.log('listening on port 8080');
});
var config = {
  client_id: process.env.CLIENT_ID,
  redirect_uri: 'http://localhost:8080',
  response_type: 'code',
  code_verifier: 'NTM3MDAyOTk0OGEwMjZmOWE0YTA5MGM3MDVjZGFiOWYyOTVmZGQ3ZmY0OTA2OTVlMTQ3MjFiZWIwN2E1Y2E3YQ'
};

app.get('/authorize', function (req, res) {
  var client_id = process.env.CLIENT_ID;
  var redirect_uri = process.env.REDIRECT_URI;
  var endpoint = process.env.AUTHORIZATION_ENDPOINT;
  console.log('in authorize');
  res.redirect('https://data.world/oauth/authorize?client_id=' + encodeURIComponent(config.client_id) + '&redirect_uri=' + encodeURIComponent(config.redirect_uri) + '&response_type=code&code_challenge_method=plain&code_challenge=' + config.code_verifier);
});

app.get('/', function (req, res) {
  var code = req.query.code;
  if (code) {
    var options = {
      code: code,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.DATAWORLD_SECRET,
      grant_type: 'authorization_code',
      code_verifier: config.code_verifier
    };
    axios.post('https://data.world/oauth/access_token', options).then(function (response) {
      if (response.data.access_token) {
        var at = response.data.access_token;
        res.cookie('cookiename', at, { maxAge: 90000, httpOnly: false });
        res.sendFile(path.resolve('./app/index.html'));
      } else {
        var errorMessage = response.status.message || 'unknown error';
        console.log(errorMessage);
      }
    }).catch(function (err) {
      console.log(err);
    });
  } //
});

app.get('/getUserDatasets', function (req, res) {
  var accessToken = req.query.accessToken;
  var options = { method: 'GET',
    url: 'https://api.data.world/v0/user/datasets/own',
    headers: { authorization: 'Bearer ' + accessToken },
    body: '{}' };

  request(options, function (error, response, body) {
    if (error) {
      console.log(error);
    }
    res.send(body);
  });
});

app.get('/downloadDatasets', function (req, res) {
  console.log('In server /downloadDatasets');
  console.log(req.query);
  var owner = req.query.owner;
  var id = req.query.projectID;
  var file = req.query.file;
  var url = 'https://api.data.world/v0/file_download/' + owner + '/' + id + '/' + file;
  var accessToken = req.query.at;
  var options = { method: 'GET',
    url: url,
    headers: { authorization: 'Bearer ' + accessToken },
    body: '{}'
  };
  request(options, function (error, response, body) {
    if (error) {
      console.err(error);
    }
    res.send(body);
  });
});

app.get('/dll/renderer.dev.dll.js', function (req, res) {
  res.sendFile(path.join(__dirname, '../dll/renderer.dev.dll.js'));
});

app.get('/getdata', function (req, res) {
  console.log('In server /getdata');
  res.send('hi');
});

app.get('/dist-assets/dw.logo_greyscale.svg', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist-assets/dw.logo_greyscale.svg'));
});