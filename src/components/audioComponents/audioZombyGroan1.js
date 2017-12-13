import groan from '../../../audio/zomby/groan.ogg';
import groan2 from '../../../audio/zomby/groan2.ogg';
import groan3 from '../../../audio/zomby/groan3.ogg';
import groan4 from '../../../audio/zomby/groan4.ogg';
import groan5 from '../../../audio/zomby/groan5.ogg';
import groan6 from '../../../audio/zomby/groan6.ogg';
import {archivatorAudio} from "./archiverForAudio";


let zombyAudioGroan = {groan, groan2, groan3, groan4, groan5, groan6};
zombyAudioGroan = archivatorAudio(zombyAudioGroan);

export {zombyAudioChomp}