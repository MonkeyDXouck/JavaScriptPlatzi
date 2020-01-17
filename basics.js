/** Declared global variables */
const exercise = process.argv[2];
const name = "Xouck", lastName = "Son", age = 35, ageAdult = 18, changeWeight = 0.2, daysYear = 365;
const person = {
        name: "Carlos",
        lastName: "Torres",
        age: 23,
        weight: 75,
        professions: {
            engineer: true,
            cook: true,
            singer: false,
            dj: false,
            guitarist: true,
            drone: false
        }
    };
let finish = person.weight - 3;
/** Arrow function */
const isAdult = ({ age }) => !(age > ageAdult);
const increaseWeight = person => person.weight += changeWeight;
const reduceWeight = person => person.weight -= changeWeight;
const eatMore = () => Math.random() < 0.3;
const doExercise = () => Math.random() < 0.4;

/** Call functions */
switch (exercise) {
    case '1':
        messageAndVariables(name, lastName, age);
        break;
    case '2':
        manageString(name, lastName);
        break;
    case '3':
        numbers();
        break;
    case '4':
        functionWithParameters (name, age);
        break;
    case '5':
        objects(person);
        break;
    case '6':
        console.log(birthday(person));
        break;
    case '7':
        compareVariables(person);
        break;
    case '8':
        validateAge(person);
        break;
    case '9':
        exampleForWeight(person);
        break;
    case '10':
        exampleWhileWeight(person);
        break;
    case '11':
        exampleDoWhileWeight();
        break;
    default:
        console.dir("404 - not found");
        break;
}

/**
 * Send Message concatenating text and variables
 * @param name
 * @param lastName
 * @param age
 */
function messageAndVariables (name, lastName, age) {
    // concatenate text
    console.log("I'm " + name + " " + lastName);
    console.log("Tengo " + age + " años");
}

/**
 * Send message transform text
 * @param name
 * @param lastName
 */
function manageString (name, lastName) {
    console.dir("UpperCase: " + name.toUpperCase());
    console.dir("LowerCase: " + lastName.toLowerCase());
    console.dir("nameFirstChar: " + name.charAt(0));
    console.dir("nameLength: " + name.length);

    console.dir(`${name} ${lastName}`)
}

/**
 * Operations with numbers
 */
function numbers () {
    let winePrice = 200.4;
    // add one
    console.dir(winePrice += 1);
    // subtract two
    console.dir(winePrice -= 2);
    // split purchase
    let total = Math.round(winePrice * 3);
    console.dir(total.toFixed(2));
    console.dir(parseFloat(total.toFixed(2)));
    // divide pizza
    let pizza = 10, people = 2;
    console.dir(pizza / people);
    // calculate average
    let average = ([12,58,95,75,62].reduce((a, b) => a + b, 0)) / [12,58,95,75,62].length;
    console.log(`El promedio es: ${average}`);
}

/**
 * Send message with template string
 * @param name string
 * @param a number
 */
function functionWithParameters (name, a) {
    console.log(`${name.toUpperCase()} tiene ${a} años`);
}

/**
 * Read attributes of an object
 * @param person object
 */
function objects (person) {
    // let name = person.name
    let { name } = person;
    // let age = person.age
    let { age } = person;

    console.dir(`Soy ${name} y tengo ${age} años`);
    console.dir(person)
}

/**
 * disaggregate object and modify values
 * @param person object
 */
function birthday (person) {
    return {
        ...person,
        age: person.age + 1
    }
}

/**
 * Use of '==' and '===' with variables and objects
 * @param person
 */
function compareVariables (person) {
    let x = 4, y = "4";
    // compare without the variable type
    console.dir( " == : " + (x == y));
    // compare with the variable type
    console.dir(" === : " + (x === y));
    // compare of the objects. same memory space
    let sacha = person;
    console.dir(sacha);
    console.dir("Same: " + (sacha === person));
    sacha.name = "Maik";
    console.dir(person);
}

/**
 * conditionals
 * @param person
 */
function validateAge (person) {
    console.dir(`${person.name} ${person.lastName} is: `);
    for (let i in person.professions) {
        (person.professions[i]) ? console.dir(" -> " + i) : "";
    }
    (isAdult(person)) ? console.dir(" -> adult") : console.dir("not adult");

}

/**
 * for
 */
function exampleForWeight () {
    console.dir(`Al inicio del año ${person.name} pesa ${person.weight}Kg`);
    for (let i = 1; i <= daysYear; i++) {
        let rand = Math.random();
        if (rand < 0.25) {
            increaseWeight(person);
        }else if (rand < 0.5) {
            reduceWeight(person);
        }
    }
    console.dir(`Al final del año ${person.name} pesa ${Math.round(person.weight)}Kg`);
}

/**
 * while
 */
function exampleWhileWeight (person) {
    let days = 1;
    console.dir(`el peso inicial de ${person.name} es ${person.weight}Kg`);

    while (person.weight > finish) {
        if (eatMore()) {
            increaseWeight(person);
        }
        if (doExercise()) {
            reduceWeight(person);
        }
        days += 1;
    }

    console.dir(`depués de ${days} días ${person.name} bajo 3Kg`);
}

/**
 * do while
 */
function exampleDoWhileWeight (person) {
    let counter = 0;
    const rains = () => Math.random() < 0.1;

    do{
        counter++;
    }while (!rains());

    if (counter === 1){
        console.dir(`Fui a ver si llovia una vez`);
    }else{
        console.dir(`Fui a ver si llovia ${counter} veces`);
    }

}
