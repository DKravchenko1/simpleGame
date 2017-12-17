import {Zombie} from "../../zombiesComponents/Zombie";
import {Lawnmower} from "../../otherComponents/lawnmover";
import {Peashooter} from "../../plantsComponents/peashooter";
import {Sunflower} from "../../plantsComponents/sunflower";
import {CherryBomb} from "../../plantsComponents/cherryBomb";

class AllUnitInTheMap {
  constructor(canvas, context, currentLevel) {
    this.canvas = canvas;
    this.level = currentLevel;
    this.context = context;
    this.zombies = [];
    this.zombiesC = [];
    this.zombiesLength = 0;
    this.commingZombieTimer = 0;
    this.zombieAttackTimer = 0;
    this.plants = [];
    this.seedPack = [];
    this.suns = [];
    this.lawnmowers = [];
    this.seedRechargeTime = [];
    this.positionOfPlant = [];
    this.position = {};
    this.positionToCreate = {};
    this.checkPlantBuild = 0;
    this.calculatePlantUnitBind = null;
    this.cancelChosePlantEscBind = null;
    this.createPlanUnitBind = null;
  }

  createLevel() {
      this.plants = [];
      this.seedPack = [];
      this.suns = [];
      this.lawnmowers = [];
  }

  createLawnmowers(bias, factor) { //TODO lawnmowers
    let numberOfLawnmower = 1 + (this.level-1)*2;
    for (let i = 0; i < numberOfLawnmower; i++) {// TODO change number of lawnmower
      this.lawnmower = new Lawnmower(this.context, -40, bias+(i*factor));
      this.lawnmowers.push(this.lawnmower);
    }
  }

  drawLawnmowers() {
    this.lawnmowers.forEach((lawnmower) => lawnmower.draw());
  }

  runLawnmowers() {
    if (this.lawnmowers.length > 0) { //
      this.lawnmowers.forEach((lawnmower) => lawnmower.activated());
    }
  }

  checkLawnmowers(zombie) {
    this.lawnmowers.forEach((lawnmower, i, arr) => { //
      if (lawnmower.pointX > zombie.positionX && zombie.positionY+55 > lawnmower.pointY && zombie.positionY+45 < lawnmower.pointY) {
        lawnmower.used = 1;
        zombie.health = 0;
        if (lawnmower.pointX > 790) {
          arr.splice(i, 1);
        }
      }
    });
  }

  createSeedPack() { // TODO seedPack
    let seeds;
    this.calculatePlantUnitBind = this.calculatePlantUnit.bind(this);
    this.cancelChosePlantEscBind = this.cancelChosePlantEsc.bind(this);
    this.createPlantUnitBind = this.createPlantUnit.bind(this);
    if (this.level === 1){
      seeds = [new Peashooter(this.context)]
    } else if (this.level === 2) {
      seeds = [new Peashooter(this.context), new Sunflower(this.context)]
    } else if (this.level === 3) {
      seeds = [new Peashooter(this.context), new Sunflower(this.context), new CherryBomb(this.context)];
    }
    seeds.forEach((seed) => this.seedPack.push(seed));
    this.seedPack.forEach((seed) => seed.init());
  }

  drawSeedPack() {
    this.seedPack.forEach((seed, i) =>{
      this.context.drawImage(seed.packet, 97+(i*60), 9);
    });
  }

  choseSeedPack(numberOfSuns) {
    this.seedPack.forEach((seed, i) => {
      if (seed.chose || numberOfSuns < seed.cost - 1) {
        seed.choice(97+(i*60), 9);
      } else {
        seed.cancelChoice(97+(i*60), 9);
      }
    });
  }

  chosePlant(e, numberOfSuns, sound) {
    this.seedPack.find((seed, i) => {
      if ((e.layerX > (97 + 60 * i)) && (e.layerX < (97+10*i + (50 * (i + 1)))) && (e.layerY > 9) && (e.layerY < 74) && numberOfSuns > seed.cost - 1) {
        seed.chose = 1;
        this.position = {
          x: e.layerX - seed.calculateWidth() / 2,
          y: e.layerY - seed.calculateHeight() / 2
        };
        sound();
        this.canvas.addEventListener('mousemove', this.calculatePlantUnitBind);
        document.addEventListener('keydown', this.cancelChosePlantEscBind);
        this.checkPlantBuild = 0;
        return true;
      }
    })
  }

  cancelChosePlantEsc(e) {
    if (e.code === 'Escape') {
      this.seedPack.find((seed) => {
        if (seed.chose) {
          this.cancelChosePlant(seed);
          return true;
        }
      })
    }
  }

  cancelChosePlantClick(e) {
    this.seedPack.find((seed, i) => {
      if ((e.layerX > (97+60*i)) && (e.layerX < (97+10*i + (50*(i+1)))) && (e.layerY > 9) && (e.layerY < 74)) {
        if (seed.chose) {
          this.cancelChosePlant(seed);
          return true;
        }
      }
    })
  }

  cancelChosePlant(seed) {
    seed.chose = 0;
    this.position = {};
    this.canvas.removeEventListener('mousemove', this.calculatePlantUnitBind);
    document.removeEventListener('keydown', this.cancelChosePlantEscBind);
    this.checkPlantBuild = 0;
  }

  calculatePlantUnit(e) {
    this.seedPack.forEach((seed) => {
      if (seed.chose) {
        this.position.x = e.layerX - seed.calculateWidth() / 2;
        this.position.y = e.layerY - seed.calculateHeight() / 2;
      }
    })
  }

  createPlantLogo(seed, min, max, bias, factor) {
    seed.create(this.position.x, this.position.y);
    for (let i = 0; i < 10; i++) {
      if ((this.position.x> 82*i) && (this.position.x < 82*(i+1))) {
        for (let j = min; j < max; j++) { //TODO change number of clumbs and change positionX anf positionY
          if (this.position.y > bias+(j*factor) && this.position.y < bias+(j+1)*factor) {
            this.positionToCreate.y = bias+50+(97*j);
            this.positionToCreate.x = 40 + 82*i;
            seed.create(this.positionToCreate.x, this.positionToCreate.y);
          }
        }
      }
    }
  }

  createPlantUnit(e, plant) {
    plant.init();
    let length = this.positionOfPlant.length;
    let checkUniq = 1;
    if (this.position.x < 730 && this.position.y > 50) {//TODO delete positionX and positionY
      checkUniq = this.checkUniqOfPosition(checkUniq, length, plant);
      if (checkUniq) {
        this.addPlant(plant);
      } else {
        this.checkPlantBuild = 0;
      }
    }
  }

  checkUniqOfPosition(checkUniq, length, plant) {
    for (let i = 0; i < length; i++) {
      if (this.positionOfPlant[i].pointX === plant.positionOfCreate.pointX && this.positionOfPlant[i].pointY === plant.positionOfCreate.pointY) {
        checkUniq = 0;
      }
    }
    return checkUniq;
  }

  addPlant(plant) {
    this.plants.push(plant);
    this.positionOfPlant.push(plant.positionOfCreate);
    this.seedPack.find((seed) => {
      if (seed.chose) {
        this.cancelChosePlant(seed);
        return true;
      }
    });
    this.checkPlantBuild = 1;
  }

  plantsAttackZombies(plant, zombie, sound) {
    for (let i = 0; i < plant.positionOfBullet.length; i++) {
      if ((plant.positionOfBullet[i].pointX > zombie.positionX+60) && (plant.positionOfBullet[i].pointX < zombie.positionX+85) && (zombie.positionY+75> plant.positionOfBullet[i].pointY) && (zombie.positionY+65 < plant.positionOfBullet[i].pointY) && (!zombie.burn)) {
        plant.positionOfBullet[i].hit = 1;
        sound();
        if (plant.positionOfBullet[i].frameBulletSpeed === 3) {
            plant.positionOfBullet.splice(i,1);
            zombie.health -= plant.damage;
            zombie.checkState();
        }
      }
    }
  }

  cherryBombBurnsZombie(plant, zombie){
    if (plant.positionX - 160 < zombie.positionX+60 && plant.positionX + 160 > zombie.positionX+60 && plant.positionY - 115 < zombie.positionY+70 && plant.positionY+115 > zombie.positionY+70){
      zombie.burn = 1;
    }
  }

  ifPlantSunflower(plant, suns) {
    if (plant.abilityTimer > 900) {
      suns.push(plant.useOfAbility());
      plant.abilityTimer = 0;
    } else {
      plant.abilityTimer++
    }
  }

  ifPlantCherryBomb(plant, i, arr) {
    if (plant.abilityTimer > 40){
      arr.splice(i,1);
      this.positionOfPlant.splice(i, 1);
    } else {
      plant.abilityTimer++;
    }
  }
  //--------TODO Zombie------
  createZombie() {
    for (let i = 0; i < 8*this.level; i++) { //TODO change number Of zombie
      let zombie = new Zombie(this.context);
      zombie.positionOfCreate();
      this.zombies.push(zombie);
    }
    this.zombiesLength = this.zombies.length;
  }

  sortZombieView() {
    this.zombies = this.zombies.slice().sort((a,b) => {
      let c = a.positionY;
      let d = b.positionY;
      if ( c < d) {
        return -1;
      } else if( c > d ) {
        return 1;
      }
      return 0;
    });
  }

  setZombieState(callback) {
    this.zombies.forEach((zombie) => {
      let state;
      state = callback(1,this.level);
      zombie.setState(state);
    });
  }

  levelOverview(frameWaiting) {
    this.zombies.forEach((zombie) => {
      if (!frameWaiting) {
        zombie.positionX -= 10;
      }
      zombie.create();
    });
  }

  returnOnGarden() {
    this.zombies.forEach((zombie) => {
      zombie.positionX += 10;
      zombie.create();
    });
  }

  startComingZombie(min, max, factor, bias) {
    if (this.zombies.length > 0) {
      if (this.commingZombieTimer > 300 && (this.zombies.length > Math.ceil(this.zombiesLength/2))) {
        this.simpleWave(min, max, factor, bias);
      } else if (this.zombies.length <= Math.ceil(this.zombiesLength/2) && this.commingZombieTimer > 90) {
        this.finalWave(min, max, factor, bias);
      } else {
        this.commingZombieTimer++;
      }
    }
  }

  simpleWave(min, max, factor, bias) {
    let index = this.zombies.length - 1;
    this.zombies[index].positionX = 710;
    this.zombies[index].positionY = this.zombies[index].setPositionOfCreate(min, max)*factor+bias;
    this.zombiesC.push(this.zombies.pop());
    this.commingZombieTimer = 0;
  }

  finalWave(min, max, factor, bias) {
    let index = this.zombies.length - 1;
    this.zombies[index].positionX = 710;
    this.zombies[index].positionY = this.zombies[index].setPositionOfCreate(min, max)*factor+bias;
    this.zombiesC.push(this.zombies.pop());
    this.commingZombieTimer = 0;
  }

  zombiesDead(zombie, i, arrayOfZombie) {
    zombie.zombiesDead();
    if (zombie.timerDied > 59) {
      arrayOfZombie.splice(i,1);
    }
  }

  zombiesBurn(zombie, i, arrayOfZombie) {
    zombie.zombieBurn();
    if (zombie.timerOfBurn > 100){
      arrayOfZombie.splice(i, 1);
    }
  }

  zombiesAttackPlants(plant, i, arrayOfPlant) {
    plant.zombieAttackTimer++;
    if (plant.zombieAttackTimer > 42) {
      plant.health -= 1;
      plant.zombieAttackTimer = 0;
      if (plant.health < 1) {
        this.positionOfPlant.splice(i, 1);
        arrayOfPlant.splice(i, 1);
      }
    }
  }


}

export {AllUnitInTheMap}
