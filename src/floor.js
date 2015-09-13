// Dylan Davidson
// AngryBirds - CAP 4720
//
var Floor = function()
{
  Floor.TEXTURE = THREE.ImageUtils.loadTexture("textures/grass.png");
  Floor.TEXTURE.wrapS = THREE.RepeatWrapping;
  Floor.TEXTURE.wrapT = THREE.RepeatWrapping;
  Floor.TEXTURE.repeat.set(10,100);

  ThreeObject.call(this);

  // Create the BoxGeometry and material and add to scene
  this.geometry = new THREE.BoxGeometry(40,200,1);
  this.material = new THREE.MeshBasicMaterial({
    map: Floor.TEXTURE
  });
  this.object = new Physijs.BoxMesh(this.geometry, this.material, 0);

  this.object.receiveShadow = true;
  base.addToScene(this.object);
}

Floor.prototype = Object.create(ThreeObject.prototype);
