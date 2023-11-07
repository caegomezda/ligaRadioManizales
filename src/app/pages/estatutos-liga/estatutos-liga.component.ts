import { Component } from '@angular/core';
import { LocalDataService } from 'src/app/services/local-data.service';


@Component({
  selector: 'app-estatutos-liga',
  templateUrl: './estatutos-liga.component.html',
  styleUrls: ['./estatutos-liga.component.scss']
})
export class EstatutosLigaComponent {

  constructor(private dataService: LocalDataService) { }
  ngOnInit(){
    const valorBanner = [true, false, false, false, false, false]; // Ejemplo de un arreglo de booleanos
    this.dataService.setValorBanner(valorBanner);
    this.dataService.setValorDiccionario("estatutosLiga");
  }

}
