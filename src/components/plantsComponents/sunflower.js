import {Plants} from "./plants";
import {sunflowerImages} from "../imgComponents/sunflowerImage";
import {Sun} from "../otherComponents/sun";


class Sunflower extends Plants {
    constructor(context, positionX, positionY) {
        super(context, 0, 5, 10, 50, positionX, positionY);
        this.startX = 0;
        this.startY = 0;
        this.endY = 0;
        this.context = context;
        this.packet = null;
        this.name = Sunflower;
        this.abilityTimer = 0;
    }

    award() {
        super.award(sunflowerImages.sunflowerLogo, this.startX, this.startY+40);
    }

    createAwardPosition(positionX, positionY) {
        super.createAwardPosition(positionX, positionY);
    }

    init() {
        super.init();
        this.packet = sunflowerImages.sunflowerLogo;
    }

    choice() {
        this.packet = sunflowerImages.sunflowerChosen;
    }

    cancelChoice() {
        this.packet = sunflowerImages.sunflowerLogo;
    }

    create(pointX, pointY) {
        super.create(sunflowerImages.sunflowerCursor, pointX, pointY)
    }

    build (pointX = this.positionX, pointY = this.positionY) {
        this.frameSpeed++;
        this.context.drawImage(sunflowerImages.sunflower, this.frame, 0, 73, 74, pointX, pointY, 73, 74);
        if (this.frameSpeed === 5){
            this.frame += 73;
            this.frameSpeed = 0;
        }
        if (this.frame > 1300) {
            this.frame = 0;
        }
    }

    useOfAbility() {
        const sun = new Sun(this.context);
        sun.startX = this.positionX;
        sun.startY = this.positionY;
        sun.endY = this.positionY + 40;
        return sun;
    }

    calculateWidth() {
        return sunflowerImages.sunflowerCursor.width;
    }

    calculateHeight() {
        return sunflowerImages.sunflowerCursor.height;
    }
}

export {Sunflower}
