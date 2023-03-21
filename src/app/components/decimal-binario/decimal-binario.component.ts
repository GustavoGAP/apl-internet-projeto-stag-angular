import { Component } from '@angular/core';

@Component({
  selector: 'app-decimal-binario',
  templateUrl: './decimal-binario.component.html',
  styleUrls: ['./decimal-binario.component.css']
})
export class DecimalBinarioComponent {
  decimal: number = 0;
  resultado: string = '';

  converter() {
    // obtém o valor do input de número decimal
    let decimal = this.decimal;
    // define uma variável para armazenar o resultado em binário
    let binario = "";

    // realiza o método de divisão sucessiva para converter decimal em binário
    while (decimal > 0) {
      // calcula o resto da divisão por 2 e adiciona ao início da string binária
      binario = (decimal % 2) + binario;
      // divide o decimal por 2 (desconsiderando o resto) para continuar a conversão
      decimal = Math.floor(decimal / 2);
    }

    // exibe o resultado na página HTML
    this.resultado = "O número binário correspondente é " + binario;
  }
}
