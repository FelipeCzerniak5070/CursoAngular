import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fifth',
  imports: [CommonModule, NgFor],
  templateUrl: './fifth.component.html',
  styleUrl: './fifth.component.css'
})
export class FifthComponent {
  nomes:string[] = ["Felipe", "Mary", "Chimia","Pelica"]
}
