let adoptFee = 0;


function runningTotal(current) {
adoptFee = Math.round((adoptFee+current+ Number.EPSILON) * 100) / 100;        
alert('Your total adoption fees are currently '+adoptFee);
document.getElementById("finalAmount").innerHTML = adoptFee = Math.round((adoptFee+ Number.EPSILON) * 100) / 100;
}

//  Jquery code attempt

// $(runningTotal(current));
//  {
//     adoptFee = Math.round((adoptFee+current+ Number.EPSILON) * 100) / 100;        
//     alert('Your total adoption fees are currently '+adoptFee);
//     $("#finalAmount").innerHTML = adoptFee = Math.round((adoptFee+ Number.EPSILON) * 100) / 100;


// dog info function
function doginfo(name, breed, fee){
    alert('Hi my name is ' +name+ ', I am a ' +breed+ ' and I cost '+fee+' to adopt.');
}


// current error messages when I run the jquery on lines 9 through 13
// checkout.js:9 Uncaught ReferenceError: $ is not defined
//     at checkout.js:9