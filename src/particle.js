// Dylan Davidson
// Angry Birds - CAP 4720
//

// Helper object to display particle explosion when player scores
var Particle = function(position)
{
  Particle.COUNT = 700;
  this.x = position.x;
  this.y = position.y;
  this.z = position.z;
  this.geometry = new THREE.Geometry();
  this.material = new THREE.PointCloudMaterial({ color: 'white', size: 1, transparent: true });
  this.stopped = false;

  // Sets up velocity for each particle
  for(var i = 0; i < Particle.COUNT; i++)
  {
    var particle = new THREE.Vector3(this.x, this.y, this.z);

    var velocity = [Math.random() * 0.7, Math.random() * 0.7, Math.random() * 0.7];
    for(var j = 0; j < velocity.length; j++)
    {
      if(Math.random() < 0.5)
      {
        velocity[j] *= -1;
      }
    }
    particle.velocity = new THREE.Vector3(velocity[0], velocity[1], velocity[2]);
    // Adds particle to geometry object
    this.geometry.vertices.push(particle);
  }

  this.object = new THREE.PointCloud(this.geometry, this.material)

  base.addToScene(this.object);
}

// Called each frame to update position of particles and move them across screen
Particle.prototype.update = function()
{
  if(this.stopped)
  {
    return;
  }

  if(this.material.opacity <= 0)
  {
    game.removeParticles(this);
    base.removeFromScene(this.object);
    return;
  }
  this.material.opacity -= 0.01;

  for(var i = 0; i < Particle.COUNT; i++)
  {
    var particle = this.geometry.vertices[i];
    particle.x += particle.velocity.x;
    particle.y += particle.velocity.y;
    particle.z += particle.velocity.z;
  }
  this.object.geometry.verticesNeedUpdate = true;
}

// Stops moving the particles when called
Particle.prototype.stop = function()
{
  this.stopped = true;
}
