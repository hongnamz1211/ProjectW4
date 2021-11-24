class Rat {
    name
    weight
    speed
    status
    constructor(name,weight,speed,status) {
        this.name = name
        this.weight = weight
        this.speed = speed
        this.status = status
    }
    getName() {
        return this.name
    }
    setName(name) {
        this.name = name
    }
    getWeight() {
        return this.weight
    }
    setWeight(weight) {
        this.weight = weight
    }
    getSpeed() {
        return this.speed
    }
    setSpeed(speed) {
        this.speed = speed
    }
    getStatus() {
        return this.status
    }
    setStatus(status) {
        this.status = status
    }
    sound() {
        console.log("chittt")
    }
}