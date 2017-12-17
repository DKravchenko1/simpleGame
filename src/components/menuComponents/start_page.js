import {resources} from './resources';
import {MenuPage} from './menu_page';
import {buttonAudio} from '../audioComponents/audioButton';
import {gameAudioStates} from '../audioComponents/audioGameState';
import {store} from './store';
import {audioPlayer} from "../audioComponents/audioPlayer";


export class StartGame {
    constructor () {
        this.ctx = start.getContext('2d');
    }

    startLoad() {
        document.querySelector('.overlay-loader').classList.remove('not-display');
    }

    enableEvents() {
        this.event_goToMenu = this.onGoToMenu.bind(this);
        start.addEventListener('click', this.event_goToMenu, false);
        this.event_changeText = this.changeTextColor.bind(this);
        start.addEventListener('mousemove', this.event_changeText, false);
    }

    disableEvents() {
        start.removeEventListener('click', this.event_goToMenu, false);
        start.removeEventListener('mousemove', this.event_changeText, false);
    }

    onLoadResources() {
        if(resources.isReady()) {
            this.readyToRender();
            document.querySelector('.overlay-loader').classList.add('not-display');
        }
        resources.load([
            'img/start_page/start_grass_button.png',
            'img/start_page/titlescreen.png',
            'img/start_page/pvz_logo.png',
            'img/menu_backgrounds/level_1_background.png',
            'img/menu_backgrounds/level_2_background.png',
            'img/menu_backgrounds/level_3_background.png',
            'img/dialog_window/quit_menu.png',
            'img/dialog_window/button.png',
            'img/menu_backgrounds/level_1_light.png',
            'img/menu_backgrounds/level_2_light.png',
            'img/menu_backgrounds/level_3_light.png',
            'img/dialog_window/quit_menu.png',
            'img/dialog_window/button.png',
            'img/dialog_window/quit_text_1.png',
            'img/dialog_window/quit_text_2.png',
            'img/dialog_window/quit_button.png',
            'img/dialog_window/cancel_button.png',
            'img/dialog_window/ok_button.png',
            'img/dialog_window/please.png',
            'img/dialog_window/enter_name.png',
            'img/menu_backgrounds/quit_flowers.png',
            'img/zomby_hand/sprite_zomby_hand.png',
            'img/start_page/writting_white.png',
            'img/start_page/writting_red.png'
        ]);
        resources.onReady(this.readyToRender.bind(this));
        document.querySelector('#start-button').classList.add('not-display');
        document.querySelector('#canvas-container').classList.remove('not-display');
        document.querySelector('#landing-information').classList.add('not-display');
        document.querySelector('.body-landing').classList.add('body-in-game');
        document.querySelector('.body-landing').classList.remove('body-landing');
        start.width  = 800;
        start.height = 600;
    }

    readyToRender() {
        this.renderPage();
        this.enableEvents();
    }

    renderPage() {
        this.ctx.drawImage(resources.get('img/start_page/titlescreen.png'), 0, 0, 800, 600);
        this.ctx.drawImage(resources.get('img/start_page/pvz_logo.png'), 80, 50, 600, 100);
        this.ctx.drawImage(resources.get('img/start_page/start_grass_button.png'), 200, 500, 400, 80);
    }

    changeTextColor(event) {
        if (event.layerX >= 200 && event.layerX <= 590 && event.layerY >= 510 && event.layerY <= 563) {
            this.renderPage();
            this.ctx.drawImage(resources.get('img/start_page/writting_red.png'), 300, 540);
        } else {
            this.renderPage();
            this.ctx.drawImage(resources.get('img/start_page/writting_white.png'), 300, 540);
        }
    }

    outsideArea(event,x1,x2,y1,y2) {
        let x = event.pageX - this.elemLeft, y = event.pageY - this.elemTop;
        return x < x1 || x > x2 || y < y1 || y > y2;
    }

    onGoToMenu(event) {
        if (this.outsideArea(event,200,590,510,563)) return;
        this.disableEvents();
        this.menupage = new MenuPage();
    }
}
