const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); 
    //variables del form
    const nombreInput = document.getElementById("name");
    const mensajeInput = document.getElementById("mensaje");
    const asistenciaSiInput = document.getElementById("asistencia_si");
    const asistenciaNoInput = document.getElementById("asistencia_no");
    const disfrazSiInput = document.getElementById("disfrazSi");
    const disfrazNoInput = document.getElementById("disfrazNo");
    const bebidaSiInput = document.getElementById("bebida_si");
    const bebidaNoInput = document.getElementById("bebida_no");

    let esFormularioValido = true;

    function validarCampo(input, mensajesError, validarFuncion) {
        const valor = input.value.trim();
        const mensajeErrorElement = input.nextElementSibling;

        if (valor === "") {
            mensajeErrorElement.textContent = `El campo ${input.name} no puede estar en blanco.`;
            esFormularioValido = false;
        } else {
            mensajeErrorElement.textContent = "";
        }
    }

    function validarRadio(input1, input2, mensajesError) {
        if (!input1.checked && !input2.checked) {
            mensajesError.textContent = `Debes seleccionar una opción para ${input1.name}.`;
            esFormularioValido = false;
        } else {
            mensajesError.textContent = "";
        }
    }

    validarCampo(nombreInput, nombreInput.nextElementSibling);
    validarCampo(mensajeInput, mensajeInput.nextElementSibling);

    validarRadio(asistenciaSiInput, asistenciaNoInput, asistenciaNoInput.nextElementSibling);
    validarRadio(disfrazSiInput, disfrazNoInput, rifasNoInput.nextElementSibling);
    validarRadio(bebidaSiInput, bebidaNoInput, bebidaNoInput.nextElementSibling);

    if (!esFormularioValido) {
        return false; // Evitar que el formulario se envíe si no es válido
    }

});