import { Component, OnInit } from '@angular/core';
import { SeguridadService } from './../seguridad.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  estasAutorizado:boolean

  constructor(private seguridadService:SeguridadService) { }

  ngOnInit() {
    this.estasAutorizado = this.seguridadService.estaLogueado()
    console.log("estasAutorizado="+this.estasAutorizado)
  }

  ingresar(){
    return this.seguridadService.login()
  }

}
