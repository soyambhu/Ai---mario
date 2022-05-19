

var mountainImages = [ 'mountains01.png', 'mountains02.png', 'mountains03.png', 'mountains04.png'];
var cloudImages = [ 'cloud01.png', 'cloud02.png'];
var brickImages = [ 'blocks001.png', 'blocks002.png', 'blocks003.png'];
var coinsImags = [ 'coin01.png', 'coin05.png' ];
var pipeImages = [ 'tube.png' ];
var platformImages = [ 'platform.png' ];
var enemyMushroomImage = [ 'enemyMushroom01.png','enemyMushroom02.png'];

var spriteNumber={
  mountain: 6,
  cloud: 10,
  brick: 5,
  pipe: 5,
  coin: 10,
  enemyMushroom: 5,

}



// set every sprites configs
function setSprites(){
  setSpriteGroups();
  loadStaticObjects( mountains, mountainImages, spriteNumber.mountain ,1.5, gameConfig.screenX, gameConfig.screenY-35, gameConfig.screenY-35);
  loadStaticObjects( clouds, cloudImages, spriteNumber.cloud, 0, gameConfig.screenX, 20, gameConfig.screenY*0.5 );
  loadStaticObjects( bricks, brickImages, spriteNumber.brick, gameConfig.screenX*0.1, gameConfig.screenX*0.9, gameConfig.screenY*0.1, gameConfig.screenY*0.7 );
  loadStaticObjects( pipes, pipeImages, spriteNumber.pipe, 50, gameConfig.screenX, gameConfig.screenY-20, gameConfig.screenY+10 );
  loadAnimatedObjects( coins, coinsImags, 'shine', spriteNumber.coin, "get", false, 0, gameConfig.screenX, gameConfig.screenY*0.35, gameConfig.screenY*0.75 );
  loadAnimatedObjects( enemyMushrooms, enemyMushroomImage, 'move', spriteNumber.enemyMushroom, 'live', true, gameConfig.screenX*0.5, gameConfig.screenX, gameConfig.screenY*0.35, gameConfig.screenY*0.75 );
  loadPlatforms();
}


//declare sprite groups 
function setSpriteGroups(){
  //groups 
  bricks = new Group();
  enemyMushrooms = new Group();
  clouds = new Group();
  mountains = new Group();
  pipes = new Group();
  platforms = new Group();
  coins = new Group();
};


//load static object function
function loadStaticObjects( group, imageArray, spriteNumber, randomPosStartX, randomPosEndX, randomPosStartY, randomPosEndY) {
  for(var i = 0; i < spriteNumber; i++) {
    
    // load random image in image array
    var randomNumber=floor((random()*10)%imageArray.length);
    var img = loadImage(imageArray[randomNumber]);

    group[i] = createSprite(random(randomPosStartX, randomPosEndX), random(randomPosStartY, randomPosEndY));
    group[i].addImage(img);
    // group[i].scale=scales;
  }
};

//load animate object function
function loadAnimatedObjects( group, imageArray, animationName, spriteNumber, spriteStatusName, spriteStatusValue,  randomPosStartX, randomPosEndX, randomPosStartY, randomPosEndY) {
  for(var i = 0; i < spriteNumber; i++) {
    
    group[i] = createSprite(random(randomPosStartX, randomPosEndX), random(randomPosStartY, randomPosEndY));
    group[i].addAnimation(animationName, imageArray[0], imageArray[1]);
    group[i].scale = 1.5;
    group[i][spriteStatusName] = spriteStatusValue;

  };
};


// load platforms
function loadPlatforms() {
  img=loadImage('platform.png');
  for(i=0;i<70;i++){
    randomNumber=random();
    if(randomNumber>0.2){
      platforms[i]=createSprite(gameConfig.screenX-i*19,gameConfig.screenY-10);
    }else{
      platforms[i]=createSprite(random(0,gameConfig.screenX),gameConfig.screenY-10);
    }
    platforms[i].addImage(img);
  };
};



// load Mario animation
function MarioAnimation(){
  mario=createSprite(gameConfig.startingPointX, gameConfig.startingPointY, gameConfig.startingPoint, 0.30);
  mario.addAnimation("stand",'mario06.png');
  mario.addAnimation("move",'mario01.png','mario03.png');
  mario.addAnimation("crouch",'mario18.png');
  mario.addAnimation("jump",'mario05.png');
  mario.addAnimation("dead",'mario24.png');
};





