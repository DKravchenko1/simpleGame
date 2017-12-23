import {commonImages} from '../imgComponents/commonImages.js';
import {resources} from './resources';
import {store} from './store';
import {gameAudioStates} from '../audioComponents/audioGameState';
import {audioPlayer} from '../audioComponents/audioPlayer';
import {MenuPage} from '../menuComponents/menu_page';
import {buttonAudio} from '../audioComponents/audioButton';


class Options {
    constructor (canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.knobPositionX = store.knobPosition(320,460);
        this.knobPositionY = 210;
        this.elemLeft = this.canvas.offsetLeft;
        this.elemTop = this.canvas.offsetTop;
        this.returnToMenuBind = this.returnToMenu.bind(this);
        this.changeKnobPositionBind = this.changeKnobPosition.bind(this);
    }
    
    enableEvents() {
        this.canvas.addEventListener('click', this.changeKnobPositionBind); 
        this.canvas.addEventListener('click', this.returnToMenuBind);
    }
    
    disableEvents() {
        this.canvas.removeEventListener('click', this.changeKnobPositionBind); 
        this.canvas.removeEventListener('click', this.returnToMenuBind);      
    }
    
    rendDialogWindow() {
        this.context.drawImage(commonImages.menuWindow, 188, 30);
        this.context.drawImage(commonImages.restartButton, 230, 445);
        this.context.drawImage(commonImages.quitButton, 397, 445);
        this.context.drawImage(commonImages.sliderKnob, this.knobPositionX - 10, this.knobPositionY);
    }
    
    rendQuitWindow() {
        this.context.drawImage(resources.get('img/dialog_window/quit_menu.png'),170, 180, 450, 350);
        this.context.drawImage(commonImages.quit1, 350, 250);
        this.context.drawImage(commonImages.quit2, 210, 350);
        this.context.drawImage(commonImages.quitButton, 210, 460);
        this.context.drawImage(commonImages.cancelButton, 420, 460);
    }
    
    rendRestartWindow() {
        this.context.drawImage(resources.get('img/dialog_window/quit_menu.png'),170, 180, 450, 350);
        this.context.drawImage(commonImages.restart1, 325, 250);
        this.context.drawImage(commonImages.restart2, 205, 350);
        this.context.drawImage(commonImages.restartButton, 210, 460);
        this.context.drawImage(commonImages.cancelButton, 420, 460);
    }
    
    renderSoundWindow() {
        this.context.drawImage(commonImages.menuWindow, 188, 30);
        this.context.drawImage(resources.get('img/menu_backgrounds/options_flowers.png'), 608, 405, 167, 160);
        this.context.drawImage(commonImages.ok, 310, 440);
        this.context.drawImage(commonImages.sliderKnob, this.knobPositionX - 10, this.knobPositionY);   
    }
    
    changeKnobPosition(e) {
        if (this.outsideArea(e, 320, 450, 180, 230)) return;
        this.saveVolume(e.pageX - this.elemLeft);
        gameAudioStates.menupage.volume = store.getVolume(); 
        this.renderSoundWindow();
    }
    
    returnToMenu(e) {
        if (this.outsideArea(e, 310, 475, 440, 500)) return;
        audioPlayer(buttonAudio.tap, buttonAudio.tap2, buttonAudio.bleep);
        this.disableEvents();
        new MenuPage();
    }
    
    outsideArea(e, x1, x2, y1, y2) {
        let x = e.pageX - this.elemLeft, y = e.pageY - this.elemTop;
        return x < x1 || x > x2 || y < y1 || y > y2;
    }
    
    saveVolume(knobPositionX) {
        this.knobPositionX = knobPositionX;
        let volume = store.maxVolume * (knobPositionX - 320)/(450 - 320);
        store.setVolume(volume);
    }   
}

export {Options};