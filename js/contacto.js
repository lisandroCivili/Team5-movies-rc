(() => {
    'use strict'
const forms = document.querySelectorAll('.needs-validation')
    
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

    const btn = document.getElementById('button');
    console.log("button")

    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();
    
       btn.value = 'Sending...';
    
       const serviceID = 'default_service';
       const templateID = 'template_ba5dtzf';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Email';
          Swal.fire({
            title: "Consulta enviada",
            text: "Su consulta fue enviada exitosamete!",
            icon: "success"
          });
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });