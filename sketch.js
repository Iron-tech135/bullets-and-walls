var wall,thickness;
var bullet,speed,weight;

function setup() 
{
  createCanvas(1600,400);

  speed = random(50,100);
  weight = random(30,52);
  thickness = random(22,83);

  wall = createSprite(1400,200,thickness,height/2);

  bullet = createSprite(100,200,40,10);
  bullet.velocityX = speed;
}

function draw() 
{
  background(0);  

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * width * speed * speed/(thickness * thickness * thickness);

    if(damage > 10)
    {
      wall.shapeColor = color(255,0,0);
    }

    if(damage < 10)
    {
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true
  }
  return false;
}