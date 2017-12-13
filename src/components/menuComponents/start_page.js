import { resources } from './resources';
import { MenuPage} from './menu_page';
import { buttonAudio} from '../audioComponents/audioButton';

export class StartGame {
  constructor () {
    this.ctx = start.getContext('2d');
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
    console.log("New Game");
    this.enableEvents();
    if(resources.isReady()) { this.renderPage();}       
    resources.load([
     'img/start_page/start_grass_button.png',
     'img/start_page/titlescreen.png',
     'img/start_page/pvz_logo.png',
     'img/menu_backgrounds/level_1_background.png',
     'img/menu_backgrounds/level_2_background.png',
     'img/dialog_window/quit_menu.png',
     'img/dialog_window/button.png',
     'img/menu_backgrounds/level_1_light.png',
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
     'img/menu_backgrounds/level_2_light.png',
     'img/zomby_hand/sprite_zomby_hand.png'
     
    ]);
    resources.onReady(this.renderPage.bind(this));
    document.querySelector('#start-button').classList.add('not-display');
    document.querySelector('#canvas-container').classList.remove('not-display');
    start.width  = 800;
    start.height = 600;  
   }  
   
  renderPage() {
    this.ctx.drawImage(resources.get('img/start_page/titlescreen.png'), 0, 0, 800, 600);
    //this.ctx.drawImage(resources.get('img/start_page/start_grass_button.png'), 200, 500, 400, 80);
    //this.ctx.drawImage(resources.get('img/start_page/pvz_logo.png'), 80, 50, 600, 100);
    //this.ctx.font = "italic 25px Arial";
    //this.ctx.fillText("Press key to enter", 275, 555);
    
  }
  
  changeTextColor(event) {
      if (event.layerX >= 200 && event.layerX <= 590 && event.layerY >= 510 && event.layerY <= 563) {
         console.log("red");
      this.ctx.drawImage(resources.get('img/start_page/start_grass_button.png'), 200, 500, 400, 80);
      this.ctx.drawImage(resources.get('img/start_page/pvz_logo.png'), 80, 50, 600, 100);
      this.ctx.fillstyle = "#E32636"; 
      this.ctx.font = "italic 25px Arial";
      this.ctx.fillText("Press key to enter", 275, 555);
      } else {
        this.renderPage();
        this.ctx.drawImage(resources.get('img/start_page/start_grass_button.png'), 200, 500, 400, 80);
        this.ctx.drawImage(resources.get('img/start_page/pvz_logo.png'), 80, 50, 600, 100);
        console.log("white");
        this.ctx.fillstyle = "white";
        this.ctx.font = "italic 25px Arial";
        this.ctx.fillText("Press key to enter", 275, 555);
      }
  }

  outsideArea(event,x1,x2,y1,y2) {
    let x = event.pageX - this.elemLeft, y = event.pageY - this.elemTop;
    return x < x1 || x > x2 || y < y1 || y > y2;
  }

  onGoToMenu(event) {
    if (this.outsideArea(event,200,590,510,563)) return;
    buttonAudio.click.play();
    this.disableEvents();
    this.menupage = new MenuPage();
  }
  
}
  
  
  
  
  













