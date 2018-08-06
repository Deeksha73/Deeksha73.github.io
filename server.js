const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const register = require('./controllers/register.js');
const signin = require('./controllers/signin.js');
const profile = require('./controllers/profile.js');
const image = require('./controllers/image.js')
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '9457',
    database : 'myapp'
  }
});
const app =express();
app.use(bodyParser.json());
app.use(cors());
app.get('/',(req,res)=>{res.send(database.users)});
app.get('/profile/:id',(req,res)=>{profile.handleProfileGet(req,res,knex)});
app.post('/signin',(req,res)=>{signin.handleSignin(req,res,knex,bcrypt)});
app.post('/register', (req,res)=>{ register.handleRegister(req, res, knex, bcrypt)});
app.put('/image', (req,res) => {image.handleImagePut(req,res,knex)});
app.post('/imageurl', (req,res) => {image.handleApiCall(req,res)});


app.listen(process.env.PORT || 3000,()=>{
	console.log('port active');
});