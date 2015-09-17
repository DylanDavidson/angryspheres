// Dylan Davidson
// AngryBirds - CAP 4720
//
var Bird= function()
{
  Bird.COLOR = 0x00e1e1;
  Bird.VELOCITY_MULTIPLIER = 100;
  Bird.ANGLE_MULTIPLIER = 10;
  Bird.DIRECTION_MULTIPLIER = 10;
  Bird.START_POSITION = new THREE.Vector3(0,-30,3);
  Bird.AMMO_TYPES = ["Sphere", "Cube", "Hexagon"];

  ThreeObject.call(this);

  // Create the BoxGeometry and material and add to scene
  this.material = new THREE.MeshBasicMaterial({ color: Bird.COLOR });

  this.ammo_type = 0;

  this.createObject();

  this.object.position.set(Bird.START_POSITION.x,Bird.START_POSITION.y,Bird.START_POSITION.z);
  this.object.__dirtyPosition = true;
}

Bird.prototype = Object.create(ThreeObject.prototype);

Bird.prototype.createObject = function() {
  var position;
  if(this.object != null)
  {
    position = this.object.position;
    base.removeFromScene(this.object);
    base.removeFromScene(this.edge);
  }
  if(this.ammo_type == 0)
  {
    this.geometry = new THREE.SphereGeometry(2.5);
    this.object = new Physijs.SphereMesh(this.geometry, this.material, 10);
  }
  else if(this.ammo_type == 1)
  {
    this.geometry = new THREE.BoxGeometry(3,3,3);
    this.object = new Physijs.BoxMesh(this.geometry, this.material, 10);
  }
  else if(this.ammo_type == 2)
  {
    this.geometry = new THREE.CylinderGeometry(2,2,2);
    this.object = new Physijs.CylinderMesh(this.geometry, this.material, 10);
  }

  if(position != null)
    this.object.position.set(position.x, position.y, position.z);

  this.edge = new THREE.EdgesHelper(this.object, 0);
  base.addToScene(this.object);
  base.addToScene(this.edge);
}

Bird.prototype.fire = function(velocity, angle, direction) {
  this.object.applyCentralImpulse(this.forceVector(velocity, angle, direction));
}

Bird.prototype.forceVector = function(velocity, angle, direction) {
  return new THREE.Vector3(
      direction * Bird.DIRECTION_MULTIPLIER,
      velocity * Bird.VELOCITY_MULTIPLIER,
      angle * Bird.ANGLE_MULTIPLIER
  );
}

Bird.prototype.nextAmmoRight = function() {
  this.ammo_type = (this.ammo_type + 1) % Bird.AMMO_TYPES.length;
  this.createObject();
  return Bird.AMMO_TYPES[this.ammo_type];
}

Bird.prototype.nextAmmoLeft = function() {
  this.ammo_type = (this.ammo_type - 1);
  if(this.ammo_type < 0)
    this.ammo_type = Bird.AMMO_TYPES.length - 1;

  this.createObject();
  return Bird.AMMO_TYPES[this.ammo_type];
}

Bird.prototype.reset = function() {
  var emptyVector = new THREE.Vector3(0,0,0);
  this.object.setLinearVelocity(emptyVector);
  this.object.setAngularVelocity(emptyVector);
  this.object.position.set(Bird.START_POSITION.x,Bird.START_POSITION.y,Bird.START_POSITION.z);
  this.object.rotation.set(0,0,0, "XYZ");
  this.object.__dirtyPosition = true;
}
