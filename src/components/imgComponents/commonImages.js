import seedBank from '../../../img/common/SeedBank.png';
import menu from '../../../img/common/menu-button.png';
import menuHover from '../../../img/common/menu-button-hover.png';
import sunBank from '../../../img/common/SunBank.png';
import arrowTop from '../../../img/common/arrowTop.png';
import arrowBottom from '../../../img/common/arrowBottom.png';
import levelTimeLine from '../../../img/common/levelTimeLine.png';
import levelTimeLineProcess from '../../../img/common/levelTimeLineProcess.png';
import menuWindow from '../../../img/common/options_menuback.png';
import lawnmower from '../../../img/common/lawnmower.png';
import starburst from '../../../img/common/starburst.png';
import restartButton from '../../../img/common/restart-button.png'
import zombiesWon from '../../../img/common/ZombiesWon.png';
import zombieNoteLarge from '../../../img/common/ZombieNoteLarge.png';
import zombieNoteSmall from '../../../img/common/ZombieNoteSmall.png';
import quitButton from '../../../img/common/quit_to_menu.png';
import sliderKnob from '../../../img/common/options_sliderknob2.png';
import restart1 from '../../../img/common/restart1.png';
import restart2 from '../../../img/common/restart2.png';
import quit1 from '../../../img/common/quit1.png';
import quit2 from '../../../img/common/quit2.png';
import cancelButton from '../../../img/common/cancel-button.png';
import {archivator} from "./archiver";

let commonImages = {
    seedBank, menu, menuHover, sunBank, arrowTop,
    arrowBottom, levelTimeLine, levelTimeLineProcess, menuWindow,
    lawnmower, starburst, zombiesWon, zombieNoteSmall, zombieNoteLarge,
    restartButton, quitButton, sliderKnob, restart1, restart2, quit1, quit2, cancelButton
};

commonImages = archivator(commonImages);

export {commonImages}
