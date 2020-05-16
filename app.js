global.APP_DIR = __dirname;

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var cors = require("cors");

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/static', express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));
app.use("css", express.static(path.join(__dirname, 'public/commingsoon/css')));

app.use("font", express.static(path.join(__dirname, 'public/commingsoon/font')));

app.use("js", express.static(path.join(__dirname, 'public/commingsoon/js')));

app.use("vendor", express.static(path.join(__dirname, 'public/commingsoon/vendor')));

app.use(".well-known/pki-validation", express.static(path.join(__dirname, 'public/commingsoon/.well-known/pki-validation')))

app.get("", (req, res)=>{
	return res.sendFile(path.join(__dirname, "/public/comingsoon/index.html"));
})


module.exports = app;
