import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-mdc',
  templateUrl: './calcular-mdc.component.html',
  styleUrls: ['./calcular-mdc.component.css']
})
export class CalcularMDCComponent {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  calcularMDC(): void {
    // Inicializa as variáveis usadas no cálculo do MDC
    let resto = 1;
    let a = Math.max(this.num1, this.num2);
    let b = Math.min(this.num1, this.num2);

    // Executa as divisões sucessivas até chegar a uma divisão exata
    while (resto !== 0) {
      resto = a % b;
      a = b;
      b = resto;
    }

    // Define o resultado na variável de modelo
    this.resultado = a;
  }
}
