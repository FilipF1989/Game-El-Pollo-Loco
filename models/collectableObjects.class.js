class CollectableObjectsCoins extends DrawableObject {

    width = 100;
    height = 100;

    offset = {
        top:30,
        bottom:30,
        left:-30,
        right:-30
    }

    IMAGE_COIN = [
        'img/8_coin/coin_1.png'
    ];

    constructor(x) {
        super().loadImg('img/8_coin/coin_1.png');
        this.loadImages(this.IMAGE_COIN);
        this.x = x;
        this.y = 100;
    }
}


class CollectableObjectsBottles extends DrawableObject {

    offset = {
        top:10,
        bottom: 5,
        left:75,
        right:75
    }

    IMAGES_BOTTLES_ROTATE = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    constructor(x) {
        super().loadImg('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_BOTTLES_ROTATE);
        this.x = x;
        this.y = 350;
        this.speed = 2;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLES_ROTATE);
        }, 250);
    }
}

