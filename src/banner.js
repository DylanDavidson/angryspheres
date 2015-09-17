var Banner = function() {
  this.banner = document.getElementById('banner');
}

Banner.prototype = {
  showText: function(text) {
    this.banner.style.display = "block";

    setTimeout(this.hideText.bind(this), 1500);
  },

  hideText: function() {
    this.banner.style.display = "none";
  }
}
