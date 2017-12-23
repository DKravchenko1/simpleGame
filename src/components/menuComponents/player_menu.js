import {resources} from './resources';
import {store} from './store';
import {MenuPage} from './menu_page';
import {buttonAudio} from '../audioComponents/audioButton';
import {audioPlayer} from '../audioComponents/audioPlayer';

export class PlayerMenu {

    constructor () {
        this.start = document.querySelector('#start');
        this.elemLeft = this.start.offsetLeft;
        this.elemTop = this.start.offsetTop;
        this.ctx = this.start.getContext('2d');
        this.hasInput = false;
        this.renderPage();
        this.enableEvents();
    }

    enableEvents() {
        this.event_okDown = this.onOkDown.bind(this);
        this.start.addEventListener('mousedown', this.event_okDown, false);
        this.event_okUp = this.onOkUp.bind(this);
        this.start.addEventListener('mouseup', this.event_okUp, false);
        this.event_cancelDown = this.onCancelDown.bind(this);
        this.start.addEventListener('mousedown', this.event_cancelDown, false);
        this.event_cancelUp = this.onCancelUp.bind(this);
        this.start.addEventListener('mouseup', this.event_cancelUp, false);
    }

    disableEvents() {
        this.start.removeEventListener('mousedown', this.event_okDown, false);
        this.start.removeEventListener('mouseup', this.event_okUp, false);
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
        this.ctx.drawImage(resources.get('img/dialog_window/please.png'), 370, 240, 120, 35);
        this.ctx.drawImage(resources.get('img/dialog_window/enter_name.png'), 310, 360, 220, 30);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 460, 420, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/cancel_button.png'), 468, 427, 70, 25);
        this.ctx.drawImage(resources.get('img/dialog_window/ok_button.png'), 320, 430, 25, 20);
        this.addInput();
    }

    addInput() {
        let input = document.createElement('input');
        input.type = 'text';
        input.style.position = 'absolute';
        input.style.color = 'white';
        input.style.left = (this.elemLeft + 330)  + 'px';
        input.style.top = (this.elemTop + 300) + 'px';
        this.input = input;
        document.body.appendChild(input);
        input.focus();
    }

    onOkDown(event) {
        if (this.outsideArea(event,290,380,420,465)) return;
        this.buttonX = 290;
        this.buttonY = 420;
        this.ctx.drawImage(resources.get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 293, 417, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 460, 420, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/please.png'), 370, 240, 120, 35);
        this.ctx.drawImage(resources.get('img/dialog_window/enter_name.png'), 310, 360, 220, 30);
        this.ctx.drawImage(resources.get('img/dialog_window/ok_button.png'), 323, 427, 25, 20);
        this.ctx.drawImage(resources.get('img/dialog_window/cancel_button.png'), 468, 427, 70, 25);
    }

    onCancelDown(event) {
        if (this.outsideArea(event,460,550,420,465)) return;
        audioPlayer(buttonAudio.tap, buttonAudio.tap2, buttonAudio.bleep);
        this.buttonX = 460;
        this.buttonY = 420;
        this.ctx.drawImage(resources.get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 290, 420, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 463, 417, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/please.png'), 370, 240, 120, 35);
        this.ctx.drawImage(resources.get('img/dialog_window/enter_name.png'), 310, 360, 220, 30);
        this.ctx.drawImage(resources.get('img/dialog_window/ok_button.png'), 320, 430, 25, 20);
        this.ctx.drawImage(resources.get('img/dialog_window/cancel_button.png'), 471, 424, 70, 25);
    }

    effectButtonUp() {
        this.ctx.drawImage(resources.get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 293, 417, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 460, 420, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/please.png'), 370, 240, 120, 35);
        this.ctx.drawImage(resources.get('img/dialog_window/enter_name.png'), 310, 360, 220, 30);
        this.ctx.drawImage(resources.get('img/dialog_window/ok_button.png'), 320, 430, 25, 20);
        this.ctx.drawImage(resources.get('img/dialog_window/cancel_button.png'), 465, 425, 70, 25);
    }

    onOkUp(event) {
        if (this.outsideArea(event,290,380,420,465)) return;
        audioPlayer(buttonAudio.tap);
        audioPlayer(buttonAudio.tap2);
        audioPlayer(buttonAudio.bleep);
        this.effectButtonUp();
        store.setPlayer(this.input.value);
        this.disableEvents();
        new MenuPage();
        this.input.parentNode.removeChild(this.input);
        this.input = null;
    }

    onCancelUp(event) {
        if (this.outsideArea(event,460,550,420,465)) return;
        this.effectButtonUp();
        this.disableEvents();
        new MenuPage();
        this.input.parentNode.removeChild(this.input);
        this.input = null;
    }
}
