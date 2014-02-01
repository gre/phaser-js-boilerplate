// TODO: add commentaries
'use strict';
var Phaser = require('Phaser'),

Splash = function (game) {
  this.logo = null;
};

module.exports = Splash;

Splash.prototype = {

  create: function () {
    var midx = 800/2,
      midy = 600/2,
      _this = this,
      logo, tween;

    logo = this.logo = this.add.sprite(midx, midy, 'phaserLogo');
    logo.anchor.x = logo.anchor.y = 0.5;

    tween = this.add.tween(logo);

    tween.onComplete.add(function() {
      _this.game.state.start('Preloader');
    });

    tween
      .to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None)
      .start();
  }

};