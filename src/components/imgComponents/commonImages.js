import seedBank from '../../../img/common/SeedBank.png';
import menu from '../../../img/common/menu-button.png';
import menuHover from '../../../img/common/menu-button-hover.png';
import sunBank from '../../../img/common/SunBank.png';
import sun from '../../../img/common/Sun4.png';
import arrowTop from '../../../img/common/arrowTop.png';
import arrowBottom from '../../../img/common/arrowBottom.png';
import levelTimeLine from '../../../img/common/levelTimeLine.png';
import levelTimeLineProcess from '../../../img/common/levelTimeLineProcess.png';
import menuWindow from '../../../img/common/options_menuback.png';
import lawnmower from '../../../img/common/lawnmower.png';
import starburst from '../../../img/common/starburst.png';
import sliderKnob from '../../../img/common/options_sliderknob2.png';
import restartButton from '../../../img/common/restart-button.png';
import cancelButton from '../../../img/common/cancel-button.png';
import quitButton from '../../../img/common/quit_to_menu.png';
import quit1 from '../../../img/common/quit1.png';
import quit2 from '../../../img/common/quit2.png';
import restart1 from '../../../img/common/restart1.png';
import restart2 from '../../../img/common/restart2.png';


import {archivator} from "./archiver";

let commonImages = {
    seedBank, menu, menuHover, sunBank, sun, arrowTop,
    arrowBottom, levelTimeLine, levelTimeLineProcess, menuWindow,
    lawnmower, starburst, sliderKnob, restartButton, cancelButton, 
    quitButton, quit1, quit2, restart1, restart2
};

commonImages = archivator(commonImages);

export {commonImages}