/**
 * Prototype father
 */
class Person {
    /**
     * @param name
     * @param lastName
     * @param height
     */
    constructor (name, lastName, height, isDev) {
        this.name = name;
        this.lastName = lastName;
        this.height = height;
        this.isDev = isDev;
    }

    greet (fn) {
        let { name, lastName, isDev } = this;
        console.dir('---------------------');
        console.dir(`Hola, me llamo ${name} ${lastName}`);
        if (fn) {
            fn(name, lastName, isDev)
        }
    }

    beTall () {
        if (this.height > 1.71) {
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
    constructor (name, lastName, height, isDev) {
        super(name, lastName, height, isDev);
    }

    greet (fn) {
        let { name, lastName, isDev } = this;
        console.dir('---------------------');
        console.dir(`Hola, me llamo ${name} ${lastName} y soy desarrollador/a`)
        if (fn) {
            fn(name, lastName, isDev)
        }
    }
}

function responseGreet (name, lastName, isDev) {
    console.dir(`Buen día ${name} ${lastName}`);
    if (isDev) {
        console.log('Ah mirá, no sabía que eras desarrollador/a');
    }
}

function callGreet () {
    let mack = new Person("Mack", "S.", 1.85, false);
    mack.greet();
    // mack.beTall();
    let Kevin = new Person("Kevin", "R.", 1.75, false);
    Kevin.greet(responseGreet);
    // xouck.beTall();
    let xouck = new Development("Xouck", "D.", 1.70, true);
    xouck.greet(responseGreet);
}

callGreet();
