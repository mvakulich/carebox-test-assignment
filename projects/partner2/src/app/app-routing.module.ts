import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {"path": "pages/covid-info", loadChildren: () => import('./pages/covid-info/covid-info.module').then(mod => mod.CovidInfoModule)}, {"path":"",redirectTo:"pages/beehive-red-happy",pathMatch:'full'},
  {"path":"**",redirectTo:"pages/covid-info",pathMatch:'full'},
  {"path":"",redirectTo:"pages/covid-info",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
