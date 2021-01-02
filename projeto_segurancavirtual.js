function VerificarEntrada() {
    NomeDoConvidado = document.getElementById('nome').value;
    ConvidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan']
    if (ConvidadosCristian.includes(NomeDoConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode Entrar!'
    } else {
        document.getElementById('PermissoaDeEntrada').innerText = 'Você não pode Entrar!'
    }
}