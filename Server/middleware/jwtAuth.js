var express = require('express');
var route = express.Router();
var expressjwt = require('express-jwt');


exports.auth = route.use( expressjwt({secret: 'ojdo&*%$&Yjnjc$DFG998bjb'}));