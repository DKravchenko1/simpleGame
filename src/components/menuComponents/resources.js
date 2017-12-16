class Resources {
    
    constructor() {
        this.resourceCache = {};
        this.loading = [];
        this.readyCallbacks = [];
    }

                                    // Load an image url or an array of image urls
    load(urlOrArr) {
        let x = this;
        if(urlOrArr instanceof Array) {
            urlOrArr.forEach(function(url) {
                x._load(url);
            });
        }
        else {
            x._load(urlOrArr);
        }
    }

    _load (url) {
        if(this.resourceCache[url]) {
            return this.resourceCache[url]; //check the key is already exist in resourceCache
        }
        else {
            let img = new Image();
            let that = this;
            img.onload = function() {
                that.resourceCache[url] = img;
                console.log(url);
                if(that.isReady()) {
                    that.readyCallbacks.forEach(function(func) { console.log("callback function");func(); }); //should call after all image was loaded
                }
            };
            this.resourceCache[url] = false; // 
            img.src = url;
        }
    }

    get (url) {
        return this.resourceCache[url];
    }

    isReady (){
        let ready = true;
        if (Object.keys(this.resourceCache).length == 0){
            ready = false;
        }
        for(let k in this.resourceCache) {
            if(this.resourceCache.hasOwnProperty(k) &&
               !this.resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    onReady(func) {
        this.readyCallbacks.push(func);
    }
    
}
export let resources = new Resources();
 

