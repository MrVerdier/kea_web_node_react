class Bob {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    bobTangle() {
        return this.x * this.y
    }
}

// exports.Bobstruction = Bobstruction;
module.exports = Bob