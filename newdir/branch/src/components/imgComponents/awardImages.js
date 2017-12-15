import background from '../../../img/award/awardScreen.png';
import button from '../../../img/award/SeedChooserButton.png';
import buttonFocus from '../../../img/award/SeedChooserButtonDisabled.png';
import {archivator} from "./archiver";

let awardImages = {
    background,
    button,
    buttonFocus
};

awardImages = archivator(awardImages);


export {awardImages}

