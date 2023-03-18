//função de navegar para a home.
function navegaHome() {
    window.location.href = "../home.html";
}

function calcularValor() {
    // obtém os valores dos inputs de quantidade e valor unitário
    var quantidade = document.getElementById("quantidade").value;
    var valorUnitario = document.getElementById("valorUnitario").value;

    // calcula o valor total multiplicando quantidade por valor unitário
    var valorTotal = quantidade * valorUnitario;

    // verifica se a quantidade está entre 100 e 200
    if (quantidade > 100 && quantidade <= 200) {
        // aplica um acréscimo de 25% no valor total se a quantidade estiver nessa faixa
        valorTotal = valorTotal * 1.25;
    } else if (quantidade > 200) {
        // aplica um acréscimo de 50% no valor total se a quantidade for maior que 200
        valorTotal = valorTotal * 1.5;
    }

    // define o valor do input de valor total como o valor calculado, arredondando para 2 casas decimais
    document.getElementById("valor").value = valorTotal.toFixed(2);
}