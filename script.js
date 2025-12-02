document.addEventListener('DOMContentLoaded', function () {


    // Validación de formularios
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            let isValid = true;
            const inputs = form.querySelectorAll('input[required], select[required]');

            inputs.forEach(input => {
                // Remover clases de error previas
                input.classList.remove('error-border');
                const label = input.nextElementSibling;
                if (label && label.tagName === 'LABEL') {
                    label.classList.remove('error');
                }

                // Encontrar el contenedor de mensaje de error (el span siguiente al div padre o al input)
                // Estructura: div.user-box -> input ... -> label ... -> span.error-message (NO, el span está fuera del user-box)
                // Estructura actual: div.user-box -> input, label. Luego span.error-message
                const userBox = input.closest('.user-box');
                let errorSpan = null;
                if (userBox) {
                    errorSpan = userBox.nextElementSibling;
                }

                if (errorSpan && errorSpan.classList.contains('error-message')) {
                    errorSpan.classList.add('hidden');
                    errorSpan.textContent = '';
                }

                // Validar campo
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error-border');
                    if (label && label.tagName === 'LABEL') {
                        label.classList.add('error');
                    }

                    if (errorSpan && errorSpan.classList.contains('error-message')) {
                        errorSpan.classList.remove('hidden');
                        errorSpan.textContent = 'Este campo es obligatorio.';
                    }
                }

                // Validación especial para select
                if (input.tagName === 'SELECT' && (input.value === '' || input.selectedIndex === 0)) {
                    isValid = false;
                    input.classList.add('error-border');
                    const label = input.nextElementSibling;
                    if (label && label.tagName === 'LABEL') {
                        label.classList.add('error');
                    }
                }
            });

            // Si no es válido, prevenir el envío
            if (!isValid) {
                e.preventDefault();
                // alert('Por favor, completa todos los campos requeridos.'); // Opcional
            }
        });
    });

    // Animación de labels al escribir
    const inputs = document.querySelectorAll('.user-box input, .user-box select');

    inputs.forEach(input => {
        // Función para actualizar estado del label
        const updateLabel = (element) => {
            const label = element.nextElementSibling;
            if (label && label.tagName === 'LABEL') {
                if (element.value || document.activeElement === element) {
                    label.style.top = '-25px';
                    label.style.color = '#CAAB55';
                    label.style.fontSize = '12px';
                } else {
                    label.style.top = '0';
                    label.style.color = 'black';
                    label.style.fontSize = '16px';
                }
            }
        };

        input.addEventListener('focus', function () {
            const label = this.nextElementSibling;
            if (label && label.tagName === 'LABEL') {
                label.style.top = '-25px';
                label.style.color = '#CAAB55';
                label.style.fontSize = '12px';
            }
        });

        input.addEventListener('blur', function () {
            if (!this.value) {
                const label = this.nextElementSibling;
                if (label && label.tagName === 'LABEL') {
                    label.style.top = '0';
                    label.style.color = 'black';
                    label.style.fontSize = '16px';
                }
            }
        });

        // Inicializar estado (por si hay valores precargados)
        if (input.value) {
            const label = input.nextElementSibling;
            if (label && label.tagName === 'LABEL') {
                label.style.top = '-25px';
                label.style.color = '#CAAB55';
                label.style.fontSize = '12px';
            }
        }
    });

    // Manejo del select de campus
    const campusSelect = document.getElementById('campus');
    if (campusSelect) {
        campusSelect.addEventListener('change', function () {
            if (this.value !== '' && this.value !== 'Selecciona una opción') {
                this.style.color = '#797979';
            } else {
                this.style.color = '#ff4444'; // O el color de error/placeholder
            }
        });
    }

    // Efecto de hover en botones
    const buttons = document.querySelectorAll('button[type="submit"]');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    console.log('Script inicializado correctamente.');
});

// Funciones auxiliares globales (si se necesitan fuera del scope)
function validarMatricula(matricula) {
    const regex = /^[a-zA-Z0-9]{1,12}$/;
    return regex.test(matricula);
}

function validarFolio(folio) {
    return folio.trim().length > 0 && folio.length <= 30;
}
