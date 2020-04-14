'use strict';

var buy = prompt('Hi dear customer what do you want to buy?   hint:type house,villa,or appartment');

 var reply;
 if (buy == 'house') {
    reply = 'You rock! want to to buy a house?';

 } else if (buy == 'villa') {
     reply = 'youre awesome ! lets pick you a villa!';

} else if (buy == 'appartment') {
    reply = 'you mean business! lets search for an appartment';

} else {
   reply = 'just browsing? be our guest hope you like what you see!';

 }
// document.write('<h2>' + reply + '</h2>');
document.getElementById("prompt").innerHTML = reply;

var greating='WELCOME DEAR CUSTOMER';
document.getElementById("welcome").innerHTML = greating;

var call='Call us at 0000000';
 document.write ('<h4>'+call +'</h4>');

