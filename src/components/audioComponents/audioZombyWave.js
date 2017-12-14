import awooga from '../../../audio/zomby/awooga.ogg';
import hugewave from '../../../audio/zomby/hugewave.ogg';
import {archivatorAudio} from "./archiverForAudio";


let zombyAudioWave = {awooga, hugewave};
zombyAudioWave = archivatorAudio(zombyAudioWave);

export {zombyAudioWave};