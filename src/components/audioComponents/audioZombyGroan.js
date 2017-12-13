import bigChomp from '../../../audio/zomby/bigchomp.ogg';
import chomp from '../../../audio/zomby/chomp.ogg';
import chomp2 from '../../../audio/zomby/chomp2.ogg';
import chompSoft from '../../../audio/zomby/chompsoft.ogg';


import {archivatorAudio} from "./archiverForAudio";


let zombyAudioChomp = {bigChomp, chomp, chomp2, chompSoft}
zombyAudioChomp = archivatorAudio(zombyAudioChomp);

export {zombyAudioChomp}