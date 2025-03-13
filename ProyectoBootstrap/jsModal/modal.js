document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    let modalConfirmacion;
   
    try {
        modalConfirmacion = new bootstrap.Modal(document.getElementById('modalConfirmacion'));
    } catch (error) {
        console.error('Error al inicializar el modal:', error);
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validar formulario
    function validateForm() {
        const nombre = document.getElementById('nombreContacto');
        const email = document.getElementById('emailContacto');
        const mensaje = document.getElementById('mensajeContacto');
        let isValid = true;
        
        if (!nombre.value.trim()) {
            nombre.classList.add('is-invalid');
            isValid = false;
        } else {
            nombre.classList.remove('is-invalid');
            nombre.classList.add('is-valid');
        }

        if (!email.value.trim() || !isValidEmail(email.value.trim())) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
        }
        
        if (!mensaje.value.trim()) {
            mensaje.classList.add('is-invalid');
            isValid = false;
        } else {
            mensaje.classList.remove('is-invalid');
            mensaje.classList.add('is-valid');
        }

        return isValid;
    }
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (validateForm()) {
            const formData = {
                nombre: document.getElementById('nombreContacto').value.trim(),
                email: document.getElementById('emailContacto').value.trim(),
                mensaje: document.getElementById('mensajeContacto').value.trim()
            };

            console.log('Enviando datos:', formData);

            if (modalConfirmacion) {
                modalConfirmacion.show();
                form.reset();
                form.querySelectorAll('.is-valid, .is-invalid').forEach(element => {
                    element.classList.remove('is-valid', 'is-invalid');
                });
            }
        }
    });
});

