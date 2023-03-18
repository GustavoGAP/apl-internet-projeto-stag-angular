//função de navegar para a home.
function navegaHome() {
    window.location.href = "../home.html";
}

function calcularMDC() {
    // Obtem os valores digitados nos campos de entrada
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    // Inicializa as variáveis usadas no cálculo do MDC
    var resto = 1;
    var a = Math.max(num1, num2);
    var b = Math.min(num1, num2);

    // Executa as divisões sucessivas até chegar a uma divisão exata
    while (resto !== 0) {
        resto = a % b;
        a = b;
        b = resto;
    }

    // Exibe o resultado na página
    document.getElementById("resultado").innerHTML = "O MDC entre " + num1 + " e " + num2 + " é " + a;
}
