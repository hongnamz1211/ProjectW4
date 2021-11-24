let rat1 = new Rat("rattt",2,6,true)
let rat2 = new Rat("rettt",3,10,true)
let rat3 = new Rat("rittt",2.2,12,true)
let rat4 = new Rat("rottt",1.5,8,false)
let rat = [rat1,rat2,rat3,rat4]
let cat = new Cat("Meoo", 10,10)

function catRat(rat) {
    for (let i = 0; i < rat.length; i++) {
        if (rat[i].getStatus()) {
            if (cat.getSpeed() > rat[i].getSpeed()) {
                console.log("mlem" + rat[i].getName())
                cat.weight += rat[i].getWeight()
                rat[i].status = !rat[i].getStatus()
                cat.speed -= 1
                rat.splice(i,1)
                i--
            } else {
                console.log("...")
            }
        } else {
            console.log("Con " + rat[i].getName() + " chết r")
        }
    }
}