import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaioridadePipe } from "../pipe/maioridade.pipe";

@Component({
  selector: 'app-pipe2',
  imports: [CommonModule, MaioridadePipe],
  templateUrl: './pipe2.component.html',
  styleUrl: './pipe2.component.css'
})
export class Pipe2Component {

  nome:string = "Felipe";

  pessoas:any[] = [
      {
        'nome':'Felipe','idade':18
      },
      {
        'nome':'Mary','idade':16
      }
    ];

}
