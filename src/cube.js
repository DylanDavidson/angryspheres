// Dylan Davidson
// AngryBirds - CAP 4720
//
var Cube = function(position)
{
  Cube.COLOR = 0xBC8151;
  Cube.TEXTURE = THREE.ImageUtils.loadTexture("textures/wood.png");
  Cube.TEXTURE.wrapS = THREE.RepeatWrapping;
  Cube.TEXTURE.wrapT = THREE.RepeatWrapping;

  ThreeObject.call(this);

  this.hit_sound = new Audio("sounds/blockhit.wav");

  // Create the BoxGeometry and material and add to scene
  this.geometry = new THREE.BoxGeometry(3, 3, 10);
  this.material = new THREE.MeshLambertMaterial({ map: Cube.TEXTURE });
  this.object = new Physijs.BoxMesh(this.geometry, this.material, 20);

  this.object.castShadow = true;
  this.object.position.set(position.x, position.y, position.z);
  this.object.addEventListener('collision', this.handleCollision.bind(this));
  base.addToScene(this.object);
}

Cube.prototype = Object.create(ThreeObject.prototype);

Cube.prototype.handleCollision = function(object)
{
  if(object == game.bird.object)
    this.hit_sound.play();
}
