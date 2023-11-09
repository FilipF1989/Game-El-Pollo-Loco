class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;


    constructor() {
        this.bindTouchEvents();
        this.bindClickEvents();
    }

    bindClickEvents() {
        window.addEventListener('keydown', (e) => {
            if (e.keyCode == 39) {
                keyboard.RIGHT = true;
            }
            if (e.keyCode == 37) {
                keyboard.LEFT = true;
            }
            if (e.keyCode == 38) {
                keyboard.UP = true;
            }
            if (e.keyCode == 40) {
                keyboard.DOWN = true;
            }
            if (e.keyCode == 32) {
                keyboard.SPACE = true;
            }
            if (e.keyCode == 68) {
                keyboard.D = true;
            }
            if (e.keyCode == 77) {
                world.onOffMusic();
            }
            if (e.keyCode == 70) {
                world.toggleFullScreen();
            }
        });

        window.addEventListener('keyup', (e) => {
            if (e.keyCode == 39) {
                keyboard.RIGHT = false;
            }
            if (e.keyCode == 37) {
                keyboard.LEFT = false;
            }
            if (e.keyCode == 38) {
                keyboard.UP = false;
            }
            if (e.keyCode == 40) {
                keyboard.DOWN = false;
            }
            if (e.keyCode == 32) {
                keyboard.SPACE = false;
                if (world.soundOn) {
                    world.audios.charackter_jump.play();
                }

            }
            if (e.keyCode == 68) {
                keyboard.D = false;
            }

        });
    }


    bindTouchEvents() {
        document.getElementById('moveLeftMobile').addEventListener('touchstart' , (e) => {
            e.preventDefault();
            this.LEFT = true;
        })

        
        document.getElementById('moveLeftMobile').addEventListener('touchend' , (e) => {
            e.preventDefault();
            this.LEFT = false;
        })

        document.getElementById('moveRighttMobile').addEventListener('touchstart' , (e) => {
            e.preventDefault();
            this.RIGHT = true;
        })

        
        document.getElementById('moveRighttMobile').addEventListener('touchend' , (e) => {
            e.preventDefault();
            this.RIGHT = false;
        })

        document.getElementById('jumpMobile').addEventListener('touchstart' , (e) => {
            e.preventDefault();
            this.SPACE = true;
        })

        document.getElementById('jumpMobile').addEventListener('touchend' , (e) => {
            e.preventDefault();
            this.SPACE = false;
        })

        document.getElementById('throwBottleMobile').addEventListener('touchstart' , (e) => {
            e.preventDefault();
            this.D = true;
        })

        document.getElementById('throwBottleMobile').addEventListener('touchend' , (e) => {
            e.preventDefault();
            this.D = false;
        })
    }
}



