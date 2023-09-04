class Cloud extends MovableObject {

    y = 0;
    height = 290;
    width = 480;


    constructor() {
        super().loadImg('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }

  
}