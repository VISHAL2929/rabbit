var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
function preload(){
  gardenImg = loadImage("garden.png");

  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



// any drop thigs

}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

 

rabbit.velocityX=(3)
rabbit.velocityX=(-3)
spwanapple()
rabbit.x=World.mouseX
  drawSprites();
}

function spwanapple(){
  
if(frameCount%100===0){
  apple = createSprite(200,20);
  apple.addImage(appleImg)
  apple.scale=0.05
  apple.velocityY=(3);
apple.x=Math.round(random(0,400))
}
}