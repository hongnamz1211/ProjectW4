class Lamp {
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
    ElectricLamp() {
        return  this.status
    }
    turnOn() {
        this.status = true
        console.log("Lingting")
    }
    turnOff() {
        this.status = false
        console.log("Not lingting")
    }
}