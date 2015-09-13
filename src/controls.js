var Controls = function()
{
  Controls.DEFAULT_VELOCITY = 10;
  Controls.DEFAULT_ANGLE = 10;
  Controls.DEFAULT_DIRECTION = 0;
  this.velocity = Controls.DEFAULT_VELOCITY;
  this.angle = Controls.DEFAULT_ANGLE;
  this.direction = Controls.DEFAULT_DIRECTION;

  this.velocity_span = document.getElementById('velocity');
  this.velocity_up = document.getElementById('velocity-up');
  this.velocity_down = document.getElementById('velocity-down');

  this.angle_span = document.getElementById('angle');
  this.angle_up = document.getElementById('angle-up');
  this.angle_down = document.getElementById('angle-down');

  this.direction_span = document.getElementById('direction');
  this.direction_right = document.getElementById('direction-right');
  this.direction_left = document.getElementById('direction-left');

  this.fire_button = document.getElementById('fire');
  this.reset_button = document.getElementById('reset');

  this.velocity_span.innerHTML = this.velocity;
  this.angle_span.innerHTML = this.angle + '°';

  this.addClickListeners();
}

Controls.prototype = {
  addClickListeners: function() {
    this.velocity_up.addEventListener('click', this.velocityUp.bind(this));
    this.velocity_down.addEventListener('click', this.velocityDown.bind(this));

    this.angle_up.addEventListener('click', this.angleUp.bind(this));
    this.angle_down.addEventListener('click', this.angleDown.bind(this));

    this.direction_right.addEventListener('click', this.directionRight.bind(this));
    this.direction_left.addEventListener('click', this.directionLeft.bind(this));

    this.fire_button.addEventListener('click', this.fire.bind(this));
    this.reset_button.addEventListener('click', this.reset.bind(this));
  },

  velocityUp: function() {
    this.velocity += 1;
    this.velocity_span.innerHTML = this.velocity;
  },

  velocityDown: function() {
    if(this.velocity <= 1)
      return;

    this.velocity -= 1;
    this.velocity_span.innerHTML = this.velocity;
  },

  angleUp: function() {
    this.angle += 1;
    this.angle_span.innerHTML = this.angle + '°';
  },

  angleDown: function() {
    if(this.angle <= 0)
      return;

    this.angle -= 1;
    this.angle_span.innerHTML = this.angle + '°';
  },

  directionLeft: function() {
    this.direction -= 1;
    this.direction_span.innerHTML = this.direction + '°';
  },

  directionRight: function() {
    this.direction += 1;
    this.direction_span.innerHTML = this.direction + '°';
  },

  fire: function() {
    game.ball.fire(this.velocity, this.angle, this.direction);
  },

  reset: function() {
    game.ball.reset();
  }
}
