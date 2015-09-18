var Controls = function()
{
  Controls.DEFAULT_VELOCITY = 10;
  Controls.DEFAULT_ANGLE = 10;
  Controls.DEFAULT_DIRECTION = 0;
  this.velocity = Controls.DEFAULT_VELOCITY;
  this.angle = Controls.DEFAULT_ANGLE;
  this.direction = Controls.DEFAULT_DIRECTION;
  this.fire_disabled = false;

  this.velocity_span = document.getElementById('velocity');
  this.velocity_up = document.getElementById('velocity-up');
  this.velocity_down = document.getElementById('velocity-down');

  this.angle_span = document.getElementById('angle');
  this.angle_up = document.getElementById('angle-up');
  this.angle_down = document.getElementById('angle-down');

  this.direction_span = document.getElementById('direction');
  this.direction_right = document.getElementById('direction-right');
  this.direction_left = document.getElementById('direction-left');

  this.ammo_span = document.getElementById('ammo');
  this.ammo_right = document.getElementById('ammo-right');
  this.ammo_left = document.getElementById('ammo-left');

  this.fire_button = document.getElementById('fire');
  this.reset_button = document.getElementById('reset');

  this.velocity_span.innerHTML = this.velocity;
  this.angle_span.innerHTML = this.angle + '°';

  this.addClickListeners();

  window.onkeydown = this.onkeydown.bind(this);

  this.cannon_sound = new Audio("sounds/cannon.wav");
}

Controls.prototype = {
  onkeydown: function(e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if(key == 37) // Left Arrow
      this.directionLeft();
    else if(key == 38) // Up Arrow
      this.angleUp();
    else if(key == 39) // Right Arrow
      this.directionRight();
    else if(key == 40) // Down Arrow
      this.angleDown();
    else if(key == 13) // Enter
      this.ammo_left()
    else if(key == 82) // R
      this.reset();
    else if(key == 32) // Space
      this.fire();
    else if(key == 87) // W
      this.velocityUp();
    else if(key == 83) // S
      this.velocityDown();
  },

  addClickListeners: function() {
    this.velocity_up.addEventListener('click', this.velocityUp.bind(this));
    this.velocity_down.addEventListener('click', this.velocityDown.bind(this));

    this.angle_up.addEventListener('click', this.angleUp.bind(this));
    this.angle_down.addEventListener('click', this.angleDown.bind(this));

    this.direction_right.addEventListener('click', this.directionRight.bind(this));
    this.direction_left.addEventListener('click', this.directionLeft.bind(this));

    this.ammo_left.addEventListener('click', this.ammoRight.bind(this));
    this.ammo_right.addEventListener('click', this.ammoLeft.bind(this));

    this.fire_button.addEventListener('click', this.fire.bind(this));
    this.reset_button.addEventListener('click', this.reset.bind(this));
  },

  velocityUp: function() {
    if(this.velocity >= 20)
      return;

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
    if(this.angle >= 30)
      return;

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
    if(this.direction <= -30)
      return;

    this.direction -= 1;
    this.direction_span.innerHTML = this.direction + '°';
  },

  directionRight: function() {
    if(this.direction >= 30)
      return;

    this.direction += 1;
    this.direction_span.innerHTML = this.direction + '°';
  },

  ammoRight: function() {
    var text = game.bird.nextAmmoRight();
    this.reset();
    this.ammo_span.innerHTML = text;
  },

  ammoLeft: function() {
    var text = game.bird.nextAmmoLeft();
    this.reset();
    this.ammo_span.innerHTML = text;
  },

  fire: function() {
    if(this.fire_disabled)
      return;
    this.cannon_sound.play();
    this.fire_button.classList.add('disabled');
    this.fire_disabled = true;
    game.bird.fire(this.velocity, this.angle, this.direction);
  },

  resetFireButton: function() {
    this.fire_button.classList.remove('disabled');
    this.fire_disabled = false;
  },

  reset: function() {
    this.resetFireButton();
    game.reset();
    game.bird.reset();
  }
}
