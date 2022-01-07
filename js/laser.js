class Cannon{
    constructor(x,y,width,height,angle){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.angle = angle
    }



display (){
    if (keyIsDown(RIGHT_ARROW) && this.angle < 0.2) {
        this.angle += 0.02;
      }
  
      if (keyIsDown(LEFT_ARROW) && this.angle > -0.25) {
        this.angle -= 0.02;
      }

    fill ("white")
    push ()
    translate (this.x,this.y)
    rotate (this.angle)
    rect (7,10,this.width,this.height)
    pop ()
    //arc (this.x-93,this.y+5,60,75,PI,TWO_PI)
    noFill()
}

 }