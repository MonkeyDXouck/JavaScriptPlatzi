/**
 * Prototype father
 */
class Person {
    /**
     * @param name
     * @param lastName
     * @param height
     */
    constructor (name, lastName, height) {
        this.name = name;
        this.lastName = lastName;
        this.height = height;
    }

    greet () {
        console.dir(`Hola, me llamo ${this.name} ${this.lastName}`)
    }

    beTall () {
        if (this.height > 1.80) {
            console.dir("Soy alto");
        } else {
            console.dir("Soy bajo");
        }
    }
}

/**
 * Prototype son
 */
class Development extends Person {
    constructor (name, lastName, height) {
        super(name, lastName, height);
    }

    greet () {
        console.dir(`Hola, me llamo ${this.name} ${this.lastName} y soy desarrollador/a`)
    }
}

function callGreet () {
    let mack = new Person("Mack", "S.", 1.80);
    mack.greet();
    mack.beTall();
    let xouck = new Development("Xouck", "D.", 1.70);
    xouck.greet();
    xouck.beTall();
}

callGreet();
