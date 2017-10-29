const express = require('express');
const app = express();


const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
//mongoose.connect(config.uri);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/new_mean_angular2', { useMongoClient: true });
//on connection
mongoose.connection.on('connected',()=>{
  console.log(config.secret);
  console.log(config.db);
  console.log('connected to database @ 27017' +config.db);
});
mongoose.connection.on('error',(err)=>{
  if(err)
  {
    console.log('Error in Database Connection:'+err);
  }

});

//mongoose.connect('mongodb://localhost/test', { useMongoClient: true });

app.use(express.static(__dirname + '/client/dist/'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8081, () => {
  console.log('Listing on port 8081')
});
