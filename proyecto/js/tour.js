var panorama, viewer, container,infospot;

container = document.querySelector('#container_principal');

panorama = new PANOLENS.ImagePanorama('imagenes/casa360.jpg');


var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot1.position.set(500 ,96 , -382);
infospot1.addHoverText('Escalera Principal - Diseño Arquitectónico', -60);
infospot1.element.innerHTML = `
    <div class="infospot-content" style="background-color: rgba(128, 128, 128, 0.95)">
        <div class="infospot-title">
            <i class="fa-solid fa-stairs"></i> Escalera Principal
        </div>
        <p>Impresionante escalera doble de diseño moderno con barandas de hierro forjado y acabados en mármol. 
        Esta característica arquitectónica es el punto focal del vestíbulo principal.</p>
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400" 
             class="infospot-image" alt="Escalera elegante">
        <p style="margin-top: 10px; font-size: 12px; opacity: 0.8; ">
        <i class="fa-solid fa-lightbulb"></i> Iluminación LED integrada<br>
        <i class="fa-solid fa-ruler-vertical"></i> Altura: 4.5 metros<br>
        <i class="fa-solid fa-gem"></i> Material: Mármol Carrara
        </p>

    </div>
`;
panorama.add(infospot1);
var infospot2 = new PANOLENS.Infospot(70, PANOLENS.DataImage.Info);
infospot2.position.set(416 ,-500 , -483);
infospot2.addHoverText('Decoración Natural Premium', -60);
infospot2.element.innerHTML = `
   <div class="infospot-content" style="background-color: rgba(128, 128, 128, 0.95)">
        <div class="infospot-title">
            <i class="fa-solid fa-seedling"></i> Vegetación Interior
        </div>
        <p>Plantas naturales de alta calidad seleccionadas por diseñadores de interiores profesionales. 
        Cada elemento vegetal contribuye a crear un ambiente de lujo y bienestar.</p>
        <ul style="margin-top: 10px; padding-left: 20px;">
            <li><i class="fa-solid fa-leaf"></i> Ficus Benjamin Premium</li>
            <li><i class="fa-solid fa-jar"></i> Macetas de cerámica artesanal</li>
            <li><i class="fa-solid fa-droplet"></i> Sistema de riego automático</li>
            <li><i class="fa-solid fa-hands-holding"></i> Mantenimiento profesional incluido</li>
        </ul>
    </div>
`;
panorama.add(infospot2);

var infospot3 = new PANOLENS.Infospot(90, PANOLENS.DataImage.Info);
infospot3.position.set(1200, 100, -500);
infospot3.addHoverText('Ver Video Tour Completo', -60);
infospot3.element.innerHTML = `
    <div style="background-color:rgba(128, 128, 128, 0.95); padding: 15px; border-radius: 10px;">
        <div class="infospot-title">
            <i class="fa-solid fa-video"></i> Video Tour Completo
        </div>
        <p style="color: white; margin-bottom: 10px;">Recorrido profesional de toda la propiedad</p>
        <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/zumJJUL_ruM" 
                title="Luxury Home Tour" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
    </div>
`;
panorama.add(infospot3);

var infospot4 = new PANOLENS.Infospot(75, PANOLENS.DataImage.Info);
infospot4.position.set(0, 1000, -500);
infospot4.addHoverText('Sistema de Iluminación Inteligente', -60);
infospot4.element.innerHTML = `
    <div class="infospot-content" style="background-color: rgba(128, 128, 128, 0.95)">
        <div class="infospot-title">
            <i class="fa-solid fa-lightbulb"></i> Iluminación Premium
        </div>
        <p>Sistema de iluminación inteligente con control automatizado y diseño de lámparas 
        exclusivas en todo el vestíbulo.</p>
        <div style="margin-top: 10px; padding: 10px; background: rgba(0,0,0,0.1); border-radius: 5px;">
            <p style="margin: 5px 0;">
                <i class="fa-solid fa-mobile-screen-button"></i> <strong>Control:</strong> App móvil + voz
            </p>
            <p style="margin: 5px 0;">
                <i class="fa-solid fa-bolt"></i> <strong>Tecnología:</strong> LED de bajo consumo
            </p>
            <p style="margin: 5px 0;">
                <i class="fa-solid fa-palette"></i> <strong>Diseño:</strong> Lámparas artesanales
            </p>
            <p style="margin: 5px 0;">
                <i class="fa-solid fa-sliders"></i> <strong>Modos:</strong> 16 escenas predefinidas
            </p>
        </div>
    </div>
`;

panorama.add(infospot4);

var infospot5 = new PANOLENS.Infospot(60, PANOLENS.DataImage.Info);
infospot5.position.set(500, -600, 800);
infospot5.addHoverText('Pisos de Mármol Premium', -60);
infospot5.element.innerHTML = `
    <div class="infospot-content" style="background-color: rgba(128, 128, 128, 0.95);">
        <div class="infospot-title">
            <i class="fa-solid fa-table-cells-large"></i> Acabados de Lujo
        </div>
        <p>Pisos de mármol importado de Italia, pulido a espejo con tratamiento antideslizante 
        de última generación.</p>
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400" 
             class="infospot-image" alt="Mármol de lujo">
        <p style="margin-top: 10px; font-size: 13px;">
        <strong>Especificaciones:</strong><br>
        <i class="fa-solid fa-gem"></i> Mármol Calacatta Gold<br>
        <i class="fa-solid fa-ruler"></i> Grosor: 2.5 cm<br>
        <i class="fa-solid fa-shield-halved"></i> Tratamiento nano-cerámico<br>
        <i class="fa-solid fa-award"></i> Garantía: 25 años
        </p>
    </div>
`;
panorama.add(infospot5);

var infospot6 = new PANOLENS.Infospot(150, PANOLENS.DataImage.Info);
infospot6.position.set(-1000, -100, 500);
infospot6.addHoverText('Escuchar Música Ambiental', -60);
infospot6.element.innerHTML = `
    <div class="infospot-content" style="background-color:rgba(128, 128, 128, 0.95);">
        <div class="infospot-title">
            <i class="fa-solid fa-music"></i> Audio Ambiental
        </div>
        <audio controls style="width: 100%; margin-top: 10px;">
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
            Tu navegador no soporta audio HTML5.
        </audio>
        <p>Escucha el ambiente sonoro de esta magnífica residencia. Sistema de sonido envolvente 
        instalado en todas las áreas.</p>
        <p style="margin-top: 10px; font-size: 12px;">
        <i class="fa-solid fa-volume-high"></i> Sistema Bose SoundTouch<br>
        <i class="fa-solid fa-house-signal"></i> Control multi-zona<br>
        <i class="fa-solid fa-wifi"></i> Streaming integrado
        </p>
    </div>
`;
panorama.add(infospot6);


var infospot7 = new PANOLENS.Infospot(70, PANOLENS.DataImage.Info);
infospot7.position.set(500 ,-55 , -39);
infospot7.addHoverText('Ventanas y Vistas Panorámicas', -60);
infospot7.element.innerHTML = `
    <div class="infospot-content" style="background-color:rgba(128, 128, 128, 0.95);">
        <div class="infospot-title">
            <i class="fa-regular fa-window-maximize"></i> Ventanas Panorámicas
        </div>
        <p>Ventanas de piso a techo con vidrio de control solar y vista a jardines privados.</p>
        <details style="margin-top: 10px; cursor: pointer;">
            <summary style="font-weight: bold; padding: 8px; background: rgba(255,255,255,0.2); border-radius: 5px;">
                <i class="fa-solid fa-circle-info"></i> Ver especificaciones técnicas ▼
            </summary>
            <div style="padding: 10px; margin-top: 5px; background: rgba(0,0,0,0.3); border-radius: 5px;">
                <p><i class="fa-solid fa-layer-group"></i> <strong>Material:</strong> Vidrio laminado triple</p>
                <p><i class="fa-solid fa-up-right-and-down-left-from-center"></i> <strong>Espesor:</strong> 24mm</p>
                <p><i class="fa-solid fa-sun"></i> <strong>Protección UV:</strong> 99.9%</p>
                <p><i class="fa-solid fa-temperature-half"></i> <strong>Aislamiento térmico:</strong> Factor U 0.8</p>
                <p><i class="fa-solid fa-volume-xmark"></i> <strong>Aislamiento acústico:</strong> 42 dB</p>
                <p><i class="fa-solid fa-border-all"></i> <strong>Marcos:</strong> Aluminio anodizado</p>
                <p><i class="fa-solid fa-gears"></i> <strong>Apertura:</strong> Motorizada con sensor</p>
            </div>
        </details>
    </div>
`;
panorama.add(infospot7);

var infospot8 = new PANOLENS.Infospot(75, PANOLENS.DataImage.Info);
infospot8.position.set(-1200, 200, -600);
infospot8.addHoverText('Descargar Documentación', -60);
infospot8.element.innerHTML = `
    <div class="infospot-content" style="background-color:rgba(128, 128, 128, 0.95);">
        <div class="infospot-title">
            <i class="fa-solid fa-file-lines"></i> Documentación Técnica
        </div>
        <div style="margin-top: 15px;">
            <a href="/pdf/plano.pdf" 
               target="_blank" 
               style="display: block; background: white; color: rgba(128, 128, 128, 0.95); padding: 10px; 
                      border-radius: 5px; text-decoration: none; margin-bottom: 8px;">
                <i class="fa-regular fa-file-pdf"></i> Planos Arquitectónicos.pdf
            </a>
        </div>
        <p>Descarga los planos arquitectónicos y especificaciones técnicas completas de la propiedad.</p>
        
    </div>
`;
panorama.add(infospot8);

var infospot9 = new PANOLENS.Infospot(60, PANOLENS.DataImage.Info);
infospot9.position.set(-95 ,-41 , -500);
infospot9.addHoverText('Galería de Fotos', -60);
infospot9.element.innerHTML = `
    <div class="infospot-content" style="background-color:rgba(128, 128, 128, 0.95); max-width: 400px;">
        <div class="infospot-title">
            <i class="fa-solid fa-images"></i> Galería Fotográfica
        </div>
        <p>Otras áreas de esta espectacular propiedad:</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 10px;">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=200" 
                 style="width: 100%; border-radius: 5px;" alt="Cocina">
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=200" 
                 style="width: 100%; border-radius: 5px;" alt="Sala">
            <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=200" 
                 style="width: 100%; border-radius: 5px;" alt="Habitación">
            <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=200" 
                 style="width: 100%; border-radius: 5px;" alt="Baño">
        </div>
        <p style="margin-top: 10px; font-size: 12px;">
        <i class="fa-solid fa-kitchen-set"></i> Cocina gourmet completa<br>
        <i class="fa-solid fa-couch"></i> Salas de estar amplias<br>
        <i class="fa-solid fa-bed"></i> Master suite con vestidor<br>
        <i class="fa-solid fa-bath"></i> Baños tipo spa
        </p>
    </div>
`;
panorama.add(infospot9);

var infospot10 = new PANOLENS.Infospot(90, PANOLENS.DataImage.Info);
infospot10.position.set(-800, 50, 1000);
infospot10.addHoverText('Contacto del Agente', -60);
infospot10.element.innerHTML = `
    <div class="infospot-content" style="background-color:rgba(128, 128, 128, 0.95); max-width: 350px;">
        <div class="infospot-title">
            <i class="fa-solid fa-user-tie"></i> Tu Agente Inmobiliario
        </div>
        <div style="text-align: center; margin: 15px 0;">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" 
                 style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid white;">
            <h3 style="margin: 10px 0 5px 0; color: white;">Angelica Rodríguez</h3>
            <p style="margin: 0; font-size: 12px; opacity: 0.9;">Agente Certificado</p>
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 5px; margin: 10px 0;">
            <p style="margin: 5px 0;"><i class="fa-solid fa-phone"></i> +506 8888-8888</p>
            <p style="margin: 5px 0;"><i class="fa-solid fa-envelope"></i> angelica@luxuryrealestate.com</p>
            <p style="margin: 5px 0;"><i class="fa-brands fa-whatsapp"></i> WhatsApp disponible</p>
        </div>
        <p style="font-size: 12px; opacity: 0.9;">
            <i class="fa-solid fa-star"></i> 15 años de experiencia<br>
            <i class="fa-solid fa-trophy"></i> Agente del año 2023<br>
            <i class="fa-solid fa-language"></i> Español, Inglés
        </p>
    </div>
`;
panorama.add(infospot10);

viewer = new PANOLENS.Viewer({container: container});

viewer.add(panorama);
