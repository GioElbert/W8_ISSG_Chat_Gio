const crypto = require('crypto');



const alicePrivateKey = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCwQGkwa52yb9Lv
XUkAAdR3E6Wkd5EsYETVJItvZhggVspP5WTd1B1XiSyyRtfsoo8B+65hPd6hms0C
Z5fPVe8iq7jqRT+REj/6J7s0LiLDch8/KWnr43yktSsd0UTuzmRPsCEdtJBFlnb3
4L5iHq/YZ76J33QL6IRa3q+FyJgh5BZquwNwa9c9tht/P+Ujjb0sj4PYqTsOyeVX
WCV5+dkuP5QWsNphdxUK2KT1Bj8/zF8z05OwdRyhtXTfiYnS0Izpv7z4ifKtNNXi
f3LIP8wAV1xyQN2fO+kAeRG5mAC0ee2uigncMJ1GpQN11xmqkpZEb9bPt95bfQY4
hnRMQJJnAgMBAAECggEAEPMYypHG2Bad6+wGLax/YLYwe0kOWnylkfPSPvPMBSwj
h5xxX03bRoRIGprqf/TAGPo5sltPUi4/YehRdpx2g1iNT2Y6bzqYkXeJrsJzEGWk
sJ/McmVtoq9ThqoN3YNWrT0sah1ntHF8XmksFeaKlZ6gecTV9aE2PUDmE1EPpE6Q
SZ6YtkW60nBSLl73QUp8L1WOkin+0LbNN+/sjuvjZ11vNB+8Ky/xT+5h/Y1DyRQk
MZ+CioxryuKV5USd/3kR9st9oyyN9RicKl8o1SDTp/MskEd5dBRwgj/aeCWUdbke
b5K5QCV8RvFieO6AMh2KGg/kvxdT9pvD72QG+Q1aWQKBgQDy/d0vrikbaXrRAgnf
n5CZpy0azSumRyrRj0CmiSkaZx9xu1nRBzV5YlP6p+c4feEhpv1u0pgKY02s2Q9/
x4sVGHfPvZUWOMyPP9Vq6bivvxan2zJQzStX+01sfF1SBK4szF674yTF9aM6x2/H
g8DIzbWVEdrA3OVcACmBb9J/bwKBgQC5r+RqDcDKUrZ2bkxGiS2jekPuBZkfHnB4
Ta5lF9T6B8bkVFslv44X4C2ptwY8N9vLUb+IcPdRRY8rkU+u7rF52prVGJXOzPlQ
phAeKEPF7b9VgNtr/5UaHwzeKpp/b0pBFsOXdSCKGl48Wcu0gV6egRsZjMsO1W0Y
Otekr9ugiQKBgQCZgo4JAFMR8UpY3pvUPd9BYx8YroOj8ZP4fjLOwxpHhtyTolO0
vYQn4lnBoe9ufgALnY7AQ6Uv8tpwl1S2Wh7gvet7P37/YfTBjwdKGsvFo8gxVUZt
S6DVXXrlTZA7L5/Fx3sV4gMqWOu9R5+zgOX7NhJAUd5MN4Fi5OtTzYxDWwKBgD2c
R+yMbahz80iuZi6NO5BfdASY5Op3Xhf8pl2yn57qT6rY9nk66rmvT1dde/slCY+X
qzZpTRYxP0TUbRz84/QrfW4xPxuj1SFWSEjJUVtt/CsxmxxlbCKDpPBeMG8SDRA1
rmYlnctU3mml3bohprRu4AAFQCbG1/DPLVfeZcAJAoGBANVkwhRJRD1/oYiIFHPX
jQk6M5x06HKTj8UppkHVmvkFFAt+kzvClFgR63oEukp0mKSBVXRZP+ohL59hf36g
Kt289KEY+nEwgFWDZUFykROSjHQdpPWun+qvCzudDHWZDQXsVsOBEjowkhI38iVC
lrKgN7ekIr3XNjo1gVC1lsIi
-----END PRIVATE KEY-----`;

const bobPublicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtHfwJQgHSyRnMd5gW5Kl
ysUytcILNZ52E7ju58tUy4LERuxJkfnN29AVxADwkRQMYqpUPmD65qcR2XtV+LKx
ElmlKBCypHh1kpNatlhG8DTX9KBhkGuOLxuTWLN7rIH+f4+PY3KPVZWQLU/Nq40S
8Lo6SAdP/1rvTioUR/9b8HdcdUOTEz//SJwm+HkgyWliFF6P+FW0p5K9/jEdvYtI
FbrlcL8r2LfCp/uzkZeVKghsMZTzFMhmnogliEcblmo9YTT4d4SI94O3CnAEQYpQ
/E8Kehtz3t3bo0yePkkFcgAmUWxuePzRsndCh1rBN8DB7sXuS45TYWWYpgFLD4az
HwIDAQAB
-----END PUBLIC KEY-----`;

const message = "I want some apples";  

const sign = crypto.createSign('SHA256');  
sign.update(message);  
sign.end();  
const signature = sign.sign(alicePrivateKey, 'hex'); 

const encryptedMessage = crypto.publicEncrypt(bobPublicKey, Buffer.from(message)).toString('hex');  

console.log("Signature:", signature);
console.log("Message:", encryptedMessage);
