class StatusbarLiveEndboss extends DrawableObject {

    IMAGES_LIVE_ENDBOSS = [
        'img/7_statusbars/2_statusbar_endboss/blue.png',
        'img/7_statusbars/2_statusbar_endboss/green.png',
        'img/7_statusbars/2_statusbar_endboss/orange.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_LIVE_ENDBOSS);
        this.x = 200;
        this.y = 0;
        this.width = 230;
        this.height = 45;
        this.setProcentage(100);
    }

   

    setProcentage(percantage) {
        this.percantage = percantage;
        let path = this.IMAGES_LIVE_ENDBOSS[this.resolveImageIndex()];
        this.img = this.imageCash[path];
    }

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