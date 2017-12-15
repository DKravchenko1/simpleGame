import {store} from "../menuComponents/store";


const audioPlayer = function(audio) {
                        audio.volume = Number(store.getVolume());
                        audio.play();
}

export {audioPlayer};