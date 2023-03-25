class Score {
    constructor(cont) {
        this.scoreTable = document.querySelector(cont);
        this._score = 0; 
        this._highScore = +window.localStorage.highScore || 0;

        this.draw();
    }

    draw() {
        this.scoreTable.querySelector('.count').innerHTML = this._score;  
        this.scoreTable.querySelector('.high').innerHTML = this._highScore;  
    }
    
    increase() {
        this._score++;
        this.draw();
    }

    checkHighScore() {
        if (this._score > this._highScore) {
            this._highScore = this._score;
            window.localStorage.highScore = this._score;
        }
    }
    
    reset() {
        this._score = 0;
        this.draw();
    }
}
