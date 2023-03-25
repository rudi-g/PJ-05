class GameAnimation {
    constructor(update, draw) {
        this.update = update;
        this.draw = draw;

        this.config = new Config();
        this.pause  = false;
        this.animate = this.animate.bind(this);
        this.animate();
    }

    animate() {
        if (this.pause) {
            return;
        }

        requestAnimationFrame(this.animate);

        if (++this.config.step < this.config.maxStep) {
            return;
        }
        
        this.config.step = 0;
    
        this.update();
        this.draw();
    }

}
