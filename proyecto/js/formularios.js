const SERVICE_ID = 'service_qy089tj';
const TEMPLATE_CONTACTO = 'template_usvyhdr';
const TEMPLATE_SUSCRIPCION = 'template_vwy60ba';
const PUBLIC_KEY = 'c5uDVEqll5P3ukbCG';

(function() {
    emailjs.init(PUBLIC_KEY);
})();

function enviarContacto() {
    const nombre = document.getElementById('contacto-nombre').value.trim();
    const email = document.getElementById('contacto-email').value.trim();
    const telefono = document.getElementById('contacto-telefono').value.trim();
    const asunto = document.getElementById('contacto-asunto').value;
    const mensaje = document.getElementById('contacto-mensaje').value.trim();
    
    if (nombre === '' || email === '' || telefono === '' || asunto === '' || mensaje === '') {
        Swal.fire({
            title: 'Campos vacíos',
            text: 'Debe llenar todos los campos',
            icon: 'error',
            confirmButtonColor: '#538C83'
        });
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            title: 'Email inválido',
            text: 'Por favor ingresa un email válido',
            icon: 'error',
            confirmButtonColor: '#538C83'
        });
        return false;
    }
    Swal.fire({
        title: 'Enviando mensaje...',
        html: 'Por favor espera',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
    emailjs.sendForm(SERVICE_ID, TEMPLATE_CONTACTO, '#form-contacto', PUBLIC_KEY)
        .then(function() {
            Swal.fire({
                title: '¡Mensaje Enviado! 📧',
                html: `<p>Gracias <strong>${nombre}</strong>, hemos recibido tu mensaje.</p>`,
                icon: 'success',
                confirmButtonColor: '#538C83'
            });
            limpiarContacto();
        }, function(error) {
            console.log('Error:', error);
            Swal.fire({
                title: 'Error al enviar',
                text: 'Hubo un problema. Intenta nuevamente.',
                icon: 'error',
                confirmButtonColor: '#538C83'
            });
        });
    
    return false;
}

function limpiarContacto() {
    document.getElementById('contacto-nombre').value = '';
    document.getElementById('contacto-email').value = '';
    document.getElementById('contacto-telefono').value = '';
    document.getElementById('contacto-asunto').value = '';
    document.getElementById('contacto-mensaje').value = '';
}

function enviarSuscripcion() {
    const nombre = document.getElementById('suscripcion-nombre').value.trim();
    const email = document.getElementById('suscripcion-email').value.trim();
    const fecha = document.getElementById('suscripcion-fecha').value;
    const terminos = document.getElementById('suscripcion-terminos').checked;
    const generosCheckboxes = document.querySelectorAll('input[name="genero"]:checked');
    
    if (nombre === '' || email === '' || fecha === '') {
        Swal.fire({
            title: 'Campos vacíos',
            text: 'Debe llenar todos los campos obligatorios',
            icon: 'error',
            confirmButtonColor: '#538C83'
        });
        return false;
    }
    
    if (generosCheckboxes.length === 0) {
        Swal.fire({
            title: 'Selecciona géneros',
            text: 'Debes seleccionar al menos un género',
            icon: 'error',
            confirmButtonColor: '#538C83'
        });
        return false;
    }
    
    if (!terminos) {
        Swal.fire({
            title: 'Términos y condiciones',
            text: 'Debes aceptar los términos',
            icon: 'error',
            confirmButtonColor: '#538C83'
        });
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            title: 'Email inválido',
            text: 'Por favor ingresa un email válido',
            icon: 'error',
            confirmButtonColor: '#538C83'
        });
        return false;
    }
    Swal.fire({
        title: 'Procesando suscripción...',
        html: 'Por favor espera',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
    emailjs.sendForm(SERVICE_ID, TEMPLATE_SUSCRIPCION, '#form-suscripcion', PUBLIC_KEY)
        .then(function() {
            Swal.fire({
                title: '¡Bienvenido a Nova VIP! ⭐',
                html: `<p>¡Gracias <strong>${nombre}</strong>!</p>
                       <p>Tu suscripción ha sido exitosa.</p>`,
                icon: 'success',
                confirmButtonColor: '#538C83'
            });
            limpiarSuscripcion();
        }, function(error) {
            console.log('Error:', error);
            Swal.fire({
                title: 'Error al suscribir',
                text: 'Hubo un problema. Intenta nuevamente.',
                icon: 'error',
                confirmButtonColor: '#538C83'
            });
        });
    
    return false; 
}
function limpiarSuscripcion() {
    document.getElementById('suscripcion-nombre').value = '';
    document.getElementById('suscripcion-email').value = '';
    document.getElementById('suscripcion-fecha').value = '';
    document.getElementById('suscripcion-terminos').checked = false;
    const checkboxes = document.querySelectorAll('input[name="genero"]');
    checkboxes.forEach(cb => cb.checked = false);
}