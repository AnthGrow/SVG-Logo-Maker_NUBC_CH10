//create child classes for each shape - triangle, circle, square
//place common functionality and properties shared by each shape in a parent shape class and use inheritance to reuse the code in child classes
//refer to constructor exercieses
//

class Shape {
    constructor(color) {
        this.color = "";
    }
}

class Circle extends Shape {
    constructor ()
    //create shape - dimenions needed
    // <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
}

module.exports= {Circle, Triangle, Square}; 