window.onload = ()=>{
    const buscadorCoches =()=>{
        const valorBuscador = document.getElementById('searchInput');
        const coches = document.querySelectorAll('.card');
        
        searchInput.addEventListener('input', function() { 
            const buscarCoche = valorBuscador.value.toLowerCase();
        
            coches.forEach(function(card) {
                const nomberCoche = card.querySelector('.car-title').textContent.toLowerCase();
                
                if (nomberCoche.includes(buscarCoche)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });  
    }
  
    buscadorCoches();
}