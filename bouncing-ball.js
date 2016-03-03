/*
  BouncingBall

  The specs. A BouncingBall must:

  1. Be translucent.
  2. Have positions and directions represented by a p5.Vector object.
  3. Move in a random direction once initialize() is called, but each ball should move at the same speed.
  4. Bounce off the edges of the canvas.

  Most of your work in this assignment (in fact, almost certainly all of it) will involve modifying this starter code.

  You may create whatever additional properites and functions you may wish to help you accomplish the behavior above. Please recall that functions should generally be not longer than 5 lines of code.
*/

// the arguments to the constructor function should represent the BouncingBall's starting position
var BouncingBall = function (startingX, startingY) {
    this.radius = random (5,15);
    this.position = new p5.Vector (startingX, startingY);
    //this.speed = (x: 1, y: 1);
};

BouncingBall.prototype = {

  // initialize() is typically only called once, after the object is created.
  initialize: function () {
    this.direction = new p5.Vector(random(-5,5),random(-5,5));
    this.direction.setMag(2);
  },

  // update() should update the state of the object, moving it and updating any properties
  update: function () {
  this.position.add(this.direction);
  this.checkForBounce();

  },

  // display() should draw the object to the canvas, using p5 code
  display: function () {
    this.radius = random (5,15);
    fill(random(0,255),random(0,255),random(0,255), 75);
    ellipse( this.position.x, this.position.y, this.radius * 2 , this.radius * 2);
  },

  bounceX: function () {
    this.direction.x = this.direction.x * -1;
  },

  bounceY: function () {
    this.direction.y = this.direction.y * -1;
  },
  checkForBounce: function () {
      if (this.position.x > width - this.radius / 2) this.bounceX();
      if (this.position.x < this.radius / 2) this.bounceX();
      if (this.position.y > height - this.radius / 2) this.bounceY();
      if (this.position.y < this.radius / 2) this.bounceY();
  }
};
