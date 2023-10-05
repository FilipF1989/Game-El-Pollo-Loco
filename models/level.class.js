class Level {
    enemies;
    clouds;
    backgroundObject;
    level_end_x = 2900;

    constructor(enemies,clouds,backgroundObject,collectableObjectsCoins,collectableObjectsBottles,throwableObjects) {
        this.clouds = clouds;
        this.enemies = enemies;
        this.backgroundObject = backgroundObject;
        this.collectableObjectsCoins = collectableObjectsCoins;
        this.collectableObjectsBottles = collectableObjectsBottles;
        this.throwableObjects = throwableObjects;

    }
}