class Level {
    enemies;
    clouds;
    backgroundObject;
    level_end_x = 2200;

    constructor(enemies,clouds,backgroundObject) {
        this.clouds = clouds;
        this.enemies = enemies;
        this.backgroundObject = backgroundObject;
    }
}