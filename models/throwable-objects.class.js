class ThrowableObjects extends MovableObject {

    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }

    constructor(x, y) {
        super().loadImg('img/6_salsa_bottle/salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 70;
        this.throw();
    }


    throw() {
        this.speedY = 10;
        this.apllyGravity();
        setInterval(() => {
            this.x += 26;
        }, 25);
    }
}