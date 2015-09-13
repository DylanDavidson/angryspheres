// Dylan Davidson
// AngryBirds - CAP 4720
//
var Cube = function(x, y, z)
{
  Cube.COLOR = 0x27ae60;

  ThreeObject.call(this);

  // Create the BoxGeometry and material and add to scene
  this.geometry = new THREE.BoxGeometry(3, 3, 10);
  this.material = new THREE.MeshBasicMaterial({ color: Cube.COLOR });
  this.object = new Physijs.BoxMesh(this.geometry, this.material, 20);

  this.object.castShadow = true;
  this.object.position.set(x,y,z);
  base.addToScene(this.object);
}

Cube.prototype = Object.create(ThreeObject.prototype);
