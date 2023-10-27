import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncioComponent } from './pages/incio/incio.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { EstatutosLigaComponent } from './pages/estatutos-liga/estatutos-liga.component';
import { JuntaDirectivaComponent } from './pages/junta-directiva/junta-directiva.component';
import { ListaAsociadosComponent } from './pages/lista-asociados/lista-asociados.component';
import { TarifasPagosComponent } from './pages/tarifas-pagos/tarifas-pagos.component';
import { BureauComponent } from './pages/bureau/bureau.component';
import { BoletinesComponent } from './pages/boletines/boletines.component';
import { ActaFundacionComponent } from './pages/acta-fundacion/acta-fundacion.component';
import { FeriaManizalesComponent } from './pages/feria-manizales/feria-manizales.component';
import { HeaderComponent } from './componente/header/header.component';
import { FooterComponent } from './componente/footer/footer.component';
import { BannerComponent } from './componente/banner/banner.component';
import { ContactoComponent } from './componente/contacto/contacto.component';
import { TextComponent } from './componente/text/text.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './componente/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    IncioComponent,
    HistoriaComponent,
    EstatutosLigaComponent,
    JuntaDirectivaComponent,
    ListaAsociadosComponent,
    TarifasPagosComponent,
    BureauComponent,
    BoletinesComponent,
    ActaFundacionComponent,
    FeriaManizalesComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ContactoComponent,
    TextComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
