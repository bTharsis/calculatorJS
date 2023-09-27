class AritmeticTreeGenerator {
    // devuelve un arbol

    constructor() {
        this.gerarchy = ["+", "-", "*", "/"];
    }

    // 5*4/5+3/2*6-5*9

    //  5+4/2 = 7
    //

    generateTree(expresion) {
        var tree = new aritmeticTree(new Graph());
        this._generateTree(expresion, tree);
    }

    _generateTree(expresion, tree) {
        // buscar la jerarquia mas pequena en la expresion de izquierda a derecha

        let index = -1;
        this.gerarchy.find((element) => {
            return (index = expresion.lastIndexOf(element)) >= 0;
        });
        //cuando se encuentra poner el signo en el grafo

        if (index < 0) {
            return new Graph(expresion[index]);
        } else {
            var graph = new Graph(expresion[index]);
        }
        //seguir con el lado izquierdo -- repetir
        //seguir con el lado derecho -- repetir
        graph = this._generateTree(expresion.slice(0, index), graph); // left
        graph = this._generateTree(expresion.slice(index + 1), graph); // right
    }
}
var generator = new AritmeticTreeGenerator();
generator.generateTree("5+4/2");
