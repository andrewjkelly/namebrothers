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
	var message= null;

	// list of responses
// PRIMARY ELSE IF messasge

	var m1 = "You have successfully reached Metrix Marketing, please state who you are \( affiliate, client, customer\)";

	//-----------------------

//AFFILIATE
	var m2 = "Welcome affiliate, Please enter your personal passcode | If you are looking to become an Affiliate text: AJ";

		var m3= "Affiliate join,";
			var m4="Plan comparison: https://drive.google.com/open?id=138rXd4BTwIccRLHSws3KOITiKlB2ShmzxnVDZdWch6A";
			var m5 = "Application: https://goo.gl/forms/wyJmJmKQV5LrJsAn1";
			var m6= "LEGAL: https://drive.google.com/open?id=0B0POZWEZ9wCaZVRkMlF6bUVVWGM";
			var m7= "Metrix marketing, is an affiliate network that connects independent contractors \(affiliates\) with clients looking to sell products, memberships, programs, etc. Earning the independent contractors a commision on all sales.";
			var m8 = "";
			var m9= "";
			var m10= "";
			var m11= "";
			var m12 = "";
			var m13= " " ;

		var m14= "Access granted | here is a list of commands:";
			var m15 = "Google shared drive";
			var m16= "PAY-pal";
			var m17= "our website";
			var m18= "elite member";
			var m19 = "partners";
			var m20= "elite partnership";

			var m21= "Products";
				var m22 = "MCA";
				var m23= "TVC";
				var m24= " ";
				var m25= " ";
				var m26 = " ";
				var m27= " ";
				var m28= " ";
				var m29 = " ";
				var m30= " ";

//--------------------------

// CLIENT
	var m31= "Welcome clients, Please enter your company's passcode | If you are looking to sell your product with us, text: CJ";

		var m32= "Client join";
			var m33 = "Application ";
			var m34= "LEGAL agreement";
			var m35= "Info on affiliates";
			var m36 = "Agreements";
			var m38= "GOOGLE drive";
			var m39= "misc";
			var m40 = " misc2";

		var m41= "4983";
			var m42= "Client google drive";
			var m43 = "Client paypal";
			var m44= "our website";
			var m45= " ";
			var m46=" ";
			var m47= " ";
			var m48= " ";
			var m49 = " ";
			var m50= " ";
			var m51= " ";
			var m52= " ";
			var m53 = " ";
			var m54= " ";
			var m55= " ";
			var m56= " ";
			var m57 = " ";
			var m58= " ";
			var m59= " ";
			var m60= " ";

//--------------------------

	// CUSTOMER
	var m61="Welcome customer, TEXT: CS for customer service or TEXT: CMMD for a list of commands.";
		var m62="Here is a list of textable commands: E= email, AB= about us, AJ= affiliate join, PC= Plan Comparison, CJ= Client join";
			var m63="Email";
			var m64="about";
			var m65="Hello, I am Jarvis your personal AI assistant. How may I help you?";
				var m66="";
				var m67="";
				var m68="";
				var m69="";
				var m70=" ";
				var m71= " ";
				var m72= " ";
				var m73 = " ";
				var m74= " ";
				var m75= " ";
				var m76= " ";
				var m77 = " ";
				var m78= " ";
				var m79= " ";
				var m80=" ";
				var m81= " ";
				var m82= " ";
				var m83 = " ";
				var m84= " ";
				var m85= " ";
				var m86= " ";
				var m87 = " ";
				var m88= " ";
				var m89= " ";
				var m90=" ";

//--------------------------

//OWNER
	var m91= "Welcome Mr. Kelly, Please enter your passcode.";
		var m92= "Access granted | CMMDO for command list.";
			var m93 = " Here it is: https://docs.google.com/spreadsheets/d/1MUUmFyNm8Jq6ALogPfBEZg8HBPONlP9ZzmrPVQPBDeo/edit#gid=0";
			var m94= "Well hello there, Mr. Kelly";
			var m95= "You seem to be quite full. sir,";
			var m96= "Currently we have 32 affiliates signed up. 2 new today.";
			var m97 = " ";
			var m98= " ";
			var m99= " ";
			var m100=" ";
			var m101= " ";
			var m102= " ";
			var m103 = " ";
			var m104= " ";
			var m105= " ";
			var m106= " ";
			var m107 = " ";
			var m108= " ";
			var m109= " ";
			var m110=" ";
			var m111= " ";
			var m112= " ";
			var m113 = " ";
			var m114= " ";
			var m115= " ";
			var m116= " ";
			var m117 = " ";
			var m118= " ";
			var m119= " ";
			var m120=" ";

//--------------------------

	//EMPLOYEE
	var m121= " ";
		var m122= " ";
		var m123 = " ";
		var m124= " ";
		var m125= " ";
		var m126= " ";
		var m127 = " ";
		var m128= " ";
		var m129= " ";
		var m130=" ";
		var m131= " ";
		var m132= " ";
		var m133 = " ";
		var m134= " ";
		var m135= " ";
		var m136= " ";
		var m137 = " ";
		var m138= " ";
		var m139= " ";
		var m140=" ";
		var m141= " ";
		var m142= " ";
		var m143 = " ";
		var m144= " ";
		var m145= " ";
		var m146= " ";
		var m147 = " ";
		var m148= " ";
		var m149= " ";

//---------------------------



	// response

	var payload= req.body['payload']; if(payload == "affiliate"){
		message=(m2);
	} else if(payload == "5746"){
		message=(m4);
	} else if(payload == "AFFILIATE JOIN"){
		message=(m3);
	}  else if(payload == "PERSONAL INFO"){
		message=(m5);
	} else if(payload == "LEGAL"){
		message=(m6);
	} else if(payload == "EARNINGS"){
		message=(m7);
	} else if(payload == "PERSONAL"){
		message=(m8);
	} else if(payload == "TEAM"){
		message=(m9);
	} else if(payload == "PRODUCT LIST"){
		message=(m10);
	} else if(payload == "TVC"){
		message=(m11);
	} else if(payload == "MCA"){
		message=(m12);
	} else if(payload == "customer"){
		message=(m17);
	} else if(payload == "CS"){
		message=(m18);
	} else if(payload == "owner"){
		message=(m19);
	} else if(payload == "1234"){
		message=(m20);
	}else if(payload == "5746"){
		message=(m4);
	} else if(payload == "AFFILIATE JOIN"){
		message=(m3);
	}  else if(payload == "PERSONAL INFO"){
		message=(m5);
	} else if(payload == "LEGAL"){
		message=(m6);
	} else if(payload == "EARNINGS"){
		message=(m7);
	} else if(payload == "PERSONAL"){
		message=(m8);
	} else if(payload == "TEAM"){
		message=(m9);
	} else if(payload == "PRODUCT LIST"){
		message=(m10);
	} else if(payload == "TVC"){
		message=(m11);
	} else if(payload == "MCA"){
		message=(m12);
	} else if(payload == "customer"){
		message=(m17);
	} else if(payload == "CS"){
		message=(m18);
	} else if(payload == "owner"){
		message=(m19);
	} else if(payload == "1234"){
		message=(m20);
	}else if(payload == "5746"){
		message=(m4);
	} else if(payload == "AFFILIATE JOIN"){
		message=(m3);
	}  else if(payload == "PERSONAL INFO"){
		message=(m5);
	} else if(payload == "LEGAL"){
		message=(m6);
	} else if(payload == "EARNINGS"){
		message=(m7);
	} else if(payload == "PERSONAL"){
		message=(m8);
	} else if(payload == "TEAM"){
		message=(m9);
	} else if(payload == "PRODUCT LIST"){
		message=(m10);
	} else if(payload == "TVC"){
		message=(m11);
	} else if(payload == "MCA"){
		message=(m12);
	} else if(payload == "customer"){
		message=(m17);
	} else if(payload == "CS"){
		message=(m18);
	} else if(payload == "owner"){
		message=(m19);
	} else if(payload == "1234"){
		message=(m20);
	}else if(payload == "5746"){
		message=(m4);
	} else if(payload == "AFFILIATE JOIN"){
		message=(m3);
	}  else if(payload == "PERSONAL INFO"){
		message=(m5);
	} else if(payload == "LEGAL"){
		message=(m6);
	} else if(payload == "EARNINGS"){
		message=(m7);
	} else if(payload == "PERSONAL"){
		message=(m8);
	} else if(payload == "TEAM"){
		message=(m9);
	} else if(payload == "PRODUCT LIST"){
		message=(m10);
	} else if(payload == "TVC"){
		message=(m11);
	} else if(payload == "MCA"){
		message=(m12);
	} else if(payload == "customer"){
		message=(m17);
	} else if(payload == "CS"){
		message=(m18);
	} else if(payload == "owner"){
		message=(m19);
	} else if(payload == "1234"){
		message=(m20);
	} else {
		message=(m1);
	}

	//done

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
    	} else if (response.body.error) {
    		console.log('Error: ', response.body.error);
    	}
    });

	res.sendStatus(200);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
