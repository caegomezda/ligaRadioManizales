import { Component } from '@angular/core';
import { LocalDataService } from "../../services/local-data.service";

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
  isBanner0:Boolean = false;
  isBanner1:Boolean = false;
  isBanner2:Boolean = false;
  isBanner3:Boolean = false;
  isBanner4:Boolean = false;
  isBanner5:Boolean = false;
  valorBanner:Boolean[] =[]
  numeroAleatorioImg:Number=1;
  
  tiles: Tile[] = [
    {class:"name1", text: 'One', cols: 3, rows:1, color: 'lightblue'},
    {class:"name2", text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {class:"name3", text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {class:"name4", text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
  ];

  constructor(private dataService: LocalDataService) {

  }

  ngOnInit() {
    console.log(this.numeroAleatorioImg);
    this.numeroAleatorioImg = this.dataService.obtenerNumeroAleatorio();
    this.bannerDistvalues()
  }

  async bannerDistvalues(){
    this.valorBanner = await this.dataService.getValorBanner();    
    this.isBanner0 = this.valorBanner[0]
    this.isBanner1 = this.valorBanner[1] 
    this.isBanner2 = this.valorBanner[2] 
    this.isBanner3 = this.valorBanner[3]
    this.isBanner4 = this.valorBanner[4]
    this.isBanner5 = this.valorBanner[5]
  }
}
