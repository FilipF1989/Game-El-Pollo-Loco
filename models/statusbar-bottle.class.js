class StatusbarBottles extends DrawableObject {

    x = 10;
    y = 80;
    width = 230;
    height = 45;

    IMAGES_BOTTLES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLES);
        this.setBottleCounter(0);

    }

    bottleCounter = 0;

    setBottleCounter(bottleCounter) {
        this.bottleCounter = bottleCounter;
        let path = this.IMAGES_BOTTLES[this.countBottles()];
        this.img = this.imageCash[path];
    }

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