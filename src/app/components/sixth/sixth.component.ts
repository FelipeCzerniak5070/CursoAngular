import { CommonModule, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sixth',
  imports: [CommonModule,NgSwitch],
  templateUrl: './sixth.component.html',
  styleUrl: './sixth.component.css'
})
export class SixthComponent {
  linguagem:string = "HTML";

}
