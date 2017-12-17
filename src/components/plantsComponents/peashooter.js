import {Plants} from "./plants";
import {peashooterImages} from '../imgComponents/peashooterImages'

class Peashooter extends Plants{
    constructor(context, positionX, positionY) {
        super(context, 1, 5, 3, 100, positionX, positionY);
        this.context = context;
        this.name = Peashooter;
        this.openFire = 0;
        this.width = 71;
        this.widthBullet = 56;
        this.height = 71;
        this.heightBullet = 46;
        this.hit = 0;
        this.frameBulletSpeed = 0;
    }

    init() {
       super.init();
       this.packet = peashooterImages.logo;
    }

    create(pointX, pointY){
        super.create(peashooterImages.cursor, pointX, pointY);
    }

    calculateWidth() {
        return peashooterImages.cursor.width;
    }

    calculateHeight() {
        return peashooterImages.cursor.height;
    }

    choice(pointX, pointY) {
        this.packet = peashooterImages.chosen;
        super.drawSeed(this.packet, pointX, pointY);
    }

    cancelChoice(pointX, pointY) {
        this.packet = peashooterImages.logo;
        super.drawSeed(this.packet, pointX, pointY);
    }

    build (pointX = this.positionX, pointY = this.positionY) {
        this.frameSpeed++;
        this.context.drawImage(peashooterImages.unit, this.frame, 0, this.width, this.height, pointX, pointY, this.width, this.height);
        if (this.frameSpeed === 5){
            this.frame += 71;
            this.frameSpeed = 0;
        }
        if (this.frame > 900) {
            this.frame = 0;
        }
    }

    useOfAbility (){
        for (let i = 0; i < this.positionOfBullet.length; i++) {
            if (this.positionOfBullet[i].pointX < (this.positionX + 800)) {
                if (this.positionOfBullet[i].hit) {
                    this.context.drawImage(peashooterImages.bullet, 56, 0, this.widthBullet, this.heightBullet, this.positionOfBullet[i].pointX, this.positionOfBullet[i].pointY, this.widthBullet, this.heightBullet);
                    this.positionOfBullet[i].frameBulletSpeed++;
                    this.positionOfBullet[i].pointX += 5;
                } else {
                    this.context.drawImage(peashooterImages.bullet, 0, 0, this.widthBullet, this.heightBullet, this.positionOfBullet[i].pointX + 25, this.positionOfBullet[i].pointY, this.widthBullet, this.heightBullet);
                    this.positionOfBullet[i].pointX += 5;
                }
            } else {
                this.positionOfBullet.splice(i, 1);
            }
        }
    }

}

export { Peashooter };
