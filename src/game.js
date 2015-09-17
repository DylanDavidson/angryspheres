var Game = function()
{
  this.controls = new Controls();
  this.floor = new Floor();
  this.ball = new Ball();
  this.banner = new Banner();
  this.castle_factory = new CastleFactory();

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
    this.ball.reset();
  },

  removeEnemy: function(enemy) {
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
