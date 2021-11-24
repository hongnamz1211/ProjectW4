class Battery {
    energy
    constructor(energy) {
        this.energy = energy
    }
    getEnergy() {
        return this.energy
    }
    decreaseEnergy() {
        if (this.energy > 0) {
            return this.energy --
        }
    }
}
