const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); 
    //variables del form
    const nombreInput = document.getElementById("name");
    const mensajeInput = document.getElementById("mensaje");
    const regaloSiInput = document.getElementById("regalo_si");
    const regaloNoInput = document.getElementById("regalo_no");
    const rifasSiInput = document.getElementById("disfrazSi");
    const rifasNoInput = document.getElementById("disfrazNo");
    const tarjetaSiInput = document.getElementById("tarjeta_si");
    const tarjetaNoInput = document.getElementById("tarjeta_no");

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

    validarRadio(regaloSiInput, regaloNoInput, regaloNoInput.nextElementSibling);
    validarRadio(rifasSiInput, rifasNoInput, rifasNoInput.nextElementSibling);
    validarRadio(tarjetaSiInput, tarjetaNoInput, tarjetaNoInput.nextElementSibling);

    if (!esFormularioValido) {
        return false; // Evitar que el formulario se envíe si no es válido
    }

});