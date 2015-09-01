$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
var player1_position = 1;
var player2_position = 1;

var player1move = function() {
	$('tr#player1_strip > td.active').removeClass().next().addClass('active')
	player1_position ++
};

var player2move = function() {
	$('tr#player2_strip > td.active').removeClass().next().addClass('active')
	player2_position ++
};

var restart_race = function(){
	player1_position = 1;
	player2_position = 1;

	$('tr#player1_strip > td').removeClass('active').first().addClass('active')
	$('tr#player2_strip > td').removeClass('active').first().addClass('active')
};

var won = function () {
	if (player1_position == 12){
		alert("Player 1 has won!");
		var winner = player1_name;
		var loser = player2_name;
		submitForm(winner,loser);

	}
	else if (player2_position == 12){
		alert("Player 2 has won!");
		var winner = player2_name;
		var loser = player1_name;
		submitForm(winner,loser);
	}
	
};


$("button#restart").click(function() {
	restart_race();
});

$(document).keyup(function(keyCode){
	if (keyCode.which === 87){
		player1move();
	}
	else if(keyCode.which === 73){
		player2move();
	}

	won();
});

function submitForm(winner,loser) {
	forms = document.getElementById('result');
	forms.winner.value = winner;
	forms.loser.value = loser;
	forms.submit();
}

});