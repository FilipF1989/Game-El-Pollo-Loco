class Chicken extends MovableObject {
    width = 60;
    y = 350;
    height = 100;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor(x) {
        super().loadImg('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = x + Math.random() * 500;
        this.speed = 1.95 + Math.random() * 1.25;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 60);
        
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 150);

    }
}

class Chicks extends MovableObject {

    height = 55;
    width = 35;
    y = 390;

    CHICKS_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    constructor(x) {
        super().loadImg('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.CHICKS_WALKING);
        this.x = x + Math.random() * 500;
        this.speed = 1.95 + Math.random() * 1.25;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 60);
        
        setInterval(() => {
            this.playAnimation(this.CHICKS_WALKING);
        }, 150);

    }
}