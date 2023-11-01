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
}
