




class World {
    character = new Character();
    chicken = new Chicken();
    chicks = new Chicks();
    endboss = new Endboss();
    statusbarLive = new StatusbarLive();
    statusbarCoins = new StatusbarCoins();
    statusbarBottles = new StatusbarBottles();
    audios = new Audios();
    soundOn = false;
    level = level1;
    canvas;
    offset;
    ctx;
    keyboard;
    document;
    camera_x = 0;
    coinsCounter = 0;
    throwableObjects = [];
    bottles = [];



    constructor(canvas, keyboard) {
        this.document = document;
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        this.onOffFullscreen();
        this.onOffMusicWithClick();
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.collectBottel();
            this.collectCoin();
        }, 200);
        setInterval(() => {
            this.jumpOnEnemy();
            this.hitEnemyWithBottle();
        }, 50);

    }



    onOffFullscreen() {
        this.document.querySelector('.screen').addEventListener('click', () => {
            this.toggleFullScreen();
        })
    }

    onOffMusicWithClick() {
        this.document.getElementById('playMusicIcon').addEventListener('click', () => {
            this.onOffMusic();
        })
    }



    /**
    * Toggles in-game music on or off.
    */
    onOffMusic() {
        let musicIcon = document.getElementById('playMusicIcon');
        let musicSrc = document.getElementById('musicSrc');
        let soundBoxText = document.getElementById('soundBox');


        if (musicSrc.src.includes('img/11_icons/sound_on.png')) {
            this.soundOn = true;
            this.audios.gameMusic.play();
            musicSrc.src = 'img/11_icons/sound_off.png';
            soundBoxText.innerHTML = 'Stop game music <br> Press M';
        } else if (musicSrc.src.includes('img/11_icons/sound_off.png')) {
            this.soundOn = false;
            this.audios.gameMusic.pause();
            musicSrc.src = 'img/11_icons/sound_on.png';
            soundBoxText.innerHTML = 'Play game music <br> Press M';
        }
    }





    /**
    * Toggles full-screen mode.
    */
    toggleFullScreen() {
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
            fullscreenbox.innerHTML = 'Minimize <br> Press F';
            changeScreen.src = 'img/11_icons/minimaze_screen.png';
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            fullscreenbox.innerHTML = 'Fullscreen <br> Press F';
            changeScreen.src = 'img/11_icons/fullscreen.png';
        }
    }


    /**
     * Checks if the character can throw objects and throws them.
     */
    checkThrowObjects() {
        if (this.keyboard.D && this.bottles.length > 0) {
            let bottle = new ThrowableObjects(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.bottles.shift();
            this.statusbarBottles.setBottleCounter(this.bottles.length);
            this.hitEnemyWithBottle();
        }
    }


    /**
     * Checks if the character hits enemies with thrown objects.
     */
    hitEnemyWithBottle() {
        let boss = this.level.enemies.slice(-1)[0];

        this.level.enemies.forEach((enemy, index) => {
            this.throwableObjects.forEach((bottle, bottleIndex) => {
                if (bottle.isColliding(enemy) && enemy !== boss) {
                    bottle.bottleSplash();
                    this.hitChickenWithBottle(enemy, bottleIndex, index);
                }
                if (bottle.isColliding(boss)) {
                    this.hitBossWithBottle(boss, bottleIndex);
                }
            });
        });
    }

    hitChickenWithBottle(enemy, bottleIndex, index) {
        enemy.hitEnemy();
        if (this.soundOn) {
            this.audios.bottleHit.play();
            enemy.enemyDiesSound.play();
        }
        this.throwableObjects.splice(bottleIndex, 1);
        if (enemy.energy < 1) {
            setTimeout(() => {
                this.level.enemies.splice(index, 1);
            }, 2000);
        }
    }

    hitBossWithBottle(boss, bottleIndex) {
        if (this.soundOn) {
            this.audios.bossHit.play();
            this.audios.bossHit.play();
        }
        this.throwableObjects.splice(bottleIndex, 1);
        boss.hitEnemy();
    }


    /**
     * Checks collisions between character and enemies.
     */
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAbouveGround() && enemy.energy > 0) {
                this.character.hit();
                this.statusbarLive.setProcentage(this.character.energy);
            }
        });
    }


    /**
     * Checks if the character jumps on enemies.
     */
    jumpOnEnemy() {
        for (let index = this.level.enemies.length - 1; index >= 0; index--) {
            const enemy = this.level.enemies[index];
            if (this.character.isColliding(enemy) && this.character.isAbouveGround() && this.character.speedY < -1) {
                enemy.energy -= 20;

                if (this.soundOn) {
                    enemy.enemyDiesSound.play();
                }
                setTimeout(() => {
                    for (let i = this.level.enemies.length - 1; i >= 0; i--) {
                        if (this.level.enemies[i].energy < 1) {
                            this.level.enemies.splice(i, 1);
                        }
                    }
                }, 2000);
            }
        }
    }


    /**
     * Collects bottles.
     */
    collectBottel() {
        this.level.collectableObjectsBottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.collectableObjectsBottles.splice(index, 1);
                this.statusbarBottles.setBottleCounter(this.bottles.length + 1);
                this.bottles.push(new ThrowableObjects());
                if (this.soundOn) {
                    this.audios.collectBottleMusic.play();
                }
            }
        });
    }


    /**
     * Collects coins.
     */
    collectCoin() {
        this.level.collectableObjectsCoins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.coinsCounter++;
                this.level.collectableObjectsCoins.splice(index, 1);
                this.statusbarCoins.setCoinCounter(this.coinsCounter);
                if (this.soundOn) {
                    this.audios.collectCoinMusic.play();
                }
            }
        });
    }


    /**
    * Draws the game world on the canvas.
    */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundObject);

        this.addObjectToMap(this.level.collectableObjectsBottles);
        this.addObjectToMap(this.level.collectableObjectsCoins);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusbarLive);
        this.addToMap(this.statusbarCoins);
        this.addToMap(this.statusbarBottles);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);


        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })

    }


    /**
     * Adds objects to the map.
     * @param {DrawableObject[]} objects - A list of drawable objects.
     */
    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    /**
     * Adds a drawable object to the map and flips it if it's facing the opposite direction.
     * @param {DrawableObject} mo - The drawable object.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    /**
     * Flips a drawable object.
     * @param {DrawableObject} mo - The drawable object to be flipped.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    /**
    * Restores a flipped drawable object.
    * @param {DrawableObject} mo - The drawable object to be restored.
    */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}