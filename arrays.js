/** variables */
const persons = [
    Daniel = {
    name: `Daniel`,
    lastName: `Dominguez`,
    height: 1.82,
    amountOfBooks: 123
}, Paula = {
    name: `Paula`,
    lastName: `Torres`,
    height: 1.70,
    amountOfBooks: 435
}, Juan = {
    name: `Juan`,
    lastName: `Lopez`,
    height: 2.00,
    amountOfBooks: 231
}, Arturo = {
    name: `Arturo`,
    lastName: `Tello`,
    height: 1.75,
    amountOfBooks: 200
}, Diana = {
    name: `Diana`,
    lastName: `Medina`,
    height: 1.60,
    amountOfBooks: 102
}];

/** arrow functions utils */
const isTall = ({ height }) => height > 1.80;
const isSmall = ({ height }) => height < 1.70;
const convertMeasure = (person) => ({
    ...person,
    height: person.height * 100
});
const reducer = (count, { amountOfBooks }) => count + amountOfBooks;

//peopleHeight();
//validateHeight();
//convertMtsToCms();
counterBooks();

/**
 * Loop through an array
 */
function peopleHeight () {
    for (let i = 0; i < persons.length; i++) {
        let person = persons[i];
        console.dir(`${person.name} mide ${person.height}mts`);
    }
}

/**
 * filter an array
 */
function validateHeight () {
    const tallPeople = persons.filter(isTall);
    // const tallPeople = persons.filter( ({ height }) => height > 1.80 );
    console.dir("Personas altas: ");
    console.dir(tallPeople);
    const smallPeople = persons.filter(isSmall);
    console.dir("Personas bajas: ");
    console.dir(smallPeople);
}

/**
 * Map an array
 */
function convertMtsToCms () {
   const measureCms = persons.map(convertMeasure);
   console.dir(measureCms);
}

/**
 * reduce an array
 */
function counterBooks() {
    const totalBooks = persons.reduce(reducer, 0);
    console.dir(`Cantidad total de libros: ${totalBooks}`);
}

