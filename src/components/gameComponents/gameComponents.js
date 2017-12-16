import {LevelOne} from "./location-1/level-1";
import {LevelTwo} from "./location-1/level-2";
import {LevelThree} from "./location-1/level-3";

class GameComponents {
    constructor(canvas, currentLevel, currentLocation) {
        this.canvas = canvas;
        this.currentLevel = currentLevel;
        this.currentLocation = currentLocation;
        this.levelComplite = 0;
    }

    preparationLevel() {
        let level;
        if (this.currentLevel === '1') {
            level = new LevelOne(this.canvas);
        } else if (this.currentLevel === '2'){
            level = new LevelTwo(this.canvas);
        } else if (this.currentLevel === '3'){
            level = new LevelThree(this.canvas);
        }
        const startGame = level.startGame.bind(level);
        startGame();
    }

}
export {GameComponents};





