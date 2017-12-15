import {levelImages} from "../../imgComponents/levelImages";
import {BetweenLevels} from "./BetweenLevels";
import {commonImages} from "../../imgComponents/commonImages";
import {Sun} from "../../otherComponents/sun";
import {Bullet} from "../../plantsComponents/bulletNormal";
import {Sunflower} from "../../plantsComponents/sunflower";
import {CherryBomb} from "../../plantsComponents/cherryBomb";
import {AllUnitInTheMap} from "./AllUnitInTheMap";

class LevelTwo {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.backgroundPositionX = 0;
        this.animationPositionX = 0;
        this.numberOfSuns = 1000;
        this.toPlantBind = null;
        this.receivingSunsBind = null;
        this.drawElementsBind = null;
        this.drawGardenBind = null;
        this.createPlantUnitBind = null;
        this.awardingBind = null;
        this.awardingEventBind = null;
        this.levelTimeLinePosition = 0;
        this.suns = [];
        this.firstPlant = 0;
        this.chosenSuns = [];
        this.checkComingZombie = 0;
        this.levelUp = 0;
        this.stopLevel = 0;
        this.once = 0;
        this.stopAnimation = 0;
        this.menu = commonImages.menu;
        this.menuOpen = 0;
        this.frameWaiting = 0;
        this.commingZombieTimer = 0;
        this.sunTimer = 0;
        this.sunDestroyTimer = 0;
        this.openFireTimer = 0;
        this.awardTimer = 0;
        this.gameOver = 0;
        this.awardCard = null;
        this.allUnitInTheMap = null;
    }

    startGame() {
        this.context.font = '24px Arial';
        this.context.textAlign = 'center';

        this.levelTimeLinePosition = 0;
        this.awardCard = new CherryBomb(this.context);
        this.allUnitInTheMap = new AllUnitInTheMap(this.canvas, this.context, 2);

        this.awardingEventBind = this.awardingEvent.bind(this);
        this.toPlantBind = this.toPlant.bind(this);
        this.receivingSunsBind = this.receivingSuns.bind(this);
        this.drawElementsBind = this.drawElements.bind(this);
        this.drawGardenBind = this.drawGarden.bind(this);
        this.createPlantUnitBind = this.createPlantUnit.bind(this);
        this.awardingBind = this.awarding.bind(this);

        this.context.drawImage(levelImages.backgroundOne, 0, 0);
        requestAnimationFrame(this.levelOverview.bind(this));

        this.createZombie();
        this.sortZombieView();
        this.createSeedPack();
        this.createLawnmowers();
    }

    createLawnmowers() {
        this.allUnitInTheMap.createLawnmowers(150, 97);
    }

    drawLawnmowers() {
        this.allUnitInTheMap.drawLawnmowers();
    }

    createSeedPack() {
        this.allUnitInTheMap.createSeedPack();
    }

    drawSeedPack() {
        this.allUnitInTheMap.drawSeedPack();
    }

    createZombie() {
        this.allUnitInTheMap.createZombie();
    }

    setZombieState() { // TODO change number of stateZombie
        this.allUnitInTheMap.setZombieState(this.setRandom);
    }

    sortZombieView() {
        this.allUnitInTheMap.sortZombieView();
    }

    levelOverview() {
        if (this.backgroundPositionX > -600) {
            this.backgroundPositionX -= 10;
        } else {
            this.frameWaiting++;
        }
        this.context.drawImage(levelImages.backgroundTwo, this.backgroundPositionX, 0);
        if (this.backgroundPositionX < -320) {
            this.allUnitInTheMap.levelOverview(this.frameWaiting);
        }
        if (this.frameWaiting === 120) {
            requestAnimationFrame(this.returnOnGarden.bind(this, levelImages.backgroundTwo));
        } else {
            requestAnimationFrame(this.levelOverview.bind(this, levelImages.backgroundTwo));
        }
    }

    returnOnGarden() {
        this.backgroundPositionX += 10;
        this.context.drawImage(levelImages.backgroundTwo, this.backgroundPositionX, 0);
        if (this.backgroundPositionX < -220) {
            this.allUnitInTheMap.returnOnGarden();
            requestAnimationFrame(this.returnOnGarden.bind(this, levelImages.backgroundTwo));
        } else {
            requestAnimationFrame(this.drawGardenBind);
        }
    }

    drawGarden() {
        this.context.drawImage(levelImages.backgroundThree, 0, 0, this.animationPositionX, 600, -220, 0, this.animationPositionX, 600);
        if (this.animationPositionX < 1390) {
            this.animationPositionX += 10;
            requestAnimationFrame(this.drawGardenBind);
        } else {
            requestAnimationFrame(this.drawElementsBind);
            this.startLevel();
            this.checkOpenMenu();
            this.openMenu();
        }
    }

    checkOpenMenu() {
        this.canvas.addEventListener('mousemove', (e) => {
            if (e.layerX > 660 && e.layerX < 770 && e.layerY > 0 && e.layerY < 28){
                this.menu = commonImages.menuHover;
            } else {
                this.menu = commonImages.menu;
            }
        });
    }

    openMenu() { //TODO pause
        this.canvas.addEventListener('click', () => {
            if(this.menu === commonImages.menuHover) {
                if (this.menuOpen) {
                    this.menuOpen = 0;
                    this.stopLevel = 0;
                    requestAnimationFrame(this.drawElementsBind);
                } else {
                    this.stopLevel = 1;
                    this.menuOpen = 1;
                }
            }
        })
    }

    drawElements() {
        this.drawCommonElements();
        this.drawPlantElements();
        this.drawSunElements();
        this.drawZombieElements();
        this.drawOtherElements();
    }

    drawCommonElements() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(levelImages.backgroundThree, 0, 0, this.animationPositionX, 600, -220, 0, this.animationPositionX, 600);
        this.context.drawImage(commonImages.seedBank, 10, 0);
        this.context.drawImage(commonImages.sunBank, 10, 0);
        this.context.fillText(`${this.numberOfSuns}`, 48.5, 80);
        this.context.drawImage(this.menu, 660, -5);
    }

    drawPlantElements() {
        this.drawLawnmowers();
        this.drawSeedPack();
        this.choseSeedPack();
        this.drawPlant();
        this.drawOpenFire();
    }

    drawSunElements() {
        this.drawSun();
        this.drawFallOfSuns();
        this.choseSun();
    }

    drawZombieElements() {
        this.checkForComingZombie();
        this.levelProgress();
        this.zombieComing();
        this.createPlantLogo();
    }

    drawOtherElements() {
        this.showMenu();
        this.checkLevelComplete();
        this.checkAnimation();
    }

    checkAnimation() {
        if (!this.stopLevel) {
            requestAnimationFrame(this.drawElementsBind);
        }
    }

    checkLevelComplete(){
        if (this.levelUp && !this.stopAnimation) {
            this.levelComplete();
        }
    }

    levelComplete() {
        this.awardCard.award();
        if (!this.once) {
            this.once = 1;
            this.canvas.addEventListener('click', this.awardingEventBind);
        }
    }

    awardingEvent(e) {
        if (e.layerX > this.awardCard.startX && e.layerX < this.awardCard.startX+50  && e.layerY > this.awardCard.endY+40 && e.layerY < this.awardCard.endY + 110) {
            this.awarding();
            this.canvas.removeEventListener('click', this.awardingEventBind)
        }
    }

    awarding() {
        this.awardCard.award();
        this.stopAnimation = 1;
        this.biasAwardForY();
        if (this.awardCard.startX > 376) {
            this.biasAwardForXLeft();
        } else if (this.awardCard.startX < 374) {
            this.biasAwardForXRight();
        } else {
            this.drawStarBurst();
            this.awardCard.award();
            if (this.awardTimer === 60){
                this.runBetweenLevel();
            } else {
                this.awardTimer++;
                requestAnimationFrame(this.awardingBind);
            }
        }
    }

    biasAwardForXLeft() {
        this.awardCard.startX -= ((this.awardCard.startX - 376) / 10) + 1;
        requestAnimationFrame(this.awardingBind);
    }

    biasAwardForXRight() {
        this.awardCard.startX += ((374-this.awardCard.startX)/10)+1;
        requestAnimationFrame(this.awardingBind);
    }

    biasAwardForY() {
        if (this.awardCard.startY > 226) {
            this.awardCard.startY -= ((this.awardCard.startY - 226) / 10);
        } else if(this.awardCard.startY < 224) {
            this.awardCard.startY += ((224 - this.awardCard.startY) / 10) + 1;
        }
    }

    drawStarBurst() {
        this.context.drawImage(commonImages.starburst, 107, 6);
    }

    runBetweenLevel() {
        this.stopLevel = 1;
        this.canvas.removeEventListener('click', this.toPlantBind);
        const betweenLevel = new BetweenLevels(this.canvas, this.context, this.awardCard.packet, 3);
        betweenLevel.create();
        betweenLevel.start();
    }

    zombieComing() {
        let positionToEndX;
        let positionToEndY;
        this.allUnitInTheMap.runLawnmowers();
        this.allUnitInTheMap.zombiesC.forEach((zombie, i, arrayOfZombie) => {
            this.allUnitInTheMap.checkLawnmowers(zombie);
            if (zombie.positionX < -100) {
                this.playerLose();
            }
            if (zombie.health < 1) {
                this.allUnitInTheMap.zombiesDead(zombie, i, arrayOfZombie);
            } else if(zombie.burn) {
                this.allUnitInTheMap.zombiesBurn(zombie, i,arrayOfZombie);
            } else {
                if (this.allUnitInTheMap.plants.some((plant, i, arr) => {
                        if (plant.positionX - 20 > zombie.positionX && plant.positionX - 90 < zombie.positionX && plant.positionY < zombie.positionY + 75 && plant.positionY > zombie.positionY + 65) {
                            this.allUnitInTheMap.zombiesAttackPlants(plant, i, arr);
                            return true;
                        } else {
                            return false;
                        }
                    })) {
                    zombie.attack();
                } else {
                    zombie.walk();
                }
            }//TODO over here
            if (this.allUnitInTheMap.zombies.length < 1 && arrayOfZombie.length < 1) {
                positionToEndX = zombie.positionX;
                positionToEndY = zombie.positionY;
            }
        });
        if (positionToEndY && positionToEndX) {
            this.levelEnd(positionToEndX, positionToEndY);
        }
    }

    levelEnd(pointX, pointY) {
        console.log(this.allUnitInTheMap.zombiesC);
        this.awardCard.createAwardPosition(pointX, pointY);
        this.levelUp = 1;
        this.levelComplete(pointX);
    }

    levelProgress () {
        if (this.checkComingZombie) {
            this.context.drawImage(commonImages.levelTimeLine, 600, 555);
            this.context.drawImage(commonImages.levelTimeLineProcess, 0, 0, this.levelTimeLinePosition + 18, 26, 758.55-this.levelTimeLinePosition , 568, this.levelTimeLinePosition + 18, 26);
            if (this.levelTimeLinePosition < 131) {
                this.levelTimeLinePosition += 0.03;
            }
        }
    }

    drawPlant() {
        this.allUnitInTheMap.plants.forEach((plant, i, arr) => {
            plant.build();
            this.allUnitInTheMap.zombiesC.forEach((zombie) => {
                this.allUnitInTheMap.plantsAttackZombies(plant, zombie);
            });
            if (plant.name === Sunflower) {
                this.allUnitInTheMap.ifPlantSunflower(plant, this.suns);
            } else {
                plant.useOfAbility();
            }
        });
    }

    drawSun() {
        this.suns.forEach((sun) => {
            sun.fall();
        });
    }

    choseSun() {    // TODO AllUnitInTheMap.choseSun()
        this.chosenSuns.forEach((sun, i, arr) => {
            sun.chose();
            if (sun.startX < 10){
                arr.splice(i, 1);
                this.numberOfSuns += 25;
            }
        });
    }

    startLevel() {
        this.canvas.addEventListener('click', this.toPlantBind);
        this.setZombieState();
    }

    toPlant(e) {
        if (this.allUnitInTheMap.seedPack.every((seed) => (!seed.chose))) {
            this.allUnitInTheMap.chosePlant(e, this.numberOfSuns);
        } else {
            this.allUnitInTheMap.cancelChosePlantClick(e);
        }
    }

    choseSeedPack() {
        this.allUnitInTheMap.choseSeedPack(this.numberOfSuns);
    }

    createPlantLogo() {
        this.allUnitInTheMap.seedPack.forEach((seed) => {
            if (seed.chose === 1) {
                this.allUnitInTheMap.createPlantLogo(seed, 0, 3, 120, 105);
                this.canvas.addEventListener('click', this.createPlantUnitBind);
            }
        });
    }

    createPlantUnit(e) {
        let plant;
        this.allUnitInTheMap.seedPack.forEach((seed) => {
            if (seed.chose) {
                plant = new seed.name(this.context, this.allUnitInTheMap.positionToCreate.x, this.allUnitInTheMap.positionToCreate.y)
            }
        });
        if (plant) {
            this.allUnitInTheMap.createPlantUnit(e, plant);
            if (this.allUnitInTheMap.checkPlantBuild) {
                this.numberOfSuns -= plant.cost;
                this.checkForSuns();
            }
            this.canvas.removeEventListener('click', this.createPlantUnitBind);
        }
        this.checkForZombie();
    }

    checkForSuns() {
        if (!this.firstPlant) {
            this.firstPlant = 1;
            this.fallOfSuns();
            this.canvas.addEventListener('click', this.receivingSunsBind);
        }
    }

    checkForZombie() {
        if ((this.allUnitInTheMap.plants.length > 5) && (!this.checkComingZombie)) {
            this.checkComingZombie = 1;
            this.commingZombieTimer = 0;
            this.startComingZombie();
        }
    }

    checkForComingZombie() {
        if ((this.checkComingZombie) && (this.allUnitInTheMap.zombies.length > 0)){
            this.startComingZombie();
        }
    }

    startComingZombie() {
        this.allUnitInTheMap.startComingZombie(0, 2, 97, 100);
    }

    openFire() {
        if (this.openFireTimer === 90){
            this.allUnitInTheMap.plants.forEach((plant) => {
                if (this.allUnitInTheMap.zombiesC.some((zombie) => zombie.positionX < 690 && zombie.positionX > plant.positionX-35 && zombie.positionY+75 > plant.positionY && zombie.positionY+65 < plant.positionY && !zombie.burn)){
                    const bullet =  new Bullet(plant.positionX, plant.positionY);
                    plant.positionOfBullet.push(bullet);
                }
            });
            this.openFireTimer = 0;
        } else {
            this.openFireTimer++;
        }

    }

    drawOpenFire() {
        if ((this.allUnitInTheMap.plants.length > 0) && this.allUnitInTheMap.zombiesC.length) {
            this.openFire();
        }
    }

    fallOfSuns() {
        if (this.sunTimer < 300 && !this.levelUp) {
            this.sunTimer++;
        } else if (!this.levelUp){
            const sun = new Sun(this.context);
            sun.create();
            this.suns.push(sun);
            this.sunTimer = 0;
        }
        this.destroySuns();
    }

    drawFallOfSuns() {
        if (this.firstPlant){
            this.fallOfSuns();
        }
    }

    destroySuns() {
        if (this.suns.length > 2 && this.sunDestroyTimer > 450) {
            this.suns.shift();
            this.sunDestroyTimer = 0;
        } else {
            this.sunDestroyTimer++;
        }
    }

    receivingSuns(e){
        this.suns.forEach((sun, i, arr) => {
            if ((e.layerX > sun.startX) && (e.layerX < sun.startX + 75) && (e.layerY > sun.startY) && (e.layerY < sun.startY + 75)){
                this.chosenSuns.push(sun);
                arr.splice(i, 1);
            }
        });
    }

    showMenu() {
        if (this.menuOpen){
            this.context.drawImage(commonImages.menuWindow, 188, 30);
        }
    }

    setRandom(min, max) {
        return Math.floor(Math.random() * (max - min +1)) + min;
    }

    playerLose() {


    }

}

export { LevelTwo };






