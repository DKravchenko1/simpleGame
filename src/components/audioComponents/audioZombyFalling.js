import zombyfalling1 from '../../../audio/zomby/zombie_falling_1.ogg';
import zombyfalling2 from '../../../audio/zomby/zombie_falling_2.ogg';
import {archivatorAudio} from "./archiverForAudio";


let zombyAudioFalling = {zombyfalling1, zombyfalling2};
zombyAudioFalling = archivatorAudio(zombyAudioFalling);

export {zombyAudioFalling}