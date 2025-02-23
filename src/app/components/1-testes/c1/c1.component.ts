import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-c1',
  imports: [FormsModule],
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1Component {
  nomes:string[] = ["Felipe", "Mary", "Chimia", "Pelica"];
  linguagem:string = "HTMl";
  nome:string = "";
}
