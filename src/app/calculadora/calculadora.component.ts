import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number | null = null;

  calcular(operacion: string) {
    switch (operacion) {
      case 'sumar':
        this.resultado = this.num1 + this.num2;
        break;
      case 'restar':
        this.resultado = this.num1 - this.num2;
        break;
      case 'multiplicar':
        this.resultado = this.num1 * this.num2;
        break;
      case 'dividir':
        this.resultado = this.num1 / this.num2;
        break;
      case 'raiz':
        this.resultado = Math.sqrt(this.num1);
        break;
      default:
        this.resultado = null;
    }
  }
}
