import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BotoesHomeComponent } from "./components/botoes-home/botoes-home.component";
import { CalculadoraKWHComponent } from "./components/calculadora-kwh/calculadora-kwh.component";
import { CalculadoraComponent } from "./components/calculadora/calculadora.component";
import { CalcularMDCComponent } from "./components/calcular-mdc/calcular-mdc.component";

import { HeaderComponentComponent } from "./components/header-component/header-component.component";

const routes: Routes = [
    {path: '', component: BotoesHomeComponent},
    {path: 'calculadora', component: CalculadoraComponent},
    {path: 'calculadoraKWH', component: CalculadoraKWHComponent},
    {path: 'calculadoraMDC', component: CalcularMDCComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}