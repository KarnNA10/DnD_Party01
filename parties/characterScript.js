const select = document.getElementById("partySelect");
const contenedor = document.getElementById("listaPersonajes");
const nombreParty = document.getElementById("nombreParty");

select.addEventListener("change", () => {
    const party = select.value;
    if (!party) return;
    fetch(`data/${party}.json`)
        .then(res => res.json())
        .then(data => {
            nombreParty.textContent = data.nombreParty;
            contenedor.innerHTML = ""; // limpiar personajes previos

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
        })
        .catch(err => console.error("Error:", err));
});

// select.addEventListener("change", () => {
//     const party = select.value;

//     if (!party) return;

//     fetch(`data/${party}.json`)
//         .then(res => res.json())
//         .then(data => {
//             nombreParty.textContent = data.nombreParty;
//             contenedor.innerHTML = ""; // limpiar personajes previos

//             data.personajes.forEach((p, index) => {
//                 const div = document.createElement("div");
//                 div.classList.add("personaje");

//                 div.innerHTML = `
//                     <h3>Personaje ${index + 1}</h3>
//                     <p><strong>Nombre del personaje:</strong> ${p.nombrePersonaje}</p>
//                     <p><strong>Nombre del jugador:</strong> ${p.nombreJugador}</p>
//                     <p><strong>Nivel:</strong> ${p.nivel}</p>
//                     <p><strong>Clase:</strong> ${p.clase}</p>
//                     <p><strong>Especie:</strong> ${p.especie}</p>
//                     <p><strong>Background:</strong> ${p.background}</p>
//                     <p><strong>Alignment:</strong> ${p.alignment}</p>
//                     <hr>
//                 `;

//                 contenedor.appendChild(div);
//             });
//         })
//         .catch(err => console.error("Error:", err));
// });
