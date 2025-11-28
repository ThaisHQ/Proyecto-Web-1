document.addEventListener('DOMContentLoaded', function() {
    inicializarCombos();
});

function inicializarCombos() {
    const radiosSimple = document.querySelectorAll('input[name="combo-simple"]');
    radiosSimple.forEach(radio => {
        radio.addEventListener('change', calcularComboSimple);
    });
    document.getElementById('palomitas-doble').addEventListener('change', calcularComboDoble);
    document.getElementById('refresco-doble').addEventListener('change', calcularComboDoble);
    document.getElementById('base-interactivo').addEventListener('change', calcularComboInteractivo);
    document.getElementById('bebida-interactivo').addEventListener('change', calcularComboInteractivo);
    
    const checkboxes = document.querySelectorAll('.extra-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calcularComboInteractivo);
    });
}
function calcularComboSimple() {
    const seleccionado = document.querySelector('input[name="combo-simple"]:checked');
    let precio = 0;
    
    switch(seleccionado.value) {
        case 'palomitas':
            precio = 50;
            break;
        case 'refresco':
            precio = 40;
            break;
        case 'nachos':
            precio = 60;
            break;
    }
    
    document.getElementById('precio-simple').textContent = '$' + precio;
}

function calcularComboDoble() {
    const precioPalomitas = parseInt(document.getElementById('palomitas-doble').value);
    const precioRefresco = parseInt(document.getElementById('refresco-doble').value);
    const total = precioPalomitas + precioRefresco;
    
    document.getElementById('precio-doble').textContent = '$' + total;
}

function calcularComboInteractivo() {
    const precioBase = parseInt(document.getElementById('base-interactivo').value);
    const precioBebida = parseInt(document.getElementById('bebida-interactivo').value);
    const cantidad = parseInt(document.getElementById('cantidad-interactivo').textContent);
    
    let precioExtras = 0;
    const checkboxes = document.querySelectorAll('.extra-checkbox:checked');
    checkboxes.forEach(checkbox => {
        precioExtras += parseInt(checkbox.value);
    });
    
    const subtotal = precioBase + precioBebida + precioExtras;
    const total = subtotal * cantidad;
    
    document.getElementById('precio-interactivo').textContent = '$' + total;
}

function cambiarCantidad(cambio) {
    const cantidadElement = document.getElementById('cantidad-interactivo');
    let cantidad = parseInt(cantidadElement.textContent);
    
    cantidad += cambio;
    
    if (cantidad < 1) {
        cantidad = 1;
    }
    if (cantidad > 10) {
        cantidad = 10;
    }
    
    cantidadElement.textContent = cantidad;
    calcularComboInteractivo();
}
function agregarCombo(tipo) {
    let mensaje = '';
    let precio = '';
    
    switch(tipo) {
        case 'simple':
            const radioSeleccionado = document.querySelector('input[name="combo-simple"]:checked');
            const textoRadio = radioSeleccionado.parentElement.querySelector('span').textContent;
            precio = document.getElementById('precio-simple').textContent;
            mensaje = `<strong class="color-targeta-peli">Combo Simple</strong><br>${textoRadio}`;
            break;
            
        case 'doble':
            const palomitas = document.getElementById('palomitas-doble');
            const refresco = document.getElementById('refresco-doble');
            precio = document.getElementById('precio-doble').textContent;
            mensaje = `<strong  class="color-targeta-peli">Combo Doble</strong><br>
                       Palomitas: ${palomitas.options[palomitas.selectedIndex].text}<br>
                       Refresco: ${refresco.options[refresco.selectedIndex].text}`;
            break;
            
        case 'interactivo':
            const base = document.getElementById('base-interactivo');
            const bebida = document.getElementById('bebida-interactivo');
            const cantidad = document.getElementById('cantidad-interactivo').textContent;
            precio = document.getElementById('precio-interactivo').textContent;
            
            let extras = '';
            const checkboxes = document.querySelectorAll('.extra-checkbox:checked');
            if (checkboxes.length > 0) {
                extras = '<br><strong >Extras:</strong><br>';
                checkboxes.forEach(checkbox => {
                    const textoExtra = checkbox.parentElement.querySelector('span').textContent;
                    extras += `• ${textoExtra}<br>`;
                });
            }
            
            mensaje = `<strong>Combo Interactivo</strong><br>
                       ${base.options[base.selectedIndex].text}<br>
                       ${bebida.options[bebida.selectedIndex].text}
                       ${extras}
                       <strong>Cantidad:</strong> ${cantidad}`;
            break;
    }
    Swal.fire({
        title: '¡Agregado al Carrito! 🛒',
        html: `<div class="color-targeta-peli">${mensaje} </div><br><br><div style="font-size: 24px; color: #9BCEC6; font-weight: bold;">Total: ${precio}</div>`,
        icon: 'success',
        confirmButtonText: 'Continuar comprando',
        confirmButtonColor: '#538C83',
        showCancelButton: true,
        cancelButtonText: 'Ver carrito',
        cancelButtonColor: '#9BCEC6',
        customClass: {
            popup: 'glass',
            title: 'color-verde-claro',
        }
    }).then((result) => {
        if (!result.isConfirmed) {
            Swal.fire({
                title: 'Carrito de Compras',
                text: 'Funcionalidad en desarrollo... 🚧',
                icon: 'info',
                confirmButtonColor: '#538C83'
            });
        }
    });
}