import {GameComponents} from "./components/gameComponents/gameComponents";



class gameProcess {
    constructor() {
        this.currentLevel = 1;
        this.currentLocation = 1;
        this.canvas = document.querySelector('#canvas');
        this.canvas.width = 800;
        this.canvas.height = 600;
    }

    startGame() {
        const game = new GameComponents(this.canvas, this.currentLevel, this.currentLocation);
        const startGameProcess = game.preparationLevel.bind(game);
        startGameProcess();
        console.log('class one!');
    }
}

const game = new gameProcess();
game.startGame();



