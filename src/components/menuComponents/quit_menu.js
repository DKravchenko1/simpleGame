import {resources} from './resources';
import {MenuPage} from './menu_page';
import {buttonAudio} from '../audioComponents/audioButton';
import {audioPlayer} from '../audioComponents/audioPlayer';
import {gameAudioStates} from '../audioComponents/audioGameState';

export class QuitMenu {

    constructor () {
        this.start = document.querySelector('#start');
        this.elemLeft = this.start.offsetLeft;
        this.elemTop = this.start.offsetTop;
        this.ctx = this.start.getContext('2d');
        this.buttonX;
        this.buttonY;
        this.renderPage();
        this.enableEvents();
    }

    enableEvents() {
        this.event_quitDown = this.onQuitDown.bind(this);
        this.start.addEventListener('mousedown', this.event_quitDown, false);
        this.event_quitUp = this.onQuitUp.bind(this);
        this.start.addEventListener('mouseup', this.event_quitUp, false);

        this.event_cancelDown = this.onCancelDown.bind(this);
        this.start.addEventListener('mousedown', this.event_cancelDown, false);
        this.event_cancelUp = this.onCancelUp.bind(this);
        this.start.addEventListener('mouseup', this.event_cancelUp, false);
    }

    disableEvents() {
        this.start.removeEventListener('mousedown', this.event_quitDown, false);
        this.start.removeEventListener('mouseup', this.event_quitUp, false);
        this.start.removeEventListener('mousedown', this.event_cancelDown, false);
        this.start.removeEventListener('mouseup', this.event_cancelUp, false);
    }


    outsideArea(event, x1, x2, y1, y2) {
        let x = event.pageX - this.elemLeft, y = event.pageY - this.elemTop;
        return x < x1 || x > x2 || y < y1 || y > y2;
    }

    renderPage(){
        this.ctx.drawImage(resources.get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 290, 420, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 460, 420, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/quit_text_1.png'), 375, 250, 80, 40);
        this.ctx.drawImage(resources.get('img/dialog_window/quit_text_2.png'), 260, 330, 330, 30);
        this.ctx.drawImage(resources.get('img/dialog_window/quit_button.png'), 310, 430, 50, 25);
        this.ctx.drawImage(resources.get('img/dialog_window/cancel_button.png'), 468, 427, 70, 25);
        this.ctx.drawImage(resources.get('img/menu_backgrounds/quit_flowers.png'), 697, 445, 93, 108);

    }

    onQuitDown(event) {
        if (this.outsideArea(event,290,380,420,465)) return;
        audioPlayer(buttonAudio.tap, buttonAudio.tap2, buttonAudio.bleep);
        this.ctx.drawImage(resources.get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 293, 417, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 460, 420, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/quit_text_1.png'), 375, 250, 80, 40);
        this.ctx.drawImage(resources.get('img/dialog_window/quit_text_2.png'), 260, 330, 330, 30);
        this.ctx.drawImage(resources.get('img/dialog_window/quit_button.png'), 313, 427, 50, 25);
        this.ctx.drawImage(resources.get('img/dialog_window/cancel_button.png'), 468, 427, 70, 25);
    }

    onCancelDown(event) {
        if (this.outsideArea(event,460,550,420,465)) return;
        audioPlayer(buttonAudio.tap, buttonAudio.tap2, buttonAudio.bleep);
        this.ctx.drawImage(resources.get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 290, 420, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 463, 417, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/quit_text_1.png'), 375, 250, 80, 40);
        this.ctx.drawImage(resources.get('img/dialog_window/quit_text_2.png'), 260, 330, 330, 30);
        this.ctx.drawImage(resources.get('img/dialog_window/quit_button.png'), 310, 430, 50, 25);
        this.ctx.drawImage(resources.get('img/dialog_window/cancel_button.png'), 471, 424, 70, 25);
    }

    effectButtonUp() {
        this.ctx.drawImage(resources.get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 293, 417, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 460, 420, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/quit_text_1.png'), 375, 250, 80, 40);
        this.ctx.drawImage(resources.get('img/dialog_window/quit_text_2.png'), 260, 330, 330, 30);
        this.ctx.drawImage(resources.get('img/dialog_window/quit_button.png'), 310, 430, 50, 25);
        this.ctx.drawImage(resources.get('img/dialog_window/cancel_button.png'), 465, 425, 70, 25);
    }

    onQuitUp(event) {
        if (this.outsideArea(event,290,380,420,465)) return;
        this.effectButtonUp();
        this.disableEvents();
        gameAudioStates.menupage.pause();
        document.querySelector('#start-button').classList.remove('not-display');
        document.querySelector('#canvas-container').classList.add('not-display');
        document.querySelector('#landing-information').classList.remove('not-display');
        document.querySelector('.body-in-game').classList.add('body-landing');
        document.querySelector('.body-in-game').classList.remove('body-in-game');
    }

    onCancelUp(event) {
        if (this.outsideArea(event,460,550,420,465)) return;
        this.effectButtonUp();
        this.disableEvents();
        let x = new MenuPage();
        x.render();
    }
}
