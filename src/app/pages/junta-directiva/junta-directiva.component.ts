import { Component } from '@angular/core';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-junta-directiva',
  templateUrl: './junta-directiva.component.html',
  styleUrls: ['./junta-directiva.component.scss']
})
export class JuntaDirectivaComponent {
  constructor(private dataService: LocalDataService) { }
  ngOnInit(){
    const valorBanner = [true, false, false, false, false, false]; // Ejemplo de un arreglo de booleanos
    this.dataService.setValorBanner(valorBanner);
    this.dataService.setValorDiccionario("juntaDirectiva");
  }
}
