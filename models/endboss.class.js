/**
 * Represents the end boss in the game.
 * Extends the MovableObject class.
 */
class Endboss extends MovableObject {
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    };

    firstContactWitchCharackter = false; // Flag to track the first contact with the character.
    animationRunning = false;
    height = 400; // Height of the end boss.
    width = 270; // Width of the end boss.
    game_win = new Audio('audio/game_win_sound.mp3'); // Audio for winning the game.

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

    /**
     * Creates a new Endboss instance.
     */
    constructor() {
        super().loadImg(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT); // Load alert animation images.
        this.loadImages(this.IMAGES_ATACKING); // Load attacking animation images.
        this.loadImages(this.IMAGES_DEAD); // Load dead animation images.
        this.loadImages(this.IMAGES_WALKING); // Load walking animation images.
        this.loadImages(this.IMAGES_HURT); // Load hurt animation images.
        this.energy = 100; // Initial energy of the end boss.
        this.speed = 8; // Speed of the end boss.
        this.x = 3000; // Initial x position of the end boss.
        this.y = 80; // Initial y position of the end boss.
    }

    /**
     * Animate the end boss's behavior.
     */
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
                        if (!this.animationRunning) {
                            this.animationRunning = true;
                            this.enemyAtackAnimation();
                        }
                    }
                }, 150);
            }, 100);
        }
    }

    /**
     * Animate the end boss's attack behavior.
     */
    enemyAtackAnimation() {
        const animatioInterval = setInterval(() => {
            if (this.enemyIsHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.moveLeft();
            } else if (this.isDead()) {
                this.gameWin();
            } else {
                this.playAnimation(this.IMAGES_ATACKING);
                this.moveLeft();
            }
        }, 150);
        setTimeout(() => {
            clearInterval(animatioInterval);
            this.enemyAtackAnimation();
        }, 10000);
    }




}
