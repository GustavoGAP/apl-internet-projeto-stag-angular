//função de navegar para a home.
function navegaHome() {
    window.location.href = "../home.html";
}

function verificarCrescente() {
    // Obtém o número inserido pelo usuário
    var numero = document.getElementById("numero").value;

    // Converte o número em uma string para poder percorrer seus caracteres
    var strNumero = numero.toString();

    // Inicializa a variável de controle
    var anterior = -1; // Valor inválido para garantir que o primeiro caracter será maior

    // Percorre cada caracter da string verificando se é maior que o anterior
    for (var i = 0; i < strNumero.length; i++) {
        var atual = parseInt(strNumero.charAt(i));
        if (atual <= anterior) {
            // Se o caracter atual não for maior que o anterior, o número não é crescente
            document.getElementById("resultado").innerHTML = "O número não é crescente";
            return;
        }
        anterior = atual;
    }

    // Se percorreu toda a string sem encontrar caracteres fora da ordem crescente, o número é crescente
    document.getElementById("resultado").innerHTML = "O número é crescente";
}
