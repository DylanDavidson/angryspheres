var Enemy = function(x,y,z) {
  Enemy.COLOR = 0x2ecc71;

  ThreeObject.call(this);
  this.geometry = new THREE.SphereGeometry(2.5);
  this.material = new THREE.MeshBasicMaterial({ color: Enemy.COLOR });
  this.object = new Physijs.SphereMesh(this.geometry, this.material, 10);

  this.object.position.set(x,y,z);

  this.object.addEventListener('collision', this.collision.bind(this));

  base.addToScene(this.object);
}

Enemy.prototype = Object.create(ThreeObject.prototype);

Enemy.prototype.collision = function(other_object) {
  if(other_object == game.ball.object || other_object == game.floor.object)
  {
    base.removeFromScene(this.object);
  }
}
