import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  templateUrl: './tarjeta-producto.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./tarjeta-producto.component.css']
})
export class TarjetaProductoComponent {
  @Input() nombre: string = '';
  @Input() descripcion: string = '';
  @Input() precio: number = 0;

  products: { nombre: string, descripcion: string, precio: number }[] = [];

  addProduct() {
    this.products.push({
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio
    });
    this.nombre = '';
    this.descripcion = '';
    this.precio = 0;
  }
}
