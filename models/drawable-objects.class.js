class DrawableObject {
    img;
    imageCash = {};
    currentImage = 0;
    x = 120;
    y = 250;
    width = 150;
    height = 100;


    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        try {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            // console.warn('Console log', e);
            // console.log('Could not load imae', this.img.src);
        }
    }


    drawFrame(ctx) {
        if (this instanceof ThrowableObjects || this instanceof Chicken || this instanceof Endboss || this instanceof ThrowableObjects) {
            ctx.beginPath();
            ctx.strokeStyle  = 'black';
            ctx.lineWidth = '5';
            ctx.strokeStyle = '10';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCash[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCash[path];
        this.currentImage++;
    }
}