class Calculator {
    calculate(expresion) {
        this.aritmeticTree.generateTree(expresion); // Generar
        return this.aritmeticTree.run(); // Recorrer
    }

    add(num1, num2) {
        return num1 + num2;
    }

    substract(num1, num2) {
        return num1 - num2;
    }

    division(num1, num2) {
        return num1 / num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }
}
