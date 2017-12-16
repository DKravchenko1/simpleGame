/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return archivator; });
function archivator(obj) {
    for (let key in obj) {
        const img = new Image();
        img.src = obj[key];
        obj[key] = img;
    }
    return obj;
}



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resources; });
class Resources {

    constructor() {
        this.resourceCache = {};
        this.loading = [];
        this.readyCallbacks = [];
    }

    // Load an image url or an array of image urls
    load(urlOrArr) {
        let x = this;
        if (urlOrArr instanceof Array) {
            urlOrArr.forEach(function (url) {
                x._load(url);
            });
        } else {
            x._load(urlOrArr);
        }
    }

    _load(url) {
        if (this.resourceCache[url]) {
            return this.resourceCache[url]; //check the key is already exist in resourceCache
        } else {
            let img = new Image();
            let that = this;
            img.onload = function () {
                that.resourceCache[url] = img;
                console.log(url);
                if (that.isReady()) {
                    that.readyCallbacks.forEach(function (func) {
                        console.log("callback function");func();
                    }); //should call after all image was loaded
                }
            };
            this.resourceCache[url] = false; // 
            img.src = url;
        }
    }

    get(url) {
        return this.resourceCache[url];
    }

    isReady() {
        let ready = true;
        if (Object.keys(this.resourceCache).length == 0) {
            ready = false;
        }
        for (let k in this.resourceCache) {
            if (this.resourceCache.hasOwnProperty(k) && !this.resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    onReady(func) {
        this.readyCallbacks.push(func);
    }

}
let resources = new Resources();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return archivatorAudio; });
function archivatorAudio(obj) {
    for (let key in obj) {
        const audio = new Audio();
        audio.src = obj[key];
        obj[key] = audio;
    }
    return obj;
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buttonAudio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_button_buttonclick_ogg__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_button_buttonclick_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__audio_button_buttonclick_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__archiverForAudio__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audio_button_tap_ogg__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audio_button_tap_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__audio_button_tap_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__audio_button_tap2_ogg__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__audio_button_tap2_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__audio_button_tap2_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__audio_button_bleep_ogg__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__audio_button_bleep_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__audio_button_bleep_ogg__);






let buttonAudio = Object(__WEBPACK_IMPORTED_MODULE_1__archiverForAudio__["a" /* archivatorAudio */])({ click: __WEBPACK_IMPORTED_MODULE_0__audio_button_buttonclick_ogg___default.a, tap: __WEBPACK_IMPORTED_MODULE_2__audio_button_tap_ogg___default.a, tap2: __WEBPACK_IMPORTED_MODULE_3__audio_button_tap2_ogg___default.a, bleep: __WEBPACK_IMPORTED_MODULE_4__audio_button_bleep_ogg___default.a });


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
class Store {
    constructor() {}

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

let store = new Store();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return audioPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menuComponents_store__ = __webpack_require__(4);


const audioPlayer = function (audio) {
                        audio.volume = Number(__WEBPACK_IMPORTED_MODULE_0__menuComponents_store__["a" /* store */].getVolume());
                        audio.play();
};



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commonImages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_common_SeedBank_png__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_common_SeedBank_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_common_SeedBank_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_common_menu_button_png__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_common_menu_button_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__img_common_menu_button_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_common_menu_button_hover_png__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_common_menu_button_hover_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_common_menu_button_hover_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_common_SunBank_png__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_common_SunBank_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_common_SunBank_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_common_arrowTop_png__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_common_arrowTop_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_common_arrowTop_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_common_arrowBottom_png__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_common_arrowBottom_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__img_common_arrowBottom_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__img_common_levelTimeLine_png__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__img_common_levelTimeLine_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__img_common_levelTimeLine_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__img_common_levelTimeLineProcess_png__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__img_common_levelTimeLineProcess_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__img_common_levelTimeLineProcess_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__img_common_options_menuback_png__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__img_common_options_menuback_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__img_common_options_menuback_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__img_common_lawnmower_png__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__img_common_lawnmower_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__img_common_lawnmower_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__img_common_starburst_png__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__img_common_starburst_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__img_common_starburst_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__img_common_restart_button_png__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__img_common_restart_button_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__img_common_restart_button_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__img_common_ZombiesWon_png__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__img_common_ZombiesWon_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__img_common_ZombiesWon_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__img_common_ZombieNoteLarge_png__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__img_common_ZombieNoteLarge_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__img_common_ZombieNoteLarge_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__img_common_ZombieNoteSmall_png__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__img_common_ZombieNoteSmall_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__img_common_ZombieNoteSmall_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__archiver__ = __webpack_require__(0);

















let commonImages = {
    seedBank: __WEBPACK_IMPORTED_MODULE_0__img_common_SeedBank_png___default.a, menu: __WEBPACK_IMPORTED_MODULE_1__img_common_menu_button_png___default.a, menuHover: __WEBPACK_IMPORTED_MODULE_2__img_common_menu_button_hover_png___default.a, sunBank: __WEBPACK_IMPORTED_MODULE_3__img_common_SunBank_png___default.a, arrowTop: __WEBPACK_IMPORTED_MODULE_4__img_common_arrowTop_png___default.a,
    arrowBottom: __WEBPACK_IMPORTED_MODULE_5__img_common_arrowBottom_png___default.a, levelTimeLine: __WEBPACK_IMPORTED_MODULE_6__img_common_levelTimeLine_png___default.a, levelTimeLineProcess: __WEBPACK_IMPORTED_MODULE_7__img_common_levelTimeLineProcess_png___default.a, menuWindow: __WEBPACK_IMPORTED_MODULE_8__img_common_options_menuback_png___default.a,
    lawnmower: __WEBPACK_IMPORTED_MODULE_9__img_common_lawnmower_png___default.a, starburst: __WEBPACK_IMPORTED_MODULE_10__img_common_starburst_png___default.a, zombiesWon: __WEBPACK_IMPORTED_MODULE_12__img_common_ZombiesWon_png___default.a, zombieNoteSmall: __WEBPACK_IMPORTED_MODULE_14__img_common_ZombieNoteSmall_png___default.a, zombieNoteLarge: __WEBPACK_IMPORTED_MODULE_13__img_common_ZombieNoteLarge_png___default.a,
    restartButton: __WEBPACK_IMPORTED_MODULE_11__img_common_restart_button_png___default.a
};

commonImages = Object(__WEBPACK_IMPORTED_MODULE_15__archiver__["a" /* archivator */])(commonImages);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gameAudioStates; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_gamestates_evillaugh_ogg__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_gamestates_evillaugh_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__audio_gamestates_evillaugh_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audio_gamestates_losemusic_ogg__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audio_gamestates_losemusic_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__audio_gamestates_losemusic_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audio_gamestates_winmusic_ogg__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audio_gamestates_winmusic_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__audio_gamestates_winmusic_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__audio_gamestates_menu_page_mp3__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__audio_gamestates_menu_page_mp3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__audio_gamestates_menu_page_mp3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__audio_gamestates_game_process_mp3__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__audio_gamestates_game_process_mp3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__audio_gamestates_game_process_mp3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__archiverForAudio__ = __webpack_require__(2);








let gameAudioStates = { evilLaugh: __WEBPACK_IMPORTED_MODULE_0__audio_gamestates_evillaugh_ogg___default.a, loseaudio: __WEBPACK_IMPORTED_MODULE_1__audio_gamestates_losemusic_ogg___default.a, winaudio: __WEBPACK_IMPORTED_MODULE_2__audio_gamestates_winmusic_ogg___default.a, menupage: __WEBPACK_IMPORTED_MODULE_3__audio_gamestates_menu_page_mp3___default.a, gameprocess: __WEBPACK_IMPORTED_MODULE_4__audio_gamestates_game_process_mp3___default.a };
gameAudioStates = Object(__WEBPACK_IMPORTED_MODULE_5__archiverForAudio__["a" /* archivatorAudio */])(gameAudioStates);



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quit_menu__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_menu__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sprite_func__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gameComponents_gameComponents__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__audioComponents_audioButton__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__audioComponents_audioGameState__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__audioComponents_audioPlayer__ = __webpack_require__(5);










class MenuPage {

    constructor() {
        this.elemLeft = start.offsetLeft;
        this.elemTop = start.offsetTop;
        this.ctx = start.getContext('2d');
        this.renderPage();
        this.enableEvents();
        this.counter = 0;
        this.buttonAudio = __WEBPACK_IMPORTED_MODULE_6__audioComponents_audioButton__["a" /* buttonAudio */];
        this.gameAudioStates = __WEBPACK_IMPORTED_MODULE_7__audioComponents_audioGameState__["a" /* gameAudioStates */];
        this.buttonAudio = __WEBPACK_IMPORTED_MODULE_6__audioComponents_audioButton__["a" /* buttonAudio */];
        this.audioPlayer = __WEBPACK_IMPORTED_MODULE_8__audioComponents_audioPlayer__["a" /* audioPlayer */];
    }

    enableEvents() {
        this.event_goToPlay = this.onGoToPlay.bind(this);
        start.addEventListener('click', this.event_goToPlay, false);

        this.event_goToPlayerMenu = this.onGoToPlayerMenu.bind(this);
        start.addEventListener('click', this.event_goToPlayerMenu, false);

        this.event_goToQuitMenu = this.onGoToQuitMenu.bind(this);
        start.addEventListener('click', this.event_goToQuitMenu, false);
    }

    disableEvents() {
        start.removeEventListener('click', this.event_goToPlay, false);
        start.removeEventListener('click', this.event_goToPlayerMenu, false);
        start.removeEventListener('click', this.event_goToQuitMenu, false);
    }

    renderPage() {
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_1__resources__["a" /* resources */].get('img/menu_backgrounds/level_' + __WEBPACK_IMPORTED_MODULE_2__store__["a" /* store */].getLevel() + '_background.png'), 0, 0, 800, 600);
        if (__WEBPACK_IMPORTED_MODULE_2__store__["a" /* store */].getPlayer()) {
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'left';
            this.ctx.fillStyle = "white";
            this.ctx.font = "italic 25px Arial";
            this.ctx.fillText(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* store */].getPlayer(), 80, 80);
        }
    }

    outsideArea(event, x1, x2, y1, y2) {
        let x = event.pageX - this.elemLeft,
            y = event.pageY - this.elemTop;
        return x < x1 || x > x2 || y < y1 || y > y2;
    }

    onGoToPlay() {
        if (this.outsideArea(event, 400, 720, 80, 190)) return;
        this.gameAudioStates.menupage.pause();
        this.audioPlayer(this.gameAudioStates.evilLaugh);
        //Effect button down/up
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_1__resources__["a" /* resources */].get('img/menu_backgrounds/level_' + __WEBPACK_IMPORTED_MODULE_2__store__["a" /* store */].getLevel() + '_light.png'), 400, 65, 335, 145);
        this.lasttime = Date.now();
        //Effect 2
        window.setTimeout(this.onMoveZombyHand.bind(this), 500);
        this.disableEvents();
        //start game on certain level
        const game = new __WEBPACK_IMPORTED_MODULE_5__gameComponents_gameComponents__["a" /* GameComponents */](start, __WEBPACK_IMPORTED_MODULE_2__store__["a" /* store */].getLevel(), '1');
        const startGameProcess = game.preparationLevel.bind(game);
        window.setTimeout(startGameProcess, 2500);
    }

    onMoveZombyHand() {

        this.zombyhand = new __WEBPACK_IMPORTED_MODULE_4__sprite_func__["a" /* Sprite */]('img/zomby_hand/sprite_zomby_hand.png', [0, 0], [300, 400], 1, [0, 1, 2], 'horizontal', true);
        this.startZH = performance.now();
        requestAnimationFrame(this.spriteRenderCycle.bind(this));
    }

    spriteRenderCycle(timestamp) {
        const duration = 1000;
        let timePassed = timestamp - this.startZH;
        let progress = timePassed / duration;

        this.renderPage();
        this.zombyhand.render(this.ctx);
        this.zombyhand.update_progress(progress);

        if (timePassed < duration) {
            requestAnimationFrame(this.spriteRenderCycle.bind(this));
        }
    }

    onGoToPlayerMenu(event) {
        if (this.outsideArea(event, 50, 320, 130, 160)) return;
        this.audioPlayer(this.buttonAudio.tap);
        this.audioPlayer(this.buttonAudio.tap2);
        this.audioPlayer(this.buttonAudio.bleep);
        this.disableEvents();
        this.playerMenu = new __WEBPACK_IMPORTED_MODULE_3__player_menu__["a" /* PlayerMenu */]();
    }

    onGoToQuitMenu(event) {
        if (this.outsideArea(event, 700, 780, 490, 550)) return;
        this.audioPlayer(this.buttonAudio.click);
        this.disableEvents();
        this.quitMenu = new __WEBPACK_IMPORTED_MODULE_0__quit_menu__["a" /* QuitMenu */]();
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = MenuPage;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sunflower; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imgComponents_sunflowerImage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otherComponents_sun__ = __webpack_require__(10);




class Sunflower extends __WEBPACK_IMPORTED_MODULE_0__plants__["a" /* Plants */] {
    constructor(context, positionX, positionY) {
        super(context, 0, 5, 10, 50, positionX, positionY);
        this.startX = 0;
        this.startY = 0;
        this.endY = 0;
        this.context = context;
        this.packet = null;
        this.name = Sunflower;
        this.abilityTimer = 0;
    }

    award() {
        super.award(__WEBPACK_IMPORTED_MODULE_1__imgComponents_sunflowerImage__["a" /* sunflowerImages */].sunflowerLogo, this.startX, this.startY + 40);
    }

    createAwardPosition(pointX, pointY) {
        this.startX = pointX;
        this.startY = pointY;
        this.endY = pointY - 10;
    }

    init() {
        super.init();
        this.packet = __WEBPACK_IMPORTED_MODULE_1__imgComponents_sunflowerImage__["a" /* sunflowerImages */].sunflowerLogo;
    }

    choice() {
        this.packet = __WEBPACK_IMPORTED_MODULE_1__imgComponents_sunflowerImage__["a" /* sunflowerImages */].sunflowerChosen;
    }

    cancelChoice() {
        this.packet = __WEBPACK_IMPORTED_MODULE_1__imgComponents_sunflowerImage__["a" /* sunflowerImages */].sunflowerLogo;
    }

    create(pointX, pointY) {
        super.create(__WEBPACK_IMPORTED_MODULE_1__imgComponents_sunflowerImage__["a" /* sunflowerImages */].sunflowerCursor, pointX, pointY);
    }

    build(pointX = this.positionX, pointY = this.positionY) {
        this.frameSpeed++;
        this.context.drawImage(__WEBPACK_IMPORTED_MODULE_1__imgComponents_sunflowerImage__["a" /* sunflowerImages */].sunflower, this.frame, 0, 73, 74, pointX, pointY, 73, 74);
        if (this.frameSpeed === 5) {
            this.frame += 73;
            this.frameSpeed = 0;
        }
        if (this.frame > 1300) {
            this.frame = 0;
        }
    }

    useOfAbility() {
        const sun = new __WEBPACK_IMPORTED_MODULE_2__otherComponents_sun__["a" /* Sun */](this.context);
        sun.startX = this.positionX;
        sun.startY = this.positionY;
        sun.endY = this.positionY + 40;
        return sun;
    }

    calculateWidth() {
        return __WEBPACK_IMPORTED_MODULE_1__imgComponents_sunflowerImage__["a" /* sunflowerImages */].sunflowerCursor.width;
    }

    calculateHeight() {
        return __WEBPACK_IMPORTED_MODULE_1__imgComponents_sunflowerImage__["a" /* sunflowerImages */].sunflowerCursor.height;
    }
}



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sun; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imgComponents_sunImage__ = __webpack_require__(66);




class Sun {
    constructor(context) {
        this.context = context;
        this.income = 25;
        this.startX = 0;
        this.startY = 0;
        this.endY = 0;
        this.frame = 0;
        this.width = 75;
        this.height = 75;
    }

    create() {
        this.startX = this.positionOfSuns(100, 600);
        this.startY = this.positionOfSuns(100, 200);
        this.endY = this.positionOfSuns(this.startY, 500);
    }

    fall() {
        this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_sunImage__["a" /* sunImage */].sun, this.frame, 0, this.width, this.height, this.startX, this.startY, this.width, this.height);
        if (this.startY < this.endY) {
            this.startY += 2;
        }
        this.frame += 78;
        if (this.frame > 1700) {
            this.frame = 0;
        }
    }

    chose() {
        this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_sunImage__["a" /* sunImage */].sun, this.frame, 0, this.width, this.height, this.startX, this.startY, this.width, this.height);
        if (this.startX > 10) {
            this.startX -= this.startX / 10;
        }
        if (this.startY > 0) {
            this.startY -= this.startY / 10 + 0.75;
        }
        this.frame += 78;
        if (this.frame > 1700) {
            this.frame = 0;
        }
    }

    positionOfSuns(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levelImages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_location_1_backgroundOne_jpg__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_location_1_backgroundOne_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_location_1_backgroundOne_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_location_1_backgroundTwo_jpg__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_location_1_backgroundTwo_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__img_location_1_backgroundTwo_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_location_1_backgroundThree_jpg__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_location_1_backgroundThree_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_location_1_backgroundThree_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_location_1_backgroundFour_jpg__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_location_1_backgroundFour_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_location_1_backgroundFour_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__archiver__ = __webpack_require__(0);






let levelImages = { backgroundOne: __WEBPACK_IMPORTED_MODULE_0__img_location_1_backgroundOne_jpg___default.a, backgroundTwo: __WEBPACK_IMPORTED_MODULE_1__img_location_1_backgroundTwo_jpg___default.a, backgroundThree: __WEBPACK_IMPORTED_MODULE_2__img_location_1_backgroundThree_jpg___default.a, backgroundFour: __WEBPACK_IMPORTED_MODULE_3__img_location_1_backgroundFour_jpg___default.a };

levelImages = Object(__WEBPACK_IMPORTED_MODULE_4__archiver__["a" /* archivator */])(levelImages);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetweenLevels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__descriptionComponents_description__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imgComponents_awardImages__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__level_2__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__level_3__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__imgComponents_commonImages__ = __webpack_require__(6);






class BetweenLevels {
    constructor(canvas, context, award, currentLevel) {
        this.canvas = canvas;
        this.context = context;
        this.award = award;
        this.currentLevel = currentLevel;
        this.description = {};
        this.buttonLabel = '';
        this.buttonImage = __WEBPACK_IMPORTED_MODULE_1__imgComponents_awardImages__["a" /* awardImages */].button;
        this.heading = '';
        this.nextLevel = 0;
        this.restartLevel = 0;
        this.startBind = null;
        this.clickBind = null;
        this.restartBind = null;
    }

    create() {
        this.heading = 'you got a new plant!';
        this.heading = this.heading.toUpperCase();
        this.startBind = this.start.bind(this);
        this.buttonLabel = 'Next level';
        this.buttonLabel = this.buttonLabel.toUpperCase();
        this.clickBind = this.click.bind(this);
        this.description.name = __WEBPACK_IMPORTED_MODULE_0__descriptionComponents_description__["a" /* description */][`level${this.currentLevel}`].name;
        this.description.body = __WEBPACK_IMPORTED_MODULE_0__descriptionComponents_description__["a" /* description */][`level${this.currentLevel}`].description;
        this.canvas.addEventListener('click', this.clickBind);
    }

    start() {
        if (!this.nextLevel) {
            this.context.drawImage(__WEBPACK_IMPORTED_MODULE_1__imgComponents_awardImages__["a" /* awardImages */].background, 0, 0);
            this.context.drawImage(this.award, 375, 167);
            this.context.drawImage(this.buttonImage, 322, 515);
            this.context.fillStyle = '#d59f2b';
            this.context.fillText(this.heading, 400, 57);
            this.context.fillText(this.description.name, 400, 327);
            this.context.fillText(this.buttonLabel, 400, 544);
            this.context.fillStyle = '#28325a';
            this.context.fillText(this.description.body, 400, 418);
            requestAnimationFrame(this.start.bind(this));
        }
    }

    click(e) {
        if (e.layerX > 322 && e.layerX < 478 && e.layerY > 515 && e.layerY < 557) {
            let level;
            this.canvas.removeEventListener('click', this.clickBind);
            this.buttonImage = __WEBPACK_IMPORTED_MODULE_1__imgComponents_awardImages__["a" /* awardImages */].buttonFocus;
            this.nextLevel = 1;
            if (this.currentLevel === 1) {
                level = new __WEBPACK_IMPORTED_MODULE_2__level_2__["a" /* LevelTwo */](this.canvas);
            } else if (this.currentLevel === 2) {
                level = new __WEBPACK_IMPORTED_MODULE_3__level_3__["a" /* LevelThree */](this.canvas);
            }
            this.context.clearRect(0, 0, 800, 600);
            level.startGame();
        }
    }

    createPlayerWon() {
        this.restartIfPlayerWonBind = this.restartIfPlayerWon.bind(this);
        this.canvas.addEventListener('click', this.restartIfPlayerWonBind);
    }

    playerWon() {
        this.context.drawImage(__WEBPACK_IMPORTED_MODULE_4__imgComponents_commonImages__["a" /* commonImages */].zombieNoteLarge, 118, 66);
        this.context.drawImage(__WEBPACK_IMPORTED_MODULE_1__imgComponents_awardImages__["a" /* awardImages */].button, 162, 515);
        this.context.drawImage(__WEBPACK_IMPORTED_MODULE_1__imgComponents_awardImages__["a" /* awardImages */].button, 480, 515);
        this.context.fillStyle = '#d59f2b';
        this.context.fillText('Level 2', 238, 542);
        this.context.fillText('Level 3', 558, 542);
        if (!this.nextLevel) {
            requestAnimationFrame(this.playerWon.bind(this));
        }
    }

    restartIfPlayerWon(e) {
        let level;
        if (e.layerX > 162 && e.layerX < 318 && e.layerY > 515 && e.layerY < 557) {
            this.nextLevel = 2;
        } else if (e.layerX > 480 && e.layerX < 636 && e.layerY > 515 && e.layerY < 557) {
            this.nextLevel = 3;
        }
        if (this.nextLevel === 2) {
            level = new __WEBPACK_IMPORTED_MODULE_2__level_2__["a" /* LevelTwo */](this.canvas);
        } else {
            level = new __WEBPACK_IMPORTED_MODULE_3__level_3__["a" /* LevelThree */](this.canvas);
        }
        this.canvas.removeEventListener('click', this.restartIfPlayerWonBind);
        this.context.clearRect(0, 0, 800, 600);
        level.startGame();
    }

    createPlayerLose() {
        this.restartBind = this.restart.bind(this);
        this.canvas.addEventListener('click', this.restartBind);
    }

    playerLose() {
        this.context.drawImage(__WEBPACK_IMPORTED_MODULE_4__imgComponents_commonImages__["a" /* commonImages */].zombiesWon, 118, 66);
        this.context.drawImage(__WEBPACK_IMPORTED_MODULE_4__imgComponents_commonImages__["a" /* commonImages */].restartButton, 322, 515);
        if (!this.restartLevel) {
            requestAnimationFrame(this.playerLose.bind(this));
        }
    }

    restart(e) {
        if (e.layerX > 322 && e.layerX < 482 && e.layerY > 515 && e.layerY < 557) {
            let level;
            this.canvas.removeEventListener('click', this.restartBind);
            this.restartLevel = 1;
            if (this.currentLevel === 1) {
                level = new LevelOne(this.canvas);
            } else if (this.currentLevel === 2) {
                level = new __WEBPACK_IMPORTED_MODULE_2__level_2__["a" /* LevelTwo */](this.canvas);
            } else if (this.currentLevel === 3) {
                level = new __WEBPACK_IMPORTED_MODULE_3__level_3__["a" /* LevelThree */](this.canvas);
            }
            this.context.clearRect(0, 0, 800, 600);
            level.startGame();
        }
    }

}



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plants; });
class Plants {
    constructor(context, damage, health, recharge, cost, pointX, pointY) {
        this.context = context;
        this.damage = damage;
        this.health = health;
        this.recharge = recharge;
        this.cost = cost;
        this.positionOfCreate = {};
        this.positionX = pointX;
        this.positionY = pointY;
        this.chose = 0;
        this.positionOfBullet = [];
        this.frame = 0;
        this.frameSpeed = 0;
        this.abilityTimer = 0;
    }

    award(image, pointX, pointY) {
        this.context.drawImage(image, pointX, pointY);
    }

    createAwardPosition(pointX, pointY) {
        this.startX = pointX;
        this.startY = pointY;
        this.endY = pointY - 10;
    }

    create(image, pointX, pointY) {
        this.context.drawImage(image, pointX, pointY);
    }

    init() {
        this.positionOfCreate.pointX = Math.floor((this.positionX - 40) / 72);
        this.positionOfCreate.pointY = Math.floor((this.positionY - 100) / 97);
    }

    drawSeed(img, pointX, pointY) {
        this.context.drawImage(img, pointX, pointY);
    }

}



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bullet; });
class Bullet {
    constructor(pointX, pointY) {
        this.pointX = pointX;
        this.pointY = pointY;
        this.frameBulletSpeed = 0;
        this.hit = 0;
    }
}



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CherryBomb; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imgComponents_cherryBombImages__ = __webpack_require__(68);



class CherryBomb extends __WEBPACK_IMPORTED_MODULE_0__plants__["a" /* Plants */] {
    constructor(context, positionX, positionY) {
        super(context, 50, 10, 5, 150, positionX, positionY);
        this.context = context;
        this.startX = 0;
        this.startY = 0;
        this.endY = 0;
        this.name = CherryBomb;
        this.width = 112;
        this.height = 81;
        this.frameSpeed = 0;
        this.frameBoom = 0;
        this.packet = __WEBPACK_IMPORTED_MODULE_1__imgComponents_cherryBombImages__["a" /* cherryBombImages */].logo;
    }

    award() {
        super.award(this.packet, this.startX, this.startY + 40);
    }

    createAwardPosition(positionX, positionY) {
        super.createAwardPosition(positionX, positionY);
    }

    init() {
        super.init();
    }

    choice() {
        this.packet = __WEBPACK_IMPORTED_MODULE_1__imgComponents_cherryBombImages__["a" /* cherryBombImages */].chosen;
    }

    cancelChoice() {
        this.packet = __WEBPACK_IMPORTED_MODULE_1__imgComponents_cherryBombImages__["a" /* cherryBombImages */].logo;
    }

    create(positionX, positionY) {
        super.create(__WEBPACK_IMPORTED_MODULE_1__imgComponents_cherryBombImages__["a" /* cherryBombImages */].cursor, positionX, positionY);
    }

    build(pointX = this.positionX, pointY = this.positionY) {
        this.frameSpeed++;
        this.context.drawImage(__WEBPACK_IMPORTED_MODULE_1__imgComponents_cherryBombImages__["a" /* cherryBombImages */].unit, this.frameBoom, 0, this.width, this.height, pointX, pointY, this.width, this.height);
        if (this.frameSpeed === 5) {
            this.frameBoom += 112;
            this.frameSpeed = 0;
        }
        if (this.frameBoom > 784) {
            this.context.drawImage(__WEBPACK_IMPORTED_MODULE_1__imgComponents_cherryBombImages__["a" /* cherryBombImages */].pow, 0, 0, __WEBPACK_IMPORTED_MODULE_1__imgComponents_cherryBombImages__["a" /* cherryBombImages */].pow.width, __WEBPACK_IMPORTED_MODULE_1__imgComponents_cherryBombImages__["a" /* cherryBombImages */].pow.height, pointX, pointY, __WEBPACK_IMPORTED_MODULE_1__imgComponents_cherryBombImages__["a" /* cherryBombImages */].pow.width, __WEBPACK_IMPORTED_MODULE_1__imgComponents_cherryBombImages__["a" /* cherryBombImages */].pow.height);
        }
    }

    useOfAbility() {}

    calculateWidth() {
        return __WEBPACK_IMPORTED_MODULE_1__imgComponents_cherryBombImages__["a" /* cherryBombImages */].cursor.width;
    }

    calculateHeight() {
        return __WEBPACK_IMPORTED_MODULE_1__imgComponents_cherryBombImages__["a" /* cherryBombImages */].cursor.height;
    }

}



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllUnitInTheMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zombiesComponents_Zombie__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__otherComponents_lawnmover__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plantsComponents_peashooter__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plantsComponents_sunflower__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plantsComponents_cherryBomb__ = __webpack_require__(15);






class AllUnitInTheMap {
  constructor(canvas, context, currentLevel) {
    this.canvas = canvas;
    this.level = currentLevel;
    this.context = context;
    this.zombies = [];
    this.zombiesC = [];
    this.zombiesLength = 0;
    this.commingZombieTimer = 0;
    this.zombieAttackTimer = 0;
    this.plants = [];
    this.seedPack = [];
    this.suns = [];
    this.lawnmowers = [];
    this.seedRechargeTime = [];
    this.positionOfPlant = [];
    this.position = {};
    this.positionToCreate = {};
    this.checkPlantBuild = 0;
    this.calculatePlantUnitBind = null;
    this.cancelChosePlantEscBind = null;
    this.createPlanUnitBind = null;
  }

  createLevel() {
    this.plants = [];
    this.seedPack = [];
    this.suns = [];
    this.lawnmowers = [];
  }

  createLawnmowers(bias, factor) {
    //TODO lawnmowers
    let numberOfLawnmower = 1 + (this.level - 1) * 2;
    for (let i = 0; i < numberOfLawnmower; i++) {
      // TODO change number of lawnmower
      this.lawnmower = new __WEBPACK_IMPORTED_MODULE_1__otherComponents_lawnmover__["a" /* Lawnmower */](this.context, -40, bias + i * factor);
      this.lawnmowers.push(this.lawnmower);
    }
  }

  drawLawnmowers() {
    this.lawnmowers.forEach(lawnmower => lawnmower.draw());
  }

  runLawnmowers() {
    if (this.lawnmowers.length > 0) {
      //
      this.lawnmowers.forEach(lawnmower => lawnmower.activated());
    }
  }

  checkLawnmowers(zombie) {
    this.lawnmowers.forEach((lawnmower, i, arr) => {
      //
      if (lawnmower.pointX > zombie.positionX && zombie.positionY + 55 > lawnmower.pointY && zombie.positionY + 45 < lawnmower.pointY) {
        lawnmower.used = 1;
        zombie.health = 0;
        if (lawnmower.pointX > 790) {
          arr.splice(i, 1);
        }
      }
    });
  }

  createSeedPack() {
    // TODO seedPack
    let seeds;
    this.calculatePlantUnitBind = this.calculatePlantUnit.bind(this);
    this.cancelChosePlantEscBind = this.cancelChosePlantEsc.bind(this);
    this.createPlantUnitBind = this.createPlantUnit.bind(this);
    if (this.level === 1) {
      seeds = [new __WEBPACK_IMPORTED_MODULE_2__plantsComponents_peashooter__["a" /* Peashooter */](this.context)];
    } else if (this.level === 2) {
      seeds = [new __WEBPACK_IMPORTED_MODULE_2__plantsComponents_peashooter__["a" /* Peashooter */](this.context), new __WEBPACK_IMPORTED_MODULE_3__plantsComponents_sunflower__["a" /* Sunflower */](this.context)];
    } else if (this.level === 3) {
      seeds = [new __WEBPACK_IMPORTED_MODULE_2__plantsComponents_peashooter__["a" /* Peashooter */](this.context), new __WEBPACK_IMPORTED_MODULE_3__plantsComponents_sunflower__["a" /* Sunflower */](this.context), new __WEBPACK_IMPORTED_MODULE_4__plantsComponents_cherryBomb__["a" /* CherryBomb */](this.context)];
    }
    seeds.forEach(seed => this.seedPack.push(seed));
    this.seedPack.forEach(seed => seed.init());
  }

  drawSeedPack() {
    this.seedPack.forEach((seed, i) => {
      this.context.drawImage(seed.packet, 97 + i * 60, 9);
    });
  }

  choseSeedPack(numberOfSuns) {
    this.seedPack.forEach((seed, i) => {
      if (seed.chose || numberOfSuns < seed.cost - 1) {
        seed.choice(97 + i * 60, 9);
      } else {
        seed.cancelChoice(97 + i * 60, 9);
      }
    });
  }

  chosePlant(e, numberOfSuns, sound) {
    this.seedPack.find((seed, i) => {
      if (e.layerX > 97 + 60 * i && e.layerX < 97 + 10 * i + 50 * (i + 1) && e.layerY > 9 && e.layerY < 74 && numberOfSuns > seed.cost - 1) {
        seed.chose = 1;
        this.position = {
          x: e.layerX - seed.calculateWidth() / 2,
          y: e.layerY - seed.calculateHeight() / 2
        };
        sound();
        this.canvas.addEventListener('mousemove', this.calculatePlantUnitBind);
        document.addEventListener('keydown', this.cancelChosePlantEscBind);
        this.checkPlantBuild = 0;
        return true;
      }
    });
  }

  cancelChosePlantEsc(e) {
    if (e.code === 'Escape') {
      this.seedPack.find((seed, i) => {
        if (seed.chose) {
          this.cancelChosePlant(seed);
          return true;
        }
      });
    }
  }

  cancelChosePlantClick(e) {
    this.seedPack.find((seed, i) => {
      if (e.layerX > 97 + 60 * i && e.layerX < 97 + 10 * i + 50 * (i + 1) && e.layerY > 9 && e.layerY < 74) {
        if (seed.chose) {
          this.cancelChosePlant(seed);
          return true;
        }
      }
    });
  }

  cancelChosePlant(seed) {
    seed.chose = 0;
    this.position = {};
    this.canvas.removeEventListener('mousemove', this.calculatePlantUnitBind);
    document.removeEventListener('keydown', this.cancelChosePlantEscBind);
    this.checkPlantBuild = 0;
  }

  calculatePlantUnit(e) {
    this.seedPack.forEach(seed => {
      if (seed.chose) {
        this.position.x = e.layerX - seed.calculateWidth() / 2;
        this.position.y = e.layerY - seed.calculateHeight() / 2;
      }
    });
  }

  createPlantLogo(seed, min, max, bias, factor) {
    seed.create(this.position.x, this.position.y);
    for (let i = 0; i < 10; i++) {
      if (this.position.x > 82 * i && this.position.x < 82 * (i + 1)) {
        for (let j = min; j < max; j++) {
          //TODO change number of clumbs and change positionX anf positionY
          if (this.position.y > bias + j * factor && this.position.y < bias + (j + 1) * factor) {
            this.positionToCreate.y = bias + 50 + 97 * j;
            this.positionToCreate.x = 40 + 82 * i;
            seed.create(this.positionToCreate.x, this.positionToCreate.y);
          }
        }
      }
    }
  }

  createPlantUnit(e, plant) {
    plant.init();
    let length = this.positionOfPlant.length;
    let checkUniq = 1;
    if (this.position.x < 730 && this.position.y > 50) {
      //TODO delete positionX and positionY
      checkUniq = this.checkUniqOfPosition(checkUniq, length, plant);
      if (checkUniq) {
        this.addPlant(plant);
      } else {
        this.checkPlantBuild = 0;
      }
    }
  }

  checkUniqOfPosition(checkUniq, length, plant) {
    for (let i = 0; i < length; i++) {
      if (this.positionOfPlant[i].pointX === plant.positionOfCreate.pointX && this.positionOfPlant[i].pointY === plant.positionOfCreate.pointY) {
        checkUniq = 0;
      }
    }
    return checkUniq;
  }

  addPlant(plant) {
    this.plants.push(plant);
    this.positionOfPlant.push(plant.positionOfCreate);
    this.seedPack.find(seed => {
      if (seed.chose) {
        this.cancelChosePlant(seed);
        return true;
      }
    });
    this.checkPlantBuild = 1;
  }

  plantsAttackZombies(plant, zombie, sound) {
    for (let i = 0; i < plant.positionOfBullet.length; i++) {
      if (plant.positionOfBullet[i].pointX > zombie.positionX + 60 && plant.positionOfBullet[i].pointX < zombie.positionX + 85 && zombie.positionY + 75 > plant.positionOfBullet[i].pointY && zombie.positionY + 65 < plant.positionOfBullet[i].pointY && !zombie.burn) {
        plant.positionOfBullet[i].hit = 1;
        sound();
        if (plant.positionOfBullet[i].frameBulletSpeed === 3) {
          zombie.health -= plant.damage;
          zombie.checkState();
        }
      }
    }
  }

  cherryBombBurnsZombie(plant, zombie) {
    if (plant.positionX - 160 < zombie.positionX + 60 && plant.positionX + 160 > zombie.positionX + 60 && plant.positionY - 115 < zombie.positionY + 70 && plant.positionY + 115 > zombie.positionY + 70) {
      zombie.burn = 1;
    }
  }

  ifPlantSunflower(plant, suns) {
    if (plant.abilityTimer > 900) {
      suns.push(plant.useOfAbility());
      plant.abilityTimer = 0;
    } else {
      plant.abilityTimer++;
    }
  }

  ifPlantCherryBomb(plant, i, arr) {
    if (plant.abilityTimer > 40) {
      arr.splice(i, 1);
      this.positionOfPlant.splice(i, 1);
    } else {
      plant.abilityTimer++;
    }
  }
  //--------TODO Zombie------
  createZombie() {
    for (let i = 0; i < 8 * this.level; i++) {
      //TODO change number Of zombie
      let zombie = new __WEBPACK_IMPORTED_MODULE_0__zombiesComponents_Zombie__["a" /* Zombie */](this.context);
      zombie.positionOfCreate();
      this.zombies.push(zombie);
    }
    this.zombiesLength = this.zombies.length;
  }

  sortZombieView() {
    this.zombies = this.zombies.slice().sort((a, b) => {
      let c = a.positionY;
      let d = b.positionY;
      if (c < d) {
        return -1;
      } else if (c > d) {
        return 1;
      }
      return 0;
    });
  }

  setZombieState(callback) {
    this.zombies.forEach(zombie => {
      let state;
      state = callback(1, this.level);
      zombie.setState(state);
    });
  }

  levelOverview(frameWaiting) {
    this.zombies.forEach(zombie => {
      if (!frameWaiting) {
        zombie.positionX -= 10;
      }
      zombie.create();
    });
  }

  returnOnGarden() {
    this.zombies.forEach(zombie => {
      zombie.positionX += 10;
      zombie.create();
    });
  }

  startComingZombie(min, max, factor, bias) {
    if (this.zombies.length > 0) {
      if (this.commingZombieTimer > 300 && this.zombies.length > Math.ceil(this.zombiesLength / 2)) {
        this.simpleWave(min, max, factor, bias);
      } else if (this.zombies.length <= Math.ceil(this.zombiesLength / 2) && this.commingZombieTimer > 90) {
        this.finalWave(min, max, factor, bias);
      } else {
        this.commingZombieTimer++;
      }
    }
  }

  simpleWave(min, max, factor, bias) {
    let index = this.zombies.length - 1;
    this.zombies[index].positionX = 710;
    this.zombies[index].positionY = this.zombies[index].setPositionOfCreate(min, max) * factor + bias;
    this.zombiesC.push(this.zombies.pop());
    this.commingZombieTimer = 0;
  }

  finalWave(min, max, factor, bias) {
    let index = this.zombies.length - 1;
    this.zombies[index].positionX = 710;
    this.zombies[index].positionY = this.zombies[index].setPositionOfCreate(min, max) * factor + bias;
    this.zombiesC.push(this.zombies.pop());
    this.commingZombieTimer = 0;
  }

  zombiesDead(zombie, i, arrayOfZombie) {
    zombie.zombiesDead();
    if (zombie.timerDied > 59) {
      arrayOfZombie.splice(i, 1);
    }
  }

  zombiesBurn(zombie, i, arrayOfZombie) {
    zombie.zombieBurn();
    if (zombie.timerOfBurn > 100) {
      arrayOfZombie.splice(i, 1);
    }
  }

  zombiesAttackPlants(plant, i, arrayOfPlant) {
    this.zombieAttackTimer++;
    if (this.zombieAttackTimer > 42) {
      plant.health -= 1;
      this.zombieAttackTimer = 0;
      if (plant.health < 1) {
        this.positionOfPlant.splice(i, 1);
        arrayOfPlant.splice(i, 1);
      }
    }
  }

}



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zombyAudioWave; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_zomby_awooga_ogg__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_zomby_awooga_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__audio_zomby_awooga_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audio_zomby_hugewave_ogg__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audio_zomby_hugewave_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__audio_zomby_hugewave_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__archiverForAudio__ = __webpack_require__(2);




let zombyAudioWave = { awooga: __WEBPACK_IMPORTED_MODULE_0__audio_zomby_awooga_ogg___default.a, hugewave: __WEBPACK_IMPORTED_MODULE_1__audio_zomby_hugewave_ogg___default.a };
zombyAudioWave = Object(__WEBPACK_IMPORTED_MODULE_2__archiverForAudio__["a" /* archivatorAudio */])(zombyAudioWave);



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zombyAudioGroan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_zomby_groan_ogg__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_zomby_groan_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__audio_zomby_groan_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audio_zomby_groan2_ogg__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audio_zomby_groan2_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__audio_zomby_groan2_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audio_zomby_groan3_ogg__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audio_zomby_groan3_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__audio_zomby_groan3_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__audio_zomby_groan4_ogg__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__audio_zomby_groan4_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__audio_zomby_groan4_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__audio_zomby_groan5_ogg__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__audio_zomby_groan5_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__audio_zomby_groan5_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__audio_zomby_groan6_ogg__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__audio_zomby_groan6_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__audio_zomby_groan6_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__archiverForAudio__ = __webpack_require__(2);








let zombyAudioGroan = { groan: __WEBPACK_IMPORTED_MODULE_0__audio_zomby_groan_ogg___default.a, groan2: __WEBPACK_IMPORTED_MODULE_1__audio_zomby_groan2_ogg___default.a, groan3: __WEBPACK_IMPORTED_MODULE_2__audio_zomby_groan3_ogg___default.a, groan4: __WEBPACK_IMPORTED_MODULE_3__audio_zomby_groan4_ogg___default.a, groan5: __WEBPACK_IMPORTED_MODULE_4__audio_zomby_groan5_ogg___default.a, groan6: __WEBPACK_IMPORTED_MODULE_5__audio_zomby_groan6_ogg___default.a };
zombyAudioGroan = Object(__WEBPACK_IMPORTED_MODULE_6__archiverForAudio__["a" /* archivatorAudio */])(zombyAudioGroan);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zombyAudioChomp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_zomby_bigchomp_ogg__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_zomby_bigchomp_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__audio_zomby_bigchomp_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audio_zomby_chomp_ogg__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audio_zomby_chomp_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__audio_zomby_chomp_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audio_zomby_chomp2_ogg__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audio_zomby_chomp2_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__audio_zomby_chomp2_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__audio_zomby_chompSoft_ogg__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__audio_zomby_chompSoft_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__audio_zomby_chompSoft_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__archiverForAudio__ = __webpack_require__(2);






let zombyAudioChomp = { bigChomp: __WEBPACK_IMPORTED_MODULE_0__audio_zomby_bigchomp_ogg___default.a, chomp: __WEBPACK_IMPORTED_MODULE_1__audio_zomby_chomp_ogg___default.a, chomp2: __WEBPACK_IMPORTED_MODULE_2__audio_zomby_chomp2_ogg___default.a, chompSoft: __WEBPACK_IMPORTED_MODULE_3__audio_zomby_chompSoft_ogg___default.a };
zombyAudioChomp = Object(__WEBPACK_IMPORTED_MODULE_4__archiverForAudio__["a" /* archivatorAudio */])(zombyAudioChomp);



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return plantAudio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_plants_plant_ogg__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_plants_plant_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__audio_plants_plant_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audio_plants_plant2_ogg__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audio_plants_plant2_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__audio_plants_plant2_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audio_plants_seedlift_ogg__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audio_plants_seedlift_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__audio_plants_seedlift_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__audio_plants_firepea_ogg__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__audio_plants_firepea_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__audio_plants_firepea_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__archiverForAudio__ = __webpack_require__(2);






let plantAudio = { plant1: __WEBPACK_IMPORTED_MODULE_0__audio_plants_plant_ogg___default.a, plant2: __WEBPACK_IMPORTED_MODULE_1__audio_plants_plant2_ogg___default.a, seedlift: __WEBPACK_IMPORTED_MODULE_2__audio_plants_seedlift_ogg___default.a, firepea: __WEBPACK_IMPORTED_MODULE_3__audio_plants_firepea_ogg___default.a };
plantAudio = Object(__WEBPACK_IMPORTED_MODULE_4__archiverForAudio__["a" /* archivatorAudio */])(plantAudio);



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zombyAudioFalling; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_zomby_zombie_falling_1_ogg__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_zomby_zombie_falling_1_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__audio_zomby_zombie_falling_1_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audio_zomby_bonk_ogg__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audio_zomby_bonk_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__audio_zomby_bonk_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__archiverForAudio__ = __webpack_require__(2);




let zombyAudioFalling = { zombyfalling1: __WEBPACK_IMPORTED_MODULE_0__audio_zomby_zombie_falling_1_ogg___default.a, bonk: __WEBPACK_IMPORTED_MODULE_1__audio_zomby_bonk_ogg___default.a };
zombyAudioFalling = Object(__WEBPACK_IMPORTED_MODULE_2__archiverForAudio__["a" /* archivatorAudio */])(zombyAudioFalling);



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sunAudioPoints; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_sunpoints_points_ogg__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_sunpoints_points_ogg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__audio_sunpoints_points_ogg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__archiverForAudio__ = __webpack_require__(2);



let sunAudioPoints = Object(__WEBPACK_IMPORTED_MODULE_1__archiverForAudio__["a" /* archivatorAudio */])({ sunpoints: __WEBPACK_IMPORTED_MODULE_0__audio_sunpoints_points_ogg___default.a });


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelTwo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BetweenLevels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plantsComponents_sunflower__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__otherComponents_sun__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plantsComponents_bulletNormal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plantsComponents_cherryBomb__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__audioComponents_audioButton__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AllUnitInTheMap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__audioComponents_audioGameState__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__audioComponents_audioZombyWave__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__audioComponents_audioZombyGroan__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__audioComponents_audioZombyChomp__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__audioComponents_audioPlants__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__audioComponents_audioZombyFalling__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__audioComponents_audioSunPoints__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__audioComponents_audioPlayer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__menuComponents_resources__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__menuComponents_store__ = __webpack_require__(4);




















class LevelTwo {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.backgroundPositionX = 0;
    this.animationPositionX = 0;
    this.numberOfSuns = 200;
    this.toPlantBind = null;
    this.receivingSunsBind = null;
    this.drawElementsBind = null;
    this.drawGardenBind = null;
    this.createPlantUnitBind = null;
    this.awardingBind = null;
    this.awardingEventBind = null;
    this.levelTimeLinePosition = 0;
    this.suns = [];
    this.firstPlant = 0;
    this.chosenSuns = [];
    this.checkComingZombie = 0;
    this.levelUp = 0;
    this.stopLevel = 0;
    this.once = 0;
    this.stopAnimation = 0;
    this.menu = __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].menu;
    this.menuOpen = 0;
    this.frameWaiting = 0;
    this.commingZombieTimer = 0;
    this.sunTimer = 0;
    this.sunDestroyTimer = 0;
    this.openFireTimer = 0;
    this.awardTimer = 0;
    this.gameOver = 0;
    this.awardCard = null;
    this.allUnitInTheMap = null;
    this.buttonAudio = __WEBPACK_IMPORTED_MODULE_7__audioComponents_audioButton__["a" /* buttonAudio */];
    this.gameAudioStates = __WEBPACK_IMPORTED_MODULE_9__audioComponents_audioGameState__["a" /* gameAudioStates */];
    this.zombyAudioWave = __WEBPACK_IMPORTED_MODULE_10__audioComponents_audioZombyWave__["a" /* zombyAudioWave */];
    this.zombyAudioGroan = __WEBPACK_IMPORTED_MODULE_11__audioComponents_audioZombyGroan__["a" /* zombyAudioGroan */];
    this.zombyAudioChomp = __WEBPACK_IMPORTED_MODULE_12__audioComponents_audioZombyChomp__["a" /* zombyAudioChomp */];
    this.zombyAudioFalling = __WEBPACK_IMPORTED_MODULE_14__audioComponents_audioZombyFalling__["a" /* zombyAudioFalling */];
    this.plantAudio = __WEBPACK_IMPORTED_MODULE_13__audioComponents_audioPlants__["a" /* plantAudio */];
    this.sunAudioPoints = __WEBPACK_IMPORTED_MODULE_15__audioComponents_audioSunPoints__["a" /* sunAudioPoints */];
    this.elemLeft = this.canvas.offsetLeft;
    this.elemTop = this.canvas.offsetTop;
    this.audioPlayer = __WEBPACK_IMPORTED_MODULE_16__audioComponents_audioPlayer__["a" /* audioPlayer */];
    this.reastartdialogOpen = 0;
    this.knobPositionX = 450;
    this.knobPositionY = 205;
    this.quitDialogOpen = 0;
  }

  startGame() {
    this.setFontProperties();
    this.setAudioProperties();
    this.setAwardCard();
    this.createAllUnitInTheMapObject();
    this.setThisForCallbackFunctions();
    this.createZombie();
    this.sortZombieView();
    this.createSeedPack();
    this.createLawnmowers();
  }

  setFontProperties() {
    this.context.font = '24px Arial';
    this.context.textAlign = 'center';
    this.context.fillStyle = '#000';
  }

  setAudioProperties() {
    this.audioPlayer(this.gameAudioStates.gameprocess);
    this.gameAudioStates.gameprocess.loop = true;
  }

  setAwardCard() {
    this.awardCard = new __WEBPACK_IMPORTED_MODULE_6__plantsComponents_cherryBomb__["a" /* CherryBomb */](this.context);
    this.awardCard.init();
  }

  createAllUnitInTheMapObject() {
    this.allUnitInTheMap = new __WEBPACK_IMPORTED_MODULE_8__AllUnitInTheMap__["a" /* AllUnitInTheMap */](this.canvas, this.context, 2);
  }

  setThisForCallbackFunctions() {
    this.toPlantBind = this.toPlant.bind(this);
    this.receivingSunsBind = this.receivingSuns.bind(this);
    this.drawElementsBind = this.drawElements.bind(this);
    this.drawGardenBind = this.drawGarden.bind(this);
    this.createPlantUnitBind = this.createPlantUnit.bind(this);
    this.awardingBind = this.awarding.bind(this);
    this.awardingEventBind = this.awardingEvent.bind(this);
    this.openMenuRestartBind = this.openMenuRestart.bind(this);
    this.openMenuQuitBind = this.openMenuQuit.bind(this);
    this.changeVolumeBind = this.changeVolume.bind(this);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundTwo, 0, 0);
    this.checkOpenMenuEventBind = this.checkOpenMenuEvent.bind(this);
    this.openMenuEventBind = this.openMenuEvent.bind(this);
    requestAnimationFrame(this.levelOverview.bind(this));
  }

  createLawnmowers() {
    this.allUnitInTheMap.createLawnmowers(150, 97);
  }

  drawLawnmowers() {
    this.allUnitInTheMap.drawLawnmowers();
  }

  createSeedPack() {
    this.allUnitInTheMap.createSeedPack();
  }

  drawSeedPack() {
    this.allUnitInTheMap.drawSeedPack();
  }

  createZombie() {
    this.allUnitInTheMap.createZombie();
  }

  setZombieState() {
    // TODO change number of stateZombie
    this.allUnitInTheMap.setZombieState(this.setRandom);
  }

  sortZombieView() {
    this.allUnitInTheMap.sortZombieView();
  }

  levelOverview() {
    if (this.backgroundPositionX > -600) {
      this.backgroundPositionX -= 10;
    } else {
      this.frameWaiting++;
    }
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundTwo, this.backgroundPositionX, 0);
    if (this.backgroundPositionX < -320) {
      this.allUnitInTheMap.levelOverview(this.frameWaiting);
    }
    if (this.frameWaiting === 120) {
      requestAnimationFrame(this.returnOnGarden.bind(this, __WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundTwo));
    } else {
      requestAnimationFrame(this.levelOverview.bind(this, __WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundTwo));
    }
  }

  returnOnGarden() {
    this.backgroundPositionX += 10;
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundTwo, this.backgroundPositionX, 0);
    if (this.backgroundPositionX < -220) {
      this.allUnitInTheMap.returnOnGarden();
      requestAnimationFrame(this.returnOnGarden.bind(this, __WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundTwo));
    } else {
      requestAnimationFrame(this.drawGardenBind);
    }
  }

  drawGarden() {
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundThree, 0, 0, this.animationPositionX, 600, -220, 0, this.animationPositionX, 600);
    if (this.animationPositionX < 1390) {
      this.animationPositionX += 10;
      requestAnimationFrame(this.drawGardenBind);
    } else {
      requestAnimationFrame(this.drawElementsBind);
      this.startLevel();
      this.checkOpenMenu();
      this.openMenu();
    }
  }

  checkOpenMenu() {
    this.canvas.addEventListener('mousemove', this.checkOpenMenuEventBind);
  }

  checkOpenMenuEvent(e) {
    if (e.layerX > 660 && e.layerX < 770 && e.layerY > 0 && e.layerY < 28) {
      this.menu = __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].menuHover;
    } else {
      this.menu = __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].menu;
    }
  }

  openMenu() {
    this.canvas.addEventListener('click', this.openMenuEventBind);
  }

  openMenuEvent() {
    if (this.menu === __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].menuHover) {
      if (this.menuOpen) {
        this.menuOpen = 0;
        this.stopLevel = 0;
        this.gameAudioStates.gameprocess.play();
        requestAnimationFrame(this.drawElementsBind);
      } else {
        this.gameAudioStates.gameprocess.pause();
        this.stopLevel = 1;
        this.menuOpen = 1;
      }
    }
  }

  drawElements() {
    this.drawCommonElements();
    this.drawPlantElements();
    this.drawSunElements();
    this.drawZombieElements();
    this.drawOtherElements();
  }

  drawCommonElements() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundThree, 0, 0, this.animationPositionX, 600, -220, 0, this.animationPositionX, 600);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].seedBank, 10, 0);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].sunBank, 10, 0);
    this.context.fillText(`${this.numberOfSuns}`, 48.5, 80);
    this.context.drawImage(this.menu, 660, -5);
  }

  drawPlantElements() {
    this.drawLawnmowers();
    this.drawSeedPack();
    this.choseSeedPack();
    this.drawPlant();
    this.drawOpenFire();
  }

  drawSunElements() {
    this.drawSun();
    this.drawFallOfSuns();
    this.choseSun();
  }

  drawZombieElements() {
    this.checkForComingZombie();
    this.levelProgress();
    this.zombieComing();
    this.createPlantLogo();
  }

  drawOtherElements() {
    //this.showMenu();
    this.checkLevelComplete();
    this.checkAnimation();
  }

  checkAnimation() {
    if (!this.stopLevel) {
      requestAnimationFrame(this.drawElementsBind);
    }
  }

  checkLevelComplete() {
    if (this.levelUp && !this.stopAnimation) {
      this.levelComplete();
    }
  }

  levelComplete() {
    this.awardCard.award();
    if (!this.once) {
      this.once = 1;
      this.canvas.addEventListener('click', this.awardingEventBind);
    }
  }

  awardingEvent(e) {
    if (e.layerX > this.awardCard.startX && e.layerX < this.awardCard.startX + 50 && e.layerY > this.awardCard.endY + 40 && e.layerY < this.awardCard.endY + 110) {
      this.awarding();
      this.canvas.removeEventListener('click', this.awardingEventBind);
    }
  }

  awarding() {
    this.awardCard.award();
    this.stopAnimation = 1;
    this.biasAwardForY();
    if (this.awardCard.startX > 376) {
      this.biasAwardForXLeft();
    } else if (this.awardCard.startX < 374) {
      this.biasAwardForXRight();
    } else {
      this.drawStarBurst();
      this.awardCard.award();
      if (this.awardTimer === 60) {
        this.runBetweenLevel();
      } else {
        this.awardTimer++;
        requestAnimationFrame(this.awardingBind);
      }
    }
  }

  biasAwardForXLeft() {
    this.awardCard.startX -= (this.awardCard.startX - 376) / 10 + 1;
    requestAnimationFrame(this.awardingBind);
  }

  biasAwardForXRight() {
    this.awardCard.startX += (374 - this.awardCard.startX) / 10 + 1;
    requestAnimationFrame(this.awardingBind);
  }

  biasAwardForY() {
    if (this.awardCard.startY > 226) {
      this.awardCard.startY -= (this.awardCard.startY - 226) / 10;
    } else if (this.awardCard.startY < 224) {
      this.awardCard.startY += (224 - this.awardCard.startY) / 10 + 1;
    }
  }

  drawStarBurst() {
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].starburst, 107, 6);
  }

  runBetweenLevel() {
    this.gameEnd();
    const betweenLevel = new __WEBPACK_IMPORTED_MODULE_1__BetweenLevels__["a" /* BetweenLevels */](this.canvas, this.context, this.awardCard.packet, 2);
    betweenLevel.create();
    betweenLevel.start();
  }

  zombieComing() {
    let positionToEndX;
    let positionToEndY;
    this.allUnitInTheMap.runLawnmowers();
    this.allUnitInTheMap.zombiesC.forEach((zombie, i, arrayOfZombie) => {
      this.allUnitInTheMap.checkLawnmowers(zombie);
      if (zombie.positionX < -100) {
        this.playerLose();
      }
      if (zombie.health < 1) {
        this.audioPlayer(this.zombyAudioFalling.zombyfalling1);
        this.allUnitInTheMap.zombiesDead(zombie, i, arrayOfZombie);
      } else if (zombie.burn) {
        this.allUnitInTheMap.zombiesBurn(zombie, i, arrayOfZombie);
      } else {
        if (this.allUnitInTheMap.plants.some((plant, i, arr) => {
          if (plant.positionX - 20 > zombie.positionX && plant.positionX - 90 < zombie.positionX && plant.positionY < zombie.positionY + 75 && plant.positionY > zombie.positionY + 65) {
            this.allUnitInTheMap.zombiesAttackPlants(plant, i, arr);
            this.audioPlayer(this.zombyAudioChomp.chomp);
            this.audioPlayer(this.zombyAudioChomp.chomp2);
            this.audioPlayer(this.zombyAudioChomp.chompSoft);
            return true;
          } else {
            return false;
          }
        })) {
          zombie.attack();
        } else {
          zombie.walk();
        }
      } //TODO over here
      if (this.allUnitInTheMap.zombies.length < 1 && arrayOfZombie.length < 1) {
        positionToEndX = zombie.positionX;
        positionToEndY = zombie.positionY;
      }
    });
    if (positionToEndY && positionToEndX) {
      this.levelEnd(positionToEndX, positionToEndY);
    }
  }

  levelEnd(pointX, pointY) {
    this.gameAudioStates.gameprocess.pause();
    this.awardCard.createAwardPosition(pointX, pointY);
    this.levelUp = 1;
    this.levelComplete(pointX);
  }

  levelProgress() {
    if (this.checkComingZombie) {
      this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].levelTimeLine, 600, 555);
      this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].levelTimeLineProcess, 0, 0, this.levelTimeLinePosition + 18, 26, 758.55 - this.levelTimeLinePosition, 568, this.levelTimeLinePosition + 18, 26);
      if (this.levelTimeLinePosition < 131) {
        this.levelTimeLinePosition += 0.03;
      }
    }
  }

  drawPlant() {
    this.allUnitInTheMap.plants.forEach((plant, i, arr) => {
      plant.build();
      this.allUnitInTheMap.zombiesC.forEach(zombie => {
        this.allUnitInTheMap.plantsAttackZombies(plant, zombie, this.audioPlayer.bind(this, this.zombyAudioFalling.bonk));
      });
      if (plant.name === __WEBPACK_IMPORTED_MODULE_3__plantsComponents_sunflower__["a" /* Sunflower */]) {
        this.allUnitInTheMap.ifPlantSunflower(plant, this.suns);
      } else {
        plant.useOfAbility();
      }
    });
  }

  drawSun() {
    this.suns.forEach(sun => {
      sun.fall();
    });
  }

  choseSun() {
    // TODO AllUnitInTheMap.choseSun()
    this.chosenSuns.forEach((sun, i, arr) => {
      sun.chose();
      if (sun.startX < 10) {
        arr.splice(i, 1);
        this.numberOfSuns += 25;
      }
    });
  }

  startLevel() {
    this.canvas.addEventListener('click', this.toPlantBind);
    this.setZombieState();
  }

  toPlant(e) {
    if (this.allUnitInTheMap.seedPack.every(seed => !seed.chose)) {
      this.allUnitInTheMap.chosePlant(e, this.numberOfSuns, this.audioPlayer.bind(this, this.plantAudio.seedlift));
    } else {
      this.allUnitInTheMap.cancelChosePlantClick(e);
    }
  }

  choseSeedPack() {
    this.allUnitInTheMap.choseSeedPack(this.numberOfSuns);
  }

  createPlantLogo() {
    this.allUnitInTheMap.seedPack.forEach(seed => {
      if (seed.chose === 1) {
        this.allUnitInTheMap.createPlantLogo(seed, 0, 3, 120, 105);
        this.canvas.addEventListener('click', this.createPlantUnitBind);
      }
    });
  }

  createPlantUnit(e) {
    let plant;
    this.allUnitInTheMap.seedPack.forEach(seed => {
      if (seed.chose) {
        plant = new seed.name(this.context, this.allUnitInTheMap.positionToCreate.x, this.allUnitInTheMap.positionToCreate.y);
      }
    });
    if (plant) {
      this.allUnitInTheMap.createPlantUnit(e, plant);
      if (this.allUnitInTheMap.checkPlantBuild) {
        this.numberOfSuns -= plant.cost;
        this.audioPlayer(this.plantAudio.plant1);
        this.checkForSuns();
      }
      this.canvas.removeEventListener('click', this.createPlantUnitBind);
    }
    this.checkForZombie();
  }

  checkForSuns() {
    if (!this.firstPlant) {
      this.firstPlant = 1;
      this.fallOfSuns();
      this.canvas.addEventListener('click', this.receivingSunsBind);
    }
  }

  checkForZombie() {
    if (this.allUnitInTheMap.plants.length > 5 && !this.checkComingZombie) {
      this.checkComingZombie = 1;
      this.commingZombieTimer = 0;
      this.startComingZombie();
      this.audioPlayer(this.zombyAudioGroan.groan3);
      this.audioPlayer(this.zombyAudioGroan.groan5);
      this.audioPlayer(this.zombyAudioGroan.groan6);
    }
  }

  checkForComingZombie() {
    if (this.checkComingZombie && this.allUnitInTheMap.zombies.length > 0) {
      this.startComingZombie();
    }
  }

  startComingZombie() {
    this.allUnitInTheMap.startComingZombie(0, 2, 97, 100);
  }

  openFire() {
    if (this.openFireTimer === 90) {
      this.allUnitInTheMap.plants.forEach(plant => {
        if (this.allUnitInTheMap.zombiesC.some(zombie => zombie.positionX < 690 && zombie.positionX > plant.positionX - 35 && zombie.positionY + 75 > plant.positionY && zombie.positionY + 65 < plant.positionY && !zombie.burn)) {
          this.audioPlayer(this.plantAudio.firepea);
          const bullet = new __WEBPACK_IMPORTED_MODULE_5__plantsComponents_bulletNormal__["a" /* Bullet */](plant.positionX, plant.positionY);
          plant.positionOfBullet.push(bullet);
        }
      });
      this.openFireTimer = 0;
    } else {
      this.openFireTimer++;
    }
  }

  drawOpenFire() {
    if (this.allUnitInTheMap.plants.length > 0 && this.allUnitInTheMap.zombiesC.length) {
      this.openFire();
    }
  }

  fallOfSuns() {
    if (this.sunTimer < 300 && !this.levelUp) {
      this.sunTimer++;
    } else if (!this.levelUp) {
      const sun = new __WEBPACK_IMPORTED_MODULE_4__otherComponents_sun__["a" /* Sun */](this.context);
      sun.create();
      this.suns.push(sun);
      this.sunTimer = 0;
    }
    this.destroySuns();
  }

  drawFallOfSuns() {
    if (this.firstPlant) {
      this.fallOfSuns();
    }
  }

  destroySuns() {
    if (this.suns.length > 2 && this.sunDestroyTimer > 450) {
      this.suns.shift();
      this.sunDestroyTimer = 0;
    } else {
      this.sunDestroyTimer++;
    }
  }

  receivingSuns(e) {
    this.suns.forEach((sun, i, arr) => {
      if (e.layerX > sun.startX && e.layerX < sun.startX + 75 && e.layerY > sun.startY && e.layerY < sun.startY + 75) {
        this.chosenSuns.push(sun);
        this.sunAudioPoints.sunpoints.play();
        arr.splice(i, 1);
      }
    });
  }

  setRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  playerLose() {
    this.gameEnd();
    const betweenLevel = new __WEBPACK_IMPORTED_MODULE_1__BetweenLevels__["a" /* BetweenLevels */](this.canvas, this.context, this.awardCard.packet, 2);
    betweenLevel.createPlayerLose();
    betweenLevel.playerLose();
  }

  gameEnd() {
    this.stopLevel = 1;
    this.gameAudioStates.gameprocess.pause();
    this.canvas.removeEventListener('click', this.toPlantBind);
    this.canvas.removeEventListener('click', this.openMenuEventBind);
    this.canvas.removeEventListener('mousemove', this.checkOpenMenuEventBind);
  }

  showMenu() {
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].menuWindow, 188, 30);
    //this.context.drawImage(commonImages.restartButton, 230, 445);
    //this.context.drawImage(commonImages.quitButton, 397, 445);
    //this.context.drawImage(commonImages.sliderKnob, this.knobPositionX, this.knobPositionY);
    this.canvas.addEventListener('click', this.changeVolumeBind);
    this.canvas.addEventListener('click', this.openMenuRestartBind);
    this.canvas.addEventListener('click', this.openMenuQuitBind);
  }

  openMenuRestart(e) {
    if (this.outsideArea(e, 230, 390, 445, 500)) return;
    this.audioPlayer(this.buttonAudio.tap);
    this.audioPlayer(this.buttonAudio.tap2);
    this.audioPlayer(this.buttonAudio.bleep);
    this.restartDialogOpen = 1;
  }

  menuRestartDraw() {
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_17__menuComponents_resources__["a" /* resources */].get('img/dialog_window/quit_menu.png'), 170, 180, 450, 350);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].restart1, 325, 250);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].restart2, 205, 350);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].restartButton, 210, 460);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].cancelButton, 420, 460);
    this.canvas.removeEventListener('click', this.openMenuQuitBind);
    this.canvas.removeEventListener('click', this.changeVolumeBind);
  }

  openMenuQuit(e) {
    if (this.outsideArea(e, 397, 555, 445, 500)) return;
    this.audioPlayer(this.buttonAudio.tap);
    this.audioPlayer(this.buttonAudio.tap2);
    this.audioPlayer(this.buttonAudio.bleep);
    this.quitDialogOpen = 1;
  }

  menuQuitDraw() {
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_17__menuComponents_resources__["a" /* resources */].get('img/dialog_window/quit_menu.png'), 170, 180, 450, 350);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].quit1, 350, 250);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].quit2, 210, 350);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].quitButton, 210, 460);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].cancelButton, 420, 460);
    this.canvas.removeEventListener('click', this.openMenuRestartBind);
    this.canvas.removeEventListener('click', this.changeVolumeBind);
  }

  outsideArea(e, x1, x2, y1, y2) {
    let x = e.pageX - this.elemLeft,
        y = e.pageY - this.elemTop;
    return x < x1 || x > x2 || y < y1 || y > y2;
  }

  changeVolume(e) {
    if (this.outsideArea(e, 320, 460, 180, 230)) return;
    this.knobPositionX = e.pageX - this.elemLeft - 5;
    this.knobpositionY = e.pageY - this.elemTop - 5;
    if (this.knobPositionX <= 460 && this.knobPositionX > 420) {
      __WEBPACK_IMPORTED_MODULE_18__menuComponents_store__["a" /* store */].setVolume(0.5);
    } else if (this.knobPositionX <= 420 && this.knobPositionX > 380) {
      __WEBPACK_IMPORTED_MODULE_18__menuComponents_store__["a" /* store */].setVolume(0.3);
    } else if (this.knobPositionX <= 380 && this.knobPositionX > 340) {
      __WEBPACK_IMPORTED_MODULE_18__menuComponents_store__["a" /* store */].setVolume(0.2);
    } else if (this.knobPositionX <= 340 && this.knobPositionX > 320) {
      __WEBPACK_IMPORTED_MODULE_18__menuComponents_store__["a" /* store */].setVolume(0.1);
    } else if (this.knobPositionX <= 320) {
      __WEBPACK_IMPORTED_MODULE_18__menuComponents_store__["a" /* store */].setVolume(0);
    }
    this.gameAudioStates.gameprocess.volume = Number(__WEBPACK_IMPORTED_MODULE_18__menuComponents_store__["a" /* store */].getVolume());
  }

}



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelThree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BetweenLevels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plantsComponents_sunflower__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__otherComponents_sun__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plantsComponents_bulletNormal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plantsComponents_cherryBomb__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__audioComponents_audioButton__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AllUnitInTheMap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__audioComponents_audioGameState__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__audioComponents_audioZombyWave__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__audioComponents_audioZombyGroan__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__audioComponents_audioZombyChomp__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__audioComponents_audioPlants__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__audioComponents_audioZombyFalling__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__audioComponents_audioSunPoints__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__audioComponents_audioPlayer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__menuComponents_resources__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__menuComponents_store__ = __webpack_require__(4);




















class LevelThree {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.backgroundPositionX = 0;
    this.animationPositionX = 0;
    this.numberOfSuns = 300;
    this.toPlantBind = null;
    this.receivingSunsBind = null;
    this.drawElementsBind = null;
    this.drawGardenBind = null;
    this.createPlantUnitBind = null;
    this.awardingBind = null;
    this.awardingEventBind = null;
    this.levelTimeLinePosition = 0;
    this.suns = [];
    this.firstPlant = 0;
    this.chosenSuns = [];
    this.checkComingZombie = 0;
    this.levelUp = 0;
    this.stopLevel = 0;
    this.once = 0;
    this.stopAnimation = 0;
    this.menu = __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].menu;
    this.menuOpen = 0;
    this.frameWaiting = 0;
    this.commingZombieTimer = 0;
    this.sunTimer = 0;
    this.sunDestroyTimer = 0;
    this.openFireTimer = 0;
    this.awardTimer = 0;
    this.awardCard = null;
    this.allUnitInTheMap = null;
    this.buttonAudio = __WEBPACK_IMPORTED_MODULE_7__audioComponents_audioButton__["a" /* buttonAudio */];
    this.gameAudioStates = __WEBPACK_IMPORTED_MODULE_9__audioComponents_audioGameState__["a" /* gameAudioStates */];
    this.zombyAudioWave = __WEBPACK_IMPORTED_MODULE_10__audioComponents_audioZombyWave__["a" /* zombyAudioWave */];
    this.zombyAudioGroan = __WEBPACK_IMPORTED_MODULE_11__audioComponents_audioZombyGroan__["a" /* zombyAudioGroan */];
    this.zombyAudioChomp = __WEBPACK_IMPORTED_MODULE_12__audioComponents_audioZombyChomp__["a" /* zombyAudioChomp */];
    this.zombyAudioFalling = __WEBPACK_IMPORTED_MODULE_14__audioComponents_audioZombyFalling__["a" /* zombyAudioFalling */];
    this.plantAudio = __WEBPACK_IMPORTED_MODULE_13__audioComponents_audioPlants__["a" /* plantAudio */];
    this.sunAudioPoints = __WEBPACK_IMPORTED_MODULE_15__audioComponents_audioSunPoints__["a" /* sunAudioPoints */];
    this.elemLeft = this.canvas.offsetLeft;
    this.elemTop = this.canvas.offsetTop;
    this.audioPlayer = __WEBPACK_IMPORTED_MODULE_16__audioComponents_audioPlayer__["a" /* audioPlayer */];
    this.reastartdialogOpen = 0;
    this.knobPositionX = 450;
    this.knobPositionY = 205;
    this.quitDialogOpen = 0;
  }

  startGame() {
    this.setFontProperties();
    this.setAudioProperties();
    this.setAwardCard();
    this.createAllUnitInTheMapObject();
    this.createLevel();
    this.setThisForCallbackFunctions();
    this.createZombie();
    this.sortZombieView();
    this.createSeedPack();
    this.createLawnmowers();
  }

  createLevel() {
    this.allUnitInTheMap.createLevel();
  }

  setFontProperties() {
    this.context.font = '24px Arial';
    this.context.textAlign = 'center';
    this.context.fillStyle = '#000';
  }

  setAudioProperties() {
    this.audioPlayer(this.gameAudioStates.gameprocess);
    this.gameAudioStates.gameprocess.loop = true;
  }

  setAwardCard() {
    this.awardCard = new __WEBPACK_IMPORTED_MODULE_6__plantsComponents_cherryBomb__["a" /* CherryBomb */](this.context);
    this.awardCard.init();
    this.awardCard.packet = __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].zombieNoteSmall;
  }

  createAllUnitInTheMapObject() {
    this.allUnitInTheMap = new __WEBPACK_IMPORTED_MODULE_8__AllUnitInTheMap__["a" /* AllUnitInTheMap */](this.canvas, this.context, 3);
  }

  setThisForCallbackFunctions() {
    this.toPlantBind = this.toPlant.bind(this);
    this.receivingSunsBind = this.receivingSuns.bind(this);
    this.drawElementsBind = this.drawElements.bind(this);
    this.drawGardenBind = this.drawGarden.bind(this);
    this.createPlantUnitBind = this.createPlantUnit.bind(this);
    this.awardingBind = this.awarding.bind(this);
    this.awardingEventBind = this.awardingEvent.bind(this);
    this.openMenuRestartBind = this.openMenuRestart.bind(this);
    this.openMenuQuitBind = this.openMenuQuit.bind(this);
    this.changeVolumeBind = this.changeVolume.bind(this);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundThree, 0, 0);
    this.checkOpenMenuEventBind = this.checkOpenMenuEvent.bind(this);
    this.openMenuEventBind = this.openMenuEvent.bind(this);
    requestAnimationFrame(this.levelOverview.bind(this));
  }

  createLawnmowers() {
    this.allUnitInTheMap.createLawnmowers(80, 97);
  }

  drawLawnmowers() {
    this.allUnitInTheMap.drawLawnmowers();
  }

  createSeedPack() {
    this.allUnitInTheMap.createSeedPack();
  }

  drawSeedPack() {
    this.allUnitInTheMap.drawSeedPack();
  }

  createZombie() {
    this.allUnitInTheMap.createZombie();
  }

  setZombieState() {
    // TODO change number of stateZombie
    this.allUnitInTheMap.setZombieState(this.setRandom);
  }

  sortZombieView() {
    this.allUnitInTheMap.sortZombieView();
  }

  levelOverview() {
    if (this.backgroundPositionX > -600) {
      this.backgroundPositionX -= 10;
    } else {
      this.frameWaiting++;
    }
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundThree, this.backgroundPositionX, 0);
    if (this.backgroundPositionX < -320) {
      this.allUnitInTheMap.levelOverview(this.frameWaiting);
    }
    if (this.frameWaiting === 120) {
      requestAnimationFrame(this.returnOnGarden.bind(this, __WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundThree));
    } else {
      requestAnimationFrame(this.levelOverview.bind(this, __WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundThree));
    }
  }

  returnOnGarden() {
    this.backgroundPositionX += 10;
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundThree, this.backgroundPositionX, 0);
    if (this.backgroundPositionX < -220) {
      this.allUnitInTheMap.returnOnGarden();
      requestAnimationFrame(this.returnOnGarden.bind(this, __WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundThree));
    } else {
      requestAnimationFrame(this.drawGardenBind);
    }
  }

  drawGarden() {
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundFour, 0, 0, this.animationPositionX, 600, -220, 0, this.animationPositionX, 600);
    if (this.animationPositionX < 1390) {
      this.animationPositionX += 10;
      requestAnimationFrame(this.drawGardenBind);
    } else {
      requestAnimationFrame(this.drawElementsBind);
      this.startLevel();
      this.checkOpenMenu();
      this.openMenu();
    }
  }

  checkOpenMenu() {
    this.canvas.addEventListener('mousemove', this.checkOpenMenuEventBind);
  }

  checkOpenMenuEvent(e) {
    if (e.layerX > 660 && e.layerX < 770 && e.layerY > 0 && e.layerY < 28) {
      this.menu = __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].menuHover;
    } else {
      this.menu = __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].menu;
    }
  }

  openMenu() {
    this.canvas.addEventListener('click', this.openMenuEventBind);
  }

  openMenuEvent() {
    if (this.menu === __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].menuHover) {
      if (this.menuOpen) {
        this.menuOpen = 0;
        this.stopLevel = 0;
        this.gameAudioStates.gameprocess.play();
        requestAnimationFrame(this.drawElementsBind);
      } else {
        this.gameAudioStates.gameprocess.pause();
        this.stopLevel = 1;
        this.menuOpen = 1;
      }
    }
  }

  drawElements() {
    this.drawCommonElements();
    this.drawPlantElements();
    this.drawSunElements();
    this.drawZombieElements();
    this.drawOtherElements();
  }

  drawCommonElements() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundFour, 0, 0, this.animationPositionX, 600, -220, 0, this.animationPositionX, 600);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].seedBank, 10, 0);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].sunBank, 10, 0);
    this.context.fillText(`${this.numberOfSuns}`, 48.5, 80);
    this.context.drawImage(this.menu, 660, -5);
  }

  drawPlantElements() {
    this.drawLawnmowers();
    this.drawSeedPack();
    this.choseSeedPack();
    this.drawPlant();
    this.drawOpenFire();
  }

  drawSunElements() {
    this.drawSun();
    this.drawFallOfSuns();
    this.choseSun();
  }

  drawZombieElements() {
    this.checkForComingZombie();
    this.levelProgress();
    this.zombieComing();
    this.createPlantLogo();
  }

  drawOtherElements() {
    //this.showMenu();
    this.checkLevelComplete();
    this.checkAnimation();
  }

  checkAnimation() {
    if (!this.stopLevel) {
      requestAnimationFrame(this.drawElementsBind);
    }
  }

  checkLevelComplete() {
    if (this.levelUp && !this.stopAnimation) {
      this.levelComplete();
    }
  }

  levelComplete() {
    this.awardCard.award();
    if (!this.once) {
      this.once = 1;
      this.canvas.addEventListener('click', this.awardingEventBind);
    }
  }

  awardingEvent(e) {
    if (e.layerX > this.awardCard.startX && e.layerX < this.awardCard.startX + 78 && e.layerY > this.awardCard.endY + 40 && e.layerY < this.awardCard.endY + 92) {
      this.awarding();
      this.canvas.removeEventListener('click', this.awardingEventBind);
    }
  }

  awarding() {
    this.awardCard.award();
    this.stopAnimation = 1;
    this.biasAwardForY();
    if (this.awardCard.startX > 357) {
      this.biasAwardForXLeft();
    } else if (this.awardCard.startX < 355) {
      this.biasAwardForXRight();
    } else {
      this.drawStarBurst();
      this.awardCard.award();
      if (this.awardTimer === 60) {
        this.runBetweenLevel();
      } else {
        this.awardTimer++;
        requestAnimationFrame(this.awardingBind);
      }
    }
  }

  biasAwardForXLeft() {
    this.awardCard.startX -= (this.awardCard.startX - 357) / 10 + 1;
    requestAnimationFrame(this.awardingBind);
  }

  biasAwardForXRight() {
    this.awardCard.startX += (355 - this.awardCard.startX) / 10 + 1;
    requestAnimationFrame(this.awardingBind);
  }

  biasAwardForY() {
    if (this.awardCard.startY > 235) {
      this.awardCard.startY -= (this.awardCard.startY - 235) / 10;
    } else if (this.awardCard.startY < 237) {
      this.awardCard.startY += (237 - this.awardCard.startY) / 10 + 1;
    }
  }

  drawStarBurst() {
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].starburst, 107, 6);
  }

  runBetweenLevel() {
    this.gameEnd();
    const betweenLevel = new __WEBPACK_IMPORTED_MODULE_1__BetweenLevels__["a" /* BetweenLevels */](this.canvas, this.context, this.awardCard.packet, 3);
    betweenLevel.createPlayerWon();
    betweenLevel.playerWon();
  }

  zombieComing() {
    let positionToEndX;
    let positionToEndY;
    this.allUnitInTheMap.runLawnmowers();
    this.allUnitInTheMap.zombiesC.forEach((zombie, i, arrayOfZombie) => {
      this.allUnitInTheMap.checkLawnmowers(zombie);
      if (zombie.positionX < -100) {
        this.playerLose();
      }
      if (zombie.health < 1) {
        this.audioPlayer(this.zombyAudioFalling.zombyfalling1);
        this.allUnitInTheMap.zombiesDead(zombie, i, arrayOfZombie);
      } else if (zombie.burn) {
        this.allUnitInTheMap.zombiesBurn(zombie, i, arrayOfZombie);
      } else {
        if (this.allUnitInTheMap.plants.some((plant, i, arr) => {
          if (plant.positionX - 20 > zombie.positionX && plant.positionX - 90 < zombie.positionX && plant.positionY < zombie.positionY + 75 && plant.positionY > zombie.positionY + 65) {
            this.allUnitInTheMap.zombiesAttackPlants(plant, i, arr);
            this.audioPlayer(this.zombyAudioChomp.chomp);
            this.audioPlayer(this.zombyAudioChomp.chomp2);
            this.audioPlayer(this.zombyAudioChomp.chompSoft);
            return true;
          } else {
            return false;
          }
        })) {
          zombie.attack();
        } else {
          zombie.walk();
        }
      } //TODO over here
      if (this.allUnitInTheMap.zombies.length < 1 && arrayOfZombie.length < 1) {
        positionToEndX = zombie.positionX;
        positionToEndY = zombie.positionY;
      }
    });
    if (positionToEndY && positionToEndX) {
      this.levelEnd(positionToEndX, positionToEndY);
    }
  }

  levelEnd(pointX, pointY) {
    this.awardCard.createAwardPosition(pointX, pointY);
    this.levelUp = 1;
    this.levelComplete(pointX);
  }

  levelProgress() {
    if (this.checkComingZombie) {
      this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].levelTimeLine, 600, 555);
      this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].levelTimeLineProcess, 0, 0, this.levelTimeLinePosition + 18, 26, 758.55 - this.levelTimeLinePosition, 568, this.levelTimeLinePosition + 18, 26);
      if (this.levelTimeLinePosition < 131) {
        this.levelTimeLinePosition += 0.03;
      }
    }
  }

  drawPlant() {
    this.allUnitInTheMap.plants.forEach((plant, i, arr) => {
      plant.build();
      this.allUnitInTheMap.zombiesC.forEach(zombie => {
        this.allUnitInTheMap.plantsAttackZombies(plant, zombie, this.audioPlayer.bind(this, this.zombyAudioFalling.bonk));
        if (plant.name === __WEBPACK_IMPORTED_MODULE_6__plantsComponents_cherryBomb__["a" /* CherryBomb */] && plant.abilityTimer > 40) {
          this.allUnitInTheMap.cherryBombBurnsZombie(plant, zombie);
        }
      });
      if (plant.name === __WEBPACK_IMPORTED_MODULE_3__plantsComponents_sunflower__["a" /* Sunflower */]) {
        this.allUnitInTheMap.ifPlantSunflower(plant, this.suns);
      } else if (plant.name === __WEBPACK_IMPORTED_MODULE_6__plantsComponents_cherryBomb__["a" /* CherryBomb */]) {
        this.allUnitInTheMap.ifPlantCherryBomb(plant, i, arr);
      } else {
        plant.useOfAbility();
      }
    });
  }

  drawSun() {
    this.suns.forEach(sun => {
      sun.fall();
    });
  }

  choseSun() {
    // TODO AllUnitInTheMap.choseSun()
    this.chosenSuns.forEach((sun, i, arr) => {
      sun.chose();
      if (sun.startX < 10) {
        arr.splice(i, 1);
        this.numberOfSuns += 25;
      }
    });
  }

  startLevel() {
    this.canvas.addEventListener('click', this.toPlantBind);
    this.setZombieState();
  }

  toPlant(e) {
    if (this.allUnitInTheMap.seedPack.every(seed => !seed.chose)) {
      this.allUnitInTheMap.chosePlant(e, this.numberOfSuns, this.audioPlayer.bind(this, this.plantAudio.seedlift));
    } else {
      this.allUnitInTheMap.cancelChosePlantClick(e);
    }
  }

  choseSeedPack() {
    this.allUnitInTheMap.choseSeedPack(this.numberOfSuns);
  }

  createPlantLogo() {
    this.allUnitInTheMap.seedPack.forEach(seed => {
      if (seed.chose === 1) {
        this.allUnitInTheMap.createPlantLogo(seed, 0, 5, 50, 97);
        this.canvas.addEventListener('click', this.createPlantUnitBind);
      }
    });
  }

  createPlantUnit(e) {
    let plant;
    this.allUnitInTheMap.seedPack.forEach(seed => {
      if (seed.chose) {
        plant = new seed.name(this.context, this.allUnitInTheMap.positionToCreate.x, this.allUnitInTheMap.positionToCreate.y);
      }
    });
    if (plant) {
      this.allUnitInTheMap.createPlantUnit(e, plant);
      if (this.allUnitInTheMap.checkPlantBuild) {
        this.numberOfSuns -= plant.cost;
        this.audioPlayer(this.plantAudio.plant1);
        this.checkForSuns();
      }
      this.canvas.removeEventListener('click', this.createPlantUnitBind);
    }
    this.checkForZombie();
  }

  checkForSuns() {
    if (!this.firstPlant) {
      this.firstPlant = 1;
      this.fallOfSuns();
      this.canvas.addEventListener('click', this.receivingSunsBind);
    }
  }

  checkForZombie() {
    if (this.allUnitInTheMap.plants.length > 9 && !this.checkComingZombie) {
      this.checkComingZombie = 1;
      this.commingZombieTimer = 0;
      this.startComingZombie();
      this.audioPlayer(this.zombyAudioGroan.groan3);
      this.audioPlayer(this.zombyAudioGroan.groan5);
      this.audioPlayer(this.zombyAudioGroan.groan6);
    }
  }

  checkForComingZombie() {
    if (this.checkComingZombie && this.allUnitInTheMap.zombies.length > 0) {
      this.startComingZombie();
    }
  }

  startComingZombie() {
    this.allUnitInTheMap.startComingZombie(0, 4, 97, 30);
  }

  openFire() {
    if (this.openFireTimer === 90) {
      this.allUnitInTheMap.plants.forEach(plant => {
        if (this.allUnitInTheMap.zombiesC.some(zombie => zombie.positionX < 690 && zombie.positionX > plant.positionX - 35 && zombie.positionY + 75 > plant.positionY && zombie.positionY + 65 < plant.positionY && !zombie.burn)) {
          this.audioPlayer(this.plantAudio.firepea);
          const bullet = new __WEBPACK_IMPORTED_MODULE_5__plantsComponents_bulletNormal__["a" /* Bullet */](plant.positionX, plant.positionY);
          plant.positionOfBullet.push(bullet);
        }
      });
      this.openFireTimer = 0;
    } else {
      this.openFireTimer++;
    }
  }

  drawOpenFire() {
    if (this.allUnitInTheMap.plants.length > 0 && this.allUnitInTheMap.zombiesC.length) {
      this.openFire();
    }
  }

  fallOfSuns() {
    if (this.sunTimer < 300 && !this.levelUp) {
      this.sunTimer++;
    } else if (!this.levelUp) {
      const sun = new __WEBPACK_IMPORTED_MODULE_4__otherComponents_sun__["a" /* Sun */](this.context);
      sun.create();
      this.suns.push(sun);
      this.sunTimer = 0;
    }
    this.destroySuns();
  }

  drawFallOfSuns() {
    if (this.firstPlant) {
      this.fallOfSuns();
    }
  }

  destroySuns() {
    if (this.suns.length > 2 && this.sunDestroyTimer > 450) {
      this.suns.shift();
      this.sunDestroyTimer = 0;
    } else {
      this.sunDestroyTimer++;
    }
  }

  receivingSuns(e) {
    this.suns.forEach((sun, i, arr) => {
      if (e.layerX > sun.startX && e.layerX < sun.startX + 75 && e.layerY > sun.startY && e.layerY < sun.startY + 75) {
        this.chosenSuns.push(sun);
        this.sunAudioPoints.sunpoints.play();
        arr.splice(i, 1);
      }
    });
  }

  setRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  playerLose() {
    this.gameEnd();
    const betweenLevel = new __WEBPACK_IMPORTED_MODULE_1__BetweenLevels__["a" /* BetweenLevels */](this.canvas, this.context, this.awardCard.packet, 3);
    betweenLevel.createPlayerLose();
    betweenLevel.playerLose();
  }

  gameEnd() {
    this.stopLevel = 1;
    this.gameAudioStates.gameprocess.pause();
    this.canvas.removeEventListener('click', this.toPlantBind);
    this.canvas.removeEventListener('click', this.openMenuEventBind);
    this.canvas.removeEventListener('mousemove', this.checkOpenMenuEventBind);
  }

  showMenu() {
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].menuWindow, 188, 30);
    //this.context.drawImage(commonImages.restartButton, 230, 445);
    //this.context.drawImage(commonImages.quitButton, 397, 445);
    //this.context.drawImage(commonImages.sliderKnob, this.knobPositionX, this.knobPositionY);
    this.canvas.addEventListener('click', this.changeVolumeBind);
    this.canvas.addEventListener('click', this.openMenuRestartBind);
    this.canvas.addEventListener('click', this.openMenuQuitBind);
  }

  openMenuRestart(e) {
    if (this.outsideArea(e, 230, 390, 445, 500)) return;
    this.audioPlayer(this.buttonAudio.tap);
    this.audioPlayer(this.buttonAudio.tap2);
    this.audioPlayer(this.buttonAudio.bleep);
    this.restartDialogOpen = 1;
  }

  menuRestartDraw() {
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_17__menuComponents_resources__["a" /* resources */].get('img/dialog_window/quit_menu.png'), 170, 180, 450, 350);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].restart1, 325, 250);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].restart2, 205, 350);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].restartButton, 210, 460);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].cancelButton, 420, 460);
    this.canvas.removeEventListener('click', this.openMenuQuitBind);
    this.canvas.removeEventListener('click', this.changeVolumeBind);
  }

  openMenuQuit(e) {
    if (this.outsideArea(e, 397, 555, 445, 500)) return;
    this.audioPlayer(this.buttonAudio.tap);
    this.audioPlayer(this.buttonAudio.tap2);
    this.audioPlayer(this.buttonAudio.bleep);
    this.quitDialogOpen = 1;
  }

  menuQuitDraw() {
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_17__menuComponents_resources__["a" /* resources */].get('img/dialog_window/quit_menu.png'), 170, 180, 450, 350);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].quit1, 350, 250);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].quit2, 210, 350);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].quitButton, 210, 460);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].cancelButton, 420, 460);
    this.canvas.removeEventListener('click', this.openMenuRestartBind);
    this.canvas.removeEventListener('click', this.changeVolumeBind);
  }

  outsideArea(e, x1, x2, y1, y2) {
    let x = e.pageX - this.elemLeft,
        y = e.pageY - this.elemTop;
    return x < x1 || x > x2 || y < y1 || y > y2;
  }

  changeVolume(e) {
    if (this.outsideArea(e, 320, 460, 180, 230)) return;
    this.knobPositionX = e.pageX - this.elemLeft - 5;
    this.knobpositionY = e.pageY - this.elemTop - 5;
    if (this.knobPositionX <= 460 && this.knobPositionX > 420) {
      __WEBPACK_IMPORTED_MODULE_18__menuComponents_store__["a" /* store */].setVolume(0.5);
    } else if (this.knobPositionX <= 420 && this.knobPositionX > 380) {
      __WEBPACK_IMPORTED_MODULE_18__menuComponents_store__["a" /* store */].setVolume(0.3);
    } else if (this.knobPositionX <= 380 && this.knobPositionX > 340) {
      __WEBPACK_IMPORTED_MODULE_18__menuComponents_store__["a" /* store */].setVolume(0.2);
    } else if (this.knobPositionX <= 340 && this.knobPositionX > 320) {
      __WEBPACK_IMPORTED_MODULE_18__menuComponents_store__["a" /* store */].setVolume(0.1);
    } else if (this.knobPositionX <= 320) {
      __WEBPACK_IMPORTED_MODULE_18__menuComponents_store__["a" /* store */].setVolume(0);
    }
    this.gameAudioStates.gameprocess.volume = Number(__WEBPACK_IMPORTED_MODULE_18__menuComponents_store__["a" /* store */].getVolume());
  }

}



/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);
__webpack_require__(120);
module.exports = __webpack_require__(121);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_menuComponents_start_page__ = __webpack_require__(27);


function init() {
    const startgame = new __WEBPACK_IMPORTED_MODULE_0__components_menuComponents_start_page__["a" /* StartGame */]();
    document.querySelector('#start-button').addEventListener('click', startgame.onLoadResources.bind(startgame), false);
}
init();

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resources__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_page__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audioComponents_audioButton__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__audioComponents_audioGameState__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__audioComponents_audioPlayer__ = __webpack_require__(5);







class StartGame {
    constructor() {
        this.ctx = start.getContext('2d');
        this.gameAudioStates = __WEBPACK_IMPORTED_MODULE_3__audioComponents_audioGameState__["a" /* gameAudioStates */];
        this.buttonAudio = __WEBPACK_IMPORTED_MODULE_2__audioComponents_audioButton__["a" /* buttonAudio */];
        this.audioPlayer = __WEBPACK_IMPORTED_MODULE_5__audioComponents_audioPlayer__["a" /* audioPlayer */];
    }

    enableEvents() {
        this.event_goToMenu = this.onGoToMenu.bind(this);
        start.addEventListener('click', this.event_goToMenu, false);
        this.event_changeText = this.changeTextColor.bind(this);
        start.addEventListener('mousemove', this.event_changeText, false);
    }

    disableEvents() {
        start.removeEventListener('click', this.event_goToMenu, false);
        start.removeEventListener('mousemove', this.event_changeText, false);
    }

    onLoadResources() {
        this.enableEvents();
        if (__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].isReady()) {
            this.renderPage();
        }
        __WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].load(['img/start_page/start_grass_button.png', 'img/start_page/titlescreen.png', 'img/start_page/pvz_logo.png', 'img/menu_backgrounds/level_1_background.png', 'img/menu_backgrounds/level_2_background.png', 'img/dialog_window/quit_menu.png', 'img/dialog_window/button.png', 'img/menu_backgrounds/level_1_light.png', 'img/dialog_window/quit_menu.png', 'img/dialog_window/button.png', 'img/dialog_window/quit_text_1.png', 'img/dialog_window/quit_text_2.png', 'img/dialog_window/quit_button.png', 'img/dialog_window/cancel_button.png', 'img/dialog_window/ok_button.png', 'img/dialog_window/please.png', 'img/dialog_window/enter_name.png', 'img/menu_backgrounds/quit_flowers.png', 'img/menu_backgrounds/level_2_light.png', 'img/zomby_hand/sprite_zomby_hand.png', 'img/start_page/writting_white.png', 'img/start_page/writting_red.png']);
        __WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].onReady(this.renderPage.bind(this));
        document.querySelector('#start-button').classList.add('not-display');
        document.querySelector('#canvas-container').classList.remove('not-display');
        document.querySelector('#landing-information').classList.add('not-display');
        document.querySelector('.body-landing').classList.add('body-in-game');
        document.querySelector('.body-landing').classList.remove('body-landing');
        start.width = 800;
        start.height = 600;
    }

    renderPage() {
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/start_page/titlescreen.png'), 0, 0, 800, 600);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/start_page/pvz_logo.png'), 80, 50, 600, 100);
    }

    changeTextColor(event) {
        if (event.layerX >= 200 && event.layerX <= 590 && event.layerY >= 510 && event.layerY <= 563) {
            this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/start_page/start_grass_button.png'), 200, 500, 400, 80);
            this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/start_page/writting_red.png'), 300, 540);
        } else {
            this.renderPage();
            this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/start_page/start_grass_button.png'), 200, 500, 400, 80);
            this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/start_page/writting_white.png'), 300, 540);
        }
    }

    outsideArea(event, x1, x2, y1, y2) {
        let x = event.pageX - this.elemLeft,
            y = event.pageY - this.elemTop;
        return x < x1 || x > x2 || y < y1 || y > y2;
    }

    onGoToMenu(event) {
        if (this.outsideArea(event, 200, 590, 510, 563)) return;
        __WEBPACK_IMPORTED_MODULE_4__store__["a" /* store */].setVolume(0.5);
        this.gameAudioStates.menupage.loop = true;
        this.audioPlayer(this.gameAudioStates.menupage);
        this.disableEvents();
        this.menupage = new __WEBPACK_IMPORTED_MODULE_1__menu_page__["a" /* MenuPage */]();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StartGame;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resources__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_page__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audioComponents_audioButton__ = __webpack_require__(3);




class QuitMenu {

    constructor() {
        this.elemLeft = start.offsetLeft;
        this.elemTop = start.offsetTop;
        this.ctx = start.getContext('2d');
        this.buttonX;
        this.buttonY;
        this.renderPage();
        this.enableEvents();
    }

    enableEvents() {
        this.event_quitDown = this.onQuitDown.bind(this);
        start.addEventListener('mousedown', this.event_quitDown, false);
        this.event_quitUp = this.onQuitUp.bind(this);
        start.addEventListener('mouseup', this.event_quitUp, false);

        this.event_cancelDown = this.onCancelDown.bind(this);
        start.addEventListener('mousedown', this.event_cancelDown, false);
        this.event_cancelUp = this.onCancelUp.bind(this);
        start.addEventListener('mouseup', this.event_cancelUp, false);
    }

    disableEvents() {
        start.removeEventListener('mousedown', this.event_quitDown, false);
        start.removeEventListener('mouseup', this.event_quitUp, false);
        start.removeEventListener('mousedown', this.event_cancelDown, false);
        start.removeEventListener('mouseup', this.event_cancelUp, false);
    }

    outsideArea(event, x1, x2, y1, y2) {
        let x = event.pageX - this.elemLeft,
            y = event.pageY - this.elemTop;
        return x < x1 || x > x2 || y < y1 || y > y2;
    }

    renderPage() {
        let ctx = this.ctx;
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/button.png'), 290, 420, 90, 45);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/button.png'), 460, 420, 90, 45);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_text_1.png'), 375, 250, 80, 40);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_text_2.png'), 260, 330, 330, 30);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_button.png'), 310, 430, 50, 25);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/cancel_button.png'), 468, 427, 70, 25);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/menu_backgrounds/quit_flowers.png'), 697, 445, 93, 108);
    }

    onQuitDown(event) {
        if (this.outsideArea(event, 290, 380, 420, 465)) return;
        __WEBPACK_IMPORTED_MODULE_2__audioComponents_audioButton__["a" /* buttonAudio */].tap.volume = 0.5;
        __WEBPACK_IMPORTED_MODULE_2__audioComponents_audioButton__["a" /* buttonAudio */].tap.play();
        __WEBPACK_IMPORTED_MODULE_2__audioComponents_audioButton__["a" /* buttonAudio */].tap2.volume = 0.5;
        __WEBPACK_IMPORTED_MODULE_2__audioComponents_audioButton__["a" /* buttonAudio */].tap2.play();
        __WEBPACK_IMPORTED_MODULE_2__audioComponents_audioButton__["a" /* buttonAudio */].bleep.volume = 0.5;
        __WEBPACK_IMPORTED_MODULE_2__audioComponents_audioButton__["a" /* buttonAudio */].bleep.play();
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/button.png'), 293, 417, 90, 45);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/button.png'), 460, 420, 90, 45);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_text_1.png'), 375, 250, 80, 40);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_text_2.png'), 260, 330, 330, 30);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_button.png'), 313, 427, 50, 25);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/cancel_button.png'), 468, 427, 70, 25);
    }

    onCancelDown(event) {
        if (this.outsideArea(event, 460, 550, 420, 465)) return;
        __WEBPACK_IMPORTED_MODULE_2__audioComponents_audioButton__["a" /* buttonAudio */].tap.volume = 0.5;
        __WEBPACK_IMPORTED_MODULE_2__audioComponents_audioButton__["a" /* buttonAudio */].tap.play();
        __WEBPACK_IMPORTED_MODULE_2__audioComponents_audioButton__["a" /* buttonAudio */].tap2.volume = 0.5;
        __WEBPACK_IMPORTED_MODULE_2__audioComponents_audioButton__["a" /* buttonAudio */].tap2.play();
        __WEBPACK_IMPORTED_MODULE_2__audioComponents_audioButton__["a" /* buttonAudio */].bleep.volume = 0.5;
        __WEBPACK_IMPORTED_MODULE_2__audioComponents_audioButton__["a" /* buttonAudio */].bleep.play();
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/button.png'), 290, 420, 90, 45);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/button.png'), 463, 417, 90, 45);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_text_1.png'), 375, 250, 80, 40);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_text_2.png'), 260, 330, 330, 30);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_button.png'), 310, 430, 50, 25);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/cancel_button.png'), 471, 424, 70, 25);
    }

    effectButtonUp() {
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/button.png'), 293, 417, 90, 45);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/button.png'), 460, 420, 90, 45);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_text_1.png'), 375, 250, 80, 40);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_text_2.png'), 260, 330, 330, 30);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_button.png'), 310, 430, 50, 25);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/cancel_button.png'), 465, 425, 70, 25);
    }

    onQuitUp(event) {
        if (this.outsideArea(event, 290, 380, 420, 465)) return;
        this.effectButtonUp();
        this.disableEvents();
        document.querySelector('#canvas-container').classList.add('not-display');
        document.querySelector('#start-button').classList.remove('not-display');
    }

    onCancelUp(event) {
        if (this.outsideArea(event, 460, 550, 420, 465)) return;
        this.effectButtonUp();
        this.disableEvents();
        let x = new __WEBPACK_IMPORTED_MODULE_1__menu_page__["a" /* MenuPage */]();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = QuitMenu;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/buttonclick.ogg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/tap.ogg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/tap2.ogg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/bleep.ogg";

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resources__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_page__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__audioComponents_audioButton__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__audioComponents_audioPlayer__ = __webpack_require__(5);






class PlayerMenu {

    constructor() {
        this.elemLeft = start.offsetLeft;
        this.elemTop = start.offsetTop;
        this.ctx = start.getContext('2d');
        this.enableEvents();
        this.hasInput = false;
        this.input;
        this.buttonAudio = __WEBPACK_IMPORTED_MODULE_3__audioComponents_audioButton__["a" /* buttonAudio */];
        this.renderPage();
        this.enableEvents();
        this.audioPlayer = __WEBPACK_IMPORTED_MODULE_4__audioComponents_audioPlayer__["a" /* audioPlayer */];
        this.buttonAudio = __WEBPACK_IMPORTED_MODULE_3__audioComponents_audioButton__["a" /* buttonAudio */];
    }

    enableEvents() {
        this.event_okDown = this.onOkDown.bind(this);
        start.addEventListener('mousedown', this.event_okDown, false);
        this.event_okUp = this.onOkUp.bind(this);
        start.addEventListener('mouseup', this.event_okUp, false);
        this.event_cancelDown = this.onCancelDown.bind(this);
        start.addEventListener('mousedown', this.event_cancelDown, false);
        this.event_cancelUp = this.onCancelUp.bind(this);
        start.addEventListener('mouseup', this.event_cancelUp, false);
    }

    disableEvents() {
        start.removeEventListener('mousedown', this.event_okDown, false);
        start.removeEventListener('mouseup', this.event_okUp, false);
        start.removeEventListener('mousedown', this.event_cancelDown, false);
        start.removeEventListener('mouseup', this.event_cancelUp, false);
    }

    outsideArea(event, x1, x2, y1, y2) {
        let x = event.pageX - this.elemLeft,
            y = event.pageY - this.elemTop;
        return x < x1 || x > x2 || y < y1 || y > y2;
    }

    renderPage() {
        let ctx = this.ctx;
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/button.png'), 290, 420, 90, 45);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/please.png'), 370, 240, 120, 35);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/enter_name.png'), 310, 360, 220, 30);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/button.png'), 460, 420, 90, 45);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/cancel_button.png'), 468, 427, 70, 25);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/ok_button.png'), 320, 430, 25, 20);
        this.addInput();
    }

    addInput() {
        let input = document.createElement('input');
        input.type = 'text';
        input.style.position = 'absolute';
        input.style.color = 'white';
        input.style.left = this.elemLeft + 330 + 'px';
        input.style.top = this.elemTop + 300 + 'px';
        this.input = input;
        document.body.appendChild(input);
        input.focus();
    }

    onOkDown(event) {
        if (this.outsideArea(event, 290, 380, 420, 465)) return;
        this.buttonX = 290;
        this.buttonY = 420;
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/button.png'), 293, 417, 90, 45);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/button.png'), 460, 420, 90, 45);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/please.png'), 370, 240, 120, 35);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/enter_name.png'), 310, 365, 220, 30);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/ok_button.png'), 323, 427, 25, 20);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/cancel_button.png'), 468, 427, 70, 25);
    }

    onCancelDown(event) {
        if (this.outsideArea(event, 460, 550, 420, 465)) return;
        this.audioPlayer(this.buttonAudio.tap);
        this.audioPlayer(this.buttonAudio.tap2);
        this.audioPlayer(this.buttonAudio.bleep);
        this.buttonX = 460;
        this.buttonY = 420;
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/button.png'), 290, 420, 90, 45);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/button.png'), 463, 417, 90, 45);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/please.png'), 370, 240, 120, 35);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/enter_name.png'), 310, 365, 220, 30);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/ok_button.png'), 320, 430, 25, 20);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/cancel_button.png'), 471, 424, 70, 25);
    }

    effectButtonUp() {
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/quit_menu.png'), 220, 180, 400, 300);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/button.png'), 293, 417, 90, 45);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/button.png'), 460, 420, 90, 45);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/please.png'), 370, 240, 120, 35);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/enter_name.png'), 310, 365, 220, 30);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/ok_button.png'), 320, 430, 25, 20);
        this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get('img/dialog_window/cancel_button.png'), 465, 425, 70, 25);
    }

    onOkUp(event) {
        if (this.outsideArea(event, 290, 380, 420, 465)) return;
        this.audioPlayer(this.buttonAudio.tap);
        this.audioPlayer(this.buttonAudio.tap2);
        this.audioPlayer(this.buttonAudio.bleep);
        this.effectButtonUp();
        __WEBPACK_IMPORTED_MODULE_1__store__["a" /* store */].setPlayer(this.input.value);
        document.body.removeChild(this.input);
        this.disableEvents();
        let x = new __WEBPACK_IMPORTED_MODULE_2__menu_page__["a" /* MenuPage */]();
    }

    onCancelUp(event) {
        if (this.outsideArea(event, 460, 550, 420, 465)) return;
        this.effectButtonUp();
        document.body.removeChild(this.input);
        this.disableEvents();
        let x = new __WEBPACK_IMPORTED_MODULE_2__menu_page__["a" /* MenuPage */]();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlayerMenu;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resources__ = __webpack_require__(1);


class Sprite {
    constructor(url, pos, size, speed, frames, dir, once) {
        this.pos = pos;
        this.size = size;
        this.speed = typeof speed === 'number' ? speed : 0;
        this.frames = frames;
        this._index = 0;
        this.url = url;
        this.dir = dir || 'horizontal';
        this.once = once;
    }

    update(dt) {
        this._index += this.speed * dt;
    }

    update_progress(progress) {
        this._index = this.frames.length * progress;
    }

    render(ctx) {
        let frame;

        if (this.speed > 0) {
            let max = this.frames.length;
            let idx = Math.floor(this._index);
            frame = this.frames[idx % max];

            if (this.once && idx >= max) {
                this.done = true;
                return;
            }
        } else {
            frame = 0;
        }

        let x = this.pos[0];
        let y = this.pos[1];

        if (this.dir == 'vertical') {
            y += frame * this.size[1];
        } else {
            x += frame * this.size[0];
        }

        ctx.drawImage(__WEBPACK_IMPORTED_MODULE_0__resources__["a" /* resources */].get(this.url), x, y, this.size[0], this.size[1], 150, 200, this.size[0], this.size[1]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sprite;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_1_level_1__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_1_level_2__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_1_level_3__ = __webpack_require__(24);




class GameComponents {
    constructor(canvas, currentLevel, currentLocation) {
        this.canvas = canvas;
        this.currentLevel = currentLevel;
        this.currentLocation = currentLocation;
        this.levelComplite = 0;
    }

    preparationLevel() {
        let level;
        if (this.currentLevel === '1') {
            level = new __WEBPACK_IMPORTED_MODULE_0__location_1_level_1__["a" /* LevelOne */](this.canvas);
        } else if (this.currentLevel === '2') {
            level = new __WEBPACK_IMPORTED_MODULE_1__location_1_level_2__["a" /* LevelTwo */](this.canvas);
        } else if (this.currentLevel === '3') {
            level = new __WEBPACK_IMPORTED_MODULE_2__location_1_level_3__["a" /* LevelThree */](this.canvas);
        }
        const startGame = level.startGame.bind(level);
        startGame();
    }

}


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelOne; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BetweenLevels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plantsComponents_sunflower__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__otherComponents_sun__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plantsComponents_bulletNormal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AllUnitInTheMap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__audioComponents_audioButton__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__audioComponents_audioGameState__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__audioComponents_audioZombyWave__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__audioComponents_audioZombyGroan__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__audioComponents_audioZombyChomp__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__audioComponents_audioZombyFalling__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__audioComponents_audioSunPoints__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__audioComponents_audioPlants__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__menuComponents_resources__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__menuComponents_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__audioComponents_audioPlayer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__menuComponents_menu_page__ = __webpack_require__(8);




















class LevelOne {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.backgroundPositionX = 0;
    this.animationPositionX = 0;
    this.numberOfSuns = 150;
    this.toPlantBind = null;
    this.receivingSunsBind = null;
    this.drawElementsBind = null;
    this.drawGardenBind = null;
    this.createPlantUnitBind = null;
    this.awardingBind = null;
    this.awardingEventBind = null;
    this.openMenuRestartBind = null;
    this.openMenuQuitBind = null;
    this.changeVolumeBind = null;
    this.goToMenuOfGameBind = null;
    this.levelTimeLinePosition = 0;
    this.suns = [];
    this.firstPlant = 0;
    this.chosenSuns = [];
    this.checkComingZombie = 0;
    this.levelUp = 0;
    this.stopLevel = 0;
    this.once = 0;
    this.stopAnimation = 0;
    this.menu = __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].menu;
    this.menuOpen = 0;
    this.frameWaiting = 0;
    this.commingZombieTimer = 0;
    this.sunTimer = 0;
    this.sunDestroyTimer = 0;
    this.openFireTimer = 0;
    this.awardTimer = 0;
    this.awardCard = null;
    this.allUnitInTheMap = null;
    this.buttonAudio = __WEBPACK_IMPORTED_MODULE_7__audioComponents_audioButton__["a" /* buttonAudio */];
    this.gameAudioStates = __WEBPACK_IMPORTED_MODULE_8__audioComponents_audioGameState__["a" /* gameAudioStates */];
    this.zombyAudioWave = __WEBPACK_IMPORTED_MODULE_9__audioComponents_audioZombyWave__["a" /* zombyAudioWave */];
    this.zombyAudioGroan = __WEBPACK_IMPORTED_MODULE_10__audioComponents_audioZombyGroan__["a" /* zombyAudioGroan */];
    this.zombyAudioChomp = __WEBPACK_IMPORTED_MODULE_11__audioComponents_audioZombyChomp__["a" /* zombyAudioChomp */];
    this.zombyAudioFalling = __WEBPACK_IMPORTED_MODULE_12__audioComponents_audioZombyFalling__["a" /* zombyAudioFalling */];
    this.sunAudioPoints = __WEBPACK_IMPORTED_MODULE_13__audioComponents_audioSunPoints__["a" /* sunAudioPoints */];
    this.plantAudio = __WEBPACK_IMPORTED_MODULE_14__audioComponents_audioPlants__["a" /* plantAudio */];
    this.elemLeft = this.canvas.offsetLeft;
    this.elemTop = this.canvas.offsetTop;
    this.audioPlayer = __WEBPACK_IMPORTED_MODULE_17__audioComponents_audioPlayer__["a" /* audioPlayer */];
  }

  startGame() {
    this.setFontProperties();
    this.setAudioProperties();
    this.setAwardCard();
    this.createAllUnitInTheMapObject();
    this.setThisForCallbackFunctions();
    this.createZombie();
    this.sortZombieView();
    this.createSeedPack();
    this.createLawnmowers();
  }

  setFontProperties() {
    this.context.font = '24px Arial';
    this.context.textAlign = 'center';
    this.context.fillStyle = '#000';
  }

  setAudioProperties() {
    this.audioPlayer(this.gameAudioStates.gameprocess);
    this.gameAudioStates.gameprocess.loop = true;
  }

  setAwardCard() {
    this.awardCard = new __WEBPACK_IMPORTED_MODULE_3__plantsComponents_sunflower__["a" /* Sunflower */](this.context);
    this.awardCard.init();
  }

  createAllUnitInTheMapObject() {
    this.allUnitInTheMap = new __WEBPACK_IMPORTED_MODULE_6__AllUnitInTheMap__["a" /* AllUnitInTheMap */](this.canvas, this.context, 1);
  }

  setThisForCallbackFunctions() {
    this.toPlantBind = this.toPlant.bind(this);
    this.receivingSunsBind = this.receivingSuns.bind(this);
    this.drawElementsBind = this.drawElements.bind(this);
    this.drawGardenBind = this.drawGarden.bind(this);
    this.createPlantUnitBind = this.createPlantUnit.bind(this);
    this.awardingBind = this.awarding.bind(this);
    this.awardingEventBind = this.awardingEvent.bind(this);
    this.openMenuRestartBind = this.openMenuRestart.bind(this);
    this.openMenuQuitBind = this.openMenuQuit.bind(this);
    this.changeVolumeBind = this.changeVolume.bind(this);
    this.goToMenuOfGameBind = this.goToMenuOfGame.bind(this);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundOne, 0, 0);
    this.checkOpenMenuEventBind = this.checkOpenMenuEvent.bind(this);
    this.openMenuEventBind = this.openMenuEvent.bind(this);
    requestAnimationFrame(this.levelOverview.bind(this));
  }

  createLawnmowers() {
    this.allUnitInTheMap.createLawnmowers(245, 97);
  }

  drawLawnmowers() {
    this.allUnitInTheMap.drawLawnmowers();
  }

  createSeedPack() {
    this.allUnitInTheMap.createSeedPack();
  }

  drawSeedPack() {
    this.allUnitInTheMap.drawSeedPack();
  }

  createZombie() {
    this.allUnitInTheMap.createZombie();
  }

  setZombieState() {
    this.allUnitInTheMap.setZombieState(this.setRandom);
  }

  sortZombieView() {
    this.allUnitInTheMap.sortZombieView();
  }

  levelOverview() {
    if (this.backgroundPositionX > -600) {
      this.backgroundPositionX -= 10;
    } else {
      this.frameWaiting++;
    }
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundOne, this.backgroundPositionX, 0);
    if (this.backgroundPositionX < -320) {
      this.allUnitInTheMap.levelOverview(this.frameWaiting);
    }
    if (this.frameWaiting === 120) {
      requestAnimationFrame(this.returnOnGarden.bind(this, __WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundOne));
    } else {
      requestAnimationFrame(this.levelOverview.bind(this, __WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundOne));
    }
  }

  returnOnGarden() {
    this.backgroundPositionX += 10;
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundOne, this.backgroundPositionX, 0);
    if (this.backgroundPositionX < -220) {
      this.allUnitInTheMap.returnOnGarden();
      requestAnimationFrame(this.returnOnGarden.bind(this, __WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundOne));
    } else {
      requestAnimationFrame(this.drawGardenBind);
    }
  }

  drawGarden() {
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundTwo, 0, 0, this.animationPositionX, 600, -220, 0, this.animationPositionX, 600);
    if (this.animationPositionX < 1390) {
      this.animationPositionX += 10;
      requestAnimationFrame(this.drawGardenBind);
    } else {
      requestAnimationFrame(this.drawElementsBind);
      this.gameAudioStates.gameprocess.play();
      this.startLevel();
      this.checkOpenMenu();
      this.openMenu();
    }
  }

  checkOpenMenu() {
    this.canvas.addEventListener('mousemove', this.checkOpenMenuEventBind);
  }

  checkOpenMenuEvent(e) {
    if (e.layerX > 660 && e.layerX < 770 && e.layerY > 0 && e.layerY < 28) {
      this.menu = __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].menuHover;
    } else {
      this.menu = __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].menu;
    }
  }

  openMenu() {
    this.canvas.addEventListener('click', this.openMenuEventBind);
  }

  openMenuEvent() {
    if (this.menu === __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].menuHover) {
      if (this.menuOpen) {
        this.menuOpen = 0;
        this.stopLevel = 0;
        this.gameAudioStates.gameprocess.play();
        requestAnimationFrame(this.drawElementsBind);
      } else {
        this.gameAudioStates.gameprocess.pause();
        this.stopLevel = 1;
        this.menuOpen = 1;
      }
    }
  }

  drawElements() {
    this.drawCommonElements();
    this.drawPlantElements();
    this.drawSunElements();
    this.drawZombieElements();
    this.drawOtherElements();
  }

  drawCommonElements() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_levelImages__["a" /* levelImages */].backgroundTwo, 0, 0, this.animationPositionX, 600, -220, 0, this.animationPositionX, 600);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].seedBank, 10, 0);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].sunBank, 10, 0);
    this.context.fillText(`${this.numberOfSuns}`, 48.5, 80);
    this.context.drawImage(this.menu, 660, -5);
  }

  drawPlantElements() {
    this.drawLawnmowers();
    this.drawSeedPack();
    this.choseSeedPack();
    this.drawPlant();
    this.drawOpenFire();
  }

  drawSunElements() {
    this.drawSun();
    this.drawFallOfSuns();
    this.choseSun();
  }

  drawZombieElements() {
    this.checkForComingZombie();
    this.levelProgress();
    this.zombieComing();
    this.createPlantLogo();
  }

  drawOtherElements() {
    //this.showMenu();
    this.checkLevelComplete();
    this.checkAnimation();
  }

  checkAnimation() {
    if (!this.stopLevel) {
      requestAnimationFrame(this.drawElementsBind);
    }
  }

  checkLevelComplete() {
    if (this.levelUp && !this.stopAnimation) {
      this.levelComplete();
    }
  }

  levelComplete() {
    this.awardCard.award();
    if (!this.once) {
      this.once = 1;
      this.canvas.addEventListener('click', this.awardingEventBind);
    }
  }

  awardingEvent(e) {
    if (e.layerX > this.awardCard.startX && e.layerX < this.awardCard.startX + 50 && e.layerY > this.awardCard.endY + 40 && e.layerY < this.awardCard.endY + 120) {
      this.awarding();
      this.canvas.removeEventListener('click', this.awardingEventBind);
    }
  }

  awarding() {
    this.awardCard.award();
    this.stopAnimation = 1;
    this.biasAwardForY();
    if (this.awardCard.startX > 376) {
      this.biasAwardForXLeft();
    } else if (this.awardCard.startX < 374) {
      this.biasAwardForXRight();
    } else {
      this.drawStarBurst();
      this.awardCard.award();
      if (this.awardTimer === 60) {
        this.runBetweenLevel();
      } else {
        this.awardTimer++;
        requestAnimationFrame(this.awardingBind);
      }
    }
  }

  biasAwardForXLeft() {
    this.awardCard.startX -= (this.awardCard.startX - 376) / 10 + 1;
    requestAnimationFrame(this.awardingBind);
  }

  biasAwardForXRight() {
    this.awardCard.startX += (374 - this.awardCard.startX) / 10 + 1;
    requestAnimationFrame(this.awardingBind);
  }

  biasAwardForY() {
    if (this.awardCard.startY > 226) {
      this.awardCard.startY -= (this.awardCard.startY - 226) / 10;
    } else if (this.awardCard.startY < 224) {
      this.awardCard.startY += (224 - this.awardCard.startY) / 10 + 1;
    }
  }

  drawStarBurst() {
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].starburst, 107, 6);
  }

  runBetweenLevel() {
    this.gameEnd();
    const betweenLevel = new __WEBPACK_IMPORTED_MODULE_1__BetweenLevels__["a" /* BetweenLevels */](this.canvas, this.context, this.awardCard.packet, 1);
    betweenLevel.create();
    betweenLevel.start();
  }

  zombieComing() {
    let positionToEndX;
    let positionToEndY;

    this.allUnitInTheMap.runLawnmowers();
    this.allUnitInTheMap.zombiesC.forEach((zombie, i, arrayOfZombie) => {
      this.allUnitInTheMap.checkLawnmowers(zombie);
      if (zombie.positionX < -100) {
        this.playerLose();
      }
      if (zombie.health < 1) {
        this.zombyAudioFalling.zombyfalling1.play();
        this.audioPlayer(this.zombyAudioFalling.zombyfalling1);
        this.allUnitInTheMap.zombiesDead(zombie, i, arrayOfZombie);
      } else if (zombie.burn) {
        this.allUnitInTheMap.zombiesBurn(zombie, i, arrayOfZombie);
      } else {
        if (this.allUnitInTheMap.plants.some((plant, i, arr) => {
          if (plant.positionX - 20 > zombie.positionX && plant.positionX - 90 < zombie.positionX && plant.positionY < zombie.positionY + 75 && plant.positionY > zombie.positionY + 65) {
            this.allUnitInTheMap.zombiesAttackPlants(plant, i, arr);
            this.audioPlayer(this.zombyAudioChomp.chomp);
            this.audioPlayer(this.zombyAudioChomp.chomp2);
            this.audioPlayer(this.zombyAudioChomp.chompSoft);
            return true;
          } else {
            return false;
          }
        })) {
          zombie.attack();
        } else {
          zombie.walk();
        }
      }
      if (this.allUnitInTheMap.zombies.length < 1 && arrayOfZombie.length < 1) {
        positionToEndX = zombie.positionX;
        positionToEndY = zombie.positionY;
      }
    });
    if (positionToEndY && positionToEndX) {
      this.levelEnd(positionToEndX, positionToEndY);
    }
  }

  levelEnd(pointX, pointY) {
    this.gameAudioStates.gameprocess.pause();
    this.awardCard.createAwardPosition(pointX, pointY);
    this.levelUp = 1;
    this.levelComplete(pointX);
  }

  levelProgress() {
    if (this.checkComingZombie) {
      this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].levelTimeLine, 600, 555);
      this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].levelTimeLineProcess, 0, 0, this.levelTimeLinePosition + 18, 26, 758.55 - this.levelTimeLinePosition, 568, this.levelTimeLinePosition + 18, 26);
      if (this.levelTimeLinePosition < 131) {
        this.levelTimeLinePosition += 0.03;
      }
    }
  }

  drawPlant() {
    this.allUnitInTheMap.plants.forEach((plant, i, arr) => {
      plant.build();
      this.allUnitInTheMap.zombiesC.forEach(zombie => {
        this.allUnitInTheMap.plantsAttackZombies(plant, zombie, this.audioPlayer.bind(this, this.zombyAudioFalling.bonk));
      });
      if (plant.name === __WEBPACK_IMPORTED_MODULE_3__plantsComponents_sunflower__["a" /* Sunflower */]) {
        this.allUnitInTheMap.ifPlantSunflower(plant, this.suns);
      } else {
        plant.useOfAbility();
      }
    });
  }

  drawSun() {
    this.suns.forEach(sun => {
      sun.fall();
    });
  }

  choseSun() {
    // TODO AllUnitInTheMap.choseSun()
    this.chosenSuns.forEach((sun, i, arr) => {
      sun.chose();
      if (sun.startX < 10) {
        arr.splice(i, 1);
        this.numberOfSuns += 25;
      }
    });
  }

  startLevel() {
    this.canvas.addEventListener('click', this.toPlantBind);
    this.setZombieState();
  }

  toPlant(e) {
    if (this.allUnitInTheMap.seedPack.every(seed => !seed.chose)) {
      this.allUnitInTheMap.chosePlant(e, this.numberOfSuns, this.audioPlayer.bind(this, this.plantAudio.seedlift));
    } else {
      this.allUnitInTheMap.cancelChosePlantClick(e);
    }
  }

  choseSeedPack() {
    this.allUnitInTheMap.choseSeedPack(this.numberOfSuns);
  }

  createPlantLogo() {
    this.allUnitInTheMap.seedPack.forEach(seed => {
      if (seed.chose === 1) {
        this.allUnitInTheMap.createPlantLogo(seed, 0, 1, 215, 105);
        this.canvas.addEventListener('click', this.createPlantUnitBind);
      }
    });
  }

  createPlantUnit(e) {
    let plant;
    this.allUnitInTheMap.seedPack.forEach(seed => {
      if (seed.chose) {
        plant = new seed.name(this.context, this.allUnitInTheMap.positionToCreate.x, this.allUnitInTheMap.positionToCreate.y);
      }
    });
    if (plant) {
      this.allUnitInTheMap.createPlantUnit(e, plant);
      if (this.allUnitInTheMap.checkPlantBuild) {
        this.numberOfSuns -= plant.cost;
        this.audioPlayer(this.plantAudio.plant1);
        this.checkForSuns();
      }
      this.canvas.removeEventListener('click', this.createPlantUnitBind);
    }
    this.checkForZombie();
  }

  checkForSuns() {
    if (!this.firstPlant) {
      this.firstPlant = 1;
      this.fallOfSuns();
      this.canvas.addEventListener('click', this.receivingSunsBind);
    }
  }

  checkForZombie() {
    if (this.allUnitInTheMap.plants.length > 1 && !this.checkComingZombie) {
      this.checkComingZombie = 1;
      this.commingZombieTimer = 0;
      this.startComingZombie();
      this.audioPlayer(this.zombyAudioGroan.groan3);
      this.audioPlayer(this.zombyAudioGroan.groan5);
      this.audioPlayer(this.zombyAudioGroan.groan6);
    }
  }

  checkForComingZombie() {
    if (this.checkComingZombie && this.allUnitInTheMap.zombies.length > 0) {
      this.startComingZombie();
    }
  }

  startComingZombie() {
    this.allUnitInTheMap.startComingZombie(0, 0, 97, 195);
  }

  openFire() {
    if (this.openFireTimer === 90) {
      this.allUnitInTheMap.plants.forEach(plant => {
        if (this.allUnitInTheMap.zombiesC.some(zombie => zombie.positionX < 690 && zombie.positionX > plant.positionX - 35 && zombie.positionY + 75 > plant.positionY && zombie.positionY + 65 < plant.positionY && !zombie.burn)) {
          this.audioPlayer(this.plantAudio.firepea);
          const bullet = new __WEBPACK_IMPORTED_MODULE_5__plantsComponents_bulletNormal__["a" /* Bullet */](plant.positionX, plant.positionY);
          plant.positionOfBullet.push(bullet);
        }
      });
      this.openFireTimer = 0;
    } else {
      this.openFireTimer++;
    }
  }

  drawOpenFire() {
    if (this.allUnitInTheMap.plants.length > 0 && this.allUnitInTheMap.zombiesC.length) {
      this.openFire();
    }
  }

  fallOfSuns() {
    if (this.sunTimer < 300 && !this.levelUp) {
      this.sunTimer++;
    } else if (!this.levelUp) {
      const sun = new __WEBPACK_IMPORTED_MODULE_4__otherComponents_sun__["a" /* Sun */](this.context);
      sun.create();
      this.suns.push(sun);
      this.sunTimer = 0;
    }
    this.destroySuns();
  }

  drawFallOfSuns() {
    if (this.firstPlant) {
      this.fallOfSuns();
    }
  }

  destroySuns() {
    if (this.suns.length > 2 && this.sunDestroyTimer > 450) {
      this.suns.shift();
      this.sunDestroyTimer = 0;
    } else {
      this.sunDestroyTimer++;
    }
  }

  receivingSuns(e) {
    this.suns.forEach((sun, i, arr) => {
      if (e.layerX > sun.startX && e.layerX < sun.startX + 75 && e.layerY > sun.startY && e.layerY < sun.startY + 75) {
        this.sunAudioPoints.sunpoints.play();
        this.chosenSuns.push(sun);
        arr.splice(i, 1);
      }
    });
  }

  setRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  playerLose() {
    this.gameEnd();
    const betweenLevel = new __WEBPACK_IMPORTED_MODULE_1__BetweenLevels__["a" /* BetweenLevels */](this.canvas, this.context, this.awardCard.packet, 1);
    betweenLevel.createPlayerLose();
    betweenLevel.playerLose();
  }

  gameEnd() {
    this.stopLevel = 1;
    this.gameAudioStates.gameprocess.pause();
    this.canvas.removeEventListener('click', this.toPlantBind);
    this.canvas.removeEventListener('click', this.openMenuEventBind);
    this.canvas.removeEventListener('mousemove', this.checkOpenMenuEventBind);
  }

  showMenu() {
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].menuWindow, 188, 30);
    //this.context.drawImage(commonImages.restartButton, 230, 445);
    //this.context.drawImage(commonImages.quitButton, 397, 445);
    //this.context.drawImage(commonImages.sliderKnob, this.knobPositionX, this.knobPositionY);
    this.canvas.addEventListener('click', this.changeVolumeBind);
    this.canvas.addEventListener('click', this.openMenuRestartBind);
    this.canvas.addEventListener('click', this.openMenuQuitBind);
  }

  openMenuRestart(e) {
    if (this.outsideArea(e, 230, 390, 445, 500)) return;

    this.audioPlayer(this.buttonAudio.tap);
    this.audioPlayer(this.buttonAudio.tap2);
    this.audioPlayer(this.buttonAudio.bleep);
    this.restartDialogOpen = 1;
  }

  menuRestartDraw() {
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_15__menuComponents_resources__["a" /* resources */].get('img/dialog_window/quit_menu.png'), 170, 180, 450, 350);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].restart1, 325, 250);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].restart2, 205, 350);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].restartButton, 210, 460);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].cancelButton, 420, 460);
    this.canvas.addEventListener('click', this.returnToGameBind);
    this.canvas.addEventListener('click', this.restartCurrentLevelBind);
    this.canvas.removeEventListener('click', this.changeVolumeBind);
    this.canvas.removeEventListener('click', this.openMenuQuitBind);
  }

  openMenuQuit(e) {
    if (this.outsideArea(e, 397, 555, 445, 500)) return;
    this.audioPlayer(this.buttonAudio.tap);
    this.audioPlayer(this.buttonAudio.tap2);
    this.audioPlayer(this.buttonAudio.bleep);
    this.quitDialogOpen = 1;
  }

  menuQuitDraw() {
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_15__menuComponents_resources__["a" /* resources */].get('img/dialog_window/quit_menu.png'), 170, 180, 450, 350);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].quit1, 350, 250);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].quit2, 210, 350);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].quitButton, 210, 460);
    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].cancelButton, 420, 460);
    this.canvas.addEventListener('click', this.returnToGameBind);
    this.canvas.addEventListener('click', this.goToMenuOfGameBind);
    this.canvas.removeEventListener('click', this.changeVolumeBind);
    this.canvas.removeEventListener('click', this.openMenuRestartBind);
  }

  goToMenuOfGame(e) {
    if (this.outsideArea(e, 210, 370, 460, 500)) return;
    this.audioPlayer(this.buttonAudio.tap);
    this.audioPlayer(this.buttonAudio.tap2);
    this.audioPlayer(this.buttonAudio.bleep);
    this.canvas.removeEventListener('mousemove', this.calculatePlantUnitBind);
    this.canvas.removeEventListener('click', this.toPlantBind);
    this.canvas.removeEventListener('click', () => {
      if (this.menu === __WEBPACK_IMPORTED_MODULE_2__imgComponents_commonImages__["a" /* commonImages */].menuHover) {
        if (this.menuOpen) {
          this.menuOpen = 0;
        } else {
          this.menuOpen = 1;
          this.gameAudioStates.menupage.loop = true;
          this.audioPlayer(this.gameAudioStates.menupage);
          this.menupage = new __WEBPACK_IMPORTED_MODULE_18__menuComponents_menu_page__["a" /* MenuPage */]();
        }
      }
    });
  }

  outsideArea(e, x1, x2, y1, y2) {
    let x = e.pageX - this.elemLeft,
        y = e.pageY - this.elemTop;
    return x < x1 || x > x2 || y < y1 || y > y2;
  }

  changeVolume(e) {
    if (this.outsideArea(e, 320, 460, 180, 230)) return;
    this.knobPositionX = e.pageX - this.elemLeft - 5;
    this.knobpositionY = e.pageY - this.elemTop - 5;
    if (this.knobPositionX <= 460 && this.knobPositionX > 420) {
      __WEBPACK_IMPORTED_MODULE_16__menuComponents_store__["a" /* store */].setVolume(0.5);
    } else if (this.knobPositionX <= 420 && this.knobPositionX > 380) {
      __WEBPACK_IMPORTED_MODULE_16__menuComponents_store__["a" /* store */].setVolume(0.3);
    } else if (this.knobPositionX <= 380 && this.knobPositionX > 340) {
      __WEBPACK_IMPORTED_MODULE_16__menuComponents_store__["a" /* store */].setVolume(0.2);
    } else if (this.knobPositionX <= 340 && this.knobPositionX > 320) {
      __WEBPACK_IMPORTED_MODULE_16__menuComponents_store__["a" /* store */].setVolume(0.1);
    } else if (this.knobPositionX <= 320) {
      __WEBPACK_IMPORTED_MODULE_16__menuComponents_store__["a" /* store */].setVolume(0);
    }
    this.gameAudioStates.gameprocess.volume = Number(__WEBPACK_IMPORTED_MODULE_16__menuComponents_store__["a" /* store */].getVolume());
  }

}



/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/backgroundOne.jpg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/backgroundTwo.jpg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/backgroundThree.jpg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/backgroundFour.jpg";

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return description; });
const description = {
  "level1": {
    "name": "Sunflower",
    "description": "Gives additional sun"
  },
  "level2": {
    "name": "Cherry Bomb",
    "description": "BOOM!"
  }
};



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return awardImages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_award_awardScreen_png__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_award_awardScreen_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_award_awardScreen_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_award_SeedChooserButton_png__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_award_SeedChooserButton_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__img_award_SeedChooserButton_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_award_SeedChooserButtonDisabled_png__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_award_SeedChooserButtonDisabled_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_award_SeedChooserButtonDisabled_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__archiver__ = __webpack_require__(0);





let awardImages = {
    background: __WEBPACK_IMPORTED_MODULE_0__img_award_awardScreen_png___default.a,
    button: __WEBPACK_IMPORTED_MODULE_1__img_award_SeedChooserButton_png___default.a,
    buttonFocus: __WEBPACK_IMPORTED_MODULE_2__img_award_SeedChooserButtonDisabled_png___default.a
};

awardImages = Object(__WEBPACK_IMPORTED_MODULE_3__archiver__["a" /* archivator */])(awardImages);



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/awardScreen.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/SeedChooserButton.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/SeedChooserButtonDisabled.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/SeedBank.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/menu-button.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/menu-button-hover.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/SunBank.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/arrowTop.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/arrowBottom.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/levelTimeLine.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/levelTimeLineProcess.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/options_menuback.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/lawnmower.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/starburst.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/restart-button.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/ZombiesWon.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/ZombieNoteLarge.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/ZombieNoteSmall.png";

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sunflowerImages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_plants_sunFlower_png__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_plants_sunFlower_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_plants_sunFlower_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_plants_SunFlowerUnit_png__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_plants_SunFlowerUnit_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__img_plants_SunFlowerUnit_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_plants_seed_sunflowerLogo_png__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_plants_seed_sunflowerLogo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_plants_seed_sunflowerLogo_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_plants_seed_sunflowerChosen_png__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_plants_seed_sunflowerChosen_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_plants_seed_sunflowerChosen_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__archiver__ = __webpack_require__(0);






let sunflowerImages = {
  sunflower: __WEBPACK_IMPORTED_MODULE_0__img_plants_sunFlower_png___default.a, sunflowerLogo: __WEBPACK_IMPORTED_MODULE_2__img_plants_seed_sunflowerLogo_png___default.a, sunflowerChosen: __WEBPACK_IMPORTED_MODULE_3__img_plants_seed_sunflowerChosen_png___default.a, sunflowerCursor: __WEBPACK_IMPORTED_MODULE_1__img_plants_SunFlowerUnit_png___default.a
};

sunflowerImages = Object(__WEBPACK_IMPORTED_MODULE_4__archiver__["a" /* archivator */])(sunflowerImages);



/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/sunFlower.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/SunFlowerUnit.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/sunflowerLogo.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/sunflowerChosen.png";

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sunImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_common_Sun_png__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_common_Sun_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_common_Sun_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__archiver__ = __webpack_require__(0);



let sunImage = { sun: __WEBPACK_IMPORTED_MODULE_0__img_common_Sun_png___default.a };
sunImage = Object(__WEBPACK_IMPORTED_MODULE_1__archiver__["a" /* archivator */])(sunImage);



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/Sun.png";

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cherryBombImages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_plants_cherryBomb_png__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_plants_cherryBomb_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_plants_cherryBomb_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_plants_Pow_png__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_plants_Pow_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__img_plants_Pow_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_plants_seed_cherrybombLogo_png__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_plants_seed_cherrybombLogo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_plants_seed_cherrybombLogo_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_plants_seed_cherrybombChosen_png__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_plants_seed_cherrybombChosen_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_plants_seed_cherrybombChosen_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_plants_CherryBombUnit_png__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_plants_CherryBombUnit_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_plants_CherryBombUnit_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__archiver__ = __webpack_require__(0);







let cherryBombImages = {
    unit: __WEBPACK_IMPORTED_MODULE_0__img_plants_cherryBomb_png___default.a, pow: __WEBPACK_IMPORTED_MODULE_1__img_plants_Pow_png___default.a, logo: __WEBPACK_IMPORTED_MODULE_2__img_plants_seed_cherrybombLogo_png___default.a, chosen: __WEBPACK_IMPORTED_MODULE_3__img_plants_seed_cherrybombChosen_png___default.a, cursor: __WEBPACK_IMPORTED_MODULE_4__img_plants_CherryBombUnit_png___default.a
};

cherryBombImages = Object(__WEBPACK_IMPORTED_MODULE_5__archiver__["a" /* archivator */])(cherryBombImages);



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/cherryBomb.png";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/Pow.png";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/cherrybombLogo.png";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/cherrybombChosen.png";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/CherryBombUnit.png";

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Zombie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imgComponents_simpleZombieImage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imgComponents_coneHeadZombieImages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imgComponents_busketHeadZombieImages__ = __webpack_require__(85);




class Zombie {
    constructor(context) {
        this.context = context;
        this.health = 0;
        this.damage = 1;
        this.positionX = 0;
        this.positionY = 0;
        this.width = 166;
        this.height = 144;
        this.state = '';
        this.frame = 0;
        this.frameWaiting = 0;
        this.frameSpeed = 0;
        this.frameDied = 0;
        this.timerDied = 0;
        this.frameDiedHead = 0;
        this.frameAttack = 0;
        this.image = null;
        this.burn = 0;
        this.frameBurn = 0;
        this.timerOfBurn = 0;
    }

    checkState() {
        if (this.health > 11 && this.state !== 'cone') {
            this.image = __WEBPACK_IMPORTED_MODULE_2__imgComponents_busketHeadZombieImages__["a" /* busketHeadZombieImages */];
        } else if (this.health > 11 && this.state !== 'busket') {
            this.image = __WEBPACK_IMPORTED_MODULE_1__imgComponents_coneHeadZombieImages__["a" /* coneHeadZombieImages */];
        } else {
            this.image = __WEBPACK_IMPORTED_MODULE_0__imgComponents_simpleZombieImage__["a" /* simpleZombieImage */];
        }
    }

    setState(state) {
        if (state === 1) {
            this.image = __WEBPACK_IMPORTED_MODULE_0__imgComponents_simpleZombieImage__["a" /* simpleZombieImage */];
            this.state = 'simple';
            this.health = 10;
        } else if (state === 2) {
            this.image = __WEBPACK_IMPORTED_MODULE_1__imgComponents_coneHeadZombieImages__["a" /* coneHeadZombieImages */];
            this.state = 'cone';
            this.health = 19;
        } else if (state === 3) {
            this.state = 'busket';
            this.image = __WEBPACK_IMPORTED_MODULE_2__imgComponents_busketHeadZombieImages__["a" /* busketHeadZombieImages */];
            this.health = 25;
        }
    }

    positionOfCreate() {
        this.positionX = this.setPositionOfCreate(800, 900);
        this.positionY = this.setPositionOfCreate(100, 500);
    }

    create() {
        this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_simpleZombieImage__["a" /* simpleZombieImage */].wait, this.frameWaiting, 0, 91, 155, this.positionX, this.positionY, 91, 155);
        this.frameSpeed++;
        if (this.frameSpeed === 4) {
            this.frameWaiting += 91;
            this.frameSpeed = 0;
        }
        if (this.frameWaiting > 1400) {
            this.frameWaiting = 0;
        }
    }

    setPositionOfCreate(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    walk() {
        this.positionX -= 0.5;
        this.frameSpeed++;
        if (this.frameSpeed === 5) {
            this.frame += 166;
            this.frameSpeed = 0;
        }
        if (this.frame > this.image.walk.width - 10) {
            this.frame = 0;
        }
        this.context.drawImage(this.image.walk, this.frame, 0, this.width, this.height, this.positionX, this.positionY, this.width, this.height);
    }

    attack() {
        this.frameSpeed++;
        if (this.frameSpeed === 5) {
            this.frameAttack += 166;
            this.frameSpeed = 0;
        }
        if (this.frameAttack > this.image.attack.width - 10) {
            this.frameAttack = 0;
        }
        this.context.drawImage(this.image.attack, this.frameAttack, 0, this.width, this.height, this.positionX, this.positionY, this.width, this.height);
    }

    zombiesDead() {
        this.frameSpeed++;
        if (this.frameSpeed === 5) {
            if (this.frameDiedHead < 1650) {
                this.frameDiedHead += 150;
            }
            if (this.frameDied < 1493) {
                this.frameDied += 166;
            }
            this.frameSpeed = 0;
        }
        this.timerDied++;
        this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_simpleZombieImage__["a" /* simpleZombieImage */].died, this.frameDied, 0, this.width, this.height, this.positionX, this.positionY, this.width, this.height);
        this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_simpleZombieImage__["a" /* simpleZombieImage */].diedHead, this.frameDiedHead, 0, this.width, this.height + 42, this.positionX + 60, this.positionY, this.width, this.height + 42);
    }

    zombieBurn() {
        this.timerOfBurn++;
        this.frameSpeed++;
        if (this.frameSpeed === 5) {
            if (this.frameBurn < 3320) {
                this.frameBurn += 166;
            }
            this.frameSpeed = 0;
        }
        this.context.drawImage(__WEBPACK_IMPORTED_MODULE_0__imgComponents_simpleZombieImage__["a" /* simpleZombieImage */].burn, this.frameBurn, 0, this.width, this.height, this.positionX, this.positionY, this.width, this.height);
    }
}



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return simpleZombieImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_zombies_simpleZombie_png__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_zombies_simpleZombie_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_zombies_simpleZombie_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_zombies_simpleZombieWaiting_png__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_zombies_simpleZombieWaiting_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__img_zombies_simpleZombieWaiting_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_zombies_simpleZombieDied_png__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_zombies_simpleZombieDied_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_zombies_simpleZombieDied_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_zombies_simpleZombieDeadHead_png__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_zombies_simpleZombieDeadHead_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_zombies_simpleZombieDeadHead_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_zombies_simpleZombieAttack_png__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_zombies_simpleZombieAttack_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_zombies_simpleZombieAttack_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_zombies_zombieBurned_png__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_zombies_zombieBurned_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__img_zombies_zombieBurned_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__archiver__ = __webpack_require__(0);








let simpleZombieImage = {
    walk: __WEBPACK_IMPORTED_MODULE_0__img_zombies_simpleZombie_png___default.a, wait: __WEBPACK_IMPORTED_MODULE_1__img_zombies_simpleZombieWaiting_png___default.a,
    died: __WEBPACK_IMPORTED_MODULE_2__img_zombies_simpleZombieDied_png___default.a, diedHead: __WEBPACK_IMPORTED_MODULE_3__img_zombies_simpleZombieDeadHead_png___default.a,
    attack: __WEBPACK_IMPORTED_MODULE_4__img_zombies_simpleZombieAttack_png___default.a, burn: __WEBPACK_IMPORTED_MODULE_5__img_zombies_zombieBurned_png___default.a
};

simpleZombieImage = Object(__WEBPACK_IMPORTED_MODULE_6__archiver__["a" /* archivator */])(simpleZombieImage);



/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/simpleZombie.png";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/simpleZombieWaiting.png";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/simpleZombieDied.png";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/simpleZombieDeadHead.png";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/simpleZombieAttack.png";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/zombieBurned.png";

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coneHeadZombieImages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_zombies_ConeheadZombie_png__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_zombies_ConeheadZombie_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_zombies_ConeheadZombie_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_zombies_ConeheadZombiAttack_png__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_zombies_ConeheadZombiAttack_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__img_zombies_ConeheadZombiAttack_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__archiver__ = __webpack_require__(0);




let coneHeadZombieImages = {
    walk: __WEBPACK_IMPORTED_MODULE_0__img_zombies_ConeheadZombie_png___default.a, attack: __WEBPACK_IMPORTED_MODULE_1__img_zombies_ConeheadZombiAttack_png___default.a
};

coneHeadZombieImages = Object(__WEBPACK_IMPORTED_MODULE_2__archiver__["a" /* archivator */])(coneHeadZombieImages);



/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/ConeheadZombie.png";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/ConeheadZombiAttack.png";

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return busketHeadZombieImages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_zombies_BusketheadZombie_png__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_zombies_BusketheadZombie_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_zombies_BusketheadZombie_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_zombies_BusketheadZombieAttack_png__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_zombies_BusketheadZombieAttack_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__img_zombies_BusketheadZombieAttack_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__archiver__ = __webpack_require__(0);




let busketHeadZombieImages = {
    walk: __WEBPACK_IMPORTED_MODULE_0__img_zombies_BusketheadZombie_png___default.a, attack: __WEBPACK_IMPORTED_MODULE_1__img_zombies_BusketheadZombieAttack_png___default.a
};

busketHeadZombieImages = Object(__WEBPACK_IMPORTED_MODULE_2__archiver__["a" /* archivator */])(busketHeadZombieImages);



/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/BusketheadZombie.png";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/BusketheadZombieAttack.png";

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lawnmower; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imgComponents_commonImages__ = __webpack_require__(6);



class Lawnmower {
    constructor(context, pointX, pointY) {
        this.context = context;
        this.pointX = pointX;
        this.pointY = pointY;
        this.used = 0;
        this.number = 0;
        this.unit = __WEBPACK_IMPORTED_MODULE_0__imgComponents_commonImages__["a" /* commonImages */].lawnmower;
    }

    create(currentLevel) {}

    draw() {
        this.context.drawImage(this.unit, this.pointX, this.pointY);
    }

    activated() {
        if (this.used) {
            this.context.drawImage(this.unit, this.pointX, this.pointY);
            if (this.pointX < 800) {
                this.pointX += 10;
            }
        }
    }
}



/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Peashooter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imgComponents_peashooterImages__ = __webpack_require__(90);



class Peashooter extends __WEBPACK_IMPORTED_MODULE_0__plants__["a" /* Plants */] {
    constructor(context, positionX, positionY) {
        super(context, 1, 5, 3, 100, positionX, positionY);
        this.context = context;
        this.name = Peashooter;
        this.openFire = 0;
        this.width = 71;
        this.widthBullet = 56;
        this.height = 71;
        this.heightBullet = 46;
        this.hit = 0;
        this.frameBulletSpeed = 0;
    }

    init() {
        super.init();
        this.packet = __WEBPACK_IMPORTED_MODULE_1__imgComponents_peashooterImages__["a" /* peashooterImages */].logo;
    }

    create(pointX, pointY) {
        super.create(__WEBPACK_IMPORTED_MODULE_1__imgComponents_peashooterImages__["a" /* peashooterImages */].cursor, pointX, pointY);
    }

    calculateWidth() {
        return __WEBPACK_IMPORTED_MODULE_1__imgComponents_peashooterImages__["a" /* peashooterImages */].cursor.width;
    }

    calculateHeight() {
        return __WEBPACK_IMPORTED_MODULE_1__imgComponents_peashooterImages__["a" /* peashooterImages */].cursor.height;
    }

    choice(pointX, pointY) {
        this.packet = __WEBPACK_IMPORTED_MODULE_1__imgComponents_peashooterImages__["a" /* peashooterImages */].chosen;
        super.drawSeed(this.packet, pointX, pointY);
    }

    cancelChoice(pointX, pointY) {
        this.packet = __WEBPACK_IMPORTED_MODULE_1__imgComponents_peashooterImages__["a" /* peashooterImages */].logo;
        super.drawSeed(this.packet, pointX, pointY);
    }

    build(pointX = this.positionX, pointY = this.positionY) {
        this.frameSpeed++;
        this.context.drawImage(__WEBPACK_IMPORTED_MODULE_1__imgComponents_peashooterImages__["a" /* peashooterImages */].unit, this.frame, 0, this.width, this.height, pointX, pointY, this.width, this.height);
        if (this.frameSpeed === 5) {
            this.frame += 71;
            this.frameSpeed = 0;
        }
        if (this.frame > 900) {
            this.frame = 0;
        }
    }

    useOfAbility() {
        for (let i = 0; i < this.positionOfBullet.length; i++) {
            if (this.positionOfBullet[i].pointX < this.positionX + 800) {
                if (this.positionOfBullet[i].hit) {
                    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_1__imgComponents_peashooterImages__["a" /* peashooterImages */].bullet, 56, 0, this.widthBullet, this.heightBullet, this.positionOfBullet[i].pointX, this.positionOfBullet[i].pointY, this.widthBullet, this.heightBullet);
                    this.positionOfBullet[i].frameBulletSpeed++;
                    this.positionOfBullet[i].pointX += 5;
                    if (this.positionOfBullet[i].frameBulletSpeed === 4) {
                        this.positionOfBullet[i].frameBulletSpeed = 0;
                        this.positionOfBullet.splice(i, 1);
                    }
                } else {
                    this.context.drawImage(__WEBPACK_IMPORTED_MODULE_1__imgComponents_peashooterImages__["a" /* peashooterImages */].bullet, 0, 0, this.widthBullet, this.heightBullet, this.positionOfBullet[i].pointX + 25, this.positionOfBullet[i].pointY, this.widthBullet, this.heightBullet);
                    this.positionOfBullet[i].pointX += 5;
                }
            } else {
                this.positionOfBullet.splice(i, 1);
            }
        }
    }

}



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return peashooterImages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_plants_peashooter_png__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_plants_peashooter_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_plants_peashooter_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_plants_peaBullet_png__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_plants_peaBullet_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__img_plants_peaBullet_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_plants_seed_peashooterChosen_png__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_plants_seed_peashooterChosen_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_plants_seed_peashooterChosen_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_plants_seed_peashooterLogo_png__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_plants_seed_peashooterLogo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_plants_seed_peashooterLogo_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_plants_PeashooterUnit_png__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_plants_PeashooterUnit_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_plants_PeashooterUnit_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__archiver__ = __webpack_require__(0);







let peashooterImages = { unit: __WEBPACK_IMPORTED_MODULE_0__img_plants_peashooter_png___default.a, bullet: __WEBPACK_IMPORTED_MODULE_1__img_plants_peaBullet_png___default.a, chosen: __WEBPACK_IMPORTED_MODULE_2__img_plants_seed_peashooterChosen_png___default.a, logo: __WEBPACK_IMPORTED_MODULE_3__img_plants_seed_peashooterLogo_png___default.a, cursor: __WEBPACK_IMPORTED_MODULE_4__img_plants_PeashooterUnit_png___default.a };

peashooterImages = Object(__WEBPACK_IMPORTED_MODULE_5__archiver__["a" /* archivator */])(peashooterImages);



/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/peashooter.png";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/peaBullet.png";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/peashooterChosen.png";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/peashooterLogo.png";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/images/PeashooterUnit.png";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/evillaugh.ogg";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/losemusic.ogg";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/winmusic.ogg";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/menu_page.mp3";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/game_process.mp3";

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/awooga.ogg";

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/hugewave.ogg";

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/groan.ogg";

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/groan2.ogg";

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/groan3.ogg";

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/groan4.ogg";

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/groan5.ogg";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/groan6.ogg";

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/bigchomp.ogg";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/chomp.ogg";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/chomp2.ogg";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/chompSoft.ogg";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/plant.ogg";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/plant2.ogg";

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/seedlift.ogg";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/firepea.ogg";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/zombie_falling_1.ogg";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/bonk.ogg";

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/audio/points.ogg";

/***/ }),
/* 120 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map