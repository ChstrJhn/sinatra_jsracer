function GamePage(){
		
	//define player parent class
	var Player = function(name){
		this.name = name;
		this.position = 1;

	function playerMove (player) {
		$("tr#player" + this.playerNo + "_strip > td.active").removeClass().next().addClass('active')
		this.position ++
	  }
    this.playerMove = playerMove;
	};

//define game class
	var Game = function(player1,player2){
		this.player1 = player1;
		this.player2 = player2;
		this.player1.playerNo = "1";
		this.player2.playerNo = "2";

	function won() {
	  if (player1.position == 12){
		  alert(player1_name + " has won!");
			var winner = player1.name;
			var loser = player2.name;
			submitForm(winner,loser);
    }		
		else if (player2.position == 12){
			alert(player2_name + " has won!");
			var winner = player2.name;
			var loser = player1.name;
			submitForm(winner,loser);
		}
	};
	  this.won = won;

	 function submitForm(winner,loser) {
		forms = document.getElementById('result');
		forms.winner.value = winner;
		forms.loser.value = loser;
		forms.submit();
	 }

	function restart(){
		player1.position = 1;
		player2.position = 1;

		$("tr#player" + player1.playerNo + "_strip > td").removeClass('active').first().addClass('active')
		$("tr#player" + player2.playerNo + "_strip > td").removeClass('active').first().addClass('active')
	 }

	 $("button#restart").click(function() {
	  restart();
	});

	}

	var player1 = new Player(player1_name);
	var player2 = new Player(player2_name);
	var game = new Game(player1,player2);

	$(document).keyup(function(keyCode){
		if (keyCode.which == 87){
		  game.player1.playerMove();
		}
		else if(keyCode.which == 73){
			game.player2.playerMove();
		}
		game.won();
	 });

 };

//run game js only when class is available with get request.
$(document).ready(function() {

	if($('body').hasClass('game_page')){
		GamePage();
	}

});