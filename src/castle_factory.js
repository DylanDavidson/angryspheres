var CastleFactory = function() {
  this.cubes = [];
  this.enemies = [];
  this.particles = [];
  this.score = new Score();
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

    this.score.setScore(this.enemies.length);
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

    this.score.setScore(this.enemies.length);

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
      new THREE.Vector3(5, 55, 5.5),
      new THREE.Vector3(0, 55, 5.5)
    ],
    enemies: [
      new THREE.Vector3(0, 50, 13),
      new THREE.Vector3(-5, 55, 13),
      new THREE.Vector3(5, 55, 13)
    ]
  },
  {
    cubes: [
      new THREE.Vector3(0, 25, 5.5),
      new THREE.Vector3(0, 25, 16),
      new THREE.Vector3(0, 30, 5.5),
      new THREE.Vector3(0, 35, 5.5),
      new THREE.Vector3(0, 45, 5.5),
      new THREE.Vector3(0, 50, 5.5),
      new THREE.Vector3(0, 55, 5.5),
      new THREE.Vector3(0, 60, 5.5)
    ],
    enemies: [
      new THREE.Vector3(0, 45, 13),
      new THREE.Vector3(0, 50, 13),
      new THREE.Vector3(0, 55, 13)
    ]
  },
  {
    cubes: [
      new THREE.Vector3(0, 40, 5.5),
      new THREE.Vector3(3, 40, 5.5),
      new THREE.Vector3(-3, 40, 5.5),
      new THREE.Vector3(6, 40, 5.5),
      new THREE.Vector3(-6, 40, 5.5),
      new THREE.Vector3(0, 43, 5.5),
      new THREE.Vector3(3, 43, 5.5),
      new THREE.Vector3(-3, 43, 5.5),
      new THREE.Vector3(6, 43, 5.5),
      new THREE.Vector3(-6, 43, 5.5),
      new THREE.Vector3(0, 46, 5.5),
      new THREE.Vector3(3, 46, 5.5),
      new THREE.Vector3(-3, 46, 5.5),
      new THREE.Vector3(6, 46, 5.5),
      new THREE.Vector3(-6, 46, 5.5),
      new THREE.Vector3(0, 40, 16),
      new THREE.Vector3(6, 40, 16),
      new THREE.Vector3(-6, 40, 16)
    ],
    enemies: [
      new THREE.Vector3(-3, 45, 13),
      new THREE.Vector3(3, 45, 13)
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
