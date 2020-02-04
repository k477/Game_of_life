module.exports = class Flower extends Creature {
    constructor(x, y) {
        super(x, y);
        this.life = 0;
    }

    mul() {
        this.life++;
        let newCell = random(this.chooseCell(1));
        if (newCell && this.life > 90) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            let flower = new Flower(x, y);
            flowerArr.push(flower);
            this.life = 0;
        }
    }
}