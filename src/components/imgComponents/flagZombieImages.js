import flagZombie from '../../../img/zombies/FlagZombie.png';
import flagZombieAttack from '../../../img/zombies/FlagZombieAttack.png';
import {archivator} from "./archiver";

let flagZombieImages = {flagZombie, flagZombieAttack};

flagZombieImages = archivator(flagZombieImages);

export {flagZombieImages};