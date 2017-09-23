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

    var m1 = "Welcome, to NameBrothers: \"Best 2018 Webhosting\"";
    var a1 = "Hey";

	//-----------------------

//HOSTING
    var m2 = "this is a helpful message";
    var a2 =="HELP";

        var m3= "This is a test";
        var a3="";

            var m4="";
            var a4="";

            var m5="";
            var a5="";

            var m6="";
            var a6="";

            var m7="";
						var a7="";
						
						var m8="";
						var a8="";

						var m9="";
						var a9="";

						var m10="";
						var a10="";

						var m11="";
						var a11="";

						var m12="";
						var a12="";

						var m13="";
						var a13="";


            

//--------------------------

// CLIENT
    var m31= "";
    var a31="";

        var m32= "";
        var a32="";
			

//--------------------------

	// CUSTOMER
    var m61="";
    var a61="";


        var m62="";
        var a62="";
		

//--------------------------





	// response

    var payload= req.body['payload'];
    
    if(payload = (a1)){
        message=(m1);
    } else if (payload ==(a2)){
        message=(m2);
    } else if(payload == "TEST"){
		message=(m3);
	} else if(payload =(a4)){
		message=(m4);
	}  else if(payload =(a5)){
		message=(m5);
	} else if(payload =(a6)){
		message=(m6);
	} else if(payload =(a7)){
		message=(m7);
    } else if(payload =(a8)){
		message=(m8);
    } else if(payload =(a9)){
		message=(m9);
    } else if(payload =(a10)){
		message=(m10);
    } else if(payload =(a11)){
		message=(m11);
    } else if(payload =(a12)){
		message=(m12);
    } else if(payload =(a13)){
		message=(m13);
    } else if(payload =(a14)){
		message=(m14);
	} else if(payload =(a15)){
		message=(m15);
	} else if(payload =(a16)){
		message=(m16);
	} else if(payload =(a17)){
		message=(m17);
    } else if(payload =(a18)){
		message=(m18);
    } else if(payload =(a19)){
		message=(m19);
    } else if(payload =(a20)){
		message=(m20);
    } else if(payload =(a21)){
		message=(m21);
	} else if(payload =(a22)){
		message=(m22);
	} else if(payload =(a23)){
		message=(m23);
    } else if(payload =(a24)){
		message=(m24);
    } else if(payload =(a25)){
		message=(m25);
    } else if(payload =(a26)){
		message=(m26);
    } else if(payload =(a27)){
		message=(m27);
    } else if(payload =(a28)){
		message=(m28);
    } else if(payload =(a29)){
		message=(m29);
    } else if(payload =(a30)){
		message=(m30);
    } else if(payload =(a31)){
		message=(m31);
	} else if(payload =(a32)){
		message=(m32);
	}else if(payload =(a33)){
		message=(m33);
	} else if(payload =(a34)){
		message=(m34);
	}  else if(payload =(a35)){
		message=(m35);
	} else if(payload =(a36)){
		message=(m36);
	} else if(payload =(a37)){
		message=(m37);
    } else if(payload =(a38)){
		message=(m38);
    } else if(payload =(a39)){
		message=(m39);
    } else if(payload =(a40)){
		message=(m40);
    } else if(payload =(a41)){
		message=(m41);
	} else if(payload =(a42)){
		message=(m42);
	} else if(payload =(a43)){
		message=(m43);
    } else if(payload =(a44)){
		message=(m44);
    } else if(payload =(a45)){
		message=(m45);
    } else if(payload =(a46)){
		message=(m46);
    } else if(payload =(a47)){
		message=(m47);
    } else if(payload =(a48)){
		message=(m48);
    } else if(payload =(a49)){
		message=(m49);
    } else if(payload =(a50)){
		message=(m50);
    } else if(payload =(a51)){
		message=(m51);
    } else if(payload =(a52)){
		message=(m52);
    } else if(payload =(a53)){
		message=(m53);
    } else if(payload =(a54)){
		message=(m54);
    } else if(payload =(a55)){
		message=(m55);
    } else if(payload =(a56)){
		message=(m56);
    } else if(payload =(a57)){
		message=(m57);
    } else if(payload =(a58)){
		message=(m58);
    } else if(payload =(a59)){
		message=(m59);
    } else if(payload =(a60)){
		message=(m60);
    } else if(payload =(a61)){
		message=(m61);
	} else if(payload =(a62)){
		message=(m62);
	} else if(payload =(a63)){
		message=(m63);
	} else if(payload =(a64)){
		message=(m64);
	} else if(payload =(a65)){
		message=(m65);
    } else if(payload =(a66)){
		message=(m66);
    } else if(payload =(a67)){
		message=(m67);
    } else if(payload =(a68)){
		message=(m68);
    } else if(payload =(a69)){
		message=(m69);
    } else if(payload =(a70)){
		message=(m70);
    } else if(payload =(a71)){
		message=(m71);
    } else if(payload =(a72)){
		message=(m72);
    } else if(payload =(a73)){
		message=(m73);
    } else if(payload =(a74)){
		message=(m74);
    } else if(payload =(a75)){
		message=(m75);
    } else if(payload =(a76)){
		message=(m76);
    } else if(payload =(a77)){
		message=(m77);
    } else if(payload =(a78)){
		message=(m78);
    } else if(payload =(a79)){
		message=(m79);
    } else if(payload =(a80)){
		message=(m80);
    } else if(payload =(a81)){
		message=(m81);
    }else if(payload =(a82)){
		message=(m82);
    }else if(payload =(a83)){
		message=(m83);
    }else if(payload =(a84)){
		message=(m84);
    }else if(payload =(a85)){
		message=(m85);
    } else if(payload =(a86)){
		message=(m86);
    } else if(payload =(a87)){
		message=(m87);
    } else if(payload =(a88)){
		message=(m88);
    } else if(payload =(a89)){
		message=(m89);
    } else if(payload =(a90)){
		message=(m90);
    } else if(payload == (a91)){
		message=(m91);
	} else if(payload =(a92)){
		message=(m92);
	} else if(payload =(a93)){
		message=(m93);
	} else if(payload =(a94)){
		message=(m94);
	} else if(payload =(a95)){
		message=(m95);
	} else if(payload =(a96)){
		message=(m96);
    } else if(payload =(a97)){
		message=(m97);
    } else if(payload =(a98)){
		message=(m98);
    }else if(payload =(a99)){
		message=(m99);
    }else if(payload =(a100)){
		message=(m100);
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
