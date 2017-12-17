import {store} from "../menuComponents/store";


const audioPlayer = function(...audio) {
    console.log(audio);
    for (let i in audio) {
        audio[i].volume = Number(store.getVolume());
        audio[i].play();
    }
}

export {audioPlayer};