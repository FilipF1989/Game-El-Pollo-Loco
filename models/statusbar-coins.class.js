class StatusbarCoins extends DrawableObject {

    x = 10;
    y = 40;
    width = 230;
    height = 45;

    IMAGES_COINS = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_COINS);
        this.setCoinCounter(0);

    }

    setCoinCounter(coinCounter) {
        this.coinCounter = coinCounter;
        let path = this.IMAGES_COINS[this.countCoins()];
        this.img = this.imageCash[path];
    }

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