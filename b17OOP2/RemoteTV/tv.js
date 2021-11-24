class Television {
    status;
    volume;
    channel;

    constructor(codeRemote) {
        this.status = false;
        this.volume = 5;
        this.channel = 1;
        this.codeRemote = codeRemote;
    }

    turnOnOff() {
        this.status = !this.status;
    }

    switchChanel(channel) {
        if (this.status) {
            return this.channel = channel;
        }
    }

    switchUpChanel() {
        if (this.status) {
            return this.channel += 1;
        }
    }

    switchDownChanel() {
        if (this.status) {
            return this.channel -= 1;
        }
    }

    switchUpVolume() {
        if (this.status) {
            return this.volume += 1;
        }
    }

    switchDownVolume() {
        if (this.status) {
            return this.volume -= 1;
        }
    }
}