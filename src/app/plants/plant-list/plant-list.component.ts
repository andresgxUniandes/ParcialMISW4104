import { Component, OnInit } from '@angular/core';
import { PlantService } from '../services/plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css'],
  standalone: false
})
export class PlantListComponent implements OnInit {
  plants: any[] = [];

  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
    this.plantService.getPlants().subscribe(plants => {
      this.plants = plants;
    });
  }
}
