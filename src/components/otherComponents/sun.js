

import {sunImage} from "../imgComponents/sunImage";

class Sun {
    constructor(context) {
        this.context = context;
        this.income = 25;
        this.startX = 0;
        this.startY = 0;
        this.endY = 0;
        this.frame = 0;
        this.width = 75;
        this.height = 75;
    }

    create() {
        this.startX = this.positionOfSuns(100, 600);
        this.startY = this.positionOfSuns(100, 200);
        this.endY = this.positionOfSuns(this.startY, 500);
    }

    fall() {
        this.context.drawImage(sunImage.sun, this.frame, 0, this.width, this.height, this.startX, this.startY, this.width, this.height);
        if (this.startY < this.endY) {
            this.startY += 2;
        }
        this.frame += 78;
        if (this.frame > 1700) {
            this.frame = 0;
        }

    }

    chose() {
        this.context.drawImage(sunImage.sun, this.frame, 0, this.width, this.height, this.startX, this.startY, this.width, this.height);
        if (this.startX > 10) {
            this.startX -= (this.startX)/10;
        }
        if (this.startY > 0){
            this.startY -= (this.startY)/10+0.75;
        }
        this.frame += 78;
        if (this.frame > 1700) {
            this.frame = 0;
        }
    }

    positionOfSuns(min, max) {
        return Math.floor(Math.random() * (max - min +1)) + min;
    }
}

export {Sun}