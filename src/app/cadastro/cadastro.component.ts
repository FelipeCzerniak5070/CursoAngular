import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  
  form = new FormGroup({
   nome: new FormControl('',[Validators.required,Validators.minLength(10),Validators.max(255)]),
   idade: new FormControl(null,[Validators.required,Validators.min(0),Validators.max(120)]),
   cidade: new FormControl('',[Validators.required,Validators.minLength(10),Validators.max(255)])
  });
}


