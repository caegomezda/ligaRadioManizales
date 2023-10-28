import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HeaderComponent } from './componente/header/header.component';
import { FooterComponent } from './componente/footer/footer.component';
import { BannerComponent } from './componente/banner/banner.component';
import { ContactoComponent } from './componente/contacto/contacto.component';
import { TextComponent } from './componente/text/text.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './componente/menu/menu.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
//TOOLBAR
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
//MENU
import {CdkMenuItemRadio,CdkMenuItemCheckbox,CdkMenuGroup,CdkMenu,CdkMenuTrigger,CdkMenuItem,CdkMenuBar,} from '@angular/cdk/menu';
//GRID
import {MatGridListModule} from '@angular/material/grid-list';
import {NgFor} from '@angular/common';
//CARD
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './componente/card/card.component';
import { BannerContentComponent } from './componente/banner-content/banner-content.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HistoriaComponent,
    EstatutosLigaComponent,
    JuntaDirectivaComponent,
    ListaAsociadosComponent,
    TarifasPagosComponent,
    BureauComponent,
    BoletinesComponent,
    ActaFundacionComponent,
    FeriaManizalesComponent,
    NuestrasRedesComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ContactoComponent,
    TextComponent,
    MenuComponent,
    CardComponent,
    BannerContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    //TOOLBAR
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    //MENU
    CdkMenuBar,
    CdkMenuItem,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuGroup,
    CdkMenuItemCheckbox,
    CdkMenuItemRadio,
    //GRID
    MatGridListModule, 
    NgFor,
    //CARD
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
