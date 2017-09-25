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

    
		


//--------------------------





	// response

    var payload= req.body['payload'];
    
    if(payload ==String(a1)){
        message=(m1);
    } else if (payload ==String(a2)){
        message=(m2);
    } else if(payload ==String(a3)){
		message=(m3);
		} else if(payload ==String(a4)){
		message=(m4);
		} else if(payload ==String(a5)){
		message=(m5);
		} else if(payload ==String(a6)){
		message=(m6);
		} else if(payload ==String(a7)){
		message=(m7);
    } else if(payload ==String(a8)){
		message=(m8);
    } else if(payload ==String(a9)){
		message=(m9);
    } else if(payload ==String(a10)){
		message=(m10);
    } else if(payload ==String(a11)){
		message=(m11);
    } else if(payload ==String(a12)){
		message=(m12);
    } else if(payload ==String(a13)){
		message=(m13);
    } else if(payload ==String(a14)){
		message=(m14);
		} else if(payload ==String(a15)){
		message=(m15);
		} else if(payload ==String(a16)){
		message=(m16);
		} else if(payload ==String(a17)){
		message=(m17);
    } else if(payload ==String(a18)){
		message=(m18);
    } else if(payload ==String(a19)){
		message=(m19);
    } else if(payload ==String(a20)){
		message=(m20);
    } else if(payload ==String(a21)){
		message=(m21);
		} else if(payload ==String(a22)){
		message=(m22);
		} else if(payload ==String(a23)){
		message=(m23);
    } else if(payload ==String(a24)){
		message=(m24);
    } else if(payload ==String(a25)){
		message=(m25);
    } else if(payload ==String(a26)){
		message=(m26);
    } else if(payload ==String(a27)){
		message=(m27);
    } else if(payload ==String(a28)){
		message=(m28);
    } else if(payload ==String(a29)){
		message=(m29);
    } else if(payload ==String(a30)){
		message=(m30);
    } else if(payload ==String(a31)){
		message=(m31);
		} else if(payload ==String(a32)){
		message=(m32);
		} else if(payload ==String(a33)){
		message=(m33);
		} else if(payload ==String(a34)){
		message=(m34);
		} else if(payload ==String(a35)){
		message=(m35);
		} else if(payload ==String(a36)){
		message=(m36);
		} else if(payload ==String(a37)){
			message=(m37);
    } else if(payload ==String(a38)){
			message=(m38);
    } else if(payload ==String(a39)){
			message=(m39);
    } else if(payload ==String(a40)){
			message=(m40);
    } else if(payload ==String(a41)){
			message=(m41);
		} else if(payload ==String(a42)){
			message=(m42);
		} else if(payload ==String(a43)){
		message=(m43);
    } else if(payload ==String(a44)){
		message=(m44);
    } else if(payload ==String(a45)){
		message=(m45);
    } else if(payload ==String(a46)){
		message=(m46);
    } else if(payload ==String(a47)){
		message=(m47);
    } else if(payload ==String(a48)){
		message=(m48);
    } else if(payload ==String(a49)){
		message=(m49);
    } else if(payload ==String(a50)){
		message=(m50);
    } else if(payload ==String(a51)){
		message=(m51);
    } else if(payload ==String(a52)){
		message=(m52);
    } else if(payload ==String(a53)){
		message=(m53);
    } else if(payload ==String(a54)){
		message=(m54);
    } else if(payload ==String(a55)){
		message=(m55);
    } else if(payload ==String(a56)){
		message=(m56);
    } else if(payload ==String(a57)){
		message=(m57);
    } else if(payload ==String(a58)){
		message=(m58);
    } else if(payload ==String(a59)){
		message=(m59);
    } else if(payload ==String(a60)){
		message=(m60);
    } else if(payload ==String(a61)){
		message=(m61);
		} else if(payload ==String(a62)){
		message=(m62);
		} else if(payload ==String(a63)){
		message=(m63);
		} else if(payload ==String(a64)){
		message=(m64);
		} else if(payload ==String(a65)){
		message=(m65);
    } else if(payload ==String(a66)){
		message=(m66);
    } else if(payload ==String(a67)){
		message=(m67);
    } else if(payload ==String(a68)){
		message=(m68);
    } else if(payload ==String(a69)){
		message=(m69);
    } else if(payload ==String(a70)){
		message=(m70);
    } else if(payload ==String(a71)){
		message=(m71);
    } else if(payload ==String(a72)){
		message=(m72);
    } else if(payload ==String(a73)){
		message=(m73);
    } else if(payload ==String(a74)){
		message=(m74);
    } else if(payload ==String(a75)){
		message=(m75);
    } else if(payload ==String(a76)){
		message=(m76);
    } else if(payload ==String(a77)){
		message=(m77);
    } else if(payload ==String(a78)){
		message=(m78);
    } else if(payload ==String(a79)){
		message=(m79);
    } else if(payload ==String(a80)){
		message=(m80);
    } else if(payload ==String(a81)){
		message=(m81);
    } else if(payload ==String(a82)){
		message=(m82);
    } else if(payload ==String(a83)){
		message=(m83);
    } else if(payload ==String(a84)){
		message=(m84);
    } else if(payload ==String(a85)){
		message=(m85);
    } else if(payload ==String(a86)){
		message=(m86);
    } else if(payload ==String(a87)){
		message=(m87);
    } else if(payload ==String(a88)){
		message=(m88);
    } else if(payload ==String(a89)){
		message=(m89);
    } else if(payload ==String(a90)){
		message=(m90);
    } else if(payload == String(a91)){
		message=(m91);
		} else if(payload ==String(a92)){
		message=(m92);
		} else if(payload ==String(a93)){
		message=(m93);
		} else if(payload ==String(a94)){
		message=(m94);
		} else if(payload ==String(a95)){
		message=(m95);
		} else if(payload ==String(a96)){
		message=(m96);
    } else if(payload ==String(a97)){
		message=(m97);
    } else if(payload ==String(a98)){
		message=(m98);
    } else if(payload ==String(a99)){
		message=(m99);
    } else if(payload ==String(a100)){
		message=(m100);
    } else{
	    message == ("Welcome to NameBrothers.com "+"TEXT: Help for more info") ;
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
