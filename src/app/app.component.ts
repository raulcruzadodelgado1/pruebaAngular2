import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SaludoComponent} from './saludo/saludo.component';
import {ContadorComponent} from './contador/contador.component';
import {ListaTareasComponent} from './lista-tareas/lista-tareas.component';
import {TemporizadorComponent} from './temporizador/temporizador.component';
import {ComentariosComponent} from './comentarios/comentarios.component';
import {TarjetaProductoComponent} from './tarjeta-producto/tarjeta-producto.component';
import {CalculadoraComponent} from './calculadora/calculadora.component';
import {CompraComponent} from './compra/compra.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaludoComponent, ContadorComponent, ListaTareasComponent, TemporizadorComponent, ComentariosComponent, TarjetaProductoComponent, CalculadoraComponent, CompraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebaAngular2';


}
