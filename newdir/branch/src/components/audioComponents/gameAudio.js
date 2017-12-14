mport unit from '../../../img/plants/peashooter.png';
import bullet from '../../../img/plants/peaBullet.png';
import chosen from '../../../img/plants/seed/peashooterChosen.png';
import logo from '../../../img/plants/seed/peashooterLogo.png';
import cursor from '../../../img/plants/PeashooterUnit.png';
import {archivator} from "./archiver";

let peashooterImages = {unit, bullet, chosen, logo, cursor};

peashooterImages = archivator(peashooterImages);

export { peashooterImages }