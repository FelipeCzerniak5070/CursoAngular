import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {
  //Variável de imagem
  imagem: string = "/assets/dia.jpg";
  imagens: string[] = ["assets/dia.jpg", "/assets/noite.jpg"]

  trocarImagem(caminho:string){

    this.imagem = '/assets/'+caminho+'.jpg';

  }

}
