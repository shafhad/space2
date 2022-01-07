class Boat {
    constructor(x, y, width, height, boatPos) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        label: "boat"
      };
     // this.animation = boatAnimation;
      this.speed = 0.05;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
  
      this.boatPosition = boatPos;
      this.image = loadImage("enemy.png");
      World.add(world, this.body);
    }
  
    /*animate() {
      this.speed += 0.05 % 1.1;
    }*/
  
    /*remove(index) {
     // this.animation = brokenBoatAnimation
      this.speed = 0.05;
      this.width = 300;
      this.height = 300;
      this.isBroken = true;
      setTimeout(()=>{
        Matter.World.remove(world, boats[index].body);
        boats.splice(index, 1);
      },2000)
    }*/
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
     // var index = floor(this.speed % this.animation.length);
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(0,0, this.boatPosition, this.width, this.height);
      noTint();
      pop();
    }
  }
  