import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayComponent } from './day/day.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [

  {path:'' , component:DayComponent} ,
  {path:'day' , component:DayComponent} ,
  {path:'forecast' , component:ForecastComponent} ,


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
