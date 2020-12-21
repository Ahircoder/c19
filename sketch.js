var ball,img,paddle;
function preload() {
ball1=loadImage("ball.png")
paddle1=loadImage("paddle.png")  
}
function setup() {
  createCanvas(400, 400);
   ball=createSprite(200,200)
   ball.addImage(ball1)

paddle=createSprite(380,50)  
paddle.addImage(paddle1)
  
}

function draw() {
  background(205,153,0);
  if (keyDown("space")){
 ball.velocityX = 4
ball.velocityY = 6
}
paddle.y=mouseY;
  ball.bounceOff(paddle)
edges=createEdgeSprites();
ball.bounceOff(edges[0]);
ball.bounceOff(edges[2]);
 ball.bounceOff(edges[3]);
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

