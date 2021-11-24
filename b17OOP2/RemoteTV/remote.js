class Remote {
    codeRemote;

    constructor(codeRemote) {
        this.codeRemote = codeRemote;
    }

    turnOnOffTivi(tv) {
        if(this.codeRemote === tv.codeRemote) {
            tv.turnOnOff();
            return tv.status;
        }
    }

    setChanel(tv, number) {
        if(this.codeRemote === tv.codeRemote) {
            tv.switchChanel(number);
        }
    }

    upChanel(tv) {
        if(this.codeRemote === tv.codeRemote) {
            tv.switchUpChanel();
        }
    }

    downChanel(tv) {
        if(this.codeRemote === tv.codeRemote) {
            tv.switchDownChanel();
        }
    }

    upVolume(tv) {
        if(this.codeRemote === tv.codeRemote) {
            tv.switchUpVolume();
        }
    }

    downVolume(tv) {
        if(this.codeRemote === tv.codeRemote) {
            tv.switchDownVolume();
        }
    }
}