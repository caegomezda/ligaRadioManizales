import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  class:string;
}
@Component({
  selector: 'app-banner-content',
  templateUrl: './banner-content.component.html',
  styleUrls: ['./banner-content.component.scss']
})
export class BannerContentComponent {
  tiles0: Tile[] = [
    {class:"name1", text: 'One', cols: 4, rows: 1, color: 'lightpink'},
  ];

  tiles1: Tile[] = [
    {class:"name1", text: 'One', cols: 4, rows: 1, color: 'lightblue'},
    {class:"name2", text: 'Two', cols: 2, rows: 2, color: 'lightgreen'},
    {class:"name3", text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
  ];

}
