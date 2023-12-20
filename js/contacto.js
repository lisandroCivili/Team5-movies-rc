(() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
  
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
            } else {
                event.preventDefault();
                sendEmail(form);
            }
        }, false);
    });
  
    function sendEmail(form) {
        const btn = form.querySelector('button[type="submit"]');
        btn.value = 'Sending...';
  
        const serviceID = 'default_service';
        const templateID = 'template_ba5dtzf';
  
        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                btn.value = 'Send Email';
                Swal.fire({
                    title: "Consulta enviada",
                    text: "Su consulta fue enviada exitosamente!",
                    icon: "success"
                });
            })
            .catch((err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            })
            .finally(() => {
                btn.disabled = false;
            });
    }
  })();