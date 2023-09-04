class CollectableObjectsCoins extends DrawableObject {

    constructor(x) {
        super().loadImg('img/8_coin/coin_1.png');
        this.x = x;
        this.y = 100;
    }
}


class CollectableObjectsBottles extends DrawableObject {

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

