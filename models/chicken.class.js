class Chicken extends MovableObject {

    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }
    width = 80;
    y = 350;
    height = 100;
    dead = false;
    

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ]

    enemy_dead = new Audio('audio/chicken.mp3');


    constructor(x) {
        super().loadImg('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
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

    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }
    
    height = 80;
    width = 80;
    y = 370;
    dead = false;

    enemy_dead = new Audio('audio/chicken.mp3');
    

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