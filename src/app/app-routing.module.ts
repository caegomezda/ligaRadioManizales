import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { EstatutosLigaComponent } from './pages/estatutos-liga/estatutos-liga.component';
import { JuntaDirectivaComponent } from './pages/junta-directiva/junta-directiva.component';
import { ListaAsociadosComponent } from './pages/lista-asociados/lista-asociados.component';
import { TarifasPagosComponent } from './pages/tarifas-pagos/tarifas-pagos.component';
import { BureauComponent } from './pages/bureau/bureau.component';
import { BoletinesComponent } from './pages/boletines/boletines.component';
import { ActaFundacionComponent } from './pages/acta-fundacion/acta-fundacion.component';
import { FeriaManizalesComponent } from './pages/feria-manizales/feria-manizales.component';
import { NuestrasRedesComponent } from './pages/nuestras-redes/nuestras-redes.component';

const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'historia', component: HistoriaComponent },
    { path: 'estatutos-liga', component: EstatutosLigaComponent },
    { path: 'junta-directiva', component: JuntaDirectivaComponent },
    { path: 'lista-asociados', component: ListaAsociadosComponent },
    { path: 'tarifas-pagos', component: TarifasPagosComponent },
    { path: 'bureau', component: BureauComponent },
    { path: 'boletines', component: BoletinesComponent },
    { path: 'acta-fundacion', component: ActaFundacionComponent },
    { path: 'feria-manizales', component: FeriaManizalesComponent },
    { path: 'nuestras-redes', component: NuestrasRedesComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







