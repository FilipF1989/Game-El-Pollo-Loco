/**
 * Represents a status bar for coins in the game.
 * Extends the DrawableObject class.
 */
class StatusbarCoins extends DrawableObject {
    /**
     * Create a new StatusbarCoins instance.
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
    y = 40;

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
     * An array of image paths representing coin status.
     * @type {string[]}
     */
    IMAGES_COINS = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];

    /**
     * Create a new StatusbarCoins instance.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_COINS);
        this.setCoinCounter(0);

    }

     /**
     * Set the coin counter and update the status bar image.
     * @param {number} coinCounter - The number of coins.
     */
    setCoinCounter(coinCounter) {
        this.coinCounter = coinCounter;
        let path = this.IMAGES_COINS[this.countCoins()];
        this.img = this.imageCash[path];
    }


    /**
     * Determine the appropriate status bar image based on the coin count.
     * @returns {number} - The index of the status bar image.
     */
    countCoins() {
        if (this.coinCounter == 5) {
            return 5;
        } else if (this.coinCounter == 4) {
            return 4;
        } else if (this.coinCounter == 3) {
            return 3;
        } else if (this.coinCounter == 2) {
            return 2;
        } else if (this.coinCounter == 1) {
            return 1;
        } else {
            return 0;
        }
    }

}
