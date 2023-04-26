export class App {
    constructor() {
        this.root = document.getElementById("root");
        this.bindGlobalFunctions();
    }

    bindGlobalFunctions() {
        document.idCounter = 0;
        document.getID = function () {
            document.idCounter += 1;
            return document.idCounter;
        };
    }

    /**
     * @param {DOM} element
     */
    drawElement(element) {
        const childrenCount = this.root.children.length;

        for (let i = 0; i < childrenCount; i++) {
            this.root.removeChild(this.root.children[0]);
        }

        this.root.append(element.getDOM());
    }
}