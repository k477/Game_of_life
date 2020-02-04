import { Socket } from "dgram";

let matrix = [];
let side = 10;
let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let flowerArr = [];
let mowerArr = [];
let girlArr = [];
let matrixSize = 80;

function setup() {
    matrixGenerator(80, 800, 50, 50, 10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('grey');
    frameRate(3);

    noStroke();

    function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, flowerCount) {
        for (let index = 0; index < matrixSize; index++) {
            matrix[index] = [];
            for (let i = 0; i < matrixSize; i++) {
                matrix[index][i] = 0;
            }
        }
        function action(count, number) {
            for (let index = 0; index < count; index++) {
                let x = Math.floor(random(0, matrixSize));
                let y = Math.floor(random(0, matrixSize));
                matrix[y][x] = number;
            }
        }
        action(grassCount, 1);
        action(grassEaterCount, 2);
        action(predatorCount, 3);
        action(flowerCount, 4);

    }

    document.getElementById("creator").addEventListener("click", creator);
    function creator() {
        for (let i = 0; i < 5; i++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 1;
            let grass = new Grass(x, y);
            grassArr.push(grass);

            x = Math.floor(random(0, matrixSize));
            y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 2;
            let grassEater = new GrassEater(x, y);
            grassEaterArr.push(grassEater);

            x = Math.floor(random(0, matrixSize));
            y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 3;
            let predator = new Predator(x, y);
            predatorArr.push(predator);

            x = Math.floor(random(0, matrixSize));
            y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 4;
            let flower = new Flower(x, y);
            flowerArr.push(flower);
        }
    }

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            }
            else if (matrix[y][x] == 3) {
                let predator = new Predator(x, y);
                predatorArr.push(predator);
            }
            else if (matrix[y][x] == 4) {
                let flower = new Flower(x, y);
                flowerArr.push(flower);
            }
        }
    }
}

function draw() {

    for (let y = 0; y < matrix.length; y++) {
        const element = matrix[y];
        for (let x = 0; x < element.length; x++) {

            if (matrix[y][x] == 1) {
                fill('green')
            }
            else if (matrix[y][x] == 2) {
                fill('yellow')
            }
            else if (matrix[y][x] == 3) {
                fill('red')
            }
            else if (matrix[y][x] == 4) {
                fill('pink')
            }
            else {
                fill('grey')
            }
            ellipse(x * side, y * side, side, side);
        }
    }

    //tanel server
    function actionFromServer(){
        for (let index = 0; index < grassArr.length; index++) {
            grassArr[index].mul();
        }
        for (let index = 0; index < grassEaterArr.length; index++) {
            grassEaterArr[index].eat();
        }
        for (let index = 0; index < predatorArr.length; index++) {
            predatorArr[index].eat();
        }
        for (let index = 0; index < flowerArr.length; index++) {
            flowerArr[index].mul();
        }
    }
    actionFromServer();

}

/*
function mousePressed(){
    var x = mouseX;
    var y = mouseY;
    var arr = [x,y];
    socket.emit('Pressed', arr);
}*/


//serverum generacnel array-nery
//script-um lsel weather u matrix
//serveric socket-ov uxarkel weathern u matrix
