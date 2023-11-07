import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {
  private formularioContacto: any = {};
  constructor() { }

  setValorFormContac(formulario: any): void {
    this.formularioContacto = formulario;
  }
}
