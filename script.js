var random = (Math.ceil(Math.random()* 10));
var numberButtons = document.querySelectorAll('[data-number]');
var answer = selection();
var loss = document.getElementById('wrapper')

console.log(random + " I'm aware this is visible.");
	
	function selection () {
		numberButtons.forEach(button =>{
			button.addEventListener('click', () =>{
				if (button.innerText == random) {
	 document.getElementById('result').innerHTML = "You Guessed Correctly!";
	 document.getElementById('picture').style.backgroundImage="url('winner.jpg')";
} else {
	 document.getElementById('result').innerHTML = "You Didn't Guess Correctly Loser!"; 
	 document.getElementById('result2').innerHTML = "Refresh to Try Again!"
   	 document.getElementById('picture').style.backgroundImage="url('loser.png')"; 
   	 loss.remove();
			}
		})
	})
}
	