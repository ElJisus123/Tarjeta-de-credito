const numeroInput = document.getElementById("inputnumerotarjeta")
const numeroTarjeta = document.getElementById("numerotarjeta")
function setNumeroTarjeta(event) {
    let numberText = parseInt(
        numeroInput.value.replace(/ /g, "")

    )

    if (isNaN(numberText)) {
        numberText = ""

    }
    if (numeroInput.value == "") {
        numeroTarjeta.textContent = "#### #### #### ####"
        return;
    }
    const result = String(numberText).replace(/([0-9]{4})/g, '$1')

    numeroInput.value = result
    numeroTarjeta.textContent = result
}
numeroInput.addEventListener("keyup", setNumeroTarjeta) 

const nombreInput = document.getElementById("inputnombrecompleto")
function setNombreTarjeta(event){
    document.getElementById("nombrecompleto").textContent = nombreInput.value
    
}
nombreInput.addEventListener("keyup", setNombreTarjeta)


function setccv (event) {
document.getElementById("idccv")

}

function toogleFormulario(){
    document.getElementById("form").classList.toggle("hidden")
}
 
function MostrarDatos (){
    if(nombreInput.value)
}