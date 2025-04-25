import { Component } from '@angular/core';

interface Plant {
  id: number;
  nombre: string;
  tipo: string;
  clima: string;
}

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css'],
  standalone: false
})
export class PlantListComponent {
  plants: Plant[] = [
    { id: 1, nombre: 'Orquídea', tipo: 'Flor', clima: 'Tropical' },
    { id: 2, nombre: 'Cactus', tipo: 'Suculenta', clima: 'Árido' },
    { id: 3, nombre: 'Helecho', tipo: 'Planta de sombra', clima: 'Húmedo' }
  ];
}
