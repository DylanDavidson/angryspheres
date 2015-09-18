var Game = function()
{
  this.controls = new Controls();
  this.floor = new Floor();
  this.bird = new Bird();
  this.banner = new Banner();
  this.castle_factory = new CastleFactory();

  this.explosion_sound = new Audio("sounds/explosion.ogg");

  this.current_level = 0;
  this.loadLevel();
}

Game.prototype = {
  loadLevel: function() {
    this.castle_factory.createCastle(this.current_level);

    this.banner.showText("LEVEL " + (this.current_level + 1));
  },

  reset: function() {
    if(this.current_level >= CastleFactory.LEVELS.length)
    {
      this.current_level = 0;
    }

    this.loadLevel();
    this.controls.resetFireButton();
    this.bird.reset();
  },

  removeEnemy: function(enemy) {
   this.explosion_sound.play();
   nextLevel = this.castle_factory.removeEnemy(enemy);
   if(nextLevel) {
     this.current_level += 1;
     this.reset();
   }
  },

  removeParticles: function(particles) {
    this.castle_factory.removeParticles(particles);
  }
}

function render()
{
  game.castle_factory.updateParticles();
  base.render();
  requestAnimationFrame(render);
}

var game;
var base;

window.onload = function()
{
  base = new Base();

  game = new Game();
  render();
}
