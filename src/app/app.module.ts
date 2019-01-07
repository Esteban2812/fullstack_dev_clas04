import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';

import { Route, RouterModule} from '@angular/router'
import { AuthGuard } from './auth.guard';

const rutas:Route[] = [
  { path : "", component: LoginComponent },
  {
    path: "movies", canActivate: [AuthGuard],children: [
      { path : "", component: ListadoComponent},
      { path : "nuevo", component: FormularioComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
