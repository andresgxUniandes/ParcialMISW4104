import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlantsRoutingModule } from './plants-routing.module';
import { PlantListComponent } from './plant-list/plant-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlantsRoutingModule,
    HttpClientModule
  ]
})
export class PlantsModule { }
