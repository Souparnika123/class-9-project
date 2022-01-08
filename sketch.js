
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,50,50);
}

function draw() 
{

background("white")

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  if (keyIsDown(RIGHT_ARROW))
  {
    background("blue")

  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("green");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("red");
  }


  
  drawSprites();
}

