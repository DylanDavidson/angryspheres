// Dylan Davidson
// AngryBirds - CAP 4720
//
var Ball= function()
{
  Ball.COLOR = 0x00e1e1;
  Ball.VELOCITY_MULTIPLIER = 100;
  Ball.ANGLE_MULTIPLIER = 10;
  Ball.DIRECTION_MULTIPLIER = 10;

  ThreeObject.call(this);

  // Create the BoxGeometry and material and add to scene
  this.geometry = new THREE.SphereGeometry(2.5);
  this.material = new THREE.MeshBasicMaterial({ color: Ball.COLOR });
  this.object = new Physijs.SphereMesh(this.geometry, this.material, 10);

  this.object.castShadow = true;
  this.object.position.set(0,-30,3);
  base.addToScene(this.object);
}

Ball.prototype = Object.create(ThreeObject.prototype);

Ball.prototype.fire = function(velocity, angle, direction) {
  this.object.applyCentralImpulse(this.forceVector(velocity, angle, direction));
}

Ball.prototype.forceVector = function(velocity, angle, direction) {
  return new THREE.Vector3(
      direction * Ball.DIRECTION_MULTIPLIER,
      velocity * Ball.VELOCITY_MULTIPLIER,
      angle * Ball.ANGLE_MULTIPLIER
  );
}
