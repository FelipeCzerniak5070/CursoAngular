import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-c2',
  imports: [ReactiveFormsModule],
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.css'
})
export class C2Component {

  formulario = new FormGroup({
    nome: new FormControl(""),
    cidade: new FormControl("")
  });


}

