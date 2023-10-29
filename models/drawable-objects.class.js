class DrawableObject {
    img;
    imageCash = {};
    currentImage = 0;
    x = 120;
    y = 250;
    width = 150;
    height = 100;
    musicOn = false;



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

    playMuteMusic() {
        if (!this.musicOn) {
            this.musicOn === true;
        } else {
            this.musicOn === false;
        }
    }
}

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

function initLevel() {
    let startScreen = document.getElementById('startScreen');
    canvas = document.getElementById('canvas');
    startScreen.classList.remove('.d-none');


    startScreen.style.display = 'none';
    canvas.style.display = 'block';
    world.level.enemies.forEach((enemy) => {
        enemy.animate();
    });
}

function newGame() {
    localStorage.setItem('newGame', 'true');
    location.reload();
}

function goToStartScreen() {
    location.reload();
}


