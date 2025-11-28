const imagenesGaleria = [
    {
        src:"https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
        titulo: "Sala Premium",
        descripcion: "Experiencia cinematográfica de lujo con asientos reclinables y máxima comodidad"
    },
    {
        src:"https://images.squarespace-cdn.com/content/v1/581bd18003596e16cc905cad/5b8a2d7a-6f9f-4b02-bec7-8fab0c40ae33/more-about-imax-news.jpg",
        titulo: "Pantalla IMAX",
        descripcion: "La mejor tecnología de proyección para una experiencia inmersiva"
    },
    {
        src:"https://t4.ftcdn.net/jpg/09/25/10/91/360_F_925109183_tnn5IfMS5iWbvGLsjqxggtZtUchHCHSr.jpg",
        titulo: "Lobby Principal",
        descripcion: "Espacio moderno y acogedor diseñado para tu comodidad"
    },
    {
        src:"https://images.pexels.com/photos/7991375/pexels-photo-7991375.jpeg",
        titulo: "Asientos de Lujo",
        descripcion: "Comodidad máxima garantizada con asientos ergonómicos premium"
    },
    {
        src: "https://images.pexels.com/photos/27080475/pexels-photo-27080475.jpeg",
        titulo: "Dulcería Galáctica",
        descripcion: "Gran variedad de snacks y bebidas para tu experiencia cinematográfica"
    },
    {
        src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200",
        titulo: "Eventos Especiales",
        descripcion: "Estrenos y premieres exclusivos en un ambiente único"
    },
    {
        src:"https://www.panoramaaudiovisual.com/wp-content/uploads/2013/06/Best-Digital-Dolby-Premiere-Atmos.jpg",
        titulo: "Audio Dolby",
        descripcion: "Sistema de sonido envolvente de última generación"
    },
    {
        src:"https://static.cinepolis.com/marcas/vip/imagenes/instalaciones/10/201761181322504.jpg",
        titulo: "Área VIP",
        descripcion: "Exclusividad y confort en nuestras áreas especiales"
    },
    {
        src: "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1200",
        titulo: "Palomitas Frescas",
        descripcion: "Preparadas al momento con ingredientes de primera calidad"
    }
];

let indiceActual = 0;
function filtrarGaleria(categoria) {
    const items = document.querySelectorAll('.galeria-item');
    const botones = document.querySelectorAll('.categoria-btn');
    botones.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    items.forEach(item => {
        if (categoria === 'todas') {
            item.classList.remove('oculto');
        } else {
            if (item.dataset.categoria === categoria) {
                item.classList.remove('oculto');
            } else {
                item.classList.add('oculto');
            }
        }
    });
}
function abrirLightbox(indice) {
    indiceActual = indice;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const titulo = document.getElementById('lightbox-titulo');
    const descripcion = document.getElementById('lightbox-descripcion');
    const contador = document.getElementById('lightbox-numero');
    
    img.src = imagenesGaleria[indice].src;
    titulo.textContent = imagenesGaleria[indice].titulo;
    descripcion.textContent = imagenesGaleria[indice].descripcion;
    contador.textContent = `${indice + 1} / ${imagenesGaleria.length}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    
    document.body.style.overflow = 'auto';
}

function cambiarImagen(direccion) {
    indiceActual += direccion;
    
    if (indiceActual >= imagenesGaleria.length) {
        indiceActual = 0;
    }
    
    if (indiceActual < 0) {
        indiceActual = imagenesGaleria.length - 1;
    }
    
    const img = document.getElementById('lightbox-img');
    const titulo = document.getElementById('lightbox-titulo');
    const descripcion = document.getElementById('lightbox-descripcion');
    const contador = document.getElementById('lightbox-numero');
    
    img.style.opacity = '0';
    
    setTimeout(() => {
        img.src = imagenesGaleria[indiceActual].src;
        titulo.textContent = imagenesGaleria[indiceActual].titulo;
        descripcion.textContent = imagenesGaleria[indiceActual].descripcion;
        contador.textContent = `${indiceActual + 1} / ${imagenesGaleria.length}`;
        img.style.opacity = '1';
    }, 200);
}

document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            cerrarLightbox();
        } else if (e.key === 'ArrowLeft') {
            cambiarImagen(-1);
        } else if (e.key === 'ArrowRight') {
            cambiarImagen(1);
        }
    }
});

document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        cerrarLightbox();
    }
});