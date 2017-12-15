import walk from '../../../img/zombies/ConeheadZombie.png';
import attack from '../../../img/zombies/ConeheadZombiAttack.png';
import {archivator} from "./archiver";

let coneHeadZombieImages = {
    walk, attack
};

coneHeadZombieImages = archivator(coneHeadZombieImages);

export {coneHeadZombieImages};