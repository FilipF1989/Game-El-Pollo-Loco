let canvas;
let world;
let keyboard = new Keyboard();
charackter_jump = new Audio('audio/jump.mp3');
game_music = new Audio('audio/game_music.mp3');


function toggleFullScreen() {
    const changeScreen = document.querySelector('.screenIcon');
    let fullscreenbox = document.querySelector('.fullscreenBox');
    const fullscreenElement =
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement;

    if (!fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        fullscreenbox.innerHTML = 'Minimize';
        changeScreen.src = 'img/11_icons/minimaze_screen.png'; // Setze das Bild außerhalb des Vollbildmodus.
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        fullscreenbox.innerHTML = 'Fullscreen';
        changeScreen.src = 'img/11_icons/fullscreen.png'; // Setze das Bild im Vollbildmodus.
    }
}



function onOffMusic() {
    let musicIcon = document.getElementById('playMusicIcon');
    let musicSrc = document.getElementById('musicSrc');
    let soundBoxText = document.getElementById('soundBox');

    if (musicSrc.src.includes('img/11_icons/sound_on.png')) {
        this.game_music.play();
        musicSrc.src = 'img/11_icons/sound_off.png';
        soundBoxText.innerHTML = 'Stop game music';
    } else if (musicSrc.src.includes('img/11_icons/sound_off.png')) {
        this.game_music.pause();
        musicSrc.src = 'img/11_icons/sound_on.png';
        soundBoxText.innerHTML = 'Play game music';
    }
}

function init() {
    let startScreen = document.getElementById('startScreen');
    canvas = document.getElementById('canvas');

    world = new World(canvas, keyboard);
}

function initLevel() {
    let startScreen = document.getElementById('startScreen');
    canvas = document.getElementById('canvas');

    startScreen.style.display = 'none';
    canvas.style.display = 'block';
    world.level.enemies.forEach((enemy) => {
        enemy.animate();
    });
}



window.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});

window.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
        // this.charackter_jump.play();
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }

});