import walk from '../../../img/zombies/simpleZombie.png';
import wait from '../../../img/zombies/simpleZombieWaiting.png'
import died from '../../../img/zombies/simpleZombieDied.png';
import diedHead from '../../../img/zombies/simpleZombieDeadHead.png';
import attack from '../../../img/zombies/simpleZombieAttack.png';
import {archivator} from "./archiver";

let simpleZombieImage = {
    walk, wait,
    died, diedHead,
    attack
};

simpleZombieImage = archivator(simpleZombieImage);

export { simpleZombieImage }