import {levelImages} from "../../imgComponents/levelImages";
import {BetweenLevels} from "./BetweenLevels";
import {commonImages} from "../../imgComponents/commonImages";
import {Sunflower} from "../../plantsComponents/sunflower";
import {Sun} from "../../otherComponents/sun";
import {Bullet} from "../../plantsComponents/bulletNormal";
import {AllUnitInTheMap} from "./AllUnitInTheMap";
import {buttonAudio} from '../../audioComponents/audioButton';
import {gameAudioStates} from '../../audioComponents/audioGameState';
import {zombyAudioWave} from '../../audioComponents/audioZombyWave';
import {zombyAudioGroan} from '../../audioComponents/audioZombyGroan';
import {zombyAudioChomp} from '../../audioComponents/audioZombyChomp';
import {zombyAudioFalling} from '../../audioComponents/audioZombyFalling';
import {sunAudioPoints} from '../../audioComponents/audioSunPoints';
import {plantAudio} from '../../audioComponents/audioPlants';
import {resources} from '../../menuComponents/resources';
import {store} from '../../menuComponents/store';
import {audioPlayer} from '../../audioComponents/audioPlayer';
import {MenuPage} from '../../menuComponents/menu_page';

class LevelOne {
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
    this.openMenuRestartBind = null;
    this.openMenuQuitBind = null;
    this.changeVolumeBind = null;
    this.goToMenuOfGameBind = null;
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
    this.buttonAudio = buttonAudio;
    this.gameAudioStates = gameAudioStates;
    this.zombyAudioWave = zombyAudioWave;
    this.zombyAudioGroan = zombyAudioGroan;
    this.zombyAudioChomp = zombyAudioChomp;
    this.zombyAudioFalling = zombyAudioFalling;
    this.sunAudioPoints = sunAudioPoints;
    this.plantAudio = plantAudio;
    this.elemLeft = this.canvas.offsetLeft;
    this.elemTop = this.canvas.offsetTop;
    this.audioPlayer = audioPlayer;
  }

  startGame() {
    this.setFontProperties();
    this.setAudioProperties();
    this.setAwardCard();
    this.createAllUnitInTheMapObject();
    this.setThisForCallbackFunctions();
    this.createZombie();
    this.sortZombieView();
    this.createSeedPack();
    this.createLawnmowers();
  }

  setFontProperties() {
    this.context.font = '24px Arial';
    this.context.textAlign = 'center';
  }

  setAudioProperties() {
    this.audioPlayer(this.gameAudioStates.gameprocess);
    this.gameAudioStates.gameprocess.loop = true;
  }

  setAwardCard() {
    this.awardCard = new Sunflower(this.context);
    this.awardCard.init();
  }

  createAllUnitInTheMapObject() {
    this.allUnitInTheMap = new AllUnitInTheMap(this.canvas, this.context, 1);
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
    this.context.drawImage(levelImages.backgroundOne, 0, 0);
    this.checkOpenMenuEventBind = this.checkOpenMenuEvent.bind(this);
    this.openMenuEventBind = this.openMenuEvent.bind(this);
    requestAnimationFrame(this.levelOverview.bind(this));
  }

  createLawnmowers() {
    this.allUnitInTheMap.createLawnmowers(245, 97);
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

  setZombieState() {
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
    this.context.drawImage(levelImages.backgroundOne, this.backgroundPositionX, 0);
    if (this.backgroundPositionX < -320) {
      this.allUnitInTheMap.levelOverview(this.frameWaiting);
    }
    if (this.frameWaiting === 120) {
      requestAnimationFrame(this.returnOnGarden.bind(this, levelImages.backgroundOne));
    } else {
      requestAnimationFrame(this.levelOverview.bind(this, levelImages.backgroundOne));
    }
  }

  returnOnGarden() {
    this.backgroundPositionX += 10;
    this.context.drawImage(levelImages.backgroundOne, this.backgroundPositionX, 0);
    if (this.backgroundPositionX < -220) {
      this.allUnitInTheMap.returnOnGarden();
      requestAnimationFrame(this.returnOnGarden.bind(this, levelImages.backgroundOne));
    } else {
      requestAnimationFrame(this.drawGardenBind);
    }
  }

  drawGarden() {
    this.context.drawImage(levelImages.backgroundTwo, 0, 0, this.animationPositionX, 600, -220, 0, this.animationPositionX, 600);
    if (this.animationPositionX < 1390) {
      this.animationPositionX += 10;
      requestAnimationFrame(this.drawGardenBind);
    } else {
      requestAnimationFrame(this.drawElementsBind);
      this.gameAudioStates.gameprocess.play();
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
              this.gameAudioStates.gameprocess.play();
              requestAnimationFrame(this.drawElementsBind);
          } else {
              this.gameAudioStates.gameprocess.pause();
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
    this.context.drawImage(levelImages.backgroundTwo, 0, 0, this.animationPositionX, 600, -220, 0, this.animationPositionX, 600);
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
    //this.showMenu();
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
    this.canvas.removeEventListener('click', this.openMenuEventBind);
    this.canvas.removeEventListener('mousemove', this.checkOpenMenuEventBind);
    const betweenLevel = new BetweenLevels(this.canvas, this.context, this.awardCard.packet, 1);
    betweenLevel.create();
    betweenLevel.start();
  }

  zombieComing() {
    let positionToEndX;
    let positionToEndY;

    this.allUnitInTheMap.runLawnmowers();
    this.allUnitInTheMap.zombiesC.forEach((zombie, i, arrayOfZombie) => {
      this.allUnitInTheMap.checkLawnmowers(zombie);
      if (zombie.positionX < -70) {

      }
      if (zombie.health < 1) {
        this.zombyAudioFalling.zombyfalling1.play();
        this.audioPlayer(this.zombyAudioFalling.zombyfalling1);
        this.allUnitInTheMap.zombiesDead(zombie, i, arrayOfZombie);
      } else if(zombie.burn) {
        this.allUnitInTheMap.zombiesBurn(zombie, i,arrayOfZombie);
      } else {
        if (this.allUnitInTheMap.plants.some((plant, i, arr) => {
            if (plant.positionX - 20 > zombie.positionX && plant.positionX - 90 < zombie.positionX && plant.positionY < zombie.positionY + 75 && plant.positionY > zombie.positionY + 65) {
              this.allUnitInTheMap.zombiesAttackPlants(plant, i, arr);
              this.audioPlayer(this.zombyAudioChomp.chomp);
              this.audioPlayer(this.zombyAudioChomp.chomp2);
              this.audioPlayer(this.zombyAudioChomp.chompSoft);
              return true;
            } else {
              return false;
            }
          })) {
          zombie.attack();
        } else {
          zombie.walk();
        }
      }
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
    this.gameAudioStates.gameprocess.pause();
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
        this.allUnitInTheMap.plantsAttackZombies(plant, zombie, this.audioPlayer.bind(this, this.zombyAudioFalling.bonk));
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
      this.allUnitInTheMap.chosePlant(e, this.numberOfSuns, this.audioPlayer.bind(this, this.plantAudio.seedlift));
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
        this.allUnitInTheMap.createPlantLogo(seed, 0, 1, 215, 105, );
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
        this.audioPlayer(this.plantAudio.plant1);
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
    if ((this.allUnitInTheMap.plants.length > 1) && (!this.checkComingZombie)) {
      this.checkComingZombie = 1;
      this.commingZombieTimer = 0;
      this.startComingZombie();
      this.audioPlayer(this.zombyAudioGroan.groan3);
      this.audioPlayer(this.zombyAudioGroan.groan5);
      this.audioPlayer(this.zombyAudioGroan.groan6);
    }
  }

  checkForComingZombie() {
    if ((this.checkComingZombie) && (this.allUnitInTheMap.zombies.length > 0)){
      this.startComingZombie();
    }
  }

  startComingZombie() {
    this.allUnitInTheMap.startComingZombie(0, 0, 97, 195);
  }

  openFire() {
    if (this.openFireTimer === 90){
      this.allUnitInTheMap.plants.forEach((plant) => {
        if (this.allUnitInTheMap.zombiesC.some((zombie) => zombie.positionX < 690 && zombie.positionX > plant.positionX-35 && zombie.positionY+75 > plant.positionY && zombie.positionY+65 < plant.positionY && !zombie.burn)){
          this.audioPlayer(this.plantAudio.firepea);
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
        this.sunAudioPoints.sunpoints.play();
        this.chosenSuns.push(sun);
        arr.splice(i, 1);
      }
    });
  }

  setRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  showMenu() {
    this.context.drawImage(commonImages.menuWindow, 188, 30);
    //this.context.drawImage(commonImages.restartButton, 230, 445);
    //this.context.drawImage(commonImages.quitButton, 397, 445);
    //this.context.drawImage(commonImages.sliderKnob, this.knobPositionX, this.knobPositionY);
    this.canvas.addEventListener('click', this.changeVolumeBind);
    this.canvas.addEventListener('click', this.openMenuRestartBind);
    this.canvas.addEventListener('click', this.openMenuQuitBind);
  }

  openMenuRestart(e) {
    if (this.outsideArea(e,230,390,445,500)) return;

    this.audioPlayer(this.buttonAudio.tap);
    this.audioPlayer(this.buttonAudio.tap2);
    this.audioPlayer(this.buttonAudio.bleep);
    this.restartDialogOpen = 1;
  }

  menuRestartDraw() {
    this.context.drawImage(resources.get('img/dialog_window/quit_menu.png'),170, 180, 450, 350);
    this.context.drawImage(commonImages.restart1, 325, 250);
    this.context.drawImage(commonImages.restart2, 205, 350);
    this.context.drawImage(commonImages.restartButton, 210, 460);
    this.context.drawImage(commonImages.cancelButton, 420, 460);
    this.canvas.addEventListener('click', this.returnToGameBind);
    this.canvas.addEventListener('click', this.restartCurrentLevelBind);
    this.canvas.removeEventListener('click', this.changeVolumeBind);
    this.canvas.removeEventListener('click', this.openMenuQuitBind);
  }

  openMenuQuit(e) {
    if (this.outsideArea(e,397,555,445,500)) return;
    this.audioPlayer(this.buttonAudio.tap);
    this.audioPlayer(this.buttonAudio.tap2);
    this.audioPlayer(this.buttonAudio.bleep);
    this.quitDialogOpen = 1;
  }

  menuQuitDraw() {
    this.context.drawImage(resources.get('img/dialog_window/quit_menu.png'),170, 180, 450, 350);
    this.context.drawImage(commonImages.quit1, 350, 250);
    this.context.drawImage(commonImages.quit2, 210, 350);
    this.context.drawImage(commonImages.quitButton, 210, 460);
    this.context.drawImage(commonImages.cancelButton, 420, 460);
    this.canvas.addEventListener('click', this.returnToGameBind);
    this.canvas.addEventListener('click', this.goToMenuOfGameBind);
    this.canvas.removeEventListener('click', this.changeVolumeBind);
    this.canvas.removeEventListener('click', this.openMenuRestartBind);

  }

  goToMenuOfGame(e) {
    if (this.outsideArea(e, 210, 370, 460, 500)) return;
    this.audioPlayer(this.buttonAudio.tap);
    this.audioPlayer(this.buttonAudio.tap2);
    this.audioPlayer(this.buttonAudio.bleep);
    this.canvas.removeEventListener('mousemove', this.calculatePlantUnitBind);
    this.canvas.removeEventListener('click', this.toPlantBind);
    this.canvas.removeEventListener('click', () => {
      if (this.menu === commonImages.menuHover) {
        if (this.menuOpen) {
          this.menuOpen = 0
        } else {
          this.menuOpen = 1;
          this.gameAudioStates.menupage.loop = true;
          this.audioPlayer(this.gameAudioStates.menupage);
          this.menupage = new MenuPage();
        }
      }
    });
  }



  outsideArea(e, x1, x2, y1, y2) {
    let x = e.pageX - this.elemLeft, y = e.pageY - this.elemTop;
    return x < x1 || x > x2 || y < y1 || y > y2;
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
    this.gameAudioStates.gameprocess.volume = Number(store.getVolume());
  }


}

export { LevelOne };






