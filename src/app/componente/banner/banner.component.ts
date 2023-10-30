import { Component, Input  } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  class:string;
}
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  isBanner0:Boolean = true;
  isBanner1:Boolean = false;
  isBanner2:Boolean = true;
  isBanner3:Boolean = false;
  numeroAleatorioImg:Number=1;
  tiles: Tile[] = [
    {class:"name1", text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {class:"name2", text: 'Two', cols: 2, rows: 2, color: 'lightgreen'},
    {class:"name3", text: 'Three', cols: 3, rows: 1, color: 'lightpink'},
    {class:"name4", text: 'Four', cols: 4, rows: 1, color: '#DDBDF1'},
    {class:"name5", text: 'Five', cols: 5, rows: 3, color: 'lightyellow'},
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.numeroAleatorioImg);
    this.numeroAleatorioImg = this.obtenerNumeroAleatorio();
  }
  generarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  obtenerNumeroAleatorio(): number {
    return this.generarNumeroAleatorio(1, 3);
  }

}
