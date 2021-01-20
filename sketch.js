var canvas;
var music;
var ball;
var surface1,surface2,surface3,surface4;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    ball=createSprite(random(20,750,20,20));
 surface1 =createSprite(700,575,200,50);
 surface2 =createSprite(500,575,200,50);
 surface3 =createSprite(300,575,200,50);
 surface4 =createSprite(100,575,200,50);

 ball.shapecolor="white";
 surface1.shapeColor="yellow";
 surface2.shapeColor="blue";
 surface3.shapeColor="red";
 surface4.shapeColor="purple";

 ball.velocityX=4;
 ball.velocityY=0.5;

}

function draw() {
    background("brown");
    createEdgeSprites();

    ball.bounceOff(edges);
    ball.bounceOff(surface1);
    ball.bounceOff(surface2);
    ball.bounceOff(surface3);
    ball.bounceOff(surface4);

    if(isTouching(ball,surface1)){

        ball.shapeColor="yellow";
        surface1.shapeColor="yellow";
    }

    else if(isTouching(ball,surface2)){

      ball.shapeColor="blue";
      surface2.shapeColor="blue";
   }

   else if(isTouching(ball,surface3)){

      ball.shapeColor ="red";
      surface3.shapeColor ="red";
   }

   else if(isTouching(ball,surface4)){

      ball.shapeColor="purple";
      surface4.shapeColor="purple";
   }

     drawSprites();
}
    
function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
        return true;

  }

  else {
    return false;
  }
}