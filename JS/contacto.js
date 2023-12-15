function enviarMail() {
Email.send({
    Host: "smtp.elasticemail.com",
    Username: "fuentesvalentina74@gmail.com",
    Password: "5AD01578F2E2EB036EB079AA1C0A8277B4C4",
    To: "",
    From: "fuentesvalentina74@gmail.com",
    Subject: "Consulta",
    Body: "consulta",
}).then((message) => alert(message));
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
'use strict'

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
form.addEventListener('submit', event => {
if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
}

form.classList.add('was-validated')
}, false)
})
})()