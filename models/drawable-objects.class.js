
/**
 * Creates a class for all drawable objects
 * @date 11/22/2023 - 12:12:44 PM
 *
 * @class DrawableObject
 * @typedef {DrawableObject}
 */
class DrawableObject {
    img;
    imageCash = {};
    currentImage = 0;
    x = 120;
    y = 250;
    width = 150;
    height = 100;
    musicOn = false;
    movedRight;


    /**
 * Loads an image from the specified path and sets it to the object's img property.
 * @param {string} path - The path to the image file.
 * @returns {void}
 */
    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
 * Draws the object's image on the canvas context.
 * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
 * @returns {void}
 */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            console.log(e);
        }
    }

    /**
    * Apply gravity to the object, making it fall if not on the ground.
    */
    apllyGravity() {
        setInterval(() => {
            if (this.isAbouveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accelerataion;
            }
        }, 1000 / 40);
    }

/**
 * Loads images from the provided array and stores them in the image cache.
 * @param {string[]} arr - An array of image paths to be loaded.
 * @returns {void}
 */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCash[path] = img;
        });
    }


    /**
 * Plays an animation by updating the object's image from the provided array.
 * @param {string[]} images - An array of image paths for the animation.
 * @returns {void}
 */

    /**
 * Toggles the music on/off.
 * @returns {void}
 */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCash[path];
        this.currentImage++;
    }

    playMuteMusic() {
        if (!this.musicOn) {
            this.musicOn === true;
        } else {
            this.musicOn === false;
        }
    }
}


/**
 * Creates a class with all sounds in the game
 * @date 11/22/2023 - 12:17:08 PM
 *
 * @class Audios
 * @typedef {Audios}
 * @extends {DrawableObject}
 */
class Audios extends DrawableObject {
    charackter_jump = new Audio('audio/jump.mp3');
    collectCoinMusic = new Audio('audio/collect_coin.mp3');
    collectBottleMusic = new Audio('audio/collect_bottle.mp3');
    enemyDead = new Audio('audio/chicken.mp3');
    bottleHit = new Audio('audio/glass.mp3');
    gameMusic = new Audio('audio/game_music.mp3');
    bossHit = new Audio('audio/boss_hit.mp3');
    chicksHit = new Audio('audio/chicks_sound.mp3');
}



/**
 * Load the game
 * @date 11/22/2023 - 12:17:34 PM
 */
function init() {
    let startScreen = document.querySelector('.d-none');
    const isNewGame = localStorage.getItem('newGame');
    canvas = document.getElementById('canvas');

    world = new World(canvas, keyboard);

    if (isNewGame === 'true') {
        initLevel();
        localStorage.removeItem('newGame');
    } else {
        startScreen.style.display = 'block';
    }

}


/**
 * Reload the game
 * @date 11/14/2023 - 12:41:38 PM
 */
function initLevel() {
    let startScreen = document.getElementById('startScreen');
    canvas = document.getElementById('canvas');
    startScreen.classList.remove('.d-none');


    startScreen.style.display = 'none';
    canvas.style.display = 'block';
    world.level.enemies.forEach((enemy) => {
        enemy.animate();
    });
    adjustCanvasBoxVisibility();

}

/**
 * Starts a new game if win or lose
 */
function newGame() {
    localStorage.setItem('newGame', 'true');
    location.reload();
}


/**
 * Goes to startscreen if win or lose
 * @date 11/14/2023 - 12:42:50 PM
 */
function goToStartScreen() {
    location.reload();
}



/**
 * Turns the mobile buttons on or off
 * @date 11/14/2023 - 12:43:22 PM
 */
function adjustCanvasBoxVisibility() {
    let canvasBox = document.querySelector('.canvasBox');
    let canvas = document.getElementById('canvas');


    function updateVisibility() {
        // Überprüfe die Display-Breite
        let screenWidth = window.innerWidth;

        // Überprüfe, ob die Breite im gewünschten Bereich liegt
        if (screenWidth <= 1100 && canvas.style.display == 'block') {
            canvasBox.style.display = 'block';
        } else {
            canvasBox.style.display = 'none';
        }
    }

    updateVisibility();

    window.addEventListener('resize', updateVisibility);
}

adjustCanvasBoxVisibility();
