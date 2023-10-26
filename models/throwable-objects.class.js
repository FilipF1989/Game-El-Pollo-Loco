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

    /**
     * Create a new ThrowableObjects instance.
     * @param {number} x - The initial x-coordinate of the throwable object.
     * @param {number} y - The initial y-coordinate of the throwable object.
     */
    constructor(x, y) {
        super().loadImg('img/6_salsa_bottle/salsa_bottle.png');
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
            this.x += 22;
        }, 25);
    }
}


