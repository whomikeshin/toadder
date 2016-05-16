var MovingObject = require("./movingObject");
var Util = require("./util");

var Mushroom = function (options) {
  this.dim = [80, 60];
  this.vel = [0, 0];
  this.pos = [40 + (160 * Math.floor(Math.random() * 5)), 59];
  this.game = options.game;
  this.imgSource = './images/shroom.png';
  this.show = this.show || false;
};

Mushroom.TIME = Math.floor((Math.random() * 400) + 1);

Mushroom.prototype.type = "Extra";

Util.inherits(Mushroom, MovingObject);

Mushroom.prototype.draw = function (ctx) {
  var fly = this;
  var game = this.game;
  var time = Mushroom.TIME;

  if (time === game.updateTimer()) {
    fly.show = true;
  } else if ((time + 200) < game.updateTimer()) {
    fly.show = false;
  }

  if (fly.show) {
    var shroom = new Image();
    shroom.src = fly.imgSource;

    ctx.drawImage(shroom, fly.pos[0], fly.pos[1], fly.dim[0], fly.dim[1]);
  }
};



module.exports = Mushroom;