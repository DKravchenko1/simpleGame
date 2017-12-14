export class GameAudio  {

    constructor (url) {
    this.audio = new Audio();
    this.audio.src = url;
    
    }
    






LibCanvasAudio.prototype = {
    src : function (file) {
        var codec = this.getSupport();
        if (!codec) throw 'AudioNotSupported';
        this.audio.src = file.replace(/\*/g, this.getSupport());
        this.audio.load();
        return this;
    },
    getSupport : function () {
        return !this.audio.canPlayType ? false :
            this.audio.canPlayType('audio/ogg;')  ? 'ogg' :
            this.audio.canPlayType('audio/mpeg;') ? 'mp3' : false;
    }
}


LibCanvasAudio.prototype = {
    // ...
    cloneAudio : function () {
        audioClone = this.audio.cloneNode(true);
        audioClone.load();
        return audioClone;
    },
    gatling : function (count) {
        this.barrels = [];
        this.gatIndex =  0;
        while (count--) {
            this.barrels.push(this.cloneAudio());
        }
        return this;
    },
    getNext : function () {
        var elem = this.barrels[this.gatIndex];
        ++this.gatIndex >= this.barrels.length && (this.gatIndex = 0);
        return elem;
    },
    playNext : function () {
        var elem = this.getNext();
        elem.pause();
        elem.currentTime = 0;
        elem.play();
        return this;
    }
}