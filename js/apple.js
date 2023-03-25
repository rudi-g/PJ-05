class Apple {
    constructor(canvas) {
        this.x = 0;
        this.y = 0;
        
        this.canvas = canvas;

        this.config =  new Config();
        this.getPosition();
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = "#279b17";
        context.arc(this.x + (this.config.cellSize / 2), this.y + (this.config.cellSize / 2), this.config.appleSize, 0, 2 * Math.PI);
        context.fill();
    }

    getPosition() {
        this.x = getRandomInt(0, this.canvas.canvasElement.width / this.config.cellSize) * this.config.cellSize;
        this.y = getRandomInt(0, this.canvas.canvasElement.height / this.config.cellSize) * this.config.cellSize;
    }
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

// export default Apple;