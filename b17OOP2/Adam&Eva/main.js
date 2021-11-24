let apple = new Apple(10)
let adam = new Human("Adam",true,700)
let eva = new Human("Eva",false,450)

function eat() {
    while (apple.isEmpty()) {
        adam.eat(apple)
        eva.eat(apple)
    }
}

