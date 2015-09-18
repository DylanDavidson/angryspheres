var Score = function() {
  Score.NINETY_DEG_IN_RADIAN = 1.57079633;

  this.material = new THREE.MeshBasicMaterial({ color: 0x16a085 });
  this.setScore(3);
}

Score.prototype = {
  setScore: function(enemies_left) {
    if(this.object != null)
      base.removeFromScene(this.object);

    this.geometry = new THREE.TextGeometry(enemies_left + " Left", { size: 12, height: 12 });
    this.object = new THREE.Mesh(this.geometry, this.material);

    this.object.rotateOnAxis(new THREE.Vector3(1,0,0), Score.NINETY_DEG_IN_RADIAN);
    this.object.position.set(-24, 80, 18);

    base.addToScene(this.object);
  }
}
