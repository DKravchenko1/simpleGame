import {QuitMenu} from './quit_menu';
import {resources} from './resources';
import {store} from './store';
import {PlayerMenu}  from './player_menu';
import {Sprite} from './sprite_func';
import {GameComponents} from "../gameComponents/gameComponents";
import {buttonAudio} from '../audioComponents/audioButton';
import {gameAudioStates} from '../audioComponents/audioGameState';


export class MenuPage {
       
    constructor () {
        this.elemLeft = start.offsetLeft;
        this.elemTop = start.offsetTop;
        this.ctx = start.getContext('2d');
        this.renderPage();
        this.enableEvents();
        this.counter = 0;
        this.buttonAudio = buttonAudio;
        this.gameAudioStates = gameAudioStates;   
    }
    
    enableEvents() {
        this.event_goToPlay = this.onGoToPlay.bind(this);
        start.addEventListener('click', this.event_goToPlay, false);
        
        this.event_goToPlayerMenu = this.onGoToPlayerMenu.bind(this);
        start.addEventListener('click', this.event_goToPlayerMenu, false);
        
        this.event_goToQuitMenu = this.onGoToQuitMenu.bind(this);
        start.addEventListener('click', this.event_goToQuitMenu, false);
    }
    
    disableEvents() {
        start.removeEventListener('click', this.event_goToPlay, false);
        start.removeEventListener('click', this.event_goToPlayerMenu, false);
        start.removeEventListener('click', this.event_goToQuitMenu, false);
    }
    
    renderPage() {
      this.ctx.drawImage(resources.get('img/menu_backgrounds/level_'+store.getLevel()+'_background.png'), 0, 0, 800, 600);
      if (store.getPlayer()){
        this.ctx.textBaseline = 'top';
        this.ctx.textAlign = 'left';
        this.ctx.fillStyle = "white";
        this.ctx.font = "italic 25px Arial";
        this.ctx.fillText(store.getPlayer(), 80, 80);
      }
    }
    
    outsideArea(event,x1,x2,y1,y2) {
        let x = event.pageX - this.elemLeft, y = event.pageY - this.elemTop;
        return x < x1 || x > x2 || y < y1 || y > y2;
    }
    
    onGoToPlay() {
        if (this.outsideArea(event,400,720,80,190)) return;
        this.gameAudioStates.menupage.pause();
        this.gameAudioStates.evilLaugh.play();
        //Effect button down/up
        this.ctx.drawImage(resources.get('img/menu_backgrounds/level_'+store.getLevel()+'_light.png'), 400, 65, 335, 145);
        this.lasttime = Date.now();
        //Effect 2
        window.setTimeout(this.onMoveZombyHand.bind(this), 500);
        this.disableEvents();
        //start game on certain level
        const game = new GameComponents(start, store.getLevel(), '1');
        const startGameProcess = game.preparationLevel.bind(game);
        window.setTimeout(startGameProcess, 2500);
        
    }    
    
    onMoveZombyHand() {
        
        this.zombyhand = new Sprite('img/zomby_hand/sprite_zomby_hand.png', [0,0],[300,400], 1, [0,1,2], 'horizontal', true);
        this.startZH = performance.now();
        requestAnimationFrame(this.spriteRenderCycle.bind(this));
    }
    
    spriteRenderCycle(timestamp) {
        const duration = 1000;
        let timePassed = timestamp - this.startZH;
        let progress = timePassed / duration;
        
        this.renderPage();
        this.zombyhand.render(this.ctx);
        this.zombyhand.update_progress(progress);
        
        if (timePassed < duration) {
          requestAnimationFrame(this.spriteRenderCycle.bind(this));
        }
    }
    
    onGoToPlayerMenu(event) {
        if (this.outsideArea(event,50,320,130,160)) return;
        this.buttonAudio.tap.volume = 0.5;
        this.buttonAudio.tap.play();
        this.buttonAudio.tap2.volume = 0.5;
        this.buttonAudio.tap2.play();
        this.buttonAudio.bleep.volume = 0.5;
        this.buttonAudio.bleep.play();
        this.disableEvents();
        this.playerMenu = new PlayerMenu();
    }
    
    onGoToQuitMenu(event) {
        if (this.outsideArea(event,700,780,490,550)) return;
        this.buttonAudio.click.volume = 0.5;
        this.buttonAudio.click.play();
        this.disableEvents();
        this.quitMenu = new QuitMenu();
    }
    
}