const Promise = require('bluebird');
const express = require('express');

const app = express();
app.set('port', 4000);
app.set('view engine', 'ejs');

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});

app.get('/',(req,res)=>{
  res.render(__dirname+"/views/homepage");
});

