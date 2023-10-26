
class Cloud extends MovableObject {

    y = 0;
    height = 290;
    width = 480;


    constructor(x) {
        super().loadImg('img/5_background/layers/4_clouds/1.png');

        this.x = x + Math.random() * 500;
        setInterval(() => {
           this.animate(); 
        }, 2000);
    }

    animate() {
        this.moveLeft();
    }

  
}