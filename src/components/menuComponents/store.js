class Store {
    constructor() {
        this.maxVolume = 0.5;
    }
    
    getVolume() {
        let x = localStorage.getItem('volume');
        if (!x) {
            this.setVolume(this.maxVolume);
            return this.maxVolume;
        }
        return Number(x);
    }
    
    setVolume(volume) {
        localStorage.setItem('volume', volume);
    }
    
    knobPosition(x1,x2) { //calc knob position
        return x1 + (this.getVolume()/this.maxVolume)*(x2-x1);
    }
    
    getPlayer() {
        return localStorage.getItem('name');
    }
    
    setPlayer(name) {
        localStorage.setItem('name', name);
    }
    
    getLevel() {
        let x = localStorage.getItem('level_' + this.getPlayer());
        if (!x) {
            this.setLevel(1);
            return 1;
        }
        return x;
    }
    
    setLevel(num) {
        localStorage.setItem('level_' + this.getPlayer(), num);
    }
}

export let store = new Store();