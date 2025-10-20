const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener ('submit', function(event) {

    event.preventDefault();

    const campoNome = document.querySelector('#name');
    const errNome = document.querySelector('#errNome');

    if (campoNome.value.length < 3) {
        errNome.textContent = 'O nome deve ter no mínimo 3 caracteres.';
        campoNome.focus();
        return;
    } else  {
        errNome.textContent = '';
    }

    const campoEmail = document.querySelector('#email');
    const errEmail = document.querySelector('#errEmail');

    if(!campoEmail.value.match(emailRegex)) {
        errEmail.textContent = 'Digite um e-mail válido.';
        campoEmail.focus();
        return;
    } else {
        errEmail.textContent = '';
    }

    const campoSubject = document.querySelector('#subject');
    const errSubject = document.querySelector('#errSubject');

    if(campoSubject.value.length < 5) {
        errSubject.textContent = 'O assunto deve ter no mínimo 5 caracteres.';
        campoSubject.focus();
        return;
    } else {
        errSubject.textContent = '';
    }

    const campoMessage = document.querySelector('#message');
    const errMessage = document.querySelector('#errMessage')

    if ((campoMessage.value.length < 10) || (campoMessage.value.length > 1000)) {
        errMessage.textContent = 'A menssagem deve ter no mínimo 10 caracteres e no máximo 1000 caracteres.';
        campoMessage.focus();
        return;
    } else {
        errMessage.textContent = '';
    }

    alert('Formulário enviado com sucesso.');

    campoNome.value = ''
    campoEmail.value = ''
    campoSubject.value = ''
    campoMessage.value = ''
})