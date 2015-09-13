// Dylan Davidson
// AngryBirds - CAP 4720
//
var Floor = function()
{
  Floor.COLOR = new THREE.Color().setHSL( 0.3, 0.75, ( 10 / 15 ) * 0.4 + 0.1 );
  Floor.TEXTURE = THREE.ImageUtils.loadTexture("textures/grass.png");
  Floor.TEXTURE.wrapS = THREE.RepeatWrapping;
  Floor.TEXTURE.wrapT = THREE.RepeatWrapping;
  Floor.TEXTURE.repeat.set(10,100);

  ThreeObject.call(this);

  // Create the BoxGeometry and material and add to scene
  this.geometry = new THREE.BoxGeometry(30,200,1);
  this.material = new THREE.MeshBasicMaterial({
    map: Floor.TEXTURE
  });
  this.object = new Physijs.BoxMesh(this.geometry, this.material, 0);

  this.object.receiveShadow = true;
  base.addToScene(this.object);
}

Floor.prototype = Object.create(ThreeObject.prototype);
