import { Component } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']
})
export class TabuadaComponent {

  numeroMultiplicado: number = 0;
  numeroInicio: number = 0;
  numeroFim: number = 0;
  tabuada: string = "";

  calcularTabuada() {
    // Inicializa a variável para armazenar a tabuada
    this.tabuada = "";

    // Executa um loop que percorre o intervalo de valores iniciais e finais
    for (let i = this.numeroInicio; i <= this.numeroFim; i++) {
      // Concatena cada linha da tabuada na variável tabuada
      this.tabuada += this.numeroMultiplicado + " x " + i + " = " + (this.numeroMultiplicado * i) + "<br>";
    }
  }
}