//função de navegar para a home.
function navegaHome() {
    window.location.href = "../home.html";
}

function calcularTabuada() {
    // Obtem os valores digitados nos campos de entrada
    var numeroMultiplicado = parseInt(document.getElementById("numeroMultiplicado").value);
    var numeroInicio = parseInt(document.getElementById("numeroInicio").value);
    var numeroFim = parseInt(document.getElementById("numeroFim").value);

    // Inicializa uma variável para armazenar a tabuada
    var tabuada = "";

    // Executa um loop que percorre o intervalo de valores iniciais e finais
    for (var i = numeroInicio; i <= numeroFim; i++) {
        // Concatena cada linha da tabuada na variável tabuada
        tabuada += numeroMultiplicado + " x " + i + " = " + (numeroMultiplicado * i) + "<br>";
    }

    // Exibe o resultado na página, inserindo o conteúdo da variável tabuada no elemento com id "resultado"
    document.getElementById("resultado").innerHTML = tabuada;
}