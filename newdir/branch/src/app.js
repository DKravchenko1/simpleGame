import { StartGame } from './components/menuComponents/start_page';


function init() {
    const startgame = new StartGame();
    document.querySelector('#start-button').addEventListener('click', startgame.onLoadResources.bind(startgame), false);
    console.log('Start');
    
}
init();