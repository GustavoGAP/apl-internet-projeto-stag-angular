import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BotoesHomeComponent } from "./components/botoes-home/botoes-home.component";
import { CalculadoraKWHComponent } from "./components/calculadora-kwh/calculadora-kwh.component";
import { CalculadoraComponent } from "./components/calculadora/calculadora.component";
import { CalcularMDCComponent } from "./components/calcular-mdc/calcular-mdc.component";
import { DecimalBinarioComponent } from "./components/decimal-binario/decimal-binario.component";

import { NumerosCrescentesComponent } from "./components/numeros-crescentes/numeros-crescentes.component";
import { TabuadaComponent } from "./components/tabuada/tabuada.component";

const routes: Routes = [
    {path: 'home', component: BotoesHomeComponent},
    {path: 'calculadora', component: CalculadoraComponent},
    {path: 'calculadoraKWH', component: CalculadoraKWHComponent},
    {path: 'calculadoraMDC', component: CalcularMDCComponent},
    {path: 'numerosCrescentes', component: NumerosCrescentesComponent},
    {path: 'tabuada', component: TabuadaComponent},
    {path: 'decimalBinario', component: DecimalBinarioComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}