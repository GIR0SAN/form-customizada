const fields = document.querySelectorAll("[required")


console.log(fields)










document.querySelector("form").addEventListener("submit", event => {
    console.log("Enviar o formulário")

    event.preventDefault()
})
