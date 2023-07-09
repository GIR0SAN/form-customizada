const fields = document.querySelectorAll("[required]")

function customValidation(event){

    event.preventDefault()
    const field = event.target

    function verifyError(){
        let foundError = false

        for (const error in field.validity){
            if (field.validity[error] && !field.validity.valid){
                foundError =  true
            }
        }
        
        return foundError
    }
   
    const error = verifyError()
    console.log("Error exist: ", error)

    const spanError = field.parentNode.querySelector("span.error")

    if (error) {
        spanError.classList.add("active")
        spanError.innerHTML = "Campo Obrigatório"

    } else {
        spanError.classList.remove("active")
        spanError.innerHTML = ""
    }

    
}

for (field of fields ){
    field.addEventListener("invalid", customValidation)
    field.addEventListener("blur", customValidation)
}










document.querySelector("form").addEventListener("submit", event => {
    console.log("Enviar o formulário")

    event.preventDefault()
})
