var Game = function()
{
  this.controls = new Controls();
  this.floor = new Floor();
  this.ball = new Ball();

  this.current_level = 1;
  this.loadLevel();
}

Game.prototype = {
  loadLevel: function() {
    this.level = Game.LEVELS[this.current_level];

    this.cubes = [];
    this.enemies = [];
    this.particles = [];

    for(var i = 0; i < this.level.cubes.length; i++)
    {
      this.cubes.push(new Cube(this.level.cubes[i]));
    }

    for(var i = 0; i < this.level.enemies.length; i++)
    {
      this.enemies.push(new Enemy(this.level.enemies[i]));
    }
  },

  reset: function() {
    if(this.current_level >= Game.LEVELS.length)
    {
      this.current_level = 0;
    }

    for(var i = 0; i < this.cubes.length; i++)
    {
      base.removeFromScene(this.cubes[i].object);
    }

    for(var i = 0; i < this.enemies.length; i++)
    {
      base.removeFromScene(this.enemies[i].object);
    }

    for(var i = 0; i < this.particles.length; i++)
    {
      base.removeFromScene(this.particles[i].object);
    }

    this.loadLevel();
    this.controls.resetFireButton();
    this.ball.reset();
  },

  removeEnemy: function(enemy) {
    this.enemies.splice(this.enemies.indexOf(enemy), 1);
    if(this.enemies.length <= 0)
    {
      this.current_level += 1;
      this.reset();
    }
  },

  addParticles: function(particles) {
    this.particles.push(particles);
  },

  removeParticles: function(particles) {
    this.particles.splice(this.particles.indexOf(particles), 1);
  }
}

function render()
{
  for(index in game.particles)
  {
    game.particles[index].update();
  }
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
