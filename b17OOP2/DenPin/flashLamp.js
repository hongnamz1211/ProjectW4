class FlashLamp {
    status
    constructor(status) {
        this.status = status
    }
    getStatus() {
        return this.status
    }
    setStatus(status) {
        this.status = status
    }
    light() {
        if (this.status) {
            console.log("Lighting")
        } else {
            console.log("Not lighting")
        }
    }
    turnOn() {
        battery.decreaseEnergy()
        this.status = true
    }
    turnOff() {
        this.status = false
    }
}