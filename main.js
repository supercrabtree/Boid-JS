(function(){
	var fred;
	var zombies = [];
	var game = new Phaser.Game(this, 'game', 840, 600, init, create, update);

	function init(){
		game.loader.addImageFile("fred", "fred.png");
		game.loader.load();
	}
	function create(){
		fred = game.createSprite(game.stage.width *.5, 0, 'fred');
		fred.drag.x = 1000;
		fred.maxVelocity.x = 250;
		fred.origin.x = 8;
		fred.origin.y = 0;
		console.log(fred);
	}
	function update(){
		if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
    		fred.acceleration.x += 100;
    		fred.flipped = true;
		} else if (game.input.keyboard.justReleased(Phaser.Keyboard.RIGHT)) {
		   fred.acceleration.x = 0;
		}
		if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
		   fred.acceleration.x -= 30;
		   fred.flipped = false;
		}
		else if (game.input.keyboard.justReleased(Phaser.Keyboard.LEFT)) {
		   fred.acceleration.x = 0;
		}
		if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
    		fred.acceleration.y -= 100;
    		fred.flipped = true;
		} else if (game.input.keyboard.justReleased(Phaser.Keyboard.UP)) {
		   fred.acceleration.y = 0;
		}
		if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
		   fred.acceleration.y += 30;
		   fred.flipped = false;
		}
		else if (game.input.keyboard.justReleased(Phaser.Keyboard.DOWN)) {
		   fred.acceleration.y = 0;
		}

	}

})();