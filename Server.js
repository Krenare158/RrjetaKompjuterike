var PORT = 33331;
var HOST = '0.0.0.0';
const fs = require ('fs');
var path = 'mesazhi.txt';
errorcode = "NUK KENI QASJE!"



const { info } = require('console');
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function() {
  var address = server.address();
 console.log(`Serveri udp eshte aktiv ne adresen:  ${address.address}:${address.port}`);
});
