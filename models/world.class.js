// 

class World {
    character = new Character();
    level = level1;
    canvas;
    offset;
    ctx;
    keyboard;
    camera_x = 0;
    coinsCounter = 0;
    bottlesCounter = 0;
    statusbarLive = new StatusbarLive();
    statusbarCoins = new StatusbarCoins();
    statusbarBottles = new StatusbarBottles();
    throwableObjects = [];
    bottles = [];
    // game_music = new Audio('audio/game_music.mp3');
    collect_coin_music = new Audio('audio/collect_coin.mp3');
    collect_bottle_music = new Audio('audio/collect_bottle.mp3');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        // this.game_music.play();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.collectBottel();
            this.collectCoin();
            this.jumpOnEnemy();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.bottles.length > 0) {
            let bottle = new ThrowableObjects(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.bottles.shift();
            this.bottlesCounter--;
            this.statusbarBottles.setBottleCounter(this.bottlesCounter);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAbouveGround ()) {
                this.character.hit();
                this.statusbarLive.setProcentage(this.character.energy);
            }
        });
    }

    jumpOnEnemy() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy) && this.character.isAbouveGround() && !enemy.dead ) {
                enemy.dead = true;
                this.character.playDeadSequenz(enemy, index);
            }
        });
    }



    collectBottel() {
        this.level.collectableObjectsBottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.bottlesCounter++;
                // Entferne die aktuell eingesammelte Flasche aus dem Array
                this.level.collectableObjectsBottles.splice(index, 1);
                this.statusbarBottles.setBottleCounter(this.bottlesCounter);
                this.bottles.push(new ThrowableObjects());
                this.collect_bottle_music.play();
            }
        });
    }


    collectCoin() {
        this.level.collectableObjectsCoins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.coinsCounter++;
                this.level.collectableObjectsCoins.splice(index, 1);
                this.statusbarCoins.setCoinCounter(this.coinsCounter);
                this.collect_coin_music.play();
            }
        });
    }


    hitEnemyWithBottle() {

        this.level.enemies.forEach((enemy) => {
            if (bottle.isColliding(enemy)) {
                console.log(enemy);
                console.log(bottle);
                // this.enemies.splice(enemy, 1);
            }
        });

    }

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

    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);
        // mo.drawFrameBlue(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}