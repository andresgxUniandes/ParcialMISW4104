import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlantListComponent } from './plants/plant-list/plant-list.component';

@NgModule({
  declarations: [		
    AppComponent,
    PlantListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideHttpClient(),
    provideClientHydration()], 
  bootstrap: [AppComponent]
})
export class AppModule { }
