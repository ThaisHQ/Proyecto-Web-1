document.addEventListener('DOMContentLoaded', function() {
    const videoPreview = document.getElementById('video-preview');
    
    if (videoPreview) {
        videoPreview.play().catch(error => {
            console.log('Autoplay prevenido por el navegador:', error);
        });
    }
});

function abrirVideoLightbox() {
    const lightbox = document.getElementById('video-lightbox');
    const videoPlayer = document.getElementById('video-lightbox-player');
    const videoPreview = document.getElementById('video-preview');
    
    if (videoPreview) {
        videoPreview.pause();
    }
    
    lightbox.classList.add('active');
    videoPlayer.currentTime = 0; 
    videoPlayer.play();
    document.body.style.overflow = 'hidden';
}

function cerrarVideoLightbox() {
    const lightbox = document.getElementById('video-lightbox');
    const videoPlayer = document.getElementById('video-lightbox-player');
    const videoPreview = document.getElementById('video-preview');
    
    lightbox.classList.remove('active');
    
    videoPlayer.pause();
    videoPlayer.currentTime = 0; 
    
    if (videoPreview) {
        videoPreview.play().catch(error => {
            console.log('Error al reanudar preview:', error);
        });
    }
    
    document.body.style.overflow = 'auto';
}
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('video-lightbox');
    
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                cerrarVideoLightbox();
            }
        });
    }
});

document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('video-lightbox');
    const videoPlayer = document.getElementById('video-lightbox-player');
    
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            cerrarVideoLightbox();
        } else if (e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault(); 
            if (videoPlayer.paused) {
                videoPlayer.play();
            } else {
                videoPlayer.pause();
            }
        } else if (e.key === 'ArrowRight') {
            videoPlayer.currentTime = Math.min(videoPlayer.currentTime + 5, videoPlayer.duration);
        } else if (e.key === 'ArrowLeft') {
            videoPlayer.currentTime = Math.max(videoPlayer.currentTime - 5, 0);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            videoPlayer.volume = Math.min(videoPlayer.volume + 0.1, 1);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            videoPlayer.volume = Math.max(videoPlayer.volume - 0.1, 0);
        } else if (e.key === 'f' || e.key === 'F') {
            if (videoPlayer.requestFullscreen) {
                videoPlayer.requestFullscreen();
            } else if (videoPlayer.webkitRequestFullscreen) {
                videoPlayer.webkitRequestFullscreen();
            } else if (videoPlayer.msRequestFullscreen) {
                videoPlayer.msRequestFullscreen();
            }
        }
    }
});

function mostrarControlesVideo() {
    const videoPlayer = document.getElementById('video-lightbox-player');
    
    console.log('Controles de video:');
    console.log('- ESC: Cerrar lightbox');
    console.log('- ESPACIO: Pausar/Reproducir');
    console.log('- ← →: Retroceder/Avanzar 5 segundos');
    console.log('- ↑ ↓: Subir/Bajar volumen');
    console.log('- F: Pantalla completa');
}