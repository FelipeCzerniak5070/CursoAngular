import { Component } from '@angular/core';
import { MaterialComponent } from "./components/material/material.component";
@Component({
  selector: 'app-root',
  imports: [ MaterialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CursoAngular';
}
