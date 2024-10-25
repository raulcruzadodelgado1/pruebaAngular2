import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Articulo {
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {
  articulos: Articulo[] = [
    { nombre: 'bmw', precio: 100, cantidad: 0 },
    { nombre: 'mercedes', precio: 200, cantidad: 0 },
    { nombre: 'renault', precio: 30, cantidad: 0 }
  ];

  sumarCantidad(articulo: Articulo) {
    articulo.cantidad++;
  }

  disminuirCantidad(articulo: Articulo) {
    if (articulo.cantidad > 0) {
      articulo.cantidad--;
    }
  }

  calcularTotal(): number {
    return this.articulos.reduce((total, articulo) => total + (articulo.cantidad * articulo.precio), 0);
  }
}
