import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros-crescentes',
  templateUrl: './numeros-crescentes.component.html',
  styleUrls: ['./numeros-crescentes.component.css']
})
export class NumerosCrescentesComponent {

  numero: number = 0;
  resultado: string = '';

  verificarCrescente(): void {
    // Converte o número em uma string para poder percorrer seus caracteres
    const strNumero: string = this.numero.toString();

    // Inicializa a variável de controle
    let anterior: number = -1; // Valor inválido para garantir que o primeiro caracter será maior

    // Percorre cada caracter da string verificando se é maior que o anterior
    for (let i = 0; i < strNumero.length; i++) {
      const atual: number = parseInt(strNumero.charAt(i));
      if (atual <= anterior) {
        // Se o caracter atual não for maior que o anterior, o número não é crescente
        this.resultado = 'O número não é crescente';
        return;
      }
      anterior = atual;
    }

    // Se percorreu toda a string sem encontrar caracteres fora da ordem crescente, o número é crescente
    this.resultado = 'O número é crescente';
  }
}
