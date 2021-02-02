var fixedRect, movingRect;
var car,wall
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(250,150,70,90);
  car.shapeColor="yellow"
  wall=createSprite(1000,150,30,100);
  wall.shapeColor="brown"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  car.velocityX=5
 if(isTouching(car,wall)){
   car.shapeColor="blue"
   car.velocityX=0
   wall.shapeColor="green"
   wall.velocityY=-5
 }
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true
}
else {
  return false
  
}
}