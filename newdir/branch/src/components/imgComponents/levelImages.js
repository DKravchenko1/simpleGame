import backgroundOne from '../../../img/location-1/backgroundOne.jpg';
import backgroundTwo from '../../../img/location-1/backgroundTwo.jpg';
import backgroundThree from '../../../img/location-1/backgroundThree.jpg';
import backgroundFour from '../../../img/location-1/backgroundFour.jpg';
import {archivator} from "./archiver";

let levelImages = {backgroundOne, backgroundTwo, backgroundThree, backgroundFour};

levelImages = archivator(levelImages);

export { levelImages };