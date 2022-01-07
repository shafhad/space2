const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var balls = []

let engine;
let world;

var spaceship,spaceshipImg,backgroundImg;
var cannon,enemyImg,enemy,boats;
var boats=[];

function preload(){
spaceshipImg = loadImage("spaceship.png")
backgroundImg = loadImage("space.png")
enemyImg = loadImage("enemy.png")
}

function setup() {
canvas = createCanvas(1800,800);
engine = Engine.create();
  world = engine.world;
  angle = 0

 spaceship = new Spaceship(180, 380, 350, 400);
 cannon = new Cannon(300,370,200,10,angle);
 cannonball = new CannonBall(cannon.x , cannon.y)

 


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background("pink");
  image(backgroundImg,0,0,width,height)
  Engine.update(engine);
   spaceship.display();
  cannon.display();
  cannonball.display()

showBoats();

  for(var i=0 ; i < balls.length; i++){
    showCannonBalls(balls[i],i)
  }
}

//function keyReleased(){
 // if (keyCode === 32){
 //   cannonball.shoot()
 // }
//}

function keyPressed(){
  if(keyCode === 32){
   var cannonball = new CannonBall(cannon.x,cannon.y)
   balls.push(cannonball)
  }
}

function showCannonBalls(ball,index){
  ball.display()
  if(ball.body.position.x >= width || ball.body.position.y >= height-50){
    Matter.World.remove(world,ball.body)
    balls.splice(index,1)
  }
}

function showBoats() {
  if (boats.length > 0) {
    if (
      boats.length < 4 &&
      boats[boats.length - 1].body.position.x < width - 300
    ) {
      var positions = [-40, -60, -70, -20];
      var position = random(positions);
      var boat = new Boat(
        width,
        height - 100,
        170,
        170,
        position
      );

      boats.push(boat);
    }

    for (var i = 0; i < boats.length; i++) {
      Matter.Body.setVelocity(boats[i].body, {
        x: -0.9,
        y: 0
      });

      boats[i].display();
      

    }
  } else {
    var boat = new Boat(width, height - 60, 170, 170, -60);
    boats.push(boat);
  }
}


function keyReleased() {
  if (keyCode === 32) {
   balls[balls.length-1].shoot()
  }
}