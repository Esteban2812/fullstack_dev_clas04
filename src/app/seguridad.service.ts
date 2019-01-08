import { Injectable,EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  onCambioEstado = new EventEmitter<boolean>()
  constructor(private router: Router) {

   }
   login(){
     this.router.navigate(["peliculas"])
     sessionStorage.setItem("usuario","ealvino")
     this.onCambioEstado.emit(true)

   }
   estaLogueado(){
     return sessionStorage.getItem("usuario") ? true:false

   }

   logout(){
     sessionStorage.removeItem("usuario")
     this.router.navigate(["/"])
     this.onCambioEstado.emit(false)
   }

}
