import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seventh',
  imports: [CommonModule, NgStyle],
  templateUrl: './seventh.component.html',
  styleUrl: './seventh.component.css'
})
export class SeventhComponent {
  verde:boolean = true ;

  lista:string[] = ["Aprovado", "Aprovado", "Reprovado",]
}
