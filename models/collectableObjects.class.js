/**
 * Represents a collectible coin in the game.
 * Extends the DrawableObject class.
 */
class CollectableObjectsCoins extends DrawableObject {

    width = 100;
    height = 100;

    offset = {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20
    }


    IMAGE_COIN = [
        'img/8_coin/coin_1.png'
    ];


    /**
     * Creates a new CollectableObjectsCoins instance.
     * @param {number} x - The x-coordinate of the coin's position.
     */
    constructor(x) {
        super().loadImg('img/8_coin/coin_1.png');
        this.loadImages(this.IMAGE_COIN);
        this.x = x;
        this.y = 100;
    }
}


/**
 * Represents a collectible bottle in the game.
 * Extends the DrawableObject class.
 */
class CollectableObjectsBottles extends DrawableObject {

    offset = {
        top: 0,
        bottom: 0,
        left: 60,
        right: 60
    }

    IMAGES_BOTTLES_ROTATE = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];


    /**
     * Creates a new CollectableObjectsBottles instance.
     * @param {number} x - The x-coordinate of the bottle's position.
     */
    constructor(x) {
        super().loadImg('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_BOTTLES_ROTATE);
        this.x = x;
        this.y = 350;
        this.speed = 2;
        this.animate();
    }


    /**
     * Animate the bottle's rotation.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLES_ROTATE);
        }, 250);
    }
}

