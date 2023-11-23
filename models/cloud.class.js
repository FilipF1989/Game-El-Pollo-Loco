
/**
 * Represents a cloud object that extends MovableObject.
 * @extends MovableObject
 */
class Cloud extends MovableObject {
    /**
     * Initial y-coordinate of the cloud.
     * @type {number}
     */
    y = 0;

    /**
     * Height of the cloud.
     * @type {number}
     */
    height = 290;

    /**
     * Width of the cloud.
     * @type {number}
     */
    width = 480;

    /**
     * Creates a cloud object.
     * @constructor
     * @param {number} x - Initial x-coordinate.
     */
    constructor(x) {
        super().loadImg('img/5_background/layers/4_clouds/1.png');

        /**
         * Sets the x-coordinate with a random offset.
         * @type {number}
         */
        this.x = x + Math.random() * 500;

        // Setzt ein Intervall für die Animation der Wolke
        setInterval(() => {
            this.animate();
        }, 2000);
    }

    /**
     * Animates the cloud by moving it to the left.
     */
    animate() {
        this.moveLeft();
    }
}
