require('dotenv').config();
const Promise = require('bluebird');
const express = require('express');
const path = require('path');
const ApiService = require('./src/services/ApiService');

// var webpack = require('webpack');
// var tempConfig = require('./webpack.config.js');
// var compiler = webpack(tempConfig);

const app = express();
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
;
app.use(express.static(path.join(__dirname,'src/static')))

app.listen(app.get('port'), ()=> {
	console.log('Node app is running on port', app.get('port'));
});

app.get('/',(req,res)=>{
  res.render(__dirname+"/views/homepage");
});

/**
 * GET api call with query params -
 * url - encoded url endpoint for which GET call has to be made
 */
app.get('/makeapicall',(req,res)=>{
  let urlInEncodedFormat = req.query.url;
  let urlInNormalFormat = decodeURIComponent(urlInEncodedFormat);
  ApiService.makeGETApiCall(urlInNormalFormat).then(
    (responseDict)=>{
      res.send(200,responseDict);
    },
    (error)=>{
      res.send(400,error);
    }
  )
});

