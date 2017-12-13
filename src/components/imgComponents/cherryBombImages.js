import unit from '../../../img/plants/cherryBomb.png'
import pow from '../../../img/plants/Pow.png';
import logo from '../../../img/plants/seed/cherrybombLogo.png';
import chosen from '../../../img/plants/seed/cherrybombChosen.png';
import cursor from '../../../img/plants/CherryBombUnit.png';
import {archivator} from "./archiver";

let cherryBombImages = {
    unit, pow, logo, chosen, cursor
};

cherryBombImages = archivator(cherryBombImages);

export {cherryBombImages};