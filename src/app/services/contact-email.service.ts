import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {
  private formularioContacto: any = {};
  constructor() { }

  async setValorFormContac(formulario: any): Promise<void> {
    this.formularioContacto = formulario;

  }
  
}
