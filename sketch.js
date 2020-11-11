var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var gameState=PLAY
var PLAY=1
var END=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")  
  bananaImage = loadImage("banana.png");
  obstacleImage= loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("MONKEY",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,1000,10)
  ground.velocityX=-4
  ground.x = ground.width/2
  console.log(ground.x)
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() { 
  background("white") 
  

    // score
  stroke("black")
  fill("black")
  textSize(15)
  text("Survival Time:"+score,10,20)
  score=frameCount
  
  //ground velocity
  if(ground.x<0){
    ground.x = ground.width/2
  }
    
  //monkey jump 
  if(keyDown("space")&&(monkey.y>250)){
    monkey.velocityY= -7
  }
      monkey.velocityY=monkey.velocityY+0.3
      monkey.collide(ground)
  
  obs();
  bananas();
  drawSprites();
}

function bananas(){
  if(frameCount%100===0){
    banana=createSprite(400,random(150,200))
    banana.addImage(bananaImage)
    banana.velocityX=-3
    banana.scale=0.1
    bananaGroup.add(banana)
  }
}

function obs(){
  if(frameCount%200===0){
    obstacle=createSprite(400,330)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-3
    obstacle.scale=0.1
    obstacleGroup.add(obstacle)
  }
}





