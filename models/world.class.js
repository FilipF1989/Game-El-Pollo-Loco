// 

class World {
    character = new Character();
    level = level1;
    canvas;
    offset;
    ctx;
    keyboard;
    camera_x = 0;
    statusbarLive = new StatusbarLive();
    statusbarCoins = new StatusbarCoins();
    statusbarBottles = new StatusbarBottles();
    throwableObjects = [];
    coins = [
        new CollectableObjectsCoins(400),
        new CollectableObjectsCoins(800),
        new CollectableObjectsCoins(1100),
        new CollectableObjectsCoins(1500),
        new CollectableObjectsCoins(1700)
    ];
    bottles = [
        new CollectableObjectsBottles(200),
        new CollectableObjectsBottles(500),
        new CollectableObjectsBottles(700),
        new CollectableObjectsBottles(1000),
        new CollectableObjectsBottles(1400),
    ];
    

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
            // this.hitEnemyWithBottle();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObjects(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusbarLive.setProcentage(this.character.energy);
            }
        });
    }

    collectBottel() {
        this.bottles.forEach((bottle) => {
            if(this.character.isColliding(bottle)) {
                this.throwableObjects.push(new ThrowableObjects);
            }
        });
    }

    collectCoin() {
        this.coins.forEach((coin) => {
            if(this.character.isColliding(coin)) {
                console.log('You collect a coin');
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundObject);

        this.addObjectToMap(this.bottles);
        this.addObjectToMap(this.coins);

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