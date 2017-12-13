import {LevelOne} from "./location-1/level-1";
import {LevelTwo} from "./location-1/level-2";

class GameComponents {
    constructor(canvas, currentLevel, currentLocation) {
        this.canvas = canvas;
        this.currentLevel = currentLevel;
        this.currentLocation = currentLocation;
        this.levelComplite = 0;
    }

    preparationLevel() {
        const level = new LevelOne(this.canvas);
        const startGame = level.startGame.bind(level);
        startGame();
        console.log('level one!');
    }

}

export { GameComponents };





