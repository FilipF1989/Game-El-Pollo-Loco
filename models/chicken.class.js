class Chicken extends MovableObject {

    offset = {
        top: -10,
        right: 0,
        bottom: 0,
        left: 0
    }
    height = 100;
    width = 80;
    y = 350;


    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ]



    constructor(x) {
        super().loadImg('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x + Math.random() * 500;
        this.speed = 1.95 + Math.random() * 1.25;
        this.energy = 20;
    }


    animate() {
        setInterval(() => {
            if (this.energy > 1) {
                this.moveLeft();
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 65);
    }
}

class Chicks extends MovableObject {

    offset = {
        top: -30,
        right: 0,
        bottom: 0,
        left: 0
    }

    height = 50;
    width = 50;
    y = 400;



    CHICKS_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    CHICKS_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ]

    constructor(x) {
        super().loadImg('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.CHICKS_WALKING);
        this.loadImages(this.CHICKS_DEAD);
        this.x = x + Math.random() * 500;
        this.speed = 1.95 + Math.random() * 1.25;
        this.energy = 20;
        
    }

    animate() {
        setInterval(() => {
            if (this.energy > 1) {
                this.moveLeft();
                this.playAnimation(this.CHICKS_WALKING);
            } else {
                this.playAnimation(this.CHICKS_DEAD);
                
            }
        }, 65);
    }
}