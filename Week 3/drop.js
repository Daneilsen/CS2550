function Drop() {
  this.x = random(width);
  this.y = random(-10, -height*4);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, .2, 3);
  this.yspeed = map(this.z, 0, 20, 5, 7);
  this.xspeed = 0;
  this.speed = this.yspeed + this.xspeed;
  var yDiff = 50;
  var xDiff = 50;
  var distance = 50;
  var grav = map(this.z, 0, 20, .02, .08);
  var yforce = 0;
  var xforce = 0;
  var force = 0;
  var a = 0;
  var g =0; //gravitational force
  var drag = 0.02;
  var dragC = map(this.z, 0, 20, .00025, .0006); //drag coefficient
  //angelMode(DEGREES);

  this.fall = function() {

    if(mouseIsPressed){

    yDiff = mouseY - this.y;
    xDiff = mouseX - this.x;
    distance = sqrt(sq(xDiff)+sq(yDiff));
    distance = map(distance, 2, (width*2), .8, 11);

      force = sq(log(1.5+g))/distance;
      g += 0.02;        
      

      a = atan2(yDiff/2, xDiff/2);

      yforce = force*sin(a);
      xforce = force*cos(a);

     // print("yforce =" + yforce.toString() +   "\n  xforce =" + xforce.toString() +'\n'+ a.toString());

      this.yspeed = this.yspeed + yforce;
      this.xspeed = this.xspeed + xforce;

     // print("yspeed=" + this.yspeed.toString());
     // print("xspeed=" + this.xspeed.toString());

    } else {
      g = 0;
    }


    this.yspeed = this.yspeed + grav;
    this.speed = abs(this.yspeed) + abs(this.xspeed);
    drag = dragC*sq(this.speed);

    a = atan2(this.yspeed, this.xspeed);
   // print(sin(a));

 if(this.speed != 0){

      this.xspeed = this.xspeed - (drag*cos(a));
      this.yspeed = this.yspeed - (drag*sin(a));  
     // print("xspeed=" + this.xspeed.toString() + "\n speed =" + this.speed.toString() + " \n Drag X=" + (drag*cos(a)));
    }

if(this.yspeed != 0){

    this.yspeed = this.yspeed - (drag*sin(a));
    }

  

    this.y = this.y + this.yspeed;
    this.x = this.x + this.xspeed;


    if (this.y > height*3) {
      this.y = random(-(height*4), -10);
      this.yspeed = 1; //map(this.z, 0, 20, 5, 7);
    }
    if(this.x > width*4 || this.x < -(width*4)){
      this.x = random(width)
      this.y = random(-(height*4), -10);
      this.xspeed = 0;
      this.yspeed = 0;
    }
  };

  this.show = function() {
    
    //print(map(speed, 0, 16, 155, 255, true));
    
    var thick = map(this.z, 0, 20, 1, 8);
    strokeWeight(thick);

    stroke(90, 167, 250, map(this.speed, 0, 10, 215, 255, true));

    line(this.x, this.y, this.x, this.y + this.len);
  };
}
