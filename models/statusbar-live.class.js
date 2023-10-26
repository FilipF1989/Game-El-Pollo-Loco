/**
 * Represents a status bar for the character's health.
 * Extends the DrawableObject class.
 */
class StatusbarLive extends DrawableObject {
    /**
     * Create a new StatusbarLive instance.
     */

    /**
     * An array of image paths representing the character's health status.
     * @type {string[]}
     */
    IMAGES_LIVE = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ];

    /**
     * Create a new StatusbarLive instance.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_LIVE);
        this.x = 10;
        this.y = 0;
        this.width = 230;
        this.height = 45;
        this.setPercentage(100);
    }

    /**
     * Set the percentage of the character's health and update the status bar image.
     * @param {number} percentage - The percentage of health.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_LIVE[this.resolveImageIndex()];
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
        } else  {
            return 0;
        }
    }

   
}

// Rest of the code (other classes and functions) goes here...
