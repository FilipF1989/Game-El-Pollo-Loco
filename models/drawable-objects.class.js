class DrawableObject {
    img;
    imageCash = {};
    currentImage = 0;
    x = 120;
    y = 250;
    width = 150;
    height = 100;


    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        try {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            // console.warn('Console log', e);
            // console.log('Could not load imae', this.img.src);
        }
    }


    drawFrame(ctx) {
        if (this instanceof ThrowableObjects || this instanceof Chicken || this instanceof Endboss || this instanceof ThrowableObjects) {
            ctx.beginPath();
            ctx.strokeStyle  = 'black';
            ctx.lineWidth = '5';
            ctx.strokeStyle = '10';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCash[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCash[path];
        this.currentImage++;
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

function toggleFullScreen() {
    const changeScreen = document.querySelector('.screenIcon');
    let fullscreenbox = document.querySelector('.fullscreenBox');
    const fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;

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

function newGame() {
    location.reload();
}
