import { Routes } from '@angular/router';

import { C1Component } from './rotas/c1/c1.component';
import { C2Component } from './rotas/c2/c2.component';
import { CErroComponent } from './rotas/c-erro/c-erro.component';
import { RoteadorComponent } from './rotas/roteador/roteador.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'/index',pathMatch:'full'
    },
    {
        path:'c1',component:C1Component
    },
    {
        path:'c2',component:C2Component
    },
    {
        path:'**',component:CErroComponent
    },
    {
        path:'index',component:RoteadorComponent
    }

];
