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

var a1 =  "Hey";
var m1 =  "Welcome to NameBrothers Best 2018: Web Hosting";
var a2 =  "  ";
var m2 =  "  ";
var a3 =  "  ";
var m3 =  "  ";
var a4 =  "  ";
var m4 =  "  ";
var a5 =  "  ";
var m5 =  "  ";
var a6 =  "  ";
var m6 =  "  ";
var a7 =  "  ";
var m7 =  "  ";
var a8 =  "  ";
var m8 =  "  ";
var a9 =  "  ";
var m9 =  "  ";
var a10 =  "  ";
var m10 =  "  ";
var a11 =  "  ";
var m11 =  "  ";
var a12 =  "  ";
var m12 =  "  ";
var a13 =  "  ";
var m13 =  "  ";
var a14 =  "  ";
var m14 =  "  ";
var a15 =  "  ";
var m15 =  "  ";
var a16 =  "  ";
var m16 =  "  ";
var a17 =  "  ";
var m17 =  "  ";
var a18 =  "  ";
var m18 =  "  ";
var a19 =  "  ";
var m19 =  "  ";
var a20 =  "  ";
var m20 =  "  ";
var a21 =  "  ";
var m21 =  "  ";
var a22 =  "  ";
var m22 =  "  ";
var a23 =  "  ";
var m23 =  "  ";
var a24 =  "  ";
var m24 =  "  ";
var a25 =  "  ";
var m25 =  "  ";
var a26 =  "  ";
var m26 =  "  ";
var a27 =  "  ";
var m27 =  "  ";
var a28 =  "  ";
var m28 =  "  ";
var a29 =  "  ";
var m29 =  "  ";
var a30 =  "  ";
var m30 =  "  ";
var a31 =  "  ";
var m31 =  "  ";
var a32 =  "  ";
var m32 =  "  ";
var a33 =  "  ";
var m33 =  "  ";
var a34 =  "  ";
var m34 =  "  ";
var a35 =  "  ";
var m35 =  "  ";
var a36 =  "  ";
var m36 =  "  ";
var a37 =  "  ";
var m37 =  "  ";
var a38 =  "  ";
var m38 =  "  ";
var a39 =  "  ";
var m39 =  "  ";
var a40 =  "  ";
var m40 =  "  ";
var a41 =  "  ";
var m41 =  "  ";
var a42 =  "  ";
var m42 =  "  ";
var a43 =  "  ";
var m43 =  "  ";
var a44 =  "  ";
var m44 =  "  ";
var a45 =  "  ";
var m45 =  "  ";
var a46 =  "  ";
var m46 =  "  ";
var a47 =  "  ";
var m47 =  "  ";
var a48 =  "  ";
var m48 =  "  ";
var a49 =  "  ";
var m49 =  "  ";
var a50 =  "  ";
var m50 =  "  ";
var a51 =  "  ";
var m51 =  "  ";
var a52 =  "  ";
var m52 =  "  ";
var a53 =  "  ";
var m53 =  "  ";
var a54 =  "  ";
var m54 =  "  ";
var a55 =  "  ";
var m55 =  "  ";
var a56 =  "  ";
var m56 =  "  ";
var a57 =  "  ";
var m57 =  "  ";
var a58 =  "  ";
var m58 =  "  ";
var a59 =  "  ";
var m59 =  "  ";
var a60 =  "  ";
var m60 =  "  ";
var a61 =  "  ";
var m61 =  "  ";
var a62 =  "  ";
var m62 =  "  ";
var a63 =  "  ";
var m63 =  "  ";
var a64 =  "  ";
var m64 =  "  ";
var a65 =  "  ";
var m65 =  "  ";
var a66 =  "  ";
var m66 =  "  ";
var a67 =  "  ";
var m67 =  "  ";
var a68 =  "  ";
var m68 =  "  ";
var a69 =  "  ";
var m69 =  "  ";
var a70 =  "  ";
var m70 =  "  ";
var a71 =  "  ";
var m71 =  "  ";
var a72 =  "  ";
var m72 =  "  ";
var a73 =  "  ";
var m73 =  "  ";
var a74 =  "  ";
var m74 =  "  ";
var a75 =  "  ";
var m75 =  "  ";
var a76 =  "  ";
var m76 =  "  ";
var a77 =  "  ";
var m77 =  "  ";
var a78 =  "  ";
var m78 =  "  ";
var a79 =  "  ";
var m79 =  "  ";
var a80 =  "  ";
var m80 =  "  ";
var a81 =  "  ";
var m81 =  "  ";
var a82 =  "  ";
var m82 =  "  ";
var a83 =  "  ";
var m83 =  "  ";
var a84 =  "  ";
var m84 =  "  ";
var a85 =  "  ";
var m85 =  "  ";
var a86 =  "  ";
var m86 =  "  ";
var a87 =  "  ";
var m87 =  "  ";
var a88 =  "  ";
var m88 =  "  ";
var a89 =  "  ";
var m89 =  "  ";
var a90 =  "  ";
var m90 =  "  ";
var a91 =  "  ";
var m91 =  "  ";
var a92 =  "  ";
var m92 =  "  ";
var a93 =  "  ";
var m93 =  "  ";
var a94 =  "  ";
var m94 =  "  ";
var a95 =  "  ";
var m95 =  "  ";
var a96 =  "  ";
var m96 =  "  ";
var a97 =  "  ";
var m97 =  "  ";
var a98 =  "  ";
var m98 =  "  ";
var a99 =  "  ";
var m99 =  "  ";
var a100 =  "  ";
var m100 =  "  ";
var a101 =  "  ";
var m101 =  "  ";
var a102 =  "  ";
var m102 =  "  ";
var a103 =  "  ";
var m103 =  "  ";
var a104 =  "  ";
var m104 =  "  ";
var a105 =  "  ";
var m105 =  "  ";
var a106 =  "  ";
var m106 =  "  ";
var a107 =  "  ";
var m107 =  "  ";
var a108 =  "  ";
var m108 =  "  ";
var a109 =  "  ";
var m109 =  "  ";
var a110 =  "  ";
var m110 =  "  ";
var a111 =  "  ";
var m111 =  "  ";
var a112 =  "  ";
var m112 =  "  ";
var a113 =  "  ";
var m113 =  "  ";
var a114 =  "  ";
var m114 =  "  ";
var a115 =  "  ";
var m115 =  "  ";
var a116 =  "  ";
var m116 =  "  ";
var a117 =  "  ";
var m117 =  "  ";
var a118 =  "  ";
var m118 =  "  ";
var a119 =  "  ";
var m119 =  "  ";
var a120 =  "  ";
var m120 =  "  ";
var a121 =  "  ";
var m121 =  "  ";
var a122 =  "  ";
var m122 =  "  ";
var a123 =  "  ";
var m123 =  "  ";
var a124 =  "  ";
var m124 =  "  ";
var a125 =  "  ";
var m125 =  "  ";
var a126 =  "  ";
var m126 =  "  ";
var a127 =  "  ";
var m127 =  "  ";
var a128 =  "  ";
var m128 =  "  ";
var a129 =  "  ";
var m129 =  "  ";
var a130 =  "  ";
var m130 =  "  ";
var a131 =  "  ";
var m131 =  "  ";
var a132 =  "  ";
var m132 =  "  ";
var a133 =  "  ";
var m133 =  "  ";
var a134 =  "  ";
var m134 =  "  ";
var a135 =  "  ";
var m135 =  "  ";
var a136 =  "  ";
var m136 =  "  ";
var a137 =  "  ";
var m137 =  "  ";
var a138 =  "  ";
var m138 =  "  ";
var a139 =  "  ";
var m139 =  "  ";
var a140 =  "  ";
var m140 =  "  ";
var a141 =  "  ";
var m141 =  "  ";
var a142 =  "  ";
var m142 =  "  ";
var a143 =  "  ";
var m143 =  "  ";
var a144 =  "  ";
var m144 =  "  ";
var a145 =  "  ";
var m145 =  "  ";
var a146 =  "  ";
var m146 =  "  ";
var a147 =  "  ";
var m147 =  "  ";
var a148 =  "  ";
var m148 =  "  ";
var a149 =  "  ";
var m149 =  "  ";
var a150 =  "  ";
var m150 =  "  ";
var a151 =  "  ";
var m151 =  "  ";
var a152 =  "  ";
var m152 =  "  ";
var a153 =  "  ";
var m153 =  "  ";
var a154 =  "  ";
var m154 =  "  ";
var a155 =  "  ";
var m155 =  "  ";
var a156 =  "  ";
var m156 =  "  ";
var a157 =  "  ";
var m157 =  "  ";
var a158 =  "  ";
var m158 =  "  ";
var a159 =  "  ";
var m159 =  "  ";
var a160 =  "  ";
var m160 =  "  ";
var a161 =  "  ";
var m161 =  "  ";
var a162 =  "  ";
var m162 =  "  ";
var a163 =  "  ";
var m163 =  "  ";
var a164 =  "  ";
var m164 =  "  ";
var a165 =  "  ";
var m165 =  "  ";
var a166 =  "  ";
var m166 =  "  ";
var a167 =  "  ";
var m167 =  "  ";
var a168 =  "  ";
var m168 =  "  ";
var a169 =  "  ";
var m169 =  "  ";
var a170 =  "  ";
var m170 =  "  ";
var a171 =  "  ";
var m171 =  "  ";
var a172 =  "  ";
var m172 =  "  ";
var a173 =  "  ";
var m173 =  "  ";
var a174 =  "  ";
var m174 =  "  ";
var a175 =  "  ";
var m175 =  "  ";
var a176 =  "  ";
var m176 =  "  ";
var a177 =  "  ";
var m177 =  "  ";
var a178 =  "  ";
var m178 =  "  ";
var a179 =  "  ";
var m179 =  "  ";
var a180 =  "  ";
var m180 =  "  ";
var a181 =  "  ";
var m181 =  "  ";
var a182 =  "  ";
var m182 =  "  ";
var a183 =  "  ";
var m183 =  "  ";
var a184 =  "  ";
var m184 =  "  ";
var a185 =  "  ";
var m185 =  "  ";
var a186 =  "  ";
var m186 =  "  ";
var a187 =  "  ";
var m187 =  "  ";
var a188 =  "  ";
var m188 =  "  ";
var a189 =  "  ";
var m189 =  "  ";
var a190 =  "  ";
var m190 =  "  ";
var a191 =  "  ";
var m191 =  "  ";
var a192 =  "  ";
var m192 =  "  ";
var a193 =  "  ";
var m193 =  "  ";
var a194 =  "  ";
var m194 =  "  ";
var a195 =  "  ";
var m195 =  "  ";
var a196 =  "  ";
var m196 =  "  ";
var a197 =  "  ";
var m197 =  "  ";
var a198 =  "  ";
var m198 =  "  ";
var a199 =  "  ";
var m199 =  "  ";
var a200 =  "  ";
var m200 =  "  ";
var a201 =  "  ";
var m201 =  "  ";
var a202 =  "  ";
var m202 =  "  ";
var a203 =  "  ";
var m203 =  "  ";
var a204 =  "  ";
var m204 =  "  ";
var a205 =  "  ";
var m205 =  "  ";
var a206 =  "  ";
var m206 =  "  ";
var a207 =  "  ";
var m207 =  "  ";
var a208 =  "  ";
var m208 =  "  ";
var a209 =  "  ";
var m209 =  "  ";
var a210 =  "  ";
var m210 =  "  ";
var a211 =  "  ";
var m211 =  "  ";
var a212 =  "  ";
var m212 =  "  ";
var a213 =  "  ";
var m213 =  "  ";
var a214 =  "  ";
var m214 =  "  ";
var a215 =  "  ";
var m215 =  "  ";
var a216 =  "  ";
var m216 =  "  ";
var a217 =  "  ";
var m217 =  "  ";
var a218 =  "  ";
var m218 =  "  ";
var a219 =  "  ";
var m219 =  "  ";
var a220 =  "  ";
var m220 =  "  ";
var a221 =  "  ";
var m221 =  "  ";
var a222 =  "  ";
var m222 =  "  ";
var a223 =  "  ";
var m223 =  "  ";
var a224 =  "  ";
var m224 =  "  ";
var a225 =  "  ";
var m225 =  "  ";
var a226 =  "  ";
var m226 =  "  ";
var a227 =  "  ";
var m227 =  "  ";
var a228 =  "  ";
var m228 =  "  ";
var a229 =  "  ";
var m229 =  "  ";
var a230 =  "  ";
var m230 =  "  ";
var a231 =  "  ";
var m231 =  "  ";
var a232 =  "  ";
var m232 =  "  ";
var a233 =  "  ";
var m233 =  "  ";
var a234 =  "  ";
var m234 =  "  ";
var a235 =  "  ";
var m235 =  "  ";
var a236 =  "  ";
var m236 =  "  ";
var a237 =  "  ";
var m237 =  "  ";
var a238 =  "  ";
var m238 =  "  ";
var a239 =  "  ";
var m239 =  "  ";
var a240 =  "  ";
var m240 =  "  ";
var a241 =  "  ";
var m241 =  "  ";
var a242 =  "  ";
var m242 =  "  ";
var a243 =  "  ";
var m243 =  "  ";
var a244 =  "  ";
var m244 =  "  ";
var a245 =  "  ";
var m245 =  "  ";
var a246 =  "  ";
var m246 =  "  ";
var a247 =  "  ";
var m247 =  "  ";
var a248 =  "  ";
var m248 =  "  ";
var a249 =  "  ";
var m249 =  "  ";
var a250 =  "  ";
var m250 =  "  ";
var a251 =  "  ";
var m251 =  "  ";
var a252 =  "  ";
var m252 =  "  ";
var a253 =  "  ";
var m253 =  "  ";
var a254 =  "  ";
var m254 =  "  ";
var a255 =  "  ";
var m255 =  "  ";
var a256 =  "  ";
var m256 =  "  ";
var a257 =  "  ";
var m257 =  "  ";
var a258 =  "  ";
var m258 =  "  ";
var a259 =  "  ";
var m259 =  "  ";
var a260 =  "  ";
var m260 =  "  ";
var a261 =  "  ";
var m261 =  "  ";
var a262 =  "  ";
var m262 =  "  ";
var a263 =  "  ";
var m263 =  "  ";
var a264 =  "  ";
var m264 =  "  ";
var a265 =  "  ";
var m265 =  "  ";
var a266 =  "  ";
var m266 =  "  ";
var a267 =  "  ";
var m267 =  "  ";
var a268 =  "  ";
var m268 =  "  ";
var a269 =  "  ";
var m269 =  "  ";
var a270 =  "  ";
var m270 =  "  ";
var a271 =  "  ";
var m271 =  "  ";
var a272 =  "  ";
var m272 =  "  ";
var a273 =  "  ";
var m273 =  "  ";
var a274 =  "  ";
var m274 =  "  ";
var a275 =  "  ";
var m275 =  "  ";
var a276 =  "  ";
var m276 =  "  ";
var a277 =  "  ";
var m277 =  "  ";
var a278 =  "  ";
var m278 =  "  ";
var a279 =  "  ";
var m279 =  "  ";
var a280 =  "  ";
var m280 =  "  ";
var a281 =  "  ";
var m281 =  "  ";
var a282 =  "  ";
var m282 =  "  ";
var a283 =  "  ";
var m283 =  "  ";
var a284 =  "  ";
var m284 =  "  ";
var a285 =  "  ";
var m285 =  "  ";
var a286 =  "  ";
var m286 =  "  ";
var a287 =  "  ";
var m287 =  "  ";
var a288 =  "  ";
var m288 =  "  ";
var a289 =  "  ";
var m289 =  "  ";
var a290 =  "  ";
var m290 =  "  ";
var a291 =  "  ";
var m291 =  "  ";
var a292 =  "  ";
var m292 =  "  ";
var a293 =  "  ";
var m293 =  "  ";
var a294 =  "  ";
var m294 =  "  ";
var a295 =  "  ";
var m295 =  "  ";
var a296 =  "  ";
var m296 =  "  ";
var a297 =  "  ";
var m297 =  "  ";
var a298 =  "  ";
var m298 =  "  ";
var a299 =  "  ";
var m299 =  "  ";
var a300 =  "  ";
var m300 =  "  ";
var a301 =  "  ";
var m301 =  "  ";
var a302 =  "  ";
var m302 =  "  ";
var a303 =  "  ";
var m303 =  "  ";
var a304 =  "  ";
var m304 =  "  ";
var a305 =  "  ";
var m305 =  "  ";
var a306 =  "  ";
var m306 =  "  ";
var a307 =  "  ";
var m307 =  "  ";
var a308 =  "  ";
var m308 =  "  ";
var a309 =  "  ";
var m309 =  "  ";
var a310 =  "  ";
var m310 =  "  ";
var a311 =  "  ";
var m311 =  "  ";
var a312 =  "  ";
var m312 =  "  ";
var a313 =  "  ";
var m313 =  "  ";
var a314 =  "  ";
var m314 =  "  ";
var a315 =  "  ";
var m315 =  "  ";
var a316 =  "  ";
var m316 =  "  ";
var a317 =  "  ";
var m317 =  "  ";
var a318 =  "  ";
var m318 =  "  ";
var a319 =  "  ";
var m319 =  "  ";
var a320 =  "  ";
var m320 =  "  ";
var a321 =  "  ";
var m321 =  "  ";
var a322 =  "  ";
var m322 =  "  ";
var a323 =  "  ";
var m323 =  "  ";
var a324 =  "  ";
var m324 =  "  ";
var a325 =  "  ";
var m325 =  "  ";
var a326 =  "  ";
var m326 =  "  ";
var a327 =  "  ";
var m327 =  "  ";
var a328 =  "  ";
var m328 =  "  ";
var a329 =  "  ";
var m329 =  "  ";
var a330 =  "  ";
var m330 =  "  ";
var a331 =  "  ";
var m331 =  "  ";
var a332 =  "  ";
var m332 =  "  ";
var a333 =  "  ";
var m333 =  "  ";
var a334 =  "  ";
var m334 =  "  ";
var a335 =  "  ";
var m335 =  "  ";
var a336 =  "  ";
var m336 =  "  ";
var a337 =  "  ";
var m337 =  "  ";
var a338 =  "  ";
var m338 =  "  ";
var a339 =  "  ";
var m339 =  "  ";
var a340 =  "  ";
var m340 =  "  ";
var a341 =  "  ";
var m341 =  "  ";
var a342 =  "  ";
var m342 =  "  ";
var a343 =  "  ";
var m343 =  "  ";
var a344 =  "  ";
var m344 =  "  ";
var a345 =  "  ";
var m345 =  "  ";
var a346 =  "  ";
var m346 =  "  ";
var a347 =  "  ";
var m347 =  "  ";
var a348 =  "  ";
var m348 =  "  ";
var a349 =  "  ";
var m349 =  "  ";
var a350 =  "  ";
var m350 =  "  ";
var a351 =  "  ";
var m351 =  "  ";
var a352 =  "  ";
var m352 =  "  ";
var a353 =  "  ";
var m353 =  "  ";
var a354 =  "  ";
var m354 =  "  ";
var a355 =  "  ";
var m355 =  "  ";
var a356 =  "  ";
var m356 =  "  ";
var a357 =  "  ";
var m357 =  "  ";
var a358 =  "  ";
var m358 =  "  ";
var a359 =  "  ";
var m359 =  "  ";
var a360 =  "  ";
var m360 =  "  ";
var a361 =  "  ";
var m361 =  "  ";
var a362 =  "  ";
var m362 =  "  ";
var a363 =  "  ";
var m363 =  "  ";
var a364 =  "  ";
var m364 =  "  ";
var a365 =  "  ";
var m365 =  "  ";
var a366 =  "  ";
var m366 =  "  ";
var a367 =  "  ";
var m367 =  "  ";
var a368 =  "  ";
var m368 =  "  ";
var a369 =  "  ";
var m369 =  "  ";
var a370 =  "  ";
var m370 =  "  ";
var a371 =  "  ";
var m371 =  "  ";
var a372 =  "  ";
var m372 =  "  ";
var a373 =  "  ";
var m373 =  "  ";
var a374 =  "  ";
var m374 =  "  ";
var a375 =  "  ";
var m375 =  "  ";
var a376 =  "  ";
var m376 =  "  ";
var a377 =  "  ";
var m377 =  "  ";
var a378 =  "  ";
var m378 =  "  ";
var a379 =  "  ";
var m379 =  "  ";
var a380 =  "  ";
var m380 =  "  ";
var a381 =  "  ";
var m381 =  "  ";
var a382 =  "  ";
var m382 =  "  ";
var a383 =  "  ";
var m383 =  "  ";
var a384 =  "  ";
var m384 =  "  ";
var a385 =  "  ";
var m385 =  "  ";
var a386 =  "  ";
var m386 =  "  ";
var a387 =  "  ";
var m387 =  "  ";
var a388 =  "  ";
var m388 =  "  ";
var a389 =  "  ";
var m389 =  "  ";
var a390 =  "  ";
var m390 =  "  ";
var a391 =  "  ";
var m391 =  "  ";
var a392 =  "  ";
var m392 =  "  ";
var a393 =  "  ";
var m393 =  "  ";
var a394 =  "  ";
var m394 =  "  ";
var a395 =  "  ";
var m395 =  "  ";
var a396 =  "  ";
var m396 =  "  ";
var a397 =  "  ";
var m397 =  "  ";
var a398 =  "  ";
var m398 =  "  ";
var a399 =  "  ";
var m399 =  "  ";
var a400 =  "  ";
var m400 =  "  ";
var a401 =  "  ";
var m401 =  "  ";
var a402 =  "  ";
var m402 =  "  ";
var a403 =  "  ";
var m403 =  "  ";
var a404 =  "  ";
var m404 =  "  ";
var a405 =  "  ";
var m405 =  "  ";
var a406 =  "  ";
var m406 =  "  ";
var a407 =  "  ";
var m407 =  "  ";
var a408 =  "  ";
var m408 =  "  ";
var a409 =  "  ";
var m409 =  "  ";
var a410 =  "  ";
var m410 =  "  ";
var a411 =  "  ";
var m411 =  "  ";
var a412 =  "  ";
var m412 =  "  ";
var a413 =  "  ";
var m413 =  "  ";
var a414 =  "  ";
var m414 =  "  ";
var a415 =  "  ";
var m415 =  "  ";
var a416 =  "  ";
var m416 =  "  ";
var a417 =  "  ";
var m417 =  "  ";
var a418 =  "  ";
var m418 =  "  ";
var a419 =  "  ";
var m419 =  "  ";
var a420 =  "  ";
var m420 =  "  ";
var a421 =  "  ";
var m421 =  "  ";
var a422 =  "  ";
var m422 =  "  ";
var a423 =  "  ";
var m423 =  "  ";
var a424 =  "  ";
var m424 =  "  ";
var a425 =  "  ";
var m425 =  "  ";
var a426 =  "  ";
var m426 =  "  ";
var a427 =  "  ";
var m427 =  "  ";
var a428 =  "  ";
var m428 =  "  ";
var a429 =  "  ";
var m429 =  "  ";
var a430 =  "  ";
var m430 =  "  ";
var a431 =  "  ";
var m431 =  "  ";
var a432 =  "  ";
var m432 =  "  ";
var a433 =  "  ";
var m433 =  "  ";
var a434 =  "  ";
var m434 =  "  ";
var a435 =  "  ";
var m435 =  "  ";
var a436 =  "  ";
var m436 =  "  ";
var a437 =  "  ";
var m437 =  "  ";
var a438 =  "  ";
var m438 =  "  ";
var a439 =  "  ";
var m439 =  "  ";
var a440 =  "  ";
var m440 =  "  ";
var a441 =  "  ";
var m441 =  "  ";
var a442 =  "  ";
var m442 =  "  ";
var a443 =  "  ";
var m443 =  "  ";
var a444 =  "  ";
var m444 =  "  ";
var a445 =  "  ";
var m445 =  "  ";
var a446 =  "  ";
var m446 =  "  ";
var a447 =  "  ";
var m447 =  "  ";
var a448 =  "  ";
var m448 =  "  ";
var a449 =  "  ";
var m449 =  "  ";
var a450 =  "  ";
var m450 =  "  ";
var a451 =  "  ";
var m451 =  "  ";
var a452 =  "  ";
var m452 =  "  ";
var a453 =  "  ";
var m453 =  "  ";
var a454 =  "  ";
var m454 =  "  ";
var a455 =  "  ";
var m455 =  "  ";
var a456 =  "  ";
var m456 =  "  ";
var a457 =  "  ";
var m457 =  "  ";
var a458 =  "  ";
var m458 =  "  ";
var a459 =  "  ";
var m459 =  "  ";
var a460 =  "  ";
var m460 =  "  ";
var a461 =  "  ";
var m461 =  "  ";
var a462 =  "  ";
var m462 =  "  ";
var a463 =  "  ";
var m463 =  "  ";
var a464 =  "  ";
var m464 =  "  ";
var a465 =  "  ";
var m465 =  "  ";
var a466 =  "  ";
var m466 =  "  ";
var a467 =  "  ";
var m467 =  "  ";
var a468 =  "  ";
var m468 =  "  ";
var a469 =  "  ";
var m469 =  "  ";
var a470 =  "  ";
var m470 =  "  ";
var a471 =  "  ";
var m471 =  "  ";
var a472 =  "  ";
var m472 =  "  ";
var a473 =  "  ";
var m473 =  "  ";
var a474 =  "  ";
var m474 =  "  ";
var a475 =  "  ";
var m475 =  "  ";
var a476 =  "  ";
var m476 =  "  ";
var a477 =  "  ";
var m477 =  "  ";
var a478 =  "  ";
var m478 =  "  ";
var a479 =  "  ";
var m479 =  "  ";
var a480 =  "  ";
var m480 =  "  ";
var a481 =  "  ";
var m481 =  "  ";
var a482 =  "  ";
var m482 =  "  ";
var a483 =  "  ";
var m483 =  "  ";
var a484 =  "  ";
var m484 =  "  ";
var a485 =  "  ";
var m485 =  "  ";
var a486 =  "  ";
var m486 =  "  ";
var a487 =  "  ";
var m487 =  "  ";
var a488 =  "  ";
var m488 =  "  ";
var a489 =  "  ";
var m489 =  "  ";
var a490 =  "  ";
var m490 =  "  ";
var a491 =  "  ";
var m491 =  "  ";
var a492 =  "  ";
var m492 =  "  ";
var a493 =  "  ";
var m493 =  "  ";
var a494 =  "  ";
var m494 =  "  ";
var a495 =  "  ";
var m495 =  "  ";
var a496 =  "  ";
var m496 =  "  ";
var a497 =  "  ";
var m497 =  "  ";
var a498 =  "  ";
var m498 =  "  ";
var a499 =  "  ";
var m499 =  "  ";
var a500 =  "  ";
var m500 =  "  ";

   
		


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
	    message = (m1);
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
