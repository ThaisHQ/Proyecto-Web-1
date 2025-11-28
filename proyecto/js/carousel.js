let indiceCarousel = 0;
let autoplayInterval;
const peliculasPorVista = obtenerPeliculasPorVista();

document.addEventListener('DOMContentLoaded', function() {
    crearIndicadores();
    iniciarAutoplay();
    
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        carousel.addEventListener('mouseenter', detenerAutoplay);
        carousel.addEventListener('mouseleave', iniciarAutoplay);
    }
});

function obtenerPeliculasPorVista() {
    if (window.innerWidth <= 768) {
        return 1; 
    } else if (window.innerWidth <= 1024) {
        return 2; 
    } else {
        return 3; 
    }
}

window.addEventListener('resize', function() {
    const nuevasPeliculas = obtenerPeliculasPorVista();
    if (nuevasPeliculas !== peliculasPorVista) {
        location.reload(); 
    }
});
function crearIndicadores() {
    const track = document.getElementById('carousel-track');
    const indicators = document.getElementById('carousel-indicators');
    
    if (!track || !indicators) return;
    
    const totalItems = track.children.length;
    const totalPaginas = Math.ceil(totalItems / peliculasPorVista);
    
    indicators.innerHTML = '';
    
    for (let i = 0; i < totalPaginas; i++) {
        const dot = document.createElement('div');
        dot.classList.add('indicator-dot');
        if (i === 0) dot.classList.add('active');
        dot.onclick = () => irAPagina(i);
        indicators.appendChild(dot);
    }
}
function moverCarousel(direccion) {
    const track = document.getElementById('carousel-track');
    const items = track.children;
    const totalItems = items.length;
    const totalPaginas = Math.ceil(totalItems / peliculasPorVista);
    
    indiceCarousel += direccion;
    
    if (indiceCarousel >= totalPaginas) {
        indiceCarousel = 0;
    } else if (indiceCarousel < 0) {
        indiceCarousel = totalPaginas - 1;
    }
    
    actualizarCarousel();
}
function irAPagina(pagina) {
    indiceCarousel = pagina;
    actualizarCarousel();
    detenerAutoplay(); 
}
function actualizarCarousel() {
    const track = document.getElementById('carousel-track');
    const items = track.children;
    
    if (items.length === 0) return;
    
    const itemWidth = items[0].offsetWidth;
    const gap = 20; 
    const desplazamiento = -(indiceCarousel * (itemWidth + gap) * peliculasPorVista);
    
    track.style.transform = `translateX(${desplazamiento}px)`;
    
    actualizarIndicadores();
}

function actualizarIndicadores() {
    const dots = document.querySelectorAll('.indicator-dot');
    dots.forEach((dot, index) => {
        if (index === indiceCarousel) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function iniciarAutoplay() {
    detenerAutoplay();
    autoplayInterval = setInterval(() => {
        moverCarousel(1);
    }, 5000); 
}

function detenerAutoplay() {
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
    }
}
const peliculasData = {
    'Interestelar': {
        genero: 'Ciencia Ficción / Aventura',
        duracion: '169 minutos',
        director: 'Christopher Nolan',
        horarios: [
            '<i class="fa-regular fa-clock"></i> 14:00 hrs - Sala 1',
            '<i class="fa-regular fa-clock"></i> 17:30 hrs - Sala 3 (IMAX)',
            '<i class="fa-regular fa-clock"></i> 20:45 hrs - Sala 1'
        ],
        precio: '$150 - $200 ',
        imagen: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        sinopsis: 'Un grupo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de garantizar la supervivencia de la humanidad.'
    },
    'Blade Runner 2049': {
        genero: 'Acción / Ciencia ficción',
        duracion: '156 minutos',
        director: 'Denis Villeneuve',
        horarios: [
            '<i class="fa-regular fa-clock"></i> 15:00 hrs - Sala 2',
            '<i class="fa-regular fa-clock"></i> 19:00 hrs - Sala 4',
            '<i class="fa-regular fa-clock"></i> 22:30 hrs - Sala 2'
        ],
        precio: '$120 - $180 ',
        imagen: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg',
        sinopsis: 'Treinta años después de lo ocurrido en la primera película, un nuevo Blade Runner, el oficial de la Policía de Los Ángeles K, desentierra un viejo secreto que puede provocar el caos en lo que queda de sociedad. El descubrimiento de K le sitúa en la misión de encontrar a Rick Deckard, un antiguo policía que ha estado desaparecido durante los últimos 30 años'
    },
    'Barbie': {
        genero: 'Drama / Familiar',
        duracion: '109 minutos',
        director: 'Greta Gerwig',
        horarios: [
            '<i class="fa-regular fa-clock"></i> 14:30 hrs - Sala 5',
            '<i class="fa-regular fa-clock"></i> 17:00 hrs - Sala 2',
            '<i class="fa-regular fa-clock"></i> 21:00 hrs - Sala 5'
        ],
        precio: '$110 - $160 ',
        imagen: 'https://m.media-amazon.com/images/M/MV5BY2RjZDM5NDQtOGJkYy00NzMwLTg4YTAtZWFkOGM3NTYzM2I4XkEyXkFqcGc@._V1_.jpg',
        sinopsis: 'Vivir en Barbie Land significa ser alguien perfecto que está en un lugar perfecto, a menos que tengas una crisis existencial o seas un Ken.'
    },
    'Guardianes de la Galaxia': {
        genero: 'Ciencia Ficción / Aventura',
        duracion: '122 minutos',
        director: 'James Gunn',
        horarios: [
            '<i class="fa-regular fa-clock"></i> 15:30 hrs - Sala 1 (IMAX)',
            '<i class="fa-regular fa-clock"></i> 18:30 hrs - Sala 3',
            '<i class="fa-regular fa-clock"></i> 21:45 hrs - Sala 1 (IMAX)'
        ],
        precio: '$140 - $190 ',
        imagen: 'https://wallpapers.com/images/featured/guardianes-de-la-galaxia-5paov6a8eku13ugb.jpg',
        sinopsis: 'El audaz aventurero Peter Quill se convierte en el blanco de una implacable cazarrecompensas tras robar un misterioso orbe codiciado por un poderoso villano cuyas ambiciones amenazan al universo entero. Para evitar ser capturado, Quill se une a un cuarteto de inadaptados dispares: Rocket, un mapache armado; Groot, un humanoide con forma de árbol; la letal y enigmática Gamora; y Drax el Destructor, un vengativo.'
    },
    'Sombras del Pasado': {
        genero: 'Suspenso / Misterio',
        duracion: '112 minutos',
        director: 'Adam Cooper',
        horarios: [
            '<i class="fa-regular fa-clock"></i> 17:00 hrs - Sala 4',
            '<i class="fa-regular fa-clock"></i> 20:00 hrs - Sala 3',
            '<i class="fa-regular fa-clock"></i> 23:00 hrs - Sala 4'
        ],
        precio: '$120 - $170 ',
        imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRedxAXyu-iXVTTjszOkQ-vJPmKisPQOlHUYcVRVCcJ0LUlYHRz',
        sinopsis: 'Un ex detective de homicidios que sufre pérdida de memoria vuelve a examinar un antiguo caso sobre el brutal asesinato de un profesor universitario. '
    },
    'Matrix': {
        genero: 'Acción / Cyberpunk',
        duracion: '136 minutos',
        director: 'Lana Wachowski',
        horarios: [
            '<i class="fa-regular fa-clock"></i> 14:00 hrs - Sala 3',
            '<i class="fa-regular fa-clock"></i> 18:00 hrs - Sala 1',
            '<i class="fa-regular fa-clock"></i> 22:00 hrs - Sala 3'
        ],
        precio: '$130 - $180 ',
        imagen: 'https://m.media-amazon.com/images/M/MV5BNGE1YzI4NzMtZTUxNi00Y2I5LTg2MmQtODE0NThmYTFmMDk0XkEyXkFqcGc@._V1_.jpg',
        sinopsis: 'Un hacker se da cuenta por medio de otros rebeldes de la naturaleza de su realidad y su rol en la guerra contra los controladores..'
    }
};

function mostrarInfo(titulo) {
    const pelicula = peliculasData[titulo];
    
    if (!pelicula) {
        Swal.fire({
            title: 'Error',
            text: 'Información no disponible',
            icon: 'error',
            confirmButtonColor: '#538C83'
        });
        return;
    }
    const horariosHTML = pelicula.horarios.map(horario => `<li class='color-targeta-peli'>${horario}</li>`).join('');
    
    Swal.fire({
        title: titulo,
        html: `
            <div class='color-targeta-peli' style="text-align: left; width:100% !important;">
                <p style="font-style: italic; color: #9BCEC6; margin-bottom: 15px;">${pelicula.sinopsis}</p>
                <hr style="border-color: rgba(155, 206, 198, 0.3); margin: 15px 0;">
                <p><strong><i class="fa-solid fa-film" style="color: #B197FC;"></i> Género:</strong> ${pelicula.genero}</p>
                <p><strong><i class="fa-solid fa-alarm-clock" style="color: #aa2258;"></i> Duración:</strong> ${pelicula.duracion}</p>
                <p><strong><i class="fa-solid fa-masks-theater" style="color: #51311f;"></i> Director:</strong> ${pelicula.director}</p>
                <p><strong><i class="fa-regular fa-calendar-days" style="color: #0a61a3;"></i>Horarios disponibles:</strong></p>
                <ul style="list-style: none; padding: 0;">
                    ${horariosHTML}
                </ul>
                <p><strong><i class="fa-solid fa-sack-dollar" style="color: #a88a1f;"></i> Precio:</strong> ${pelicula.precio}</p>
            </div>
        `,
        imageUrl: pelicula.imagen,
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: titulo,
        confirmButtonText: 'Comprar Boletos',
        confirmButtonColor: '#538C83',
        showCancelButton: true,
        cancelButtonText: 'Cerrar',
        cancelButtonColor: '#9BCEC6',
        customClass: {
            popup: 'glass',
            title: 'color-verde-claro',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: '¡Próximamente!',
                text: 'Sistema de compra de boletos en desarrollo...',
                icon: 'info',
                confirmButtonColor: '#538C83'
            });
        }
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        moverCarousel(-1);
        detenerAutoplay();
    } else if (e.key === 'ArrowRight') {
        moverCarousel(1);
        detenerAutoplay();
    }
});