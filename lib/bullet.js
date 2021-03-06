var Util = require("./util");
var MovingObject = require("./movingObject");

var DEFAULTS = {
  COLOR: "#FF0000",
  LEVEL: 1
};

var Bullet = function (options = {}) {

  var xCoord = options.pos[0],
      yCoord = options.pos[1],
      xDir = xCoord === 0 ? 1 : -1;

  options.pos[0] += (startPostion(options.vehicleNum) * xDir);
  options.color = DEFAULTS.COLOR;
  options.vel = options.vel ||
    Util.rowVec(xDir, speedConstant(yCoord) * options.level);
  options.dim = options.dim || Util.dim(yCoord);

  if (options.pos[1] === 390) {
    options.imgSource = './images/chomper.png';
  } else {
    options.imgSource = options.imgSource ||
      xCoord === 0 ?
      './images/bullet_right.png' : './images/bullet_left.png';
  }

  MovingObject.call(this, options);
};

var speedConstant = function (yCoord) {
  if (yCoord === 390) {
    return 0.8;
  } else if (yCoord === 435) {
    return 0.9;
  } else if (yCoord === 480) {
    return 0.75;
  } else if (yCoord === 525) {
    return 0.6;
  } else {
    return 0.5;
  }
};

var startPostion = function (vehicleNum) {
  return (vehicleNum * 250 + Math.round((Math.random() * 50)));
};

Util.inherits(Bullet, MovingObject);

Bullet.prototype.type = "Bullet";

Bullet.prototype.draw = function (ctx) {
  var bullet = new Image();

  bullet.src = this.imgSource;
  ctx.drawImage(bullet, this.pos[0], this.pos[1], this.dim[0], this.dim[1]);
};

module.exports = Bullet;
