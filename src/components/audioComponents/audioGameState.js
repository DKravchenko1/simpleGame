import evilLaugh from '../../../audio/gamestates/evillaugh.ogg';
import loseaudio from '../../../audio/gamestates/losemusic.ogg';
import winaudio from '../../../audio/gamestates/winmusic.ogg';

import {archivatorAudio} from "./archiverForAudio";


let gameAudioStates = {evilLaugh, loseaudio, winaudio};
gameAudioStates = archivatorAudio(gameAudioStates);

export {gameAudioStates};