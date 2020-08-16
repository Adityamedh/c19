var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudimage;
var cloudgroup;
var obs1image, obs2image, obs3image, obs4image, obs5image, obs6image;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")

  cloudimage = loadImage("cloud.png");

  obs1image = loadImage("obstacle1.png");
  obs2image = loadImage("obstacle2.png");
  obs3image = loadImage("obstacle3.png");
  obs4image = loadImage("obstacle4.png");
  obs5image = loadImage("obstacle5.png");
  obs6image = loadImage("obstacle6.png");

}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50, 180, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -2;

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

  cloudgroup = new Group();

}

function draw() {

  background(260);

  if (keyDown("space") && trex.y >= 161.5) {
    trex.velocityY = -10;

  }
  obs();
  clouds();
  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  // console.log(trex.y); 

  trex.collide(invisibleGround);
  drawSprites();
}

function clouds() {
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600, 120, 40, 10);
    cloud.y = Math.round(random(80, 120))
    cloud.addImage(cloudimage);
    cloud.scale = 0.5;
    cloud.velocityX = -5;
    cloudgroup.add(cloud);
  }
}

function obs() {
  if (frameCount % 50 === 0) {
    var obs = createSprite(600, 170, 10, 40);
    obs.velocityX = -5;
    var ran = Math.round(random(1, 6));
    switch (ran) {
      case 1:
        obs.addImage(obs1image);
        break;
        case 2:obs.addImage (obs2image);
               break;  
               case 3:obs.addImage (obs3image);
               break;  
               case 4:obs.addImage (obs4image);
               break;  
               case 5:obs.addImage (obs5image);
               break;  
               case 6:obs.addImage (obs6image);
               break;  
    }
    }
  





}