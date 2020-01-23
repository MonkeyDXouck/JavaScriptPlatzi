const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const onCharacterResponse = (character) => console.dir(`Hola, yo soy ${character.name}`);

function getCharacter (id) {
    // limit character 88
    return new  Promise( (resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(url, opts, function (data) {
            resolve (data)
        }).fail(() => reject(id))
    })
}

function onError (id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

async function getCharacters () {
    let ids = [1,2,3,4,5,6,7,8,9,10]
    let promises = ids.map(id => getCharacter(id))
    try{
        let characters = await Promise.all(promises)
        console.dir(characters)
    }catch(id){
        onError(id)
    }
}

getCharacters()
