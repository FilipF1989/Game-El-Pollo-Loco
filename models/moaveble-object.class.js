class MovableObject extends DrawableObject {

    speed = 0.5;
    otherDirection = false;
    speedY = 0;
    accelerataion = 2;
    energy = 100;
    lastHit = 0;



    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };

    apllyGravity() {
        setInterval(() => {
            if (this.isAbouveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accelerataion;

            }
        }, 1000 / 40);
    }

    isAbouveGround() {
        if (this instanceof ThrowableObjects) {
            return true;
        } else {
            return this.y < 150;
        }

    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }



    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;

    }


    isJumpingOn(mo) {
        if (this.isColliding(mo)) {
            return false;
        }
        return this.y + this.height - this.offset.bottom > mo.y + mo.offset.top;
    }


    

    hitEnemy() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHitOnEnemy = new Date().getTime();
        }
    }

    enemyIsHurt() {
        let timePassed = new Date().getTime() - this.lastHitOnEnemy;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    hit() {
        this.energy -= 4;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    hitEndboss() {
        this.energy -= 20;
    }
    

    jump() {
        this.speedY = 10;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCash[path];
        this.currentImage++;
    }

}