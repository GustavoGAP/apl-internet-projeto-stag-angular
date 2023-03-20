import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { BotoesHomeComponent } from './components/botoes-home/botoes-home.component';
import { CalculadoraKWHComponent } from './components/calculadora-kwh/calculadora-kwh.component';
import { CalcularMDCComponent } from './components/calcular-mdc/calcular-mdc.component';
import { NumerosCrescentesComponent } from './components/numeros-crescentes/numeros-crescentes.component';
import { TabuadaComponent } from './components/tabuada/tabuada.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    CalculadoraComponent,
    BotoesHomeComponent,
    CalculadoraKWHComponent,
    CalcularMDCComponent,
    NumerosCrescentesComponent,
    TabuadaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }''