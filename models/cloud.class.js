class Cloud extends MovableObject {

    y = 0;
    height = 290;
    width = 480;
    speed = 2;


    constructor(x) {
        super().loadImg('img/5_background/layers/4_clouds/1.png');

        this.x = x + Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/25);
    }

  
}