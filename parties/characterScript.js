const select = document.getElementById("partySelect");
const contenedor = document.getElementById("listaPersonajes");
const nombreParty = document.getElementById("nombreParty");

select.addEventListener("change", () => {
    const partyKey = select.value;

    if (!partyKey) {
        contenedor.innerHTML = "";
        nombreParty.textContent = "";
        return;
    }

    // 🔹 En vez de fetch, leemos del objeto JS
    const data = parties[partyKey];

    nombreParty.textContent = data.nombreParty;
    contenedor.innerHTML = "";

    data.personajes.forEach((p, index) => {
        const div = document.createElement("div");
        div.classList.add("personaje");

        div.innerHTML = `
            <h3>Personaje ${index + 1}</h3>
            <p><strong>Nombre del personaje:</strong> ${p.nombrePersonaje}</p>
            <p><strong>Nombre del jugador:</strong> ${p.nombreJugador}</p>
            <p><strong>Nivel:</strong> ${p.nivel}</p>
            <p><strong>Clase:</strong> ${p.clase}</p>
            <p><strong>Especie:</strong> ${p.especie}</p>
            <p><strong>Background:</strong> ${p.background}</p>
            <p><strong>Alignment:</strong> ${p.alignment}</p>
            <hr>
        `;

        contenedor.appendChild(div);
    });
});

const parties = {
    party1: {
        nombreParty: "Los Dragones Rojos",
        personajes: [
            {
                nombrePersonaje: "Arthas",
                nombreJugador: "Carlos",
                nivel: 1,
                clase: "Guerrero",
                especie: "Humano",
                background: "Noble",
                alignment: "Legal Bueno"
            },
            {
                nombrePersonaje: "Luna",
                nombreJugador: "María",
                nivel: 3,
                clase: "Maga",
                especie: "Elfa",
                background: "Académica",
                alignment: "Neutral Bueno"
            }
        ]
    },

    party2: {
        nombreParty: "Sombras del Norte",
        personajes: [
            {
                nombrePersonaje: "Thorin",
                nombreJugador: "Juan",
                nivel: 2,
                clase: "Bárbaro",
                especie: "Enano",
                background: "Forajido",
                alignment: "Caótico Neutral"
            }
        ]
    }
};
