import evilLaugh from '../../../audio/gamestates/evillaugh.ogg';
import loseaudio from '../../../audio/gamestates/losemusic.ogg';
import winaudio from '../../../audio/gamestates/winmusic.ogg';
import menupage from '../../../audio/gamestates/menu_page.mp3';
import gameprocess from '../../../audio/gamestates/game_process.mp3';

import {archivatorAudio} from "./archiverForAudio";


let gameAudioStates = {evilLaugh, loseaudio, winaudio, menupage, gameprocess};
gameAudioStates = archivatorAudio(gameAudioStates);

export {gameAudioStates};