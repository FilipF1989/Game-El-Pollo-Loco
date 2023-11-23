/**
 * Represents a chicken enemy that extends MovableObject.
 * @extends MovableObject
 */
class Chicken extends MovableObject {
    /**
     * Offset values for collision detection.
     * @type {Object}
     * @property {number} top - Top offset.
     * @property {number} right - Right offset.
     * @property {number} bottom - Bottom offset.
     * @property {number} left - Left offset.
     */
    offset = {
        top: -10,
        right: 0,
        bottom: 0,
        left: 0
    };

    /**
     * Height of the chicken.
     * @type {number}
     */
    height = 100;

    /**
     * Width of the chicken.
     * @type {number}
     */
    width = 80;

    /**
     * Initial y-coordinate of the chicken.
     * @type {number}
     */
    y = 350;

    /**
     * Array of image paths for walking animation.
     * @type {string[]}
     */
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    /**
     * Array of image paths for dead state.
     * @type {string[]}
     */
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    /**
     * Audio for chicken death.
     * @type {Audio}
     */
    enemyDiesSound = new Audio('audio/chicken.mp3');

    /**
     * Creates a chicken object.
     * @constructor
     * @param {number} x - Initial x-coordinate.
     */
    constructor(x) {
        super().loadImg('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x + Math.random() * 500;
        this.speed = 1.95 + Math.random() * 1.25;
        this.energy = 20;
    }

    /**
     * Animate the chicken's movement and state.
     */
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

/**
 * Represents chicks enemies that extend MovableObject.
 * @extends MovableObject
 */
class Chicks extends MovableObject {
    /**
     * Offset values for collision detection.
     * @type {Object}
     * @property {number} top - Top offset.
     * @property {number} right - Right offset.
     * @property {number} bottom - Bottom offset.
     * @property {number} left - Left offset.
     */
    offset = {
        top: -30,
        right: 0,
        bottom: 0,
        left: 0
    };

    /**
     * Height of the chicks.
     * @type {number}
     */
    height = 50;

    /**
     * Width of the chicks.
     * @type {number}
     */
    width = 50;

    /**
     * Initial y-coordinate of the chicks.
     * @type {number}
     */
    y = 400;

    /**
     * Audio for chicks' sound.
     * @type {Audio}
     */
    enemyDiesSound = new Audio('audio/chicks_sound.mp3');

    /**
     * Array of image paths for walking animation.
     * @type {string[]}
     */
    CHICKS_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    /**
     * Array of image paths for dead state.
     * @type {string[]}
     */
    CHICKS_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    /**
     * Creates a chicks object.
     * @constructor
     * @param {number} x - Initial x-coordinate.
     */
    constructor(x) {
        super().loadImg('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.CHICKS_WALKING);
        this.loadImages(this.CHICKS_DEAD);
        this.x = x + Math.random() * 500;
        this.speed = 1.95 + Math.random() * 1.25;
        this.energy = 20;
    }

    /**
     * Animate the chicks' movement and state.
     */
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