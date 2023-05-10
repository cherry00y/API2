var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const secret = 'Fullstack-login'



app.use(cors())

require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')
//connection.end() 

app.post('/disease', jsonParser, function (req, res, next) {
    connection.execute(
      'INSERT INTO Disese (D_Name, D_Symptom, D_Cause, D_Treatment, D_Treatmentys) VALUES (?,?,?,?,?)',
      [req.body.D_Name, req.body.D_Symptom, req.body.D_Cause, req.body.D_Treatment, req.body.D_Treatmentys],
      function(err, results, fields) {
        if (err) {
          res.json({ status: 'Error', message: err });
          return;
        }
        res.json({ status: 'Ok' });
      }
    );
  });
  

app.listen(3333, function () {
  console.log('CORS-enabled web server listening on port 3333')
})
