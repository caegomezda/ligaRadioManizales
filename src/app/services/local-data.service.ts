import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  private valorBanner: boolean[] = [];
  private valorCard: boolean[] = [];


  setValorBanner(valor: boolean[]): void {
    this.valorBanner = valor;
  }

  getValorBanner(): boolean[] {
    return this.valorBanner;
  }

  setValorCard(valor: boolean[]): void {
    this.valorCard = valor;
  }

  getValorCard(): boolean[] {
    return this.valorCard;
  }

  generarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  obtenerNumeroAleatorio(): number {
    return this.generarNumeroAleatorio(1, 4);
  }
}
