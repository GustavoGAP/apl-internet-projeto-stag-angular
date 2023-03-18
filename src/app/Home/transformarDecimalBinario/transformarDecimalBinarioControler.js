//função de navegar para a home.
function navegaHome() {
    window.location.href = "../home.html";
}

function converter() {
    // obtém o valor do input de número decimal
    var decimal = parseInt(document.getElementById("decimalInput").value);
    // define uma variável para armazenar o resultado em binário
    var binario = "";

    // realiza o método de divisão sucessiva para converter decimal em binário
    while (decimal > 0) {
        // calcula o resto da divisão por 2 e adiciona ao início da string binária
        binario = (decimal % 2) + binario;
        // divide o decimal por 2 (desconsiderando o resto) para continuar a conversão
        decimal = Math.floor(decimal / 2);
    }

    // exibe o resultado na página HTML
    document.getElementById("resultado").innerHTML = "O número binário correspondente é " + binario;
}