import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eigth',
  imports: [CommonModule],
  templateUrl: './eigth.component.html',
  styleUrl: './eigth.component.css'
})
export class EigthComponent {
  lista:string[] = ["Aprovado", "Aprovado", "Reprovado",]

}
