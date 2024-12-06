class Sprite {
    constructor(x, y) {
      this.x = x;
      this.y = y - 87; 
      this.frame = 0;
      this.maxFrame = 8;
      this.direction = 0; // 0 = idle, 1 = left, 3 = right
      this.lastDirection = 0;
      this.spriteWidth = 150; 
      this.spriteHeight = 102; 
      this.speed = 8;
      this.worldX = canvasWidth + x ; // position in the world
      
    }
  
    move() {
      if (frameCount % 6 == 0) {
        if (keyIsDown(16)) { // "Shift"
          this.speed = 16;
          this.frame += 2;
        } else {
          this.speed = 8;
          this.frame++;
        }
    
        if (this.frame >= this.maxFrame) {
          this.frame = 0;
        }
  
        if (keyIsDown(65)) { // "A"
          this.direction = 1;
          this.lastDirection = 1;
          this.worldX -= this.speed;
        } else if (keyIsDown(68)) { // "D"
          this.direction = 3;
          this.lastDirection = 3;
          this.worldX += this.speed;
        } else {
          this.direction = 0; // idle
          this.frame = 0; // standing still
        }
      }
      this.worldX = constrain(this.worldX, 0, worldWidth - this.spriteWidth);
      this.x = this.worldX - offsetX; 
    }
  
    show() {
      //console.log(this.worldX)
      let spriteX = this.frame * this.spriteWidth;
      let spriteY;
  
      if (this.direction === 1) {
        spriteY = 0; 
      } else if (this.direction === 3) {
        spriteY = this.spriteHeight; 
      } else {
        if (this.lastDirection === 1) {
          spriteY = this.spriteHeight * 3; 
        } else {
          spriteY = this.spriteHeight * 2; 
        }
        this.frame = 0;
      }
  
      image(
        playerImage,
        this.x , this.y , this.spriteWidth, this.spriteHeight,
        spriteX, spriteY, this.spriteWidth, this.spriteHeight
      );
    }
  }