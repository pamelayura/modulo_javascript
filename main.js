
const form = document.getElementById('form-validacao');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let numeroA = parseFloat(document.getElementById('numero-a').value);
    let numeroB = parseFloat(document.getElementById('numero-b').value);
    const mensagemSucesso = `Formulário validado com sucesso!`;
    const mensagemErro = `Não foi possível validar!`;

    if (numeroB>numeroA) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';

    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }

    setTimeout(function() {
    location.reload();
    }, 2000)
});


