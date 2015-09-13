// Dylan Davidson
// AngryBirds - CAP 4720
//
var Floor = function()
{
  Floor.COLOR = 0x663300;

  ThreeObject.call(this);

  // Create the BoxGeometry and material and add to scene
  this.geometry = new THREE.BoxGeometry(30,200,1);
  this.material = new THREE.MeshBasicMaterial({ color: Floor.COLOR });
  this.object = new Physijs.BoxMesh(this.geometry, this.material, 0);

  this.object.receiveShadow = true;
  base.addToScene(this.object);
}

Floor.prototype = Object.create(ThreeObject.prototype);
