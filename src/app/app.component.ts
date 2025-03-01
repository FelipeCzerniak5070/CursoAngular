import { Component } from '@angular/core';
import { C1Component } from "./rotas/c1/c1.component";
import { RoteadorComponent } from "./rotas/roteador/roteador.component";
@Component({
  selector: 'app-root',
  imports: [C1Component, RoteadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CursoAngular';
}
