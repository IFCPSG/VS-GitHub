document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

        // Validación
        let valid = true;

        // Validar nombre
        if (nameInput.value.length < 3) {
            nameError.textContent = 'El nombre debe tener al menos 3 caracteres.';
            nameError.style.display = 'block';
            valid = false;
        } else {
            nameError.style.display = 'none';
        }

        // Validar correo electrónico
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Por favor, introduce un correo electrónico válido.';
            emailError.style.display = 'block';
            valid = false;
        } else {
            emailError.style.display = 'none';
        }

        if (valid) {
            // Mostrar una alerta con los datos ingresados
            alert(`Nombre: ${nameInput.value}\nCorreo Electrónico: ${emailInput.value}`);
            // Aquí podrías enviar los datos al servidor usando fetch o XMLHttpRequest
        }
    });
});

