import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.css'
})
export class TemporizadorComponent {
  tiempo: number = 0;
  tiempoRestante: number = 0;
  private idIntervalo: any;

  iniciar() {
    if (this.tiempo > 0) {
      this.tiempoRestante = this.tiempo;
      this.idIntervalo = setInterval(() => {
        if (this.tiempoRestante > 0) {
          this.tiempoRestante--;
        } else {
          this.detener();
        }
      }, 1000);
    }
  }

  detener() {
    if (this.idIntervalo) {
      clearInterval(this.idIntervalo);
      this.idIntervalo = null;
    }
  }
}
