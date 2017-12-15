import walk from '../../../img/zombies/BusketheadZombie.png';
import attack from '../../../img/zombies/BusketheadZombieAttack.png';
import {archivator} from "./archiver";

let busketHeadZombieImages = {
    walk, attack
};

busketHeadZombieImages = archivator(busketHeadZombieImages);

export {busketHeadZombieImages};