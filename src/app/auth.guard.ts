import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from './seguridad.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private seguridadService:SeguridadService){}

  canActivate(): boolean {
    return this.seguridadService.estaLogueado();
  }

}
