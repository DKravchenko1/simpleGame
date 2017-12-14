import plant1 from '../../../audio/plants/plant.ogg';
import plant2 from '../../../audio/plants/plant2.ogg';
import seedlift from '../../../audio/plants/seedlift.ogg';
import firepea from '../../../audio/plants/firepea.ogg';
import {archivatorAudio} from "./archiverForAudio";


let plantAudio = {plant1, plant2, seedlift, firepea}
plantAudio = archivatorAudio(plantAudio);

export {plantAudio}