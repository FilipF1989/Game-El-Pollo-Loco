/**
 * Represents throwable objects in the game.
 * Extends the MovableObject class.
 */
class ThrowableObjects extends MovableObject {
    /**
     * Create a new ThrowableObjects instance.
     * @param {number} x - The initial x-coordinate of the throwable object.
     * @param {number} y - The initial y-coordinate of the throwable object.
     */

    /**
     * An object representing the offset values for collision detection.
     * @type {Object}
     */
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }

    bottleHit = false;

    /**
     * Create a new ThrowableObjects instance.
     * @param {number} x - The initial x-coordinate of the throwable object.
     * @param {number} y - The initial y-coordinate of the throwable object.
     */

    SALSA_BOTTLE_FLY = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    SALSA_BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    constructor(x, y) {
        super();
        this.loadImages(this.SALSA_BOTTLE_FLY);
        this.loadImages(this.SALSA_BOTTLE_SPLASH);
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 70;
        this.throw();
    }

    throw() {
        this.speedY = 18;
        this.apllyGravity();
        setInterval(() => {
        this.playAnimation(this.SALSA_BOTTLE_FLY);
            this.x += 22;
        }, 25);
    }
}


