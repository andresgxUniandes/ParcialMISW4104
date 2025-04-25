import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlantListComponent } from './plants/plant-list/plant-list.component';

@NgModule({
  declarations: [		
    AppComponent, // aquí van los componentes que pertenecen a este módulo
    PlantListComponent
   ],
  imports: [
    BrowserModule, // módulos que quieres importar, como FormsModule, HttpClientModule, etc.
    AppRoutingModule,
  ],
  providers: [
    provideHttpClient(),
    provideClientHydration()], // servicios disponibles a nivel del módulo
  bootstrap: [AppComponent] // el componente que se carga primero
})
export class AppModule { }
