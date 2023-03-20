import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalculadoraComponent } from "./components/calculadora/calculadora.component";

import { HeaderComponentComponent } from "./components/header-component/header-component.component";

const routes: Routes = [
    {path: '', component: HeaderComponentComponent},
    {path: 'calculadora', component: CalculadoraComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}