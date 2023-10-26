/**
 * Represents a game level.
 */
class Level {
    /**
     * Create a new Level instance.
     * @param {Array} enemies - An array of enemy objects in the level.
     * @param {Array} clouds - An array of cloud objects in the level.
     * @param {BackgroundObject} backgroundObject - The background object for the level.
     * @param {CollectableObjectsCoins} collectableObjectsCoins - The collectable coins in the level.
     * @param {CollectableObjectsBottles} collectableObjectsBottles - The collectable bottles in the level.
     * @param {ThrowableObjects} throwableObjects - The throwable objects in the level.
     */
    constructor(enemies, clouds, backgroundObject, collectableObjectsCoins, collectableObjectsBottles, throwableObjects, audios) {
        this.clouds = clouds;
        this.enemies = enemies;
        this.backgroundObject = backgroundObject;
        this.collectableObjectsCoins = collectableObjectsCoins;
        this.collectableObjectsBottles = collectableObjectsBottles;
        this.throwableObjects = throwableObjects;
        this.audios = audios;
    }

    /**
     * The x-coordinate where the level ends.
     * @type {number}
     */
    level_end_x = 2900;
}
