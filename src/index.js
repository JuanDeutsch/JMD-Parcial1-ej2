import RickAndMortyService from "./service.js";

// acá deberás crear una instancia del servicio RickAndMortyService
const service = new RickAndMortyService();

// esta función debe encargarse de obtener el elemento contenedor
// y agregar los personajes obtenidos por el API, deberás llamar tu función getAllCharacters
// iterar el arreglo de personajes y llamar a la función createCharacterCard para agregar cada personaje
// a el contenedor puedes usar la propiedad innerHTML para esto

function createCharacterList() {
  // llamar primero createCharacterCard(character);
  const personajeContainer = document.querySelector(".character-list");
  // llamar segundo addCharacterListeners(character);
  service
    .getAllCharacters()
    .then((personajes) => {
      personajes.forEach((personaje) => {
        const personajeCard = createCharacterCard(personaje);
        personajeContainer.innerHTML += personajeCard;
        addCharacterListeners(personaje);
      });
    })
    .catch((error) => {
      console.error("No se pueden obtener personajes", error);
    });
}

// esta función debe devolver la estructura html en string de tu personaje ejemplo

// `<div class="character">
//      <span>${gender}</span>
//      <span>${name}</span>
// </div>`;

// deberás usar los elementos correctos de HTML para poder visualizar el personaje

function createCharacterCard(character) {
  const { name, status, species, origin, image } = character;
  const statusIcon = './assets/live.svg';
  const speciesIcon = './assets/race.svg';
  const originIcon = './assets/planet.svg';

    let statusColor;
    if (status === "Alive") {
        statusColor = "Vivo";
    } else if (status === "Dead") {
        statusColor = "Muerto";
    } else {
        statusColor = "Desconocido";
    }

  return `
        <div class="character">
            <img src="${image}" alt="${name}" class="character-image">
            <div class="character-description">
                <div class="character-info">
                    <h3>${name}</h3>
                    <div class="character-detail">
                        <img src="${statusIcon}" alt="Status Icon" id="${statusColor}" class="detail-icon">
                        <p>${status}</p>
                    </div>
                    <div class="character-detail">
                        <img src="${speciesIcon}" alt="Species Icon" class="detail-icon">
                        <p>${species}</p>
                    </div>
                    <div class="character-detail">
                        <img src="${originIcon}" alt="Origin Icon" class="detail-icon">
                        <p>${origin}</p>
                    </div>
                </div>
                <img src="./assets/heart.svg" alt="heart" class="heart-icon" id="${name}">
            </div>
        </div>`;
}

// esta función deberá obtener todos los personajes y deberá agregarles un evento de click en el icono de corazon
// cuando se haga click al icono de corazon aparecer una alerta con un mensaje
// que diga Hola soy (nombre personaje), recuerda que puedes obtener
// el elemento target de un evento y así obtener sus propiedades

function addCharacterListeners() {
  const heartIcon = document.querySelectorAll(".heart-icon");

  heartIcon.forEach((icon) => {
    icon.addEventListener("click", (event) => {
        const character = event.target.id; 
        alert(`Hola soy ${character}`);
    });
  });
}

// por último se llama la función y se renderiza la vista
createCharacterList();
