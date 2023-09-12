

const level1 = new Level(
    [
        new Chicken(200),
        new Chicken(500),
        new Chicken(800),
        new Chicken(1000),
        new Chicken(1200),
        new Chicks(300),
        new Chicks(450),
        new Chicks(750),
        new Chicks(900),
        new Chicks(1250),
        new Endboss(1450)
    ],
    [
        new Cloud()
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
    ],
    [
        new CollectableObjectsCoins(400),
        new CollectableObjectsCoins(800),
        new CollectableObjectsCoins(1100),
        new CollectableObjectsCoins(1500),
        new CollectableObjectsCoins(1700)
    ],
    [
        new CollectableObjectsBottles(200),
        new CollectableObjectsBottles(500),
        new CollectableObjectsBottles(700),
        new CollectableObjectsBottles(1000),
        new CollectableObjectsBottles(1400),
    ]

);

