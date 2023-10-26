/**
 * Represents a status bar for bottles in the game.
 * Extends the DrawableObject class.
 */
class StatusbarBottles extends DrawableObject {
    /**
     * Create a new StatusbarBottles instance.
     */
    
    /**
     * The X coordinate of the status bar.
     * @type {number}
     */
    x = 10;

    /**
     * The Y coordinate of the status bar.
     * @type {number}
     */
    y = 80;

    /**
     * The width of the status bar.
     * @type {number}
     */
    width = 230;

    /**
     * The height of the status bar.
     * @type {number}
     */
    height = 45;


     /**
     * An array of image paths representing bottle status.
     * @type {string[]}
     */
    IMAGES_BOTTLES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];

    /**
     * Create a new StatusbarBottles instance.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLES);
        this.setBottleCounter(0);

    }


     /**
     * Set the bottle counter and update the status bar image.
     * @param {number} bottleCounter - The number of bottles.
     */
    setBottleCounter(bottleCounter) {
        this.bottleCounter = bottleCounter;
        let path = this.IMAGES_BOTTLES[this.countBottles()];
        this.img = this.imageCash[path];
    }


    /**
     * Determine the appropriate status bar image based on the bottle count.
     * @returns {number} - The index of the status bar image.
     */
    countBottles() {
        if (this.bottleCounter == 5) {
            return 5;
        } else if (this.bottleCounter == 4) {
            return 4;
        } else if (this.bottleCounter == 3) {
            return 3;
        } else if (this.bottleCounter == 2) {
            return 2;
        } else if (this.bottleCounter == 1) {
            return 1;
        } else {
            return 0;
        }
    }

}