// actualización  real del número de tarjeta
const numeroInput = document.getElementById("inputnumerotarjeta");
const numeroTarjeta = document.getElementById("numerotarjeta");

function setNumeroTarjeta(event) {
    let numberText = numeroInput.value.replace(/\D/g, ""); // eliminar caracteres no numéricos

    if (numberText === "") {
        numeroTarjeta.textContent = "#### #### #### ####";
    } else {
        // formatear el número con espacios cada 4 dígitos
        numeroTarjeta.textContent = numberText.replace(/(\d{4})(?=\d)/g, "$1 ");
    }
}

numeroInput.addEventListener("input", setNumeroTarjeta);

// actualización real del nombre
const nombreInput = document.getElementById("inputnombrecompleto");
const nombreTarjeta = document.getElementById("nombrecompleto");

function setNombreTarjeta() {
    nombreTarjeta.textContent = nombreInput.value || "NOMBRE COMPLETO";
}

nombreInput.addEventListener("input", setNombreTarjeta);

// actualización del ccv para girar la tarjeta
const ccvInput = document.getElementById("ccv");
const ccvTarjeta = document.getElementById("idccv");

function setCcv() {
    let numberText = ccvInput.value.replace(/\D/g, ""); // eliminar caracteres no numéricos
    
    ccvTarjeta.textContent = numberText || "###";
    ccvInput.value = numberText
}

ccvInput.addEventListener("input", setCcv);

// actualización de la fecha de expiración
const expiracionInput = document.getElementById("expiracion");
const expiracionTarjeta = document.getElementById("expiraciontarjeta");

function setExpiracion() {
    const [year, month] = expiracionInput.value.split("-");
    expiracionTarjeta.textContent = month && year ? `${month}/${year.slice(2)}` : "MM/YY"
    
}

expiracionInput.addEventListener("input", setExpiracion);

// mostrar y ocultar el formulario
function toogleFormulario() {
    document.getElementById("form").classList.toggle("hidden");
}
