

const level1 = new Level(
    [
        new Chicken(600),
        new Chicken(900),
        new Chicken(1050),
        new Chicken(1050),
        new Chicken(1700),
        new Chicks(750),
        new Chicks(1200),
        new Chicks(1350),
        new Chicks(1400),
        new Chicks(2000),
        new Endboss()
    ],
    [
        new Cloud(300),
        new Cloud(500),
        new Cloud(1000),
        new Cloud(1500),
        new Cloud(2000),
        new Cloud(2400),
        new Cloud(2900),
        new Cloud(3200)
    ]
    ,
    [
        new BackgroundObject('img/5_background/layers/air.png', -719),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', -719),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', -719),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', -719),

        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 0),
        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 2),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 3),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 4),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 4),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 4),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 4),
    ],
    [
        new CollectableObjectsCoins(400),
        new CollectableObjectsCoins(800),
        new CollectableObjectsCoins(1100),
        new CollectableObjectsCoins(1500),
        new CollectableObjectsCoins(1700)
    ],
    [
        new CollectableObjectsBottles(600),
        new CollectableObjectsBottles(800),
        new CollectableObjectsBottles(1050),
        new CollectableObjectsBottles(1400),
        new CollectableObjectsBottles(1800)
    ]

);

