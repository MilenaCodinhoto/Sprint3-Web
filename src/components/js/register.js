const phoneMask = (input) => {
    let value = input.value;
    value = value.replace(/\D/g, "");
    if (value.length > 0) {
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    }
    if (value.length > 9) {
        value = value.replace(/(\d{5})(\d{4})$/, "$1-$2");
    }
    input.value = value;
}

const enviar = (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const senhaVerif = document.getElementById('senhaVerif').value;

    if (nome === '' || email === '' || senha === ''|| senhaVerif=== '') {
        alert('Erro!! Confira os dados e envie novamente!');
    } else {
        alert('Dados enviados com sucesso! Aguarde a resposta no email cadastrado.')
        window.location.href = '../../index.html';
    }
}