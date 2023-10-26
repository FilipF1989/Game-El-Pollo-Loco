/**
 * Represents a status bar for the end boss's health.
 * Extends the DrawableObject class.
 */
class StatusbarLiveEndboss extends DrawableObject {
    /**
     * Create a new StatusbarLiveEndboss instance.
     */

    /**
     * An array of image paths representing the end boss's health status.
     * @type {string[]}
     */
    IMAGES_LIVE_ENDBOSS = [
        'img/7_statusbars/2_statusbar_endboss/blue.png',
        'img/7_statusbars/2_statusbar_endboss/green.png',
        'img/7_statusbars/2_statusbar_endboss/orange.png'
    ];

    /**
     * Create a new StatusbarLiveEndboss instance.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_LIVE_ENDBOSS);
        this.x = 200;
        this.y = 0;
        this.width = 230;
        this.height = 45;
        this.setPercentage(100);
    }

    /**
     * Set the percentage of the end boss's health and update the status bar image.
     * @param {number} percentage - The percentage of health.
     */
    setProcentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_LIVE_ENDBOSS[this.resolveImageIndex()];
        this.img = this.imageCash[path];
    }

    /**
     * Determine the appropriate status bar image index based on the health percentage.
     * @returns {number} - The index of the status bar image.
     */
    resolveImageIndex() {
        if (this.percantage == 100) {
            return 5;
        } else if (this.percantage > 80) {
            return 4;
        } else if (this.percantage > 60) {
            return 3;
        } else if (this.percantage > 40) {
            return 2;
        } else if (this.percantage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}

// Rest of the code (other classes and functions) goes here...
