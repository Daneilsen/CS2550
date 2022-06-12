function setup(){

    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)

    noLoop()
}

function draw(){

    background(100)

    translate (width / 2, height / 2 + 200)

    branch(100)

}

function branch(len){

    push()
    if(len>10){
        strokeWeight(map(len,10,100,1,15))
        stroke(70,40,20)
        line(0, 0, 0, -len)
        translate(0, -len)
        rotate (random(-20, -30))
        branch(len * random(0.7, 0.9))
        rotate(random(50,60))
        branch(len * random(0.7, 0.9))
    } else {
      var r = 250 + random(-20 , -30)
      var g = 120 + random(-20 , -30)
      var b = 3 + random(-20 , -30)
      
      fill(r, g, b, 150)
      noStroke()
      
      beginShape()
      for (var i = 15; i < 135; i++ ){
        var rad = 15
        var x = rad * cos(i)
        var y = rad * sin(i)
        vertex(x,y)
      }
      for ( i = 15; i > 40; i-- ){
        var rad = 15
        var x = rad * cos(i)
        var y = rad * sin(-i)+20
        vertex(x,y)
      }
      endShape(CLOSE)
    }
    pop()

}
