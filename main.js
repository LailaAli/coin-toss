//VARIABLES

var userGuess = document.getElementById('user-guess');
var btn = document.getElementById('btn');
var result = document.getElementById('result');

var quarter = coin();       //Random heads || tails generator
function coin(){
    var dime = coinFlip();
    return dime;
};




//FUNCTIONS


btn.onclick= function() {
    quarter;
	if (quarter === userGuess.value) {      //IF GENERATOR IS = TO USER INPUT
	console.log(quarter);
	result.innerHTML = 'you won!';
	
	} else {
		console.log(quarter);
		result.innerHTML = 'you lost!';
	}
};


//HEADS || TAILS FUNCTION 
function coinFlip() {
    return (Math.floor(Math.random() * 2) === 0) ? 'heads' : 'tails';
}