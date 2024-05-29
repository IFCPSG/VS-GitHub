document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

        // Obtener los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
 const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
        // Mostrar una alerta con los datos ingresados
        alert(`Nombre: ${name}\nCorreo Electrónico: ${email}`);
    });
});

