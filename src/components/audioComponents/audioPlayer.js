import {store} from "../menuComponents/store";

const audioPlayer = function(...audio) {
    for (let i in audio) {
        audio[i].volume = Number(store.getVolume());
        audio[i].play();
    }
}

export {audioPlayer};