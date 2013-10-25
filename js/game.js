$(document).ready(function(){

	$('.option').click(function(){
		$(this).addClass('optionSelected');
		$('.option').not(this).removeClass('optionSelected');
	});

	$('#fightAgainBtn').click(function(){
		$('#result').fadeOut();
		$('.wrapper').removeClass('overlay');
		$("input[type=submit]").removeAttr("disabled");
	});

	$('#fightBtn').click(function(){

		var userPick = $('input:radio[name=userpick]:checked').val();
		var items = ['rock', 'paper', 'scissors'];
		var userPoints = parseInt($('#userPointsLabel').text(), 10);
		var enemyPoints = parseInt($('#enemyPointsLabel').text(), 10);
		var enemyPick = items[Math.floor(Math.random() * items.length)];
			
		if (userPick == 'Roccian') {
			if(enemyPick == 'rock'){
				$('#result').fadeIn();
				$('.wrapper').addClass('overlay');
				$("input[type=submit]").attr("disabled", "disabled");
				var resultHeader = 'Its a Draw!';
				var resultMessage = 'You Select ' + userPick + ' to fight, while the enemy choose the ' + enemyPick + ' gladiator! Both fighter possess same ability and has equal power. The fight results to a Draw!';
				 			
				$('#resultHeader').text(resultHeader); 	
				$('#resultMessage').text(resultMessage);
			}
			else if(enemyPick == 'scissors'){
				$('#result').fadeIn();
				$('.wrapper').addClass('overlay');
				$("input[type=submit]").attr("disabled", "disabled");
				userPoints += 1;
				$('#userPointsLabel').text(userPoints);
				
				var resultHeader = 'You win!';
				var resultMessage = 'You select ' + userPick + ' to fight, while the enemy choose the ' + enemyPick + ' gladiator! The skills and ability of your opponent is useless against your fighter strength. You defeated scissors gladiator!';
				$('#resultHeader').text(resultHeader); 	
				$('#resultMessage').text(resultMessage);
			}
			else if(enemyPick == 'paper'){
				$('#result').fadeIn();
				$('.wrapper').addClass('overlay');
				 $("input[type=submit]").attr("disabled", "disabled");
				enemyPoints += 1;
				$('#enemyPointsLabel').text(enemyPoints);
				
				var resultHeader = 'You Lose!';
				var resultMessage = 'You select ' + userPick + ' to fight, while the enemy choose the ' + enemyPick + ' gladiator! Your fighter is useless against its opponents ability. Your fighter is defeated by the paper gladiator.';
				$('#resultHeader').text(resultHeader); 	
				$('#resultMessage').text(resultMessage);
			}
		}
		else if(userPick == 'Palma'){
			if(enemyPick == 'rock'){
					$('#result').fadeIn();
					$('.wrapper').addClass('overlay');
				  	$("input[type=submit]").attr("disabled", "disabled");
					userPoints += 1;
					$('#userPointsLabel').text(userPoints);
				
					var resultHeader = 'You win!';
					var resultMessage = 'You select ' + userPick + ' to fight, while the enemy choose the ' + enemyPick + ' gladiator! The skills and ability of your opponent is useless against your fighter strength. You defeated rock gladiator!';
					$('#resultHeader').text(resultHeader); 	
					$('#resultMessage').text(resultMessage);
				
			}
			else if(enemyPick == 'scissors'){
				$('#result').fadeIn();
				$('.wrapper').addClass('overlay');
				$("input[type=submit]").attr("disabled", "disabled");
				enemyPoints += 1;
				$('#enemyPointsLabel').text(enemyPoints);
				
				var resultHeader = 'You Lose!';
				var resultMessage = 'You select ' + userPick + ' to fight, while the enemy choose the ' + enemyPick + ' gladiator! Your fighter is useless against its opponents ability. Your fighter is defeated by the scissors gladiator.';
				$('#resultHeader').text(resultHeader); 	
				$('#resultMessage').text(resultMessage);
			}
			else if(enemyPick == 'paper'){
				$('#result').fadeIn();
				$('.wrapper').addClass('overlay');
				$("input[type=submit]").attr("disabled", "disabled");
				var resultHeader = 'Its a Draw!';
				var resultMessage = 'You Select ' + userPick + ' to fight, while the enemy choose the ' + enemyPick + ' gladiator! Both fighter possess same ability and has equal power. The fight results to a Draw!';
				 			
				$('#resultHeader').text(resultHeader); 	
				$('#resultMessage').text(resultMessage);

			}
		}
		else if(userPick == 'Esclicer'){
			if(enemyPick == 'rock'){
				$('#result').fadeIn();
				$('.wrapper').addClass('overlay');
				 $("input[type=submit]").attr("disabled", "disabled");
				enemyPoints += 1;
				$('#enemyPointsLabel').text(enemyPoints);
				
				var resultHeader = 'You Lose!';
				var resultMessage = 'You select ' + userPick + ' to fight, while the enemy choose the ' + enemyPick + ' gladiator! Your fighter is useless against its opponents ability. Your fighter is defeated by the rock gladiator.';
				$('#resultHeader').text(resultHeader); 	
				$('#resultMessage').text(resultMessage);
				
			}
			else if(enemyPick == 'scissors'){
				$('#result').fadeIn();
				$('.wrapper').addClass('overlay');
				$("input[type=submit]").attr("disabled", "disabled");	
				var resultHeader = 'Its a Draw!';
				var resultMessage = 'You Select ' + userPick + ' to fight, while the enemy choose the ' + enemyPick + ' gladiator! Both fighter possess same ability and has equal power. The fight results to a Draw!';
				 			
				$('#resultHeader').text(resultHeader); 	
				$('#resultMessage').text(resultMessage);

				
			}
			else if(enemyPick == 'paper'){
					$('#result').fadeIn();
					$('.wrapper').addClass('overlay');
				  	$("input[type=submit]").attr("disabled", "disabled");
					userPoints += 1;
					$('#userPointsLabel').text(userPoints);
				
					var resultHeader = 'You win!';
					var resultMessage = 'You select ' + userPick + ' to fight, while the enemy choose the ' + enemyPick + ' gladiator! The skills and ability of your opponent is useless against your fighter strength. You defeated paper gladiator!';
					$('#resultHeader').text(resultHeader); 	
					$('#resultMessage').text(resultMessage);

			}
		}
		else{
			$('#result').fadeIn();
			$('.wrapper').addClass('overlay');
			$("input[type=submit]").attr("disabled", "disabled");		
			var resultHeader = 'No Fighter Selected!';
			var resultMessage = 'You must choose your Fighter!';
			$('#resultHeader').text(resultHeader); 	
			$('#resultMessage').text(resultMessage);

		}
	});

});