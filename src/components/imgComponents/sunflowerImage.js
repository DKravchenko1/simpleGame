import sunflower from '../../../img/plants/sunFlower.png';
import sunflowerCursor from '../../../img/plants/SunFlowerUnit.png';
import sunflowerLogo from '../../../img/plants/seed/sunflowerLogo.png';
import sunflowerChosen from '../../../img/plants/seed/sunflowerChosen.png';
import {archivator} from "./archiver";

let sunflowerImages = {
  sunflower, sunflowerLogo, sunflowerChosen, sunflowerCursor
};

sunflowerImages = archivator(sunflowerImages);

export {sunflowerImages};
