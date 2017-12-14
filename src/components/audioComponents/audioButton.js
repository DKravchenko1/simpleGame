import click from '../../../audio/button/buttonclick.ogg';
import {archivatorAudio} from "./archiverForAudio";
import tap from '../../../audio/button/tap.ogg';
import tap2 from '../../../audio/button/tap2.ogg';
import bleep from '../../../audio/button/bleep.ogg';

let buttonAudio = archivatorAudio( {click, tap, tap2, bleep} );
export { buttonAudio }