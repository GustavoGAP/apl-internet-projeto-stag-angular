import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  // inicializa a variável com valor 0
  numero1 = 0;
  numero2 = 0;
  total = 0;

  constructor(private router: Router) { } // injeção de dependência do serviço Router

  navegaHome() {
    this.router.navigate(['/home']); // navega para a rota /home
  }

  somar() {
    this.total = this.numero1 + this.numero2; // atribui o resultado da soma de numero1 e numero2 à variável total
  }

  subtrair() {
    this.total = this.numero1 - this.numero2; // atribui o resultado da subtração de numero1 e numero2 à variável total
  }

  multiplicar() {
    this.total = this.numero1 * this.numero2; // atribui o resultado da multiplicação de numero1 e numero2 à variável total
  }

  divide() {
    this.total = this.numero1 / this.numero2; // atribui o resultado da divisão de numero1 e numero2 à variável total
  }
}