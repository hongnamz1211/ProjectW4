class Hero {
    image
    top
    left
    size
    speed


    constructor(image, top, left, size, speed) {
        this.image = image
        this.top = top
        this.left = left
        this.size = size
        this.speed = speed
    }

    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    getMoveRight() {
        return this.left += this.speed
    }

    getMoveDown() {
        return this.top += this.speed
    }

    getMoveLeft() {
        return this.left -= this.speed
    }

    getMoveUp() {
        return this.top -= this.speed
    }

}

let speed1 = +prompt("nhập tốc độ")
let hero = new Hero("https://github.com/codegym-vn/objects/blob/master/pikachu.png?raw=true", 0, 0, 100, speed1);

function start() {
    if (hero.left < (window.innerWidth - hero.size) && hero.top === 0) {
        hero.getMoveRight();
    } else if (hero.top < (window.innerHeight - hero.size) && hero.left > 0) {
        hero.getMoveDown()
    } else if (hero.left > 0) {
        hero.getMoveLeft()
    } else if (hero.top > 0) {
        hero.getMoveUp()
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
}

start();