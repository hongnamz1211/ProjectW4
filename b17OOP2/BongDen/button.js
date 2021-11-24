class Button {
    status
    lamp
    constructor(status, lamp) {
        this.status = status
        this.lamp = lamp
    }
    // switchButton() {
    //
    // }
    connectToLamp(lamp) {
        this.lamp = lamp
    }
    switchOff() {
        if (this.lamp === undefined) {
            console.log("Connect To Lamp")
        } else {
            this.status = true
            this.lamp.turnOn()
        }
    }
    switchOn() {
        if (this.lamp === undefined) {
            console.log("Connect To Lamp")
        } else {
            this.status = false
            this.lamp.turnOff()
        }
    }
}