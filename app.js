document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-principal');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const abierto = nav.classList.toggle('abierto');
            menuToggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        });
    }

    const paginaActual = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-principal a').forEach((enlace) => {
        if (enlace.getAttribute('href') === paginaActual) {
            enlace.classList.add('activo');
        }
    });

    const formulario = document.querySelector('#formulario-contacto');
    const mensajeFormulario = document.querySelector('#mensaje-formulario');

    if (formulario && mensajeFormulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();

            if (!formulario.checkValidity()) {
                mensajeFormulario.textContent = 'Por favor, completa todos los campos requeridos correctamente.';
                formulario.reportValidity();
                return;
            }

            mensajeFormulario.textContent = 'Gracias por tu mensaje. Nos comunicaremos contigo pronto.';
            formulario.reset();
        });
    }
});
