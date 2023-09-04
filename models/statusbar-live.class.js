class StatusbarLive extends DrawableObject {


    IMAGES_LIVE = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ];

   

    constructor() {
        super();
        this.loadImages(this.IMAGES_LIVE);
        this.x = 10;
        this.y = 0;
        this.width = 230;
        this.height = 45;
        this.setProcentage(100);
    }

   

    setProcentage(percantage) {
        this.percantage = percantage;
        let path = this.IMAGES_LIVE[this.resolveImageIndex()];
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