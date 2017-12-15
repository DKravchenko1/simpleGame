import {resources} from './resources';
import {store} from './store';
import {MenuPage} from './menu_page';
import {buttonAudio} from '../audioComponents/audioButton';
import {audioPlayer} from '../audioComponents/audioPlayer';

export class PlayerMenu {
    
    constructor () {
        this.elemLeft = start.offsetLeft;  
        this.elemTop = start.offsetTop;
        this.ctx = start.getContext('2d');
        this.enableEvents();
        this.hasInput = false;
        this.input;
        this.buttonAudio = buttonAudio;
        this.renderPage();
        this.enableEvents();
        this.audioPlayer = audioPlayer;
        this.buttonAudio = buttonAudio;
    }
    
    enableEvents() {       
        this.event_okDown = this.onOkDown.bind(this);
        start.addEventListener('mousedown', this.event_okDown, false);
        this.event_okUp = this.onOkUp.bind(this);
        start.addEventListener('mouseup', this.event_okUp, false); 
        this.event_cancelDown = this.onCancelDown.bind(this);
        start.addEventListener('mousedown', this.event_cancelDown, false);
        this.event_cancelUp = this.onCancelUp.bind(this);
        start.addEventListener('mouseup', this.event_cancelUp, false); 
    }
    
    disableEvents() {
        start.removeEventListener('mousedown', this.event_okDown, false);
        start.removeEventListener('mouseup', this.event_okUp, false);
        start.removeEventListener('mousedown', this.event_cancelDown, false);
        start.removeEventListener('mouseup', this.event_cancelUp, false);        
    }
    
    outsideArea(event, x1, x2, y1, y2) {
        let x = event.pageX - this.elemLeft, y = event.pageY - this.elemTop;
        return x < x1 || x > x2 || y < y1 || y > y2;
    }
    
    renderPage(){
        let ctx = this.ctx;
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
        this.ctx.drawImage(resources.get('img/dialog_window/enter_name.png'), 310, 365, 220, 30);
        this.ctx.drawImage(resources.get('img/dialog_window/ok_button.png'), 323, 427, 25, 20);
        this.ctx.drawImage(resources.get('img/dialog_window/cancel_button.png'), 468, 427, 70, 25);
    }
    
    onCancelDown(event) {
        if (this.outsideArea(event,460,550,420,465)) return;
        this.audioPlayer(this.buttonAudio.tap);
        this.audioPlayer(this.buttonAudio.tap2);
        this.audioPlayer(this.buttonAudio.bleep);
        this.buttonX = 460;
        this.buttonY = 420;
        this.ctx.drawImage(resources.get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 290, 420, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 463, 417, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/please.png'), 370, 240, 120, 35);
        this.ctx.drawImage(resources.get('img/dialog_window/enter_name.png'), 310, 365, 220, 30);
        this.ctx.drawImage(resources.get('img/dialog_window/ok_button.png'), 320, 430, 25, 20);
        this.ctx.drawImage(resources.get('img/dialog_window/cancel_button.png'), 471, 424, 70, 25);
    }
    
    effectButtonUp() {
        this.ctx.drawImage(resources.get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 293, 417, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/button.png'), 460, 420, 90, 45);
        this.ctx.drawImage(resources.get('img/dialog_window/please.png'), 370, 240, 120, 35);
        this.ctx.drawImage(resources.get('img/dialog_window/enter_name.png'), 310, 365, 220, 30);
        this.ctx.drawImage(resources.get('img/dialog_window/ok_button.png'), 320, 430, 25, 20);
        this.ctx.drawImage(resources.get('img/dialog_window/cancel_button.png'), 465, 425, 70, 25);
    }
    
    onOkUp(event) {
        if (this.outsideArea(event,290,380,420,465)) return;
        this.audioPlayer(this.buttonAudio.tap);
        this.audioPlayer(this.buttonAudio.tap2);
        this.audioPlayer(this.buttonAudio.bleep);
        this.effectButtonUp();
        store.setPlayer(this.input.value);
        document.body.removeChild(this.input);
        this.disableEvents();
        let x = new MenuPage();
    }
    
    onCancelUp(event) {
        if (this.outsideArea(event,460,550,420,465)) return;
        this.effectButtonUp();
        document.body.removeChild(this.input);
        this.disableEvents();
        let x = new MenuPage();
    }
}