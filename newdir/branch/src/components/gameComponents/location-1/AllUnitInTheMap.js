import {Zombie} from "../../zombiesComponents/Zombie";

class AllUnitInTheMap {
    constructor(context, currentLevel) {
        this.zombies = [];
        this.zombiesC = [];
        this.plants = [];
        this.seedPackets = [];
        this.suns = [];
        this.lawnmovers = [];
        this.seedRechargeTime = [];
        this.level = currentLevel;
        this.context = context;
        this.zombiesLength = 0;
        this.positionOfPlant = [];
    }

    createSeedPackets() {

    }

    createZombie(numberOfZombie, numberOfBucketHeadZombie, numberOfConeHeadZombie) {
        for (let i = 0; i < numberOfZombie; i++) {
            this.Zombie = new Zombie(this.context);
            this.Zombie.positionOfCreate();
            this.zombies.push(this.Zombie);
        }
        this.zombiesLength = this.zombies.length;
    }

    sortZombieView() {
        this.zombies = this.zombies.slice().sort((a, b) => {
            let c = a.positionY;
            let d = b.positionY;
            if (c < d) {
                return -1;
            } else if (c > d) {
                return 1;
            }
            return 0;
        });
    }

    levelOverview() {
        this.zombies.forEach((elem) => {
            if (!this.frameWaiting) {
                elem.positionX -= 10;
            }
            elem.create();
        });
    }

    returnOnGarden() {
        this.zombies.forEach((elem) => {
            elem.positionX += 10;
            elem.create();
        });
    }

    zombieComing() {
        this.activatedLawnmowers();
        this.zombiesC.forEach((zombie, i, arr) => {
            this.checkLawnmowersActivated(zombie);
            this.checkOfZombieHealth();
        });
    }

    checkOfZombieHealth() {
        if (zombie.health < 1) {
            zombie.zombiesDead();
            if (zombie.timerDied > 59) {
                arr.splice(i, 1)
            }
        } else {
            this.zombieAttacksPlant(zombie);
        }
    }

    zombieAttacksPlant(zombie) {
        if (this.plants.some((plant, i, arr) => {
                if (plant.positionX - 20 > zombie.positionX && plant.positionX - 90 < zombie.positionX) {
                    this.zombieAttack++;
                    if (this.zombieAttack > 42) {
                        plant.health -= 1;
                        this.zombieAttack = 0;
                        if (plant.health < 1) {
                            this.positionOfPlant.splice(i, 1);
                            arr.splice(i, 1);
                        }
                    }
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

    drawLawnmowers() {
        this.lawnmovers.forEach((lawnmower) => lawnmower.draw());
    }

    activatedLawnmowers() {
        if (this.lawnmovers.length > 0) {
            this.lawnmovers.forEach((lawnmower) => lawnmower.activated());
        }
    }

    checkLawnmowersActivated(zombie) {
        this.lawnmovers.forEach((lawnmover) => {
            if (lawnmover.pointX > elem.positionX) {
                lawnmover.used = 1;
                zombie.health = 0;
            }
        });
    }

    drawPlant() {
        this.plants.forEach((plant) => {
            plant.build();
            this.plantAttackZombie();
            plant.attack();
        });
    }

    plantAttackZombie() {
        this.zombiesC.forEach((zombie) => {
            for (let i = 0; i < plant.positionOfBullet.length; i++) {
                if (plant.positionOfBullet[i].pointX > zombie.positionX + 60 && plant.positionOfBullet[i].pointX < zombie.positionX + 85) {
                    plant.positionOfBullet[i].hit = 1;
                    if (plant.positionOfBullet[i].frameBulletSpeed === 3) {
                        zombie.health -= 1;
                    }
                }
            }
        })
    }

    drawSun() {
        this.suns.forEach((sun) => {
            sun.fall();
        });
    }

    choseSun() {
        this.chosenSuns.forEach((elem, i, arr) => {
            elem.chose();
            if (elem.startX < 10) {
                arr.splice(i, 1);
                this.numberOfSuns += 25;
            }
        });
    }

    createPlantUnit(pointX, pointY) {
        let plant = new Peashooter(this.context, pointX, pointY);
        let length = this.positionOfPlant.length;
        let checkUniq = 1;
        if (this.positionX < 730 && this.positionY > 230 && this.positionY < 335) {
            for (let i = 0; i < length; i++) {
                if (this.positionOfPlant[i] === plant.positionOfCreate) {
                    checkUniq = 0;
                }
            }
            if (checkUniq && this.peashooterRechargeTimer > 360) {
                this.peashooterRechargeTimer = 0;
                this.plants.push(plant);
                this.positionOfPlant.push(plant.positionOfCreate);
                this.chose = 0;
                this.numberOfSuns -= this.peashooterUnit.cost;
                if (!this.firstPlant) {
                    this.firstPlant = 1;
                    this.fallOfSuns();
                }
                if ((this.plants.length > 1) && (!this.checkComingZombie)) {
                    this.checkComingZombie = 1;
                    this.commingZombieTimer = 600;
                    this.startComingZombie();
                }
            }
        }
    }

}