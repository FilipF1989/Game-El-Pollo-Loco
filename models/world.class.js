


class World {
    character = new Character();
    chicken = new Chicken();
    chicks = new Chicks();
    endboss = new Endboss();
    statusbarLive = new StatusbarLive();
    statusbarCoins = new StatusbarCoins();
    statusbarBottles = new StatusbarBottles();
    level = level1;
    canvas;
    offset;
    ctx;
    keyboard;
    camera_x = 0;
    coinsCounter = 0;
    throwableObjects = [];
    bottles = [];
    collect_coin_music = new Audio('audio/collect_coin.mp3');
    collect_bottle_music = new Audio('audio/collect_bottle.mp3');
    enemy_dead = new Audio('audio/chicken.mp3');
    bottle_hit = new Audio('audio/glass.mp3');


    constructor(canvas, keyboard) {
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

    checkThrowObjects() {
        if (this.keyboard.D && this.bottles.length > 0) {
            let bottle = new ThrowableObjects(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.bottles.shift();
            this.statusbarBottles.setBottleCounter(this.bottles.length);
            this.hitEnemyWithBottle();
        }
    }


    hitEnemyWithBottle() {
        let boss = this.level.enemies.slice(-1)[0];
        this.level.enemies.forEach((enemy, index) => {
            this.throwableObjects.forEach((bottle, bottleIndex) => {
                if (bottle.isColliding(enemy) && enemy !== boss) {
                    enemy.hitEnemy();
                    this.enemy_dead.play();
                    this.throwableObjects.splice(bottleIndex, 1);
                    if (enemy.energy < 1) {
                        setTimeout(() => {
                            this.level.enemies.splice(index, 1);
                        }, 2000);
                    }
                }
                if (bottle.isColliding(boss)) {
                    this.enemy_dead.play();
                    this.throwableObjects.splice(bottleIndex, 1);
                    boss.hitEnemy();
                }
            });
        });
    }


    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAbouveGround() && enemy.energy > 0) {
                this.character.hit();
                this.statusbarLive.setProcentage(this.character.energy);
            }
        });
    }


    jumpOnEnemy() {
        for (let index = this.level.enemies.length - 1; index >= 0; index--) {
            const enemy = this.level.enemies[index];
            if (this.character.isColliding(enemy) && enemy.energy > 1 && this.character.isAbouveGround() && this.character.speedY < -1) {
                enemy.energy -= 20;
                this.enemy_dead.play();
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



    collectBottel() {
        this.level.collectableObjectsBottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                // Entferne die aktuell eingesammelte Flasche aus dem Array
                this.level.collectableObjectsBottles.splice(index, 1);
                this.statusbarBottles.setBottleCounter(this.bottles.length + 1);
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