require('dotenv').config();
const Promise = require('bluebird');
const express = require('express');
const path = require('path');

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

