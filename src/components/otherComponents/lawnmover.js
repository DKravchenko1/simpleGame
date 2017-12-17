
import {commonImages} from "../imgComponents/commonImages";

class Lawnmower {
    constructor(context, pointX, pointY) {
        this.context = context;
        this.pointX = pointX;
        this.pointY = pointY;
        this.used = 0;
        this.number = 0;
        this.unit = commonImages.lawnmower;
    }

    draw() {
        this.context.drawImage(this.unit, this.pointX, this.pointY)
    }

    activated() {
        if (this.used){
            this.context.drawImage(this.unit, this.pointX, this.pointY);
            if (this.pointX < 800) {
                this.pointX += 10;
            }
        }
    }
}

export {Lawnmower}
