var Game = function()
{
  this.controls = new Controls();
  this.floor = new Floor();
  this.cube1 = new Cube(0,50,5.5);
  this.cube2 = new Cube(-5,55,5.5);
  this.cube3 = new Cube(5,55,5.5);
  this.ball = new Ball();
}

function render()
{
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
