let contraValida;

export const validarLargo = (input, min, max)=>{
    const inputValue = input.value.trim()
    if (inputValue.length >= min && inputValue.length <= max) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid')
        return true
    }else{
        input.classList.add('is-valid')
        input.classList.add('is-invalid')
        return false
    }
}

export const validarMail = (mail)=>{
    const mailValue = mail.value.trim();
    const patron = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if (patron.test(mailValue)) {
        mail.classList.remove('is-invalid');
        mail.classList.add('is-valid')
        return true
    }else{
        mail.classList.add('is-valid')
        mail.classList.add('is-invalid')
        return false
    }
}

export const validarContra = (contra) => {
    const contraValue = contra.value.trim();
    const patron = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    if (patron.test(contraValue)) {
        contra.classList.remove('is-invalid');
        contra.classList.add('is-valid')
        contraValida = contraValue;
        return true, contraValida
    }else{
        contra.classList.add('is-valid')
        contra.classList.add('is-invalid')
        return false
    }
}

export const validarRepetirContra = (contra) =>{
    const contraValue = contra.value.trim();
    if (contraValue === contraValida) {
        contra.classList.remove('is-invalid');
        contra.classList.add('is-valid')
        return true
    }else{
        contra.classList.add('is-valid')
        contra.classList.add('is-invalid')
        return false
    }
}

