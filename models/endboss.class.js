class Endboss extends MovableObject {

    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }

    firstContactWitchCharackter = false;
    stillAlive = true;
    height = 400;
    width = 270;

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_ATACKING = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    constructor() {
        super().loadImg(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATACKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.energy = 100;
        this.speed = 8;
        this.x = 3000;
        this.y = 80;
    }


    animate() {
        let canvas = document.getElementById('canvas');
        if (canvas.style.display == 'block') {
            setTimeout(() => {
                setInterval(() => {
                    if (world.character.x < 1960) {
                        this.playAnimation(this.IMAGES_ALERT);
                    }
                    if (world.character.x > 1961 && !this.firstContactWitchCharackter) {
                        this.firstContactWitchCharackter = true;
                        setInterval(() => {
                            if (this.enemyIsHurt()) {
                                this.playAnimation(this.IMAGES_HURT);
                            } else if (this.isDead()) {
                                this.playAnimation(this.IMAGES_DEAD);
                                this.stillAlive = false;
                            } else {
                                this.playAnimation(this.IMAGES_ATACKING);
                            }
                            this.moveLeft();
                        }, 150);
                    }
                }, 150);
            }, 100);
        }
    }
}
