import zombyfalling1 from '../../../audio/zomby/zombie_falling_1.ogg';
import bonk from '../../../audio/zomby/bonk.ogg';
import {archivatorAudio} from "./archiverForAudio";


let zombyAudioFalling = {zombyfalling1, bonk};
zombyAudioFalling = archivatorAudio(zombyAudioFalling);

export {zombyAudioFalling}