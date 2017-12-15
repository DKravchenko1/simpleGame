class Store {
    constructor() {
    }
    
    getVolume() {
        return localStorage.getItem('volume');
    }
    
    setVolume(volume) {
        localStorage.setItem('volume', volume);
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