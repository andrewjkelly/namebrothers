// Module must be started with environment variables
//
// incomingwebhookurl="incoming webhook url for Burner"
//

'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require("request");
var incomingWebhookURL = process.env.incomingwebhookurl;

// Express setup

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());

app.get('/test', function (req, res) {
	console.log("received");
	res.sendStatus(200);
});

app.post('/listen', function (req, res) {

	console.log("received payload from burner: ", req.body);

	// get type from body

	var type = req.body['type'];

	// ignore calls if not the 'inboundText' type

	if (type != "inboundText") {
		res.sendStatus(200);
		return;
	}

	// get message and sender from body


	var payload = req.body['payload'];


if (payload ="affiliate") {
	  var message=("Welcome, Affiliates. If you are a current affiliate text:(Login). If you are looking to become an affiliate text:(sign up).");
	}

if (payload="Login") {
	 var message=("Enter your personal affiliate ID to login");
 }


if (payload="Sign up"){
	 var message=("Fill out the following application https://goo.gl/forms/Iuzr6Y570jop16w23");
 }

if (payload=3123>4123){
	 var message=("please call us for assistance.");
 }

	//Client
	//-----------------------------------------

if (payload="client"){
	  var message="Dear clients, Please text (Login) or if you aren't a member with us and are looking to be then text (sign up).");
	}

if (payload="Login"){
	   var message=("Enter your business ID");
	 }
if (payload="Sign up"){
		 var message=("Fill out the following form https://goo.gl/forms/PviaENFjMDzXfsRl2");
	 }

if (payload="customer"){
		var message=("Dear, customer. For customer service text (CS). You may also call us at this number for personal assistance.");
	}
if (payload="CS"){
	  var message=("Hello, I'm Tom. How may I be of service?");
	}
if (payload="owner"){
		  var message=("Hello Boss, Enter today's passcode.");
		}
if (payload="1599"){
		   var message=("Hello, Mr. Kelly. Choose your Function (Funds(F), Clients(C), Team(T), affiliates(A), employees(E)) ");
		 }
if (payload="F"){
			 var message=("$15,091 BOP");
		 }
if (payload="C"){
	 		 var message=("5 client(s)");
		 }
if (payload="A"){
	 		 var message=("341 registered affiliate(s)");
		 }
if (payload="T"){
	 		 var message=("9 member(s)");
		 }
if (payload="E"){
	 		 var message=("2 employee(s)");
		 }
if (payload="employee"){
		var message=("NA");
	}

	//-----------------------------------------

	var sender = req.body['fromNumber'];

	console.log("echoing text back to sender: " + sender + " with message: " + message);
	console.log("POSTing message to : " + incomingWebhookURL);

	request({
    	url: incomingWebhookURL,
    	method: 'POST',
    	json: {
    		"intent": "message",
    		"data": {"toNumber": sender, "text": message}
    	}
    }, function(error, response, body) {
    	if (error) {
    		console.log('Error sending message: ', error);
    	}  if (response.body.error) {
    		console.log('Error: ', response.body.error);
    	}
    });

	res.sendStatus(200);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
