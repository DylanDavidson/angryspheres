// Dylan Davidson
// AngryBirds - CAP 4720
//
var Cube = function(x, y, z)
{
  Cube.COLOR = 0xBC8151;
  Cube.TEXTURE = THREE.ImageUtils.loadTexture("textures/wood.png");
  Cube.TEXTURE.wrapS = THREE.RepeatWrapping;
  Cube.TEXTURE.wrapT = THREE.RepeatWrapping;

  ThreeObject.call(this);

  // Create the BoxGeometry and material and add to scene
  this.geometry = new THREE.BoxGeometry(3, 3, 10);
  this.material = new THREE.MeshLambertMaterial({ map: Cube.TEXTURE });
  this.object = new Physijs.BoxMesh(this.geometry, this.material, 20);

  this.object.castShadow = true;
  this.object.position.set(x,y,z);
  base.addToScene(this.object);
}

Cube.prototype = Object.create(ThreeObject.prototype);
