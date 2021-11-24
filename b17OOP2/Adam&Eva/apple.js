class Apple {
    weight

    constructor(weight) {
        this.weight = weight
    }

    getWeightApple() {
        return this.weight
    }

    decrease() {
        if (this.isEmpty()) {
            return this.weight--
        }
    }
    isEmpty() {
        if (this.getWeightApple() > 0) {
            return true
        } else {
            return false
        }
    }
}
