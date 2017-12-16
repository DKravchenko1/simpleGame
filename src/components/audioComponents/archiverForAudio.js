function archivatorAudio(obj) {
    for (let key in obj) {
        const audio = new Audio();
        audio.src = obj[key];
        obj[key] = audio;
    }
    return obj;
}

export {archivatorAudio};


































