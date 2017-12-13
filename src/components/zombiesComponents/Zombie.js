import {simpleZombieImage} from "../imgComponents/simpleZombieImage";
import {coneHeadZombieImages} from "../imgComponents/coneHeadZombieImages";
import {busketHeadZombieImages} from "../imgComponents/busketHeadZombieImages";


class Zombie{
    constructor(context) {
        this.context = context;
        this.health = 0;
        this.damage = 1;
        this.positionX = 0;
        this.positionY = 0;
        this.width = 166;
        this.height = 144;
        this.state = '';
        this.frame = 0;
        this.frameWaiting = 0;
        this.frameSpeed = 0;
        this.frameDied = 0;
        this.timerDied = 0;
        this.frameDiedHead = 0;
        this.frameAttack = 0;
        this.image = null;
    }

    checkState() {
        if (this.health > 19) {
            this.image = busketHeadZombieImages;
        } else if (this.health > 10) {
            this.image = coneHeadZombieImages;
        } else {
            this.image = simpleZombieImage;
        }
    }

    setState(state) {
        if (state === 1) {
            this.image = simpleZombieImage;
            this.state = 'simple';
            this.health = 10;
        } else if (state === 2) {
            this.image = coneHeadZombieImages;
            this.state = 'cone';
            this.health = 19;
        } else if (state === 3) {
            this.state = 'busket';
            this.image = busketHeadZombieImages;
            this.health = 25;
        }
    }

    positionOfCreate() {
        this.positionX = this.setPositionOfCreate(800, 900);
        this.positionY = this.setPositionOfCreate(100, 500);
    }

    create() {
        this.context.drawImage(simpleZombieImage.wait, this.frameWaiting, 0, 91, 155, this.positionX, this.positionY, 91, 155);
        this.frameSpeed++;
        if (this.frameSpeed === 4) {
            this.frameWaiting += 91;
            this.frameSpeed = 0;
        }
        if (this.frameWaiting > 1400) {
            this.frameWaiting = 0;
        }
    }

    setPositionOfCreate(min, max) {
        return Math.floor(Math.random() * (max - min +1)) + min;
    }

    walk() {
        this.positionX -= 0.5;
        this.frameSpeed++;
        if (this.frameSpeed === 5) {
            this.frame += 166;
            this.frameSpeed = 0;
        }
        if (this.frame > this.image.walk.width - 10) {
            this.frame = 0;
        }
        this.context.drawImage(this.image.walk, this.frame, 0, this.width, this.height, this.positionX, this.positionY, this.width, this.height);
    }

    attack() {
        this.frameSpeed++;
        if (this.frameSpeed === 5) {
            this.frameAttack += 166;
            this.frameSpeed = 0;
        }
        if (this.frameAttack > this.image.attack.width - 10) {
            this.frameAttack = 0;
        }
        this.context.drawImage(this.image.attack, this.frameAttack, 0, this.width, this.height, this.positionX, this.positionY, this.width, this.height);
    }

    zombiesDead() {
        this.frameSpeed++;
        if (this.frameSpeed === 5) {
            if (this.frameDiedHead < 1650) {
                this.frameDiedHead += 150;
            }
            if (this.frameDied < 1493) {
                this.frameDied += 166;
            }
            this.frameSpeed = 0;
        }
        this.timerDied++;
        this.context.drawImage(simpleZombieImage.died, this.frameDied, 0, this.width, this.height, this.positionX, this.positionY, this.width, this.height);
        this.context.drawImage(simpleZombieImage.diedHead, this.frameDiedHead, 0, this.width, this.height+42, this.positionX+60, this.positionY, this.width, this.height+42);
    }
}

export { Zombie }