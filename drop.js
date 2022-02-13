function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, .2, 3);
  this.yspeed = map(this.z, 0, 20, 5, 7);
  this.xspeed = 0;
  this.speed = this.yspeed + this.xspeed;

  this.fall = function() {

    var grav = map(this.z, 0, 20, .02, .2);
    if(mouseIsPressed){

      var yforce = grav/(Math.abs(this.y - mouseY))
      var xforce = grav/(Math.abs(this.x - mouseX))

      if(mouseY < this.y){ //if mouse is above drop subtract force else add froce
        this.yspeed = this.yspeed - yforce
      } else {
        this.yspeed = this.yspeed + yforce
      }

      if(mouseX < this.x){ //if mouse is to the left of drop subtract force else add force
        this.xspeed = this.xspeed - xforce
      } else {
        this.xspeed = this.xspeed + xforce
      }
    }


    this.yspeed = this.yspeed + grav;
    this.y = this.y + this.yspeed;
    this.x = this.x + this.xspeed;
    this.speed = this.yspeed + this.xspeed;
    var grav = map(this.z, 0, 20, .02, .2);



    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 5, 7);
    }
  };

  this.show = function() {
    var thick = map(this.z, 0, 20, 0.1, 2);
    strokeWeight(thick);
    stroke(51, 45, 207, 255);
    line(this.x, this.y, this.x, this.y + this.len);
  };
}