const fields = document.querySelectorAll("[required]")

function customValidation(event){

    event.preventDefault()
    const field = event.target

    function verifyError(){
        let foundError = false

        for (const error in field.validity){
            if (error !== "customError" && field.validity[error]){
                foundError =  true
            }
        }
        
        return foundError
    }
   
    const error = verifyError()
    console.log("Error exist: ", error)

    if (error){
        field.setCustomValidity("Esse campo é obrigatório")
    } else {
        field.setCustomValidity("")
    }

    
}

for (field of fields ){
    field.addEventListener("invalid", customValidation)
}










document.querySelector("form").addEventListener("submit", event => {
    console.log("Enviar o formulário")

    event.preventDefault()
})
