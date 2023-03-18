//função de navegar para a home.
function navegaHome() {
    window.location.href = "../home.html";
}
//função que soma dos dois numeros selecionados pelo usuario
function somar() {
    // obtém os valores dos inputs de números e os converte em números inteiros
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    // realiza a soma dos números
    var total = numero1 + numero2;

    // define o valor do input de resultado como o valor da soma
    document.getElementById("total").value = total;
}
//função que subtrai os dois numeros selecionados pelo usuario
function subtrair() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var total = numero1 - numero2;
    document.getElementById("total").value = total;
}
//função que multiplica os dois numeros selecionados pelo usuario
function multiplicar() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var total = numero1 * numero2;
    document.getElementById("total").value = total;
}
//função que divide os dois numeros selecionados pelo usuario
function divide() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var total = numero1 / numero2;
    document.getElementById("total").value = total;
}
