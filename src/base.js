// Dylan Davidson
// AngryBirds - CAP 4720
//

// Constants

// Colors
var BLACK = 0;
var OPAQUE_ALPHA = 1.0;

// Dimensions
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

// Renderer Constants
var ENABLE_SHADOW_MAPS = true;

// Camera Constants
var FOV = 45;
var ASPECT_RATIO = WIDTH / HEIGHT;
var NEAR_FRUSTRUM = 0.1;
var FAR_FRUSTRUM = 1000;

// Spotlight Constants
var LIGHT_COLOR = 0xffffff;

// Instantiate Three.js objects and set them up with default values
var Base = function()
{
  this.scene = new Physijs.Scene();
  this.renderer = new THREE.WebGLRenderer();
  this.camera = new THREE.PerspectiveCamera(FOV, ASPECT_RATIO, NEAR_FRUSTRUM, FAR_FRUSTRUM);
  this.spotlight = new THREE.SpotLight(LIGHT_COLOR);

  this.scene.setGravity(new THREE.Vector3(0,0,-10));

  this.setupRenderer();
  this.setupCamera();
  this.setupSpotlight();
}

// Returns the scene object
Base.prototype.getScene = function()
{
  return this.scene;
}

// Adds given object to the scene
Base.prototype.addToScene = function(object)
{
  this.scene.add(object);
}

// Adds given object to the scene
Base.prototype.removeFromScene = function(object)
{
  this.scene.remove(object);
}

// Called every frame to render the scene
Base.prototype.render = function()
{
  this.scene.simulate(); // Run Physics
  this.renderer.render(this.scene, this.camera);
}

// Moves camera to given xyz position
Base.prototype.setCameraPosition = function(x, y, z)
{
  this.camera.position.x = x;
  this.camera.position.y = y;
  this.camera.position.z = z;
}

// Sets the default values for the renderer and adds to page
Base.prototype.setupRenderer = function()
{
  this.renderer.setClearColor(BLACK, OPAQUE_ALPHA);
  this.renderer.setSize(WIDTH, HEIGHT);
  this.renderer.shadowMapEnabled = ENABLE_SHADOW_MAPS;

  // Adds renderer to the page
  document.body.appendChild(this.renderer.domElement);
}

// Sets default values for camera and adds to scene
Base.prototype.setupCamera = function()
{
  this.setCameraPosition(20, -50, 10);
  this.camera.up = new THREE.Vector3(0,0,1);
  this.camera.lookAt(this.scene.position);

  this.addToScene(this.camera);
}

// Sets default values for spotlight and adds to scene
Base.prototype.setupSpotlight = function()
{
  this.scene.add(new THREE.AmbientLight(0x666666));

  this.spotlight.position.set(-20, -50, 20);
  this.spotlight.lookAt(this.scene.position);
  this.spotlight.shadowCameraNear = 20;
  this.spotlight.shadowCameraFar = 300;
  this.spotlight.shadowDarkness = 0.5;
  this.spotlight.castShadow = true;
  this.addToScene(this.spotlight);
}
