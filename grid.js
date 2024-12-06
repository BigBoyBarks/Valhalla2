class gridData {
    constructor(x, y) {
        this.isBuilding = false;  
        this.currentFrame = 0; 
        this.maxFrame = 5;   
        this.animationTimer = 0;
        this.animationDuration = 240; // 240 = 4 seconds
        this.coinAnimationCompleted = false;
        this.campfireUpgraded = false;
        this.buildingAnimationStarted = false;
        this.buildingAnimationCompleted = false; 
    }

    buildings() {
        if (offsetX >= 1155 && offsetX <= 1251) { // >CAMPFIRE<
            if (!this.campfireUpgraded) { 
                image(campfireLevel1Blank, 
                    (canvasWidth / 2) - (gridWidth * cellSize / 2) + (1690) - offsetX,
                    (canvasHeight / 2 - campfireLevel1Blank.height / 2) + 127, 
                    campfireLevel1Blank.width + 20, campfireLevel1Blank.height + 20
                );
            }

            if (coinCount >= 4 && keyIsDown(32)) {  
                if (!this.isBuilding && !this.coinAnimationCompleted) {
                    console.log("starting coin animation");
                    this.isBuilding = true;
                    this.currentFrame = 0;  
                    this.animationTimer = 0;
                }
            } 
        } else if (!this.campfireUpgraded) { 
            image(campfireLevel1, 
                (canvasWidth / 2) - (gridWidth * cellSize / 2) + (1690) - offsetX,
                (canvasHeight / 2 - campfireLevel1.height / 2) + 127, 
                campfireLevel1.width + 20, campfireLevel1.height + 20
            );
        }

        if (this.isBuilding) {
            let spriteX = this.currentFrame * 100; 
            image(
                campfireBuildingSprite, 
                (canvasWidth / 2) - (gridWidth * cellSize / 2) + (1690) - offsetX,
                (canvasHeight / 2 - campfireLevel1.height / 2) + 127, 
                campfireLevel1.width + 20, campfireLevel1.height + 20,
                spriteX, 0, 100, 100 
            );

            this.animationTimer++;
            if (this.animationTimer % 10 === 0) { 
                this.currentFrame++;
            }

            if (this.animationTimer >= this.animationDuration) { 
                this.isBuilding = false; 
                this.coinAnimationCompleted = true; 
                coinCount -= 4
                console.log("yepp");
            }
        }

        if (this.coinAnimationCompleted && !this.buildingAnimationStarted && !this.buildingAnimationCompleted) {
            this.buildingAnimationStarted = true; 
            this.currentFrame = 0; 
            this.animationTimer = 0;
        }

        if (this.buildingAnimationStarted && this.currentFrame < 4) { 
            let spriteX = this.currentFrame * 300; 
            image(
                campfireBuildingAnimation,  
                (canvasWidth / 2) - (gridWidth * cellSize / 2) + (1690) - offsetX - 90,
                (canvasHeight / 2 - campfireLevel1.height / 2) + 127 + 20, 
                300, 100, 
                spriteX, 0, 300, 100 
            );

            this.animationTimer++;
            if (this.animationTimer % 20 === 0) { 
                this.currentFrame++;
            }

            if (this.currentFrame >= 4) { 
                this.buildingAnimationStarted = false; 
                this.buildingAnimationCompleted = true;
                this.campfireUpgraded = true; 
                console.log("building done");
                console.log(coinCount)
            }
        }


        if (this.campfireUpgraded) {
            image(campfireLevel2, 
                (canvasWidth / 2) - (gridWidth * cellSize / 2) + (1690) - offsetX,
                (canvasHeight / 2 - campfireLevel2.height / 2) + 127, 
                campfireLevel2.width + 20, campfireLevel2.height + 20
            );
        }

        if (coinCount >= 4 && keyIsDown(32) && this.coinAnimationCompleted) {
            this.coinAnimationCompleted = false; 
            this.isBuilding = true;
            this.currentFrame = 0;
            this.animationTimer = 0;
            this.buildingAnimationCompleted = false; 
        }

        if (offsetX >= 667 && offsetX <= 748) {
            image(wallLevel0Blank, 
                (canvasWidth / 2) - (gridWidth * cellSize / 2) + (1190) - offsetX,
                (canvasHeight / 2 - wallLevel0Blank.height / 2) + 127, 
                wallLevel0Blank.width + 20, wallLevel0Blank.height + 20
            );
        } else {
            image(wallLevel0, 
                (canvasWidth / 2) - (gridWidth * cellSize / 2) + (1190) - offsetX,
                (canvasHeight / 2 - wallLevel0.height / 2) + 127, 
                wallLevel0.width + 20, wallLevel0.height + 20
            );
        }

        if (offsetX >= 1660 && offsetX <= 1748) {
            image(wallLevel0Blank, 
                (canvasWidth / 2) - (gridWidth * cellSize / 2) + (2190) - offsetX,
                (canvasHeight / 2 - wallLevel0Blank.height / 2) + 127, 
                wallLevel0Blank.width + 20,  wallLevel0Blank.height + 20
            );
        } else {
            image(wallLevel0, 
                (canvasWidth / 2) - (gridWidth * cellSize / 2) + (2190) - offsetX,
                (canvasHeight / 2 - wallLevel0.height / 2) + 127, 
                wallLevel0.width + 20, wallLevel0.height + 20
            );
        }
    }
}