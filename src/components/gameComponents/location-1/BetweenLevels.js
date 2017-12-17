import {description} from '../../descriptionComponents/description'
import {awardImages} from "../../imgComponents/awardImages";
import {LevelOne} from "./level-1";
import {LevelTwo} from "./level-2";
import {LevelThree} from "./level-3";
import {commonImages} from "../../imgComponents/commonImages";



class BetweenLevels {
    constructor(canvas, context, award, currentLevel) {
        this.canvas = canvas;
        this.context = context;
        this.award = award;
        this.currentLevel = currentLevel;
        this.description = {};
        this.buttonLabel = '';
        this.buttonImage = awardImages.button;
        this.heading = '';
        this.nextLevel = 0;
        this.restartLevel = 0;
        this.startBind = null;
        this.clickBind = null;
        this.restartBind = null;
    }

    create() {
        this.heading = 'you got a new plant!';
        this.heading = this.heading.toUpperCase();
        this.startBind = this.start.bind(this);
        this.buttonLabel = 'Next level';
        this.buttonLabel = this.buttonLabel.toUpperCase();
        this.clickBind = this.click.bind(this);
        this.description.name = description[`level${this.currentLevel}`].name;
        this.description.body = description[`level${this.currentLevel}`].description;
        this.canvas.addEventListener('click', this.clickBind);
    }

    start() {
        if (!this.nextLevel) {
            this.context.drawImage(awardImages.background, 0, 0);
            this.context.drawImage(this.award, 375, 167);
            this.context.drawImage(this.buttonImage, 322, 515);
            this.context.fillStyle = '#d59f2b';
            this.context.fillText(this.heading, 400, 57);
            this.context.fillText(this.description.name, 400, 327);
            this.context.fillText(this.buttonLabel, 400, 544);
            this.context.fillStyle = '#28325a';
            this.context.fillText(this.description.body, 400, 418);
            requestAnimationFrame(this.start.bind(this));
        }
    }

    click(e) {
        if (e.layerX > 322 && e.layerX < 478 && e.layerY > 515 && e.layerY < 557) {
            let level;
            this.canvas.removeEventListener('click', this.clickBind);
            this.buttonImage = awardImages.buttonFocus;
            this.nextLevel = 1;
            if (this.currentLevel === 1) {
                level = new LevelTwo(this.canvas);
            } else if (this.currentLevel === 2) {
                level = new LevelThree(this.canvas);
            }
            this.context.clearRect(0, 0, 800, 600);
            level.startGame();
        }
    }

    createPlayerWon() {
        this.restartIfPlayerWonBind = this.restartIfPlayerWon.bind(this);
        this.canvas.addEventListener('click', this.restartIfPlayerWonBind);
    }

    playerWon() {
        this.context.drawImage(commonImages.zombieNoteLarge, 118, 66);
        this.context.drawImage(awardImages.button, 162, 515);
        this.context.drawImage(awardImages.button, 480, 515);
        this.context.fillStyle = '#d59f2b';
        this.context.fillText('Level 2', 238, 542);
        this.context.fillText('Level 3', 558, 542);
        if (!this.nextLevel) {
            requestAnimationFrame(this.playerWon.bind(this));
        }
    }

    restartIfPlayerWon(e){
        let level;
        if (e.layerX > 162 && e.layerX < 318 && e.layerY > 515 && e.layerY < 557) {
            this.nextLevel = 2;
        } else if ((e.layerX > 480 && e.layerX < 636 && e.layerY > 515 && e.layerY < 557)) {
            this.nextLevel = 3;
        }
        if (this.nextLevel === 2) {
            level = new LevelTwo(this.canvas);
        } else {
            level = new LevelThree(this.canvas);
        }
        this.canvas.removeEventListener('click', this.restartIfPlayerWonBind);
        this.context.clearRect(0, 0, 800, 600);
        level.startGame();
    }

    createPlayerLose() {
        this.restartBind = this.restart.bind(this);
        this.canvas.addEventListener('click', this.restartBind);
    }

    playerLose() {
        this.context.drawImage(commonImages.zombiesWon, 118, 66);
        this.context.drawImage(commonImages.restartButton, 322, 515);
        if (!this.restartLevel) {
            requestAnimationFrame(this.playerLose.bind(this));
        }
    }

    restart(e) {
        if (e.layerX > 322 && e.layerX < 482 && e.layerY > 515 && e.layerY < 557) {
            let level;
            this.canvas.removeEventListener('click', this.restartBind);
            this.restartLevel = 1;
            if (this.currentLevel === 1) {
                level = new LevelOne(this.canvas);
            } else if (this.currentLevel === 2) {
                level = new LevelTwo(this.canvas);
            } else if (this.currentLevel === 3) {
                level = new LevelThree(this.canvas);
            }
            this.context.clearRect(0, 0, 800, 600);
            level.startGame();
        } 
    }



}


export {BetweenLevels}
