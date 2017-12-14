import {Plants} from './plants';
import {cherryBombImages} from "../imgComponents/cherryBombImages";

class CherryBomb extends Plants{
    constructor(context, positionX, positionY) {
        super(context, 50, 10, 5, 150, positionX, positionY);
        this.context = context;
        this.startX = 0;
        this.startY = 0;
        this.endY = 0;
        this.name = CherryBomb;
        this.width = 112;
        this.height = 81;
        this.frameSpeed = 0;
        this.frameBoom = 0;
        this.packet = cherryBombImages.logo;
    }

    award() {
        super.award(this.packet, this.startX, this.startY + 40)
    }

    createAwardPosition(positionX, positionY) {
       super.createAwardPosition(positionX, positionY);
    }

    init() {
        super.init();
    }

    choice() {
        this.packet = cherryBombImages.chosen;
    }

    cancelChoice() {
        this.packet = cherryBombImages.logo;
    }

    create(positionX, positionY) {
        super.create(cherryBombImages.cursor, positionX, positionY)
    }

    build (pointX = this.positionX, pointY = this.positionY) {
        this.frameSpeed++;
        this.context.drawImage(cherryBombImages.unit, this.frameBoom, 0, this.width, this.height, pointX, pointY, this.width, this.height);
        if (this.frameSpeed === 5){
            this.frameBoom += 112;
            this.frameSpeed = 0;
        }
        if (this.frameBoom > 784) {
            this.context.drawImage(cherryBombImages.pow, 0, 0, cherryBombImages.pow.width, cherryBombImages.pow.height, pointX, pointY, cherryBombImages.pow.width, cherryBombImages.pow.height);
        }
    }

    useOfAbility() {

    }

    calculateWidth() {
        return cherryBombImages.cursor.width;
    }

    calculateHeight() {
        return cherryBombImages.cursor.height;
    }

}

export {CherryBomb}