class Canvas {
    constructor(cont) {
        this.canvasElement = document.createElement('canvas');
        this.context = this.canvasElement.getContext('2d');
        this.canvasElement.width = 200;
        this.canvasElement.height = 200;

        cont.appendChild(this.canvasElement);
    }
}
