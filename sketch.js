var balloon , background;


function preload(){
  backgroundImg = loadImage("Images/cityImage.png");
  balloonImage = loadAnimation(  "Images/HotAirBallon01.png","Images/HotAirBallon02.png","Images/HotAirBallon03.png");
}



function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(800,400);

  balloon = createSprite(400, 200, 50, 50);
  balloon.addAnimation("balloon",balloonImage);
  balloon.scale = 0.4;

 // var balloonPosition=database.ref('balloon/height');
 // balloonPosition.on("value",readPosition,showError);

}

function draw() {
  background(backgroundImg);  
  textSize(18);
  fill("black")
  text("Press arrow keys to move Hot Air Balloon!",50,50);
  
  
 if(keyDown(LEFT_ARROW)){
  balloon.x = balloon.x - 10;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x + 10;
}
else if(keyDown(UP_ARROW)){
  balloon.y = balloon.y - 10;
  
}
else if(keyDown(DOWN_ARROW)){
  balloon.y = balloon.y + 10;
 
}
  drawSprites();
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  balloon.x = position.x;
  balloon.y = position.y;
}



function showError(){
  console.log("Error in writing database");
}