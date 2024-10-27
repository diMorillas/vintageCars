window.onload = () => {
    const buscadorCoches = () => {
        const valorBuscador = document.getElementById('cocheEscrito'); //Es el texto que ponemos en el buscador.
        const coches = document.querySelectorAll('.card'); // Todas las cartas de los coches, es el div que contiene el resto de elementos.

        valorBuscador.addEventListener('input', function () {
            const buscarCoche = valorBuscador.value.toLowerCase();

            coches.forEach(function (card) {
                const nomberCoche = card.querySelector('.car-title').textContent.toLowerCase();

                if (nomberCoche.includes(buscarCoche)) { //Si existe un string como el de nombreCoche que hemos dicho que es el nombre del coche anteriormente.
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    buscadorCoches();
}