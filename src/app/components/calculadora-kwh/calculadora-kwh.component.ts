import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-kwh',
  templateUrl: './calculadora-kwh.component.html',
  styleUrls: ['./calculadora-kwh.component.css']
})
export class CalculadoraKWHComponent {

  quantidade: number = 0;
  valorUnitario: number = 0;
  valorTotal: number = 0;

  calcularValor() {
    let quantidade = this.quantidade;
    let valorUnitario = this.valorUnitario;

    let valorTotal = quantidade * valorUnitario;

    if (quantidade > 100 && quantidade <= 200) {
      valorTotal = valorTotal * 1.25;
    } else if (quantidade > 200) {
      valorTotal = valorTotal * 1.5;
    }

    this.valorTotal = parseFloat(valorTotal.toFixed(2));
  }
}