import click from '../../../audio/button/buttonclick.ogg';
import {archivator} from "./archiverForAudio";

let buttonAudio = {click};

buttonAudio = archivator(buttonAudio);

export { buttonAudio }