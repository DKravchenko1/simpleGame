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
import zombieNoteSmall from '../../../img/common/ZombieNoteSmall.png'
import {archivator} from "./archiver";

let commonImages = {
    seedBank, menu, menuHover, sunBank, arrowTop,
    arrowBottom, levelTimeLine, levelTimeLineProcess, menuWindow,
    lawnmower, starburst, zombiesWon, zombieNoteSmall, zombieNoteLarge,
    restartButton
};

commonImages = archivator(commonImages);

export {commonImages}
