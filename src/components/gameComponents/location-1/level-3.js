import {levelImages} from "../../imgComponents/levelImages";
import {BetweenLevels} from "./BetweenLevels";
import {commonImages} from "../../imgComponents/commonImages";
import {Sunflower} from "../../plantsComponents/sunflower";
import {Sun} from "../../otherComponents/sun";
import {Bullet} from "../../plantsComponents/bulletNormal";
import {AllUnitInTheMap} from "./AllUnitInTheMap";
import {buttonAudio} from '../../audioComponents/audioButton';
import {gameAudioStates} from '../../audioComponents/audioGameState';
import {zombyAudioGroan} from '../../audioComponents/audioZombyGroan';
import {zombyAudioChomp} from '../../audioComponents/audioZombyChomp';
import {zombyAudioFalling} from '../../audioComponents/audioZombyFalling';
import {sunAudioPoints} from '../../audioComponents/audioSunPoints';
import {plantAudio} from '../../audioComponents/audioPlants';
import {resources} from '../../menuComponents/resources';
import {store} from '../../menuComponents/store';
import {audioPlayer} from '../../audioComponents/audioPlayer';
import {MenuPage} from '../../menuComponents/menu_page';
import {CherryBomb} from "../../plantsComponents/cherryBomb";

class LevelThree {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.backgroundPositionX = 0;
    this.animationPositionX = 0;
    this.numberOfSuns = 300;
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
    this.awardCard = null;
    this.allUnitInTheMap = null;
    this.elemLeft = this.canvas.offsetLeft;
    this.elemTop = this.canvas.offsetTop;
    this.reastartdialogOpen = 0;
    this.knobPositionX = store.knobPosition(320,440);
    this.knobPositionY = 205;
  }

  startGame() {
    this.setFontProperties();
    this.setAudioProperties();
    this.setAwardCard();
    this.createAllUnitInTheMapObject();
    this.createLevel();
    this.setThisForCallbackFunctions();
    this.createZombie();
    this.sortZombieView();
    this.createSeedPack();
    this.createLawnmowers();
  }

  createLevel() {
      this.allUnitInTheMap.createLevel();
  }

  setFontProperties() {
    this.context.font = '24px Arial';
    this.context.textAlign = 'center';
    this.context.fillStyle = '#000';
  }

  setAudioProperties() {
    audioPlayer(gameAudioStates.gameprocess);
    gameAudioStates.gameprocess.loop = true;
  }

  setAwardCard() {
    this.awardCard = new CherryBomb(this.context);
    this.awardCard.init();
    this.awardCard.packet = commonImages.zombieNoteSmall;
  }

  createAllUnitInTheMapObject() {
    this.allUnitInTheMap = new AllUnitInTheMap(this.canvas, this.context, 3);
  };

  setThisForCallbackFunctions() {
    this.toPlantBind = this.toPlant.bind(this);
    this.receivingSunsBind = this.receivingSuns.bind(this);
    this.drawElementsBind = this.drawElements.bind(this);
    this.drawGardenBind = this.drawGarden.bind(this);
    this.createPlantUnitBind = this.createPlantUnit.bind(this);
    this.awardingBind = this.awarding.bind(this);
    this.awardingEventBind = this.awardingEvent.bind(this);
    this.openMenuRestartBind = this.openMenuRestart.bind(this);
    this.openMenuQuitBind = this.openMenuQuit.bind(this);
    this.changeVolumeBind = this.changeVolume.bind(this);
    this.goToMenuOfGameBind = this.goToMenuOfGame.bind(this);
    this.checkOpenMenuEventBind = this.checkOpenMenuEvent.bind(this);
    this.openMenuEventBind = this.openMenuEvent.bind(this);
    this.returnToGameBind = this.returnToGame.bind(this);
    this.restartLevelBind = this.restartLevel.bind(this);
    this.context.drawImage(levelImages.backgroundThree, 0, 0);
    requestAnimationFrame(this.levelOverview.bind(this));
  }

  createLawnmowers() {
    this.allUnitInTheMap.createLawnmowers(80, 97);
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
    this.context.drawImage(levelImages.backgroundThree, this.backgroundPositionX, 0);
    if (this.backgroundPositionX < -320) {
      this.allUnitInTheMap.levelOverview(this.frameWaiting);
    }
    if (this.frameWaiting === 120) {
      requestAnimationFrame(this.returnOnGarden.bind(this, levelImages.backgroundThree));
    } else {
      requestAnimationFrame(this.levelOverview.bind(this, levelImages.backgroundThree));
    }
  }

  returnOnGarden() {
    this.backgroundPositionX += 10;
    this.context.drawImage(levelImages.backgroundThree, this.backgroundPositionX, 0);
    if (this.backgroundPositionX < -220) {
      this.allUnitInTheMap.returnOnGarden();
      requestAnimationFrame(this.returnOnGarden.bind(this, levelImages.backgroundThree));
    } else {
      requestAnimationFrame(this.drawGardenBind);
    }
  }

  drawGarden() {
    this.context.drawImage(levelImages.backgroundFour, 0, 0, this.animationPositionX, 600, -220, 0, this.animationPositionX, 600);
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
        this.canvas.addEventListener('mousemove', this.checkOpenMenuEventBind);
    }

    checkOpenMenuEvent(e) {
        if (e.layerX > 660 && e.layerX < 770 && e.layerY > 0 && e.layerY < 28){
            this.menu = commonImages.menuHover;
        } else {
            this.menu = commonImages.menu;
        }
    }


    openMenu() {
        this.canvas.addEventListener('click', this.openMenuEventBind);
    }

    openMenuEvent() {
        if(this.menu === commonImages.menuHover) {
            if (this.menuOpen) {
                this.menuOpen = 0;
                this.stopLevel = 0;
                gameAudioStates.gameprocess.play();
                requestAnimationFrame(this.drawElementsBind);
            } else {
                gameAudioStates.gameprocess.pause();
                this.stopLevel = 1;
                this.menuOpen = 1;
            }
        }
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
    this.context.drawImage(levelImages.backgroundFour, 0, 0, this.animationPositionX, 600, -220, 0, this.animationPositionX, 600);
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
    if (e.layerX > this.awardCard.startX && e.layerX < this.awardCard.startX+78  && e.layerY > this.awardCard.endY+40 && e.layerY < this.awardCard.endY + 92) {
      this.awarding();
      this.canvas.removeEventListener('click', this.awardingEventBind)
    }
  }

  awarding() {
    this.awardCard.award();
    this.stopAnimation = 1;
    this.biasAwardForY();
    if (this.awardCard.startX > 357) {
      this.biasAwardForXLeft();
    } else if (this.awardCard.startX < 355) {
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
    this.awardCard.startX -= ((this.awardCard.startX - 357) / 10) + 1;
    requestAnimationFrame(this.awardingBind);
  }

  biasAwardForXRight() {
    this.awardCard.startX += ((355-this.awardCard.startX)/10)+1;
    requestAnimationFrame(this.awardingBind);
  }

  biasAwardForY() {
    if (this.awardCard.startY > 235) {
      this.awardCard.startY -= ((this.awardCard.startY - 235) / 10);
    } else if(this.awardCard.startY < 237) {
      this.awardCard.startY += ((237 - this.awardCard.startY) / 10) + 1;
    }
  }

  drawStarBurst() {
    this.context.drawImage(commonImages.starburst, 107, 6);
  }

  runBetweenLevel() {
    this.gameEnd();
    store.setLevel(3); //final level
    const betweenLevel = new BetweenLevels(this.canvas, this.context, this.awardCard.packet, 3);
    betweenLevel.createPlayerWon();
    betweenLevel.playerWon();
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
        audioPlayer(zombyAudioFalling.zombyfalling1);
        this.allUnitInTheMap.zombiesDead(zombie, i, arrayOfZombie);
      } else if(zombie.burn) {
        this.allUnitInTheMap.zombiesBurn(zombie, i,arrayOfZombie);
      } else {
        if (this.allUnitInTheMap.plants.some((plant, i, arr) => {
            if (plant.positionX - 20 > zombie.positionX && plant.positionX - 90 < zombie.positionX && plant.positionY < zombie.positionY + 75 && plant.positionY > zombie.positionY + 65) {
              this.allUnitInTheMap.zombiesAttackPlants(plant, i, arr);
              audioPlayer(zombyAudioChomp.chomp, zombyAudioChomp.chomp2, zombyAudioChomp.chompSoft);
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
        this.allUnitInTheMap.plantsAttackZombies(plant, zombie, audioPlayer.bind(this, zombyAudioFalling.bonk))
        if (plant.name === CherryBomb && plant.abilityTimer > 40) {
          this.allUnitInTheMap.cherryBombBurnsZombie(plant, zombie);
        }
      });
      if (plant.name === Sunflower) {
        this.allUnitInTheMap.ifPlantSunflower(plant, this.suns);
      } else if(plant.name === CherryBomb) {
        this.allUnitInTheMap.ifPlantCherryBomb(plant, i, arr);
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
      this.allUnitInTheMap.chosePlant(e, this.numberOfSuns, audioPlayer.bind(this, plantAudio.seedlift));
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
        this.allUnitInTheMap.createPlantLogo(seed, 0, 5, 50, 97);
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
        audioPlayer(plantAudio.plant1);
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
    if ((this.allUnitInTheMap.plants.length > 9) && (!this.checkComingZombie)) {
      this.checkComingZombie = 1;
      this.commingZombieTimer = 0;
      audioPlayer(zombyAudioGroan.groan3, zombyAudioGroan.groan5, zombyAudioGroan.groan6);
      this.startComingZombie();
    }
  }

  checkForComingZombie() {
    if ((this.checkComingZombie) && (this.allUnitInTheMap.zombies.length > 0)){
      this.startComingZombie();
    }
  }

  startComingZombie() {
    this.allUnitInTheMap.startComingZombie(0, 4, 97, 30);
  }

  openFire() {
    if (this.openFireTimer === 90){
      this.allUnitInTheMap.plants.forEach((plant) => {
        if (this.allUnitInTheMap.zombiesC.some((zombie) => zombie.positionX < 690 && zombie.positionX > plant.positionX-35 && zombie.positionY+75 > plant.positionY && zombie.positionY+65 < plant.positionY && !zombie.burn)){
          audioPlayer(plantAudio.firepea);
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
        audioPlayer(sunAudioPoints.sunpoints);
        arr.splice(i, 1);
      }
    });
  }

  setRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

    playerLose() {
        this.gameEnd();
        const betweenLevel = new BetweenLevels(this.canvas, this.context, this.awardCard.packet, 3);
        betweenLevel.createPlayerLose();
        betweenLevel.playerLose();
    }

    gameEnd() {
        this.stopLevel = 1;
        gameAudioStates.gameprocess.pause();
        this.canvas.removeEventListener('click', this.toPlantBind);
        this.canvas.removeEventListener('click', this.openMenuEventBind);
        this.canvas.removeEventListener('mousemove', this.checkOpenMenuEventBind);
        this.canvas.removeEventListener('click', this.changeVolumeBind);
        this.canvas.removeEventListener('click', this.openMenuRestartBind);
        this.canvas.removeEventListener('click', this.openMenuQuitBind);
        this.canvas.removeEventListener('click', this.goToMenuOfGameBind);
        this.canvas.removeEventListener('click', this.returnToGameBind);
        this.canvas.removeEventListener('click', this.restartLevelBind);
    }

  showMenu() {
    if(this.menuOpen) {
        this.context.drawImage(commonImages.menuWindow, 188, 30);
        this.context.drawImage(commonImages.restartButton, 230, 445);
        this.context.drawImage(commonImages.quitButton, 397, 445);
        this.context.drawImage(commonImages.sliderKnob, this.knobPositionX, this.knobPositionY);
        this.canvas.addEventListener('click', this.changeVolumeBind);
        this.canvas.addEventListener('click', this.openMenuRestartBind);
        this.canvas.addEventListener('click', this.openMenuQuitBind);
    }
  }

  openMenuRestart(e) {
    if (this.outsideArea(e,230,390,445,500)) return;
    audioPlayer(buttonAudio.tap);
    audioPlayer(buttonAudio.tap2);
    audioPlayer(buttonAudio.bleep);
    this.menuRestartDraw();
  }

  menuRestartDraw() {
    this.context.drawImage(resources.get('img/dialog_window/quit_menu.png'),170, 180, 450, 350);
    this.context.drawImage(commonImages.restart1, 325, 250);
    this.context.drawImage(commonImages.restart2, 205, 350);
    this.context.drawImage(commonImages.restartButton, 210, 460);
    this.context.drawImage(commonImages.cancelButton, 420, 460);
    this.canvas.addEventListener('click', this.returnToGameBind);
    this.canvas.addEventListener('click', this.restartLevelBind);
    this.canvas.removeEventListener('click', this.openMenuQuitBind);
    this.canvas.removeEventListener('click', this.changeVolumeBind);
  }

  openMenuQuit(e) {
    if (this.outsideArea(e,397,555,445,500)) return;
    audioPlayer(buttonAudio.tap);
    audioPlayer(buttonAudio.tap2);
    audioPlayer(buttonAudio.bleep);
    this.menuQuitDraw();
  }

  menuQuitDraw() {
    this.context.drawImage(resources.get('img/dialog_window/quit_menu.png'),170, 180, 450, 350);
    this.context.drawImage(commonImages.quit1, 350, 250);
    this.context.drawImage(commonImages.quit2, 210, 350);
    this.context.drawImage(commonImages.quitButton, 210, 460);
    this.context.drawImage(commonImages.cancelButton, 420, 460);
    this.canvas.addEventListener('click', this.returnToGameBind);
    this.canvas.addEventListener('click', this.goToMenuOfGameBind);
    this.canvas.removeEventListener('click', this.openMenuRestartBind);
    this.canvas.removeEventListener('click', this.changeVolumeBind);
    this.canvas.removeEventListener('click', this.openMenuRestartBind);
    this.canvas.removeEventListener('click', this.openMenuQuitBind);
  }

  outsideArea(e, x1, x2, y1, y2) {
    let x = e.pageX - this.elemLeft, y = e.pageY - this.elemTop;
    return x < x1 || x > x2 || y < y1 || y > y2;
  }
  
   goToMenuOfGame(e) {
    if (this.outsideArea(e, 210, 370, 460, 500)) return;
    audioPlayer(buttonAudio.tap);
    audioPlayer(buttonAudio.tap2);
    audioPlayer(buttonAudio.bleep);
    this.gameEnd();
    this.context.clearRect(0, 0, 800, 600);
    let menupage = new MenuPage(); 
  }
  
  returnToGame(e) {
      if (this.outsideArea(e, 420, 580, 460, 500)) return;
      this.menuOpen = 0;
      this.stopLevel = 0;
      this.canvas.removeEventListener('click', this.changeVolumeBind);
      this.canvas.removeEventListener('click', this.openMenuRestartBind);
      this.canvas.removeEventListener('click', this.openMenuQuitBind);
      this.canvas.removeEventListener('click', this.goToMenuOfGameBind);
      this.canvas.removeEventListener('click', this.returnToGameBind);
      this.canvas.removeEventListener('click', this.restartLevelBind);
      gameAudioStates.gameprocess.play();
      requestAnimationFrame(this.drawElementsBind);
   }
  
   restartLevel(e) {
      if (this.outsideArea(e, 210, 370, 460, 500)) return;
      this.gameEnd();
      this.context.clearRect(0, 0, 800, 600);
      let level = new LevelThree(this.canvas);
      level.startGame();      
   }


  changeVolume(e) {
    if (this.outsideArea(e, 320, 460, 180, 230)) return;
    this.knobPositionX = e.pageX - this.elemLeft - 5;
    this.knobpositionY = e.pageY - this.elemTop - 5;
    if (this.knobPositionX  <= 460 && this.knobPositionX > 420) {
      store.setVolume(0.5);
    } else if (this.knobPositionX  <= 420 && this.knobPositionX > 380) {
      store.setVolume(0.3);
    } else if (this.knobPositionX  <= 380 && this.knobPositionX > 340) {
      store.setVolume(0.2);
    } else if (this.knobPositionX  <= 340 && this.knobPositionX > 320) {
      store.setVolume(0.1);
    } else if (this.knobPositionX <= 320) {
      store.setVolume(0);
    }
    gameAudioStates.gameprocess.volume = store.getVolume();
    this.showMenu();
  }

}

export { LevelThree };






