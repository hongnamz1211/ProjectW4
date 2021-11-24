class Human {
    name
    gender
    weight
    constructor(name,gender,weight) {
        this.name = name
        this.gender = gender
        this.weight = weight
    }
    isMale() {
        if (this.setGender()) {
            return "male"
        } else {
            return "female"
        }
    }
    setGender(gender) {
        return this.gender = gender
    }
    checkApple(apple) {
        return apple.getWeightApple()
    }
    eat(apple) {
        if (apple.isEmpty()) {
            this.weight++
            apple.decrease()
            this.say(this.name + "'mlem mlem'")
        } else {
            this.say("empty")
        }
    }
    say(String) {
        console.log(String)
    }
    getName() {
       return this.name
    }
    setName(name) {
        this.name = name
    }
    getWeightHuman() {
        return this.weight
    }
    setWeightHuman(weight) {
        this.weight = weight
    }
}