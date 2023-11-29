/**
 * Represents a movable object in the game.
 * Extends the DrawableObject class.
 */
class MovableObject extends DrawableObject {
    /**
     * The speed of the movable object.
     * @type {number}
     */
    speed = 0.5;

    /**
     * Indicates the direction of the object.
     * @type {boolean}
     */
    otherDirection = false;

    /**
     * The vertical speed of the object.
     * @type {number}
     */
    speedY = 0;

    /**
     * The acceleration value.
     * @type {number}
     */
    accelerataion = 2;

    /**
     * The energy of the object.
     * @type {number}
     */
    energy = 100;

    /**
     * The timestamp of the last hit.
     * @type {number}
     */
    lastHit = 0;


    /**
     * Boolean for idle state
     * @date 11/23/2023 - 11:02:38 AM
     *
     * @type {boolean}
     */
    isIdle = 0;
    isLongIdle = 0;


    /**
     * Defines the offset properties for collision detection.
     * @type {{top: number, right: number, bottom: number, left: number}}
     */
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };


    /**
    * Apply gravity to the object, making it fall if not on the ground.
    */
    mapllyGravity() {
        setInterval(() => {
            if (this.isAbouveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accelerataion;
            }
        }, 1000 / 40);
    }


    /**
    * Check if the object is above the ground or not.
    * @returns {boolean} True if above the ground, false otherwise.
    */
    isAbouveGround() {
        if (this instanceof ThrowableObjects) {
            return true;
        } else {
            return this.y < 150;
        }
    }


    /**
    * Make the object jump.
    */
    jump() {
        this.speedY = 10;
    }


    /**
    * Move the object to the right.
    */
    moveRight() {
        this.x += this.speed;
        this.onAction();
    }


    /**
  * Move the object to the left.
  */
    moveLeft() {
        this.x -= this.speed;
        this.onAction();
    }


    /**
     * Check if the object is colliding with another object.
     * @param {MovableObject} mo - The other object to check collision with.
     * @returns {boolean} True if colliding, false otherwise.
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }


    /**
   * Reduce the object's energy when hit by an enemy.
   */
    hitEnemy() {
        this.energy -= 40;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHitOnEnemy = new Date().getTime();
        }
    }


    /**
    * Check if the object is hurt by an enemy.
    * @returns {boolean} True if hurt, false otherwise.
    */
    enemyIsHurt() {
        let timePassed = new Date().getTime() - this.lastHitOnEnemy;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    /**
     * Reduce the object's energy when hit.
     */
    hit() {
        this.energy -= 4;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * Check if the object is hurt.
     * @returns {boolean} True if hurt, false otherwise.
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }


    /**
 * Check if the object is in an idle state.
 * @returns {boolean} True if idle, false otherwise.
 */
    isIdleState() {
        let timePassed = new Date().getTime() - this.isIdle;
        timePassed = timePassed / 1000;

        if (timePassed > 1 && timePassed < 3) {
            return true;
        } else {
            return false;
        }
    }


    /**
 * Check if the object is in a long idle state.
 * @returns {boolean} True if in long idle state, false otherwise.
 */
    isLongIdleState() {
        let timePassed = new Date().getTime() - this.isLongIdle;
        timePassed = timePassed / 1000;

        if (timePassed >= 3) {
            return true;
        } else {
            return false;
        }
    }


    /**
 * Update the idle state timestamps when an action is performed.
 */
    onAction() {
        this.isIdle = new Date().getTime();
        this.isLongIdle = new Date().getTime();
    }


    /**
     * Check if the object is dead.
     * @returns {boolean} True if dead, false otherwise.
     */
    isDead() {
        return this.energy === 0;
    }


    /**
     * Reduce the object's energy when hit by the end boss.
     */
    hitEndboss() {
        this.energy -= 20;
    }


    /**
   * Play an animation for the object.
   * @param {Array} images - An array of image paths for the animation.
   */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCash[path];
        this.currentImage++;
    }


    /**
     * Resturn the bottle splash animation
     * @date 11/22/2023 - 12:20:04 PM
     */
    bottleSplash() {
        return this.loadImages(this.SALSA_BOTTLE_SPLASH);
    }


    /**
     * Trigger a game win event.
     */
    gameWin() {
        let canvasBox = document.querySelector('.canvasBox');
        let gameOverScreen = document.querySelector('.gameOver');
        let canvas = document.getElementById('canvas');

        canvasBox.style.display = 'none';
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(() => {
            canvas.style.display = 'none';
            gameOverScreen.style.display = 'block';
        }, 2000);
    }

    /**
     * Trigger a game lost event.
     */
    gameLost() {
        let gameOverScreen = document.querySelector('.gameOver');
        let canvas = document.getElementById('canvas');
        let endGameScreen = document.querySelector('.lostOrWinScreen');
        let canvasBox = document.querySelector('.canvasBox');

        canvasBox.style.display = 'none';
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(() => {
            canvas.style.display = 'none';
            gameOverScreen.style.display = 'block';
            endGameScreen.src = 'img/9_intro_outro_screens/game_over/oh no you lost!.png';
        }, 2000);
    }
}
