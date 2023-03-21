import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-kwh',
  templateUrl: './calculadora-kwh.component.html',
  styleUrls: ['./calculadora-kwh.component.css']
})
export class CalculadoraKWHComponent {

// Declaração das variáveis com tipo number e atribuição do valor inicial de 0
quantidade: number = 0;
valorUnitario: number = 0;
valorTotal: number = 0;

// Função para calcular o valor total da compra
calcularValor() {

  // Define duas variáveis locais com os valores dos atributos correspondentes
  let quantidade = this.quantidade;
  let valorUnitario = this.valorUnitario;

  // Calcula o valor total da compra multiplicando a quantidade pelo valor unitário
  let valorTotal = quantidade * valorUnitario;

  // Verifica se a quantidade comprada está acima de 100 e abaixo ou igual a 200
  if (quantidade > 100 && quantidade <= 200) {
    // Aumenta o valor total em 25% se a quantidade estiver no intervalo especificado
    valorTotal = valorTotal * 1.25;
  } else if (quantidade > 200) {
    // Aumenta o valor total em 50% se a quantidade for maior que 200
    valorTotal = valorTotal * 1.5;
  }

  // Converte o valor total em uma string com duas casas decimais e atribui ao atributo correspondente
  this.valorTotal = parseFloat(valorTotal.toFixed(2));
}
}