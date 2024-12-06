let canvasWidth = 1200;
let canvasHeight = (canvasWidth * 2) / 3; // 3:2 aspect ratio
let worldWidth = canvasWidth * 3;
let player;
//let grid
let playerImage;
let groundImage;
let offsetX = canvasWidth; 
let worldX 
let gameState=0;
let backgroundSky
let farClouds
let clouds
let nearClouds
let farTrees
let trees
let nearTrees
let titleScreen
let campfireLevel1
let campfireLevel1Blank
let wallLevel0
let wallLevel0Blank
let cellColour=["white","black","grey","blue"];
let cellSize = 100;
let coinCount = 10;
let campfireBuildingSprite;
const gridHeight = 1;
const gridWidth = 11;
// var buildingGrid = [
//   [0,0,0,0,0,1,0,0,0,0,0]
// ]

function preload() {
  playerImage = loadImage('PlayerWalk.png');
  groundImage = loadImage('Ground.png');
  backgroundSky = loadImage('Background.png')
  farClouds = loadImage('1.png')
  clouds = loadImage('2.png')
  nearClouds = loadImage('3.png')
  farTrees = loadImage('4.png')
  trees = loadImage('5 (with snow).png')
  nearTrees = loadImage('6 (with snow).png')

  titleScreen = loadImage('ValhallaTitleScreen.png')

  campfireLevel1 = loadImage('campfireLvl1.png')
  campfireLevel1Blank = loadImage('campfireLvl1(blank).png')
  campfireLevel2 = loadImage('campfireLvl2.png')
  campfireBuildingSprite = loadImage('campfireLvl1(building).png')
  campfireBuildingAnimation = loadImage('campfireBuildingAnimation.png')

  wallLevel0 = loadImage('wallLvl0.png')
  wallLevel0Blank = loadImage('wallLvl0(blank).png')
  wallLevel1 = loadImage('wallLvl1.png')
  /////////////////////////////////////////////////////////////
  wallBuildingAnimation = loadImage('wallBuildingAnimation.png')
}

function setup() {
  let cnv = createCanvas(canvasWidth, canvasHeight);
  let lineY = (3 * height) / 4; 
  player = new Sprite((width / 2) , lineY);
  grid = new gridData;
  background(128); // grey
  cnv.position((windowWidth - canvasWidth) / 2, (windowHeight - canvasHeight) / 2);
}

function draw() {

  switch(gameState){
    case 0:
      image(titleScreen, 0, 0, canvasWidth, canvasHeight)
      if((mouseX < 740 && mouseX > 460) && (mouseY < 305 && mouseY > 215)){
        if(mouseIsPressed){
          gameState++;
        
        }
      }
      break
    case 1: 

      background(128);
      let groundHeight = 585; 
      let groundY = canvasHeight - groundHeight;

      offsetX += (player.worldX - (offsetX + canvasWidth / 2 - 80)) * 0.3;

      for (let i = 0; i < 3; i++) {
        image(backgroundSky, i * canvasWidth - offsetX * 0.1, 0, canvasWidth, canvasHeight);
        image(farClouds, i * canvasWidth - offsetX * 0.2, 0, canvasWidth, canvasHeight);
        image(clouds, i * canvasWidth - offsetX * 0.3, 0, canvasWidth, canvasHeight);
        image(nearClouds, i * canvasWidth - offsetX * 0.5, 0, canvasWidth, canvasHeight);
        image(farTrees, i * canvasWidth - offsetX * 0.7, 0, canvasWidth, canvasHeight);
        image(trees, i * canvasWidth - offsetX * 0.8, 0, canvasWidth, canvasHeight);
        image(nearTrees, i * canvasWidth - offsetX * 1, 0, canvasWidth, canvasHeight);
        //console.log(player.worldX)
        //console.log(offsetX)
        //console.log(canvasWidth)
        //console.log(canvasHeight)
      }
  
      player.move(); 
      player.show(); 
      grid.buildings();

     for (let i = 0; i < 3; i++) {
        image(groundImage, i * canvasWidth - offsetX, groundY, canvasWidth, groundHeight); 
      }

      fill(128, 128, 128);
      textSize(24);
      textAlign(TOP);
      text("Coins: " + coinCount, (canvasWidth / 2) - 50, 10);

      fill(0, 255, 0);
      textSize(24);
      textAlign(LEFT, TOP)
      text("FPS: " + Math.round(frameRate()), 10, 10);

      break

   } 
}