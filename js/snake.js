class Snake {
    constructor(pauseGame, resumeGame) {
        this.config = new Config;
        this.x = 80;
        this.y = 80;
        this.dx = this.config.cellSize;
        this.dy = 0;
        this.tails = [];
        this.tailsCount = 2;
        this.pauseGame = pauseGame;
        this.resumeGame = resumeGame;
        this.control();
    }
    
    death() {
        this.x = 200;
        this.y = 200;
        this.dx = this.config.cellSize;
        this.dy = 0;
        this.tails = [];
        this.tailsCount = 2;
    }

    update(apple, score, canvas) {
        this.x += this.dx;
        this.y += this.dy;
     
        if (this.x < 0) {
            this.x = canvas.canvasElement.width - this.config.cellSize;
        } else if (this.x >= canvas.canvasElement.width) {
            this.x = 0;
        }
    
        if (this.y < 0) {
            this.y = canvas.canvasElement.height - this.config.cellSize;
        } else if (this.y >= canvas.canvasElement.height) {
            this.y = 0;
        }

        this.tails.unshift({x: this.x, y: this.y});
    
        if (this.tails.length > this.tailsCount) {
            this.tails.pop();
        }
    
        this.tails.forEach((el, index) => {    
            if (el.x === apple.x && el.y === apple.y) {
                this.tailsCount++;
                score.increase();
                
                this.findCorrectPosition(apple);
            }
    
            for(let i = index + 1; i < this.tails.length; i++) {
                if ( el.x == this.tails[i].x && el.y == this.tails[i].y ) {
                    this.pauseGame();
                    score.checkHighScore();

                    document.querySelector('.pause-bg').classList.remove('hide');

                    document.querySelector('.restart').addEventListener('click', () => {
                        document.querySelector('.pause-bg').classList.add('hide');
                        
                        score.reset();
                        this.death();
                        apple.getPosition();
                        this.resumeGame();
                    });
                }
            }
        }); 
    }

    draw(context) {
        this.tails.forEach((el, index) => {
            if (index == 0) {
                context.fillStyle = "#FA0556";
            } else {
                context.fillStyle = "#A00034";
            }
            context.fillRect(el.x, el.y, this.config.cellSize, this.config.cellSize);
        });        
    }

    control() {
        document.addEventListener("keydown", (e) => {
            if (e.code == "KeyW" || e.code == "ArrowUp") {
                this.dy = -this.config.cellSize;
                this.dx = 0;
            } else if (e.code == "KeyD" || e.code == "ArrowRight") {
                this.dx = this.config.cellSize;
                this.dy = 0;
            } else if (e.code == "KeyS" || e.code == "ArrowDown") {
                this.dy = this.config.cellSize;
                this.dx = 0;
            } else if (e.code == "KeyA" || e.code == "ArrowLeft") {
                this.dx = -this.config.cellSize;
                this.dy = 0;
            }
        });
    }

    findCorrectPosition(apple){
        apple.getPosition();

        this.tails.forEach((el) => { 
            if (el.x === apple.x && el.y === apple.y) {
                this.findCorrectPosition(apple);
            }
        });
    }

}
