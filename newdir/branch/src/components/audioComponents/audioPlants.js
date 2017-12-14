import plant1 from '../../../audio/plants/plant.ogg';
import plant2 from '../../../audio/plants/plant2.ogg';
import {archivatorAudio} from "./archiverForAudio";


let plantAudio = {plant1, plant2}
plantAudio = archivatorAudio(plantAudio);

export {plantAudio}