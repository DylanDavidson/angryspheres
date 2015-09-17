var CastleFactory = function() {
  this.cubes = [];
  this.enemies = [];
  this.particles = [];
}

CastleFactory.prototype = {
  createCastle: function(level) {
    this.reset();
    this.level = CastleFactory.LEVELS[level];

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

  updateParticles: function() {
    for(index in this.particles)
    {
      this.particles[index].update();
    }
  },

  removeEnemy: function(enemy) {
    this.enemies.splice(this.enemies.indexOf(enemy), 1);

    this.particles.push(new Particle(enemy.object.position));

    if(this.enemies.length <= 0)
      return true;

    return false;
  },

  removeParticles: function(particles) {
    this.particles.splice(this.particles.indexOf(particles), 1);
  },

  reset: function() {
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
  }
}

CastleFactory.LEVELS = [
  {
    cubes: [
      new THREE.Vector3(0, 50, 5.5),
      new THREE.Vector3(-5, 55, 5.5),
      new THREE.Vector3(5, 55, 5.5)
    ],
    enemies: [
      new THREE.Vector3(0, 50, 13),
      new THREE.Vector3(-5, 55, 13),
      new THREE.Vector3(5, 55, 13)
    ]
  },
  {
    cubes: [
      new THREE.Vector3(0, 50, 5.5),
      new THREE.Vector3(-5, 50, 5.5),
      new THREE.Vector3(5, 50, 5.5),
      new THREE.Vector3(-10, 50, 5.5),
      new THREE.Vector3(0, 45, 5.5),
      new THREE.Vector3(0, 45, 16),
      new THREE.Vector3(10, 50, 5.5)
    ],
    enemies: [
      new THREE.Vector3(0, 50, 13),
      new THREE.Vector3(-10, 50, 13),
      new THREE.Vector3(10, 50, 13)
    ]
  }
];
