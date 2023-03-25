class Main {
    constructor(cont) {
        this.canvas = new Canvas(cont);
        this.snake = new Snake(this.pauseGame.bind(this), this.resumeGame.bind(this));
        this.apple = new Apple(this.canvas);
        this.score = new Score('.game__score');
    
        this.animation = new GameAnimation(this.update.bind(this), this.draw.bind(this));
    }

    update() {
        this.snake.update(this.apple, this.score, this.canvas);
    }

    draw() {
        this.canvas.context.clearRect(0, 0, this.canvas.canvasElement.width, this.canvas.canvasElement.height);

        this.snake.draw(this.canvas.context);
        this.apple.draw(this.canvas.context);
    }

    pauseGame() {
        this.animation.pause = true;
    }

    resumeGame() {
        this.animation.pause = false;
        this.animation.animate();
    }
}

document.querySelector('.start-window').addEventListener('click', function() {
    if (!this.classList.contains('hide')) {
        this.remove();
        new Main(document.querySelector('.canvas-wrapper'));
    } 
});

/*document.querySelector('.restart').addEventListener('click', function() {
        document.querySelector('.canvas-wrapper canvas').remove()
        new Main(document.querySelector('.canvas-wrapper'));

});*/
