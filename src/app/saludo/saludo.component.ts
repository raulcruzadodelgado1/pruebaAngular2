import {Component, input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  saludo = '';

  constructor() {
    this.generarSaludo();

  }

  generarSaludo() {

    const hora = new Date().getHours();
    if (hora >= 6 && hora < 12) {
      this.saludo = 'Buenos días';
    } else if (hora >= 12 && hora < 20) {
      this.saludo = 'Buenas tardes';
    } else {
      this.saludo = 'Buenas noches';
    }
  }
  horas = new Date().getHours().toString().padStart(2, '0');
  minuto = new Date().getMinutes().toString().padStart(2, '0');
  segundo = new Date().getSeconds().toString().padStart(2, '0');
  nombre = '';
}



