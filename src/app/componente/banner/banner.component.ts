import { Component } from '@angular/core';
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
  isBanner2:Boolean = false;
  isBanner3:Boolean = false;

  tiles: Tile[] = [
    {class:"name1", text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {class:"name2", text: 'Two', cols: 2, rows: 2, color: 'lightgreen'},
    {class:"name3", text: 'Three', cols: 3, rows: 1, color: 'lightpink'},
    {class:"name4", text: 'Four', cols: 4, rows: 1, color: '#DDBDF1'},
    {class:"name5", text: 'Five', cols: 5, rows: 3, color: 'lightyellow'},
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium
    ]).subscribe(result => {
      if (result.matches) {
        this.tiles.forEach(tile => {
          tile.cols = 2;
        });
      } else {
        this.tiles.forEach(tile => {
          tile.cols = 4;
        });
      }
    });
  }
}
