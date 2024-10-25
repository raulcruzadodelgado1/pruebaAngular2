import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent implements OnInit, OnDestroy {

  hora = new Date().getHours().toString().padStart(2, '0');
  minuto = new Date().getMinutes().toString().padStart(2, '0');
  segundo = new Date().getSeconds().toString().padStart(2, '0');
  private intervalId: any;
  protected estaCorriendo = false;

  constructor() {
    this.actualizarHora();
  }
  ngOnInit() {
    this.iniciarTimer();
  }
  ngOnDestroy() {
    this.pararTimer();
  }


  iniciarTimer() {
    this.intervalId = setInterval(() => {
      if (this.estaCorriendo) {
        this.actualizarHora();
      }
    }, 1000);
  }

  pararTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  actualizarHora() {
    const now = new Date();
    this.hora = now.getHours().toString().padStart(2, '0');
    this.minuto = now.getMinutes().toString().padStart(2, '0');
    this.segundo = now.getSeconds().toString().padStart(2, '0');
  }

  toggleTimer() {
    this.estaCorriendo = !this.estaCorriendo;
  }


}
