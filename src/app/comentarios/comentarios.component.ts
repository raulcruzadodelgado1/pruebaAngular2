import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  comentarios: string[] = [];
  nuevoComentario: string = '';

  @Output() comentarioEnviado = new EventEmitter<string>();

  agregarComentario() {
    if (this.nuevoComentario.trim()) {
      this.comentarios.push(this.nuevoComentario.trim());
      this.comentarioEnviado.emit(this.nuevoComentario.trim());
      this.nuevoComentario = '';
    }
  }
}
