import { Component } from '@angular/core';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
diccionario:any = {};  
constructor(private dataService: LocalDataService) { }

ngOnInit(){
  // const valorBanner = [true, false, true, false, true, true]; // Ejemplo de un arreglo de booleanos
//  this.getdiccionarioData()
  
}

ngAfterContentChecked(){
  console.log("text");
  
  this.diccionario = this.dataService.getValorDiccionario();
  console.log("this.diccionario",this.diccionario);
}
}
