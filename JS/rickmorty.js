function getCharactersAll() {
    const endPoint = 'https://rickandmortyapi.com/api/character';

    fetch(endPoint)
        .then(uglyText => uglyText.json())
        .then(prettyText => {
            showResults(prettyText.results)
        })
        .catch(error => {
            console.log(error);
        })
}

function getCharactersByGender(gender) {
    const endPoint = 'https://rickandmortyapi.com/api/character/?gender=' + gender;

    fetch(endPoint)
        .then(uglyText => uglyText.json())
        .then(prettyText => {
            showResults(prettyText.results)
        }
        )
        .catch(error => {            console.log(error);
        })
}

function getCharactersByStatus(status) {
    const endPoint = 'https://rickandmortyapi.com/api/character/?status=' + status;

    fetch(endPoint)
        .then(uglyText => uglyText.json())
        .then(prettyText => {
            showResults(prettyText.results)
        })
        .catch(error => {
            console.log(error);
        })
}

function showResults(characters) {
    var newDiv;
    var characterDiv;
    var newImg;

    // Leer section donde se muestran todos los personajes
    var charactersSection = document.getElementById('charactersSection');
    // Borrar todo su contenido para evitar que quede lleno
    charactersSection.innerHTML = '';

    // 1. leer el template
    var template = document.getElementsByTagName("template")[0];
    // 1. leer del template el div para el titulo, img para foto, div para species...
    var divName = template.content.querySelector(".name");
    var divStatus = template.content.querySelector(".status");
    var divSpecies = template.content.querySelector(".species");
    var imageCharacter = template.content.querySelector(".image");

    // 1. leer del template del div que contiene el titulo, imagen, species... (tarjeta)
    var character = template.content.querySelector(".rickMortyCharacter");

    for (let i = 0; i < characters.length; i++) {
        // 2. crear clone del div "tarjeta"
        characterDiv = document.importNode(character, true);

        // 3. crear clone del nodo img, asignarle la ruta de la imagen y agregarla a la tarjeta
        newImg = document.importNode(imageCharacter, true);
        newImg.src = characters[i].image;
        characterDiv.appendChild(newImg);

        // 4. crear clone del div para el nombre, asignarle el nombre y agregalo a la tarjeta
        newDiv = document.importNode(divName, true);
        newDiv.textContent = characters[i].name;
        characterDiv.appendChild(newDiv);

        // crear clone del div para status, asignarle el status y agregarlo a la tarjeta
        newDiv = document.importNode(divStatus, true);
        newDiv.textContent = characters[i].status;
        characterDiv.appendChild(newDiv);

        // crear clone del div para la species, asignarle la spacie y agregarlo a la tarjeta
        newDiv = document.importNode(divSpecies, true);
        newDiv.textContent = characters[i].species;
        characterDiv.appendChild(newDiv);

        // agregarla la tarjeta a la seccion de personajes
        charactersSection.appendChild(characterDiv);
    }
}
