import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./components/first/first.component";
import { SecondComponent } from "./components/second/second.component";
import { ThirdComponent } from "./components/third/third.component";
import { FourthComponent } from "./components/fourth/fourth.component";
import { FifthComponent } from "./components/fifth/fifth.component";
import { SixthComponent } from "./components/sixth/sixth.component";
import { SeventhComponent } from "./components/seventh/seventh.component";
import { EigthComponent } from "./components/eigth/eigth.component";
import { NinethComponent } from "./components/nineth/nineth.component";
import { TenthComponent } from "./components/tenth/tenth.component";

@Component({
  selector: 'app-root',
  imports: [FirstComponent, SecondComponent, ThirdComponent, FourthComponent, FifthComponent, SixthComponent, SeventhComponent, EigthComponent, NinethComponent, TenthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CursoAngular';
}
