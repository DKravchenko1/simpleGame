import {description} from '../../descriptionComponents/description'
import {awardImages} from "../../imgComponents/awardImages";
import {LevelTwo} from "./level-2";
import {LevelThree} from "./level-3";


class BetweenLevels {
    constructor(canvas, context ,award, currentLevel) {
        this.canvas = canvas;
        this.context = context;
        this.award = award;
        this.currentLevel = currentLevel;
        this.description = {};
        this.buttonLabel = '';
        this.buttonImage = awardImages.button;
        this.heading = '';
        this.nextLevel = 0;
        this.startBind = null;
        this.clickBind = null;
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
            this.context.fillText(this.description.name, 400, 328);
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
            if (this.currentLevel === 2) {
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