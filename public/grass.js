class Grass extends Creature {
    constructor(x, y) {
        super(x, y);
        this.life = 0;
    }

    mul() {
        this.life += 3;
        let newCell = random(this.chooseCell(0));
        if (newCell && this.life > 10) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 1;
            let grass = new Grass(x, y);
            grassArr.push(grass);
            this.life = 0;
        }
    }
}