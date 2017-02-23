var mongoose = require('mongoose');
var User = mongoose.model('User');

var TwitterStrategy = require('passport-twitter').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

var config = require('./config');
