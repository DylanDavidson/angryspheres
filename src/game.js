var Game = function()
{
  this.controls = new Controls();
  this.floor = new Floor();
  this.cube1 = new Cube(0,50,5.5);
  this.cube2 = new Cube(-5,55,5.5);
  this.cube3 = new Cube(5,55,5.5);
  this.ball = new Ball();
  this.enemies = [new Enemy(0,50,13), new Enemy(-5,55,13), new Enemy(5,55,13)];
  this.particles = [];
}

Game.prototype = {
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
